import { useState, useEffect } from 'react'
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  IconButton,
  Heading,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

import { Hero, LaodingStatus } from '../../components'
import { ReactComponent as UpcomingImg } from '../../assets/images/upcoming.svg'
import { useLaunches, useAbortLaunch } from '../../hooks/useLaunches'

const Upcoming = () => {
  const [upcomingLaunches, setUpcomingLaunches] = useState([])
  const abortLaunchMutation = useAbortLaunch()

  const {
    status: statusLaunches,
    data: dataLaunches,
    error: errorLaunches,
  } = useLaunches()

  const abortLaunch = flightId => {
    abortLaunchMutation.mutate(flightId)

    const newUpcomingLaunches = upcomingLaunches
      ?.filter(launch => String(launch.flightNumber) !== flightId)
      .map(launch => ({
        flightNumber: String(launch.flightNumber),
        launchDate: new Date(launch.launchDate * 1000).toDateString(),
        mission: launch.mission.slice(0, 25),
        rocket: launch.rocket,
        target: launch.target ?? '',
      }))

    setUpcomingLaunches(newUpcomingLaunches)
  }

  useEffect(() => {
    const updateLaunches = () => {
      const updatedLaunches = dataLaunches
        ?.filter(launch => launch.upcoming)
        .map(launch => ({
          flightNumber: String(launch.flightNumber),
          launchDate: new Date(launch.launchDate * 1000).toDateString(),
          mission: launch.mission.slice(0, 25),
          rocket: launch.rocket,
          target: launch.target ?? '',
        }))
      setUpcomingLaunches(updatedLaunches)
    }
    updateLaunches()
  }, [statusLaunches, dataLaunches])

  return (
    <>
      {statusLaunches === 'loading' || statusLaunches === 'error' ? (
        <LaodingStatus status={statusLaunches} error={errorLaunches} />
      ) : (
        <>
          <Hero
            title="Upcoming missions"
            subtitle="including both SpaceX rockets 🌍 🚀"
            image={<UpcomingImg style={{ width: '100%', height: '100%' }} />}
            disclaimer="This is not an official site. Illustrative purposes only"
          />
          <Flex
            align="center"
            direction={{ base: 'column' }}
            w="100%"
            wrap="no-wrap"
            minH="70vh"
            px={8}
            mb={16}
          >
            <Heading
              as="h1"
              size="2xl"
              pb={2}
              bgGradient="linear(to-l, #63B3ED,#B794F4)"
              bgClip="text"
              fontWeight="black"
              textAlign={['center', 'center', 'left', 'left']}
              mb={10}
            >
              List of upcoming missions
            </Heading>
            <Table variant="simple">
              <TableCaption>
                Upcoming missions including both SpaceX rockets{' '}
                <span role="img" aria-label="mission">
                  🌍 🚀
                </span>
              </TableCaption>
              <Thead>
                <Tr>
                  <Th />
                  <Th isNumeric display={{ base: 'none', sm: 'table-cell' }}>
                    No.
                  </Th>
                  <Th>Date</Th>
                  <Th>Mission</Th>
                  <Th display={{ base: 'none', sm: 'table-cell' }}>Rocket</Th>
                  <Th>Destination</Th>
                </Tr>
              </Thead>
              <Tbody>
                {upcomingLaunches?.map(launch => (
                  <Tr key={launch.flightNumber}>
                    <Td>
                      <IconButton
                        icon={<DeleteIcon color="red.500" />}
                        size="sm"
                        rounded="xl"
                        onClick={() => abortLaunch(launch.flightNumber)}
                      />
                    </Td>
                    <Td isNumeric display={{ base: 'none', sm: 'table-cell' }}>
                      {launch.flightNumber}
                    </Td>
                    <Td>{launch.launchDate}</Td>
                    <Td>{launch.mission}</Td>
                    <Td display={{ base: 'none', sm: 'table-cell' }}>
                      {launch.rocket}
                    </Td>
                    <Td>{launch.target}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th />
                  <Th isNumeric display={{ base: 'none', sm: 'table-cell' }}>
                    No.
                  </Th>
                  <Th>Date</Th>
                  <Th>Mission</Th>
                  <Th display={{ base: 'none', sm: 'table-cell' }}>Rocket</Th>
                  <Th>Destination</Th>
                </Tr>
              </Tfoot>
            </Table>
          </Flex>
        </>
      )}
    </>
  )
}

export default Upcoming
