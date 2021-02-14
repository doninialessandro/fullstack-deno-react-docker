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
  Heading,
  Text,
} from '@chakra-ui/react'

import { Hero, LaodingStatus } from '../../components'
import { ReactComponent as HistoryImg } from '../../assets/images/history.svg'
import { useLaunches } from '../../hooks/useLaunches'

const History = () => {
  const [trackedLaunches, setTrackedLaunches] = useState([])

  const {
    status: statusLaunches,
    data: dataLaunches,
    error: errorLaunches,
  } = useLaunches()

  useEffect(() => {
    const updateLaunches = () => {
      const updatedLaunches = dataLaunches
        ?.filter(launch => !launch.upcoming)
        .map(launch => ({
          success: launch.success,
          flightNumber: String(launch.flightNumber),
          launchDate: new Date(launch.launchDate * 1000).toDateString(),
          mission: launch.mission.slice(0, 25),
          rocket: launch.rocket,
          target: launch.target ?? '',
          customers: launch.customers.join(', ').trim(),
        }))
      setTrackedLaunches(updatedLaunches)
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
            title="History"
            subtitle="of tracked mission launches. Includes SpaceX launches starting from the year 2006. 🕰️ 🚀"
            image={<HistoryImg style={{ width: '100%', height: '100%' }} />}
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
              List of tracked missions
            </Heading>
            <Table variant="simple">
              <TableCaption>
                Tracked missions including SpaceX launches starting from the
                year 2006.{' '}
                <span role="img" aria-label="mission">
                  🕰️ 🚀
                </span>
              </TableCaption>
              <Thead>
                <Tr>
                  <Th />
                  <Th isNumeric display={{ base: 'none', sm: 'table-cell' }}>
                    No.
                  </Th>
                  <Th display={{ base: 'none', sm: 'table-cell' }}>Date</Th>
                  <Th>Mission</Th>
                  <Th display={{ base: 'none', sm: 'table-cell' }}>Rocket</Th>
                  <Th display={{ base: 'none', sm: 'table-cell' }}>
                    Customers
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {trackedLaunches?.map(launch => (
                  <Tr key={launch.flightNumber}>
                    <Td>{launch.success ? '✅' : '😡'}</Td>
                    <Td isNumeric display={{ base: 'none', sm: 'table-cell' }}>
                      {launch.flightNumber}
                    </Td>
                    <Td display={{ base: 'none', sm: 'table-cell' }}>
                      {launch.launchDate}
                    </Td>
                    <Td>{launch.mission}</Td>
                    <Td display={{ base: 'none', sm: 'table-cell' }}>
                      {launch.rocket}
                    </Td>
                    <Td>
                      <Text
                        isTruncated
                        maxW="200px"
                        display={{ base: 'none', sm: 'table-cell' }}
                      >
                        {launch.customers}
                      </Text>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th />
                  <Th isNumeric display={{ base: 'none', sm: 'table-cell' }}>
                    No.
                  </Th>
                  <Th display={{ base: 'none', sm: 'table-cell' }}>Date</Th>
                  <Th>Mission</Th>
                  <Th display={{ base: 'none', sm: 'table-cell' }}>Rocket</Th>
                  <Th display={{ base: 'none', sm: 'table-cell' }}>
                    Customers
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </Flex>
        </>
      )}
    </>
  )
}

export default History
