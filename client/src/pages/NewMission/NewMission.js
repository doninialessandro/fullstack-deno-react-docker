import { useState, useEffect } from 'react'
import _ from 'lodash'
import {
  Heading,
  Box,
  Flex,
  Input,
  Stack,
  Button,
  Text,
  UnorderedList,
  ListItem,
  Select,
} from '@chakra-ui/react'

import { Hero, LaodingStatus } from '../../components'
import usePlanets from '../../hooks/usePlanets'
import { useLaunches, useScheduleLaunch } from '../../hooks/useLaunches'
import { ReactComponent as ScheduleLaunch } from '../../assets/images/scheduleLaunch.svg'
import { ReactComponent as Planets } from '../../assets/images/planetBue.svg'

const NewMission = () => {
  const [lastMissionNumber, setLastMissionNUmber] = useState(0)
  const [launchDate, setLaunchDate] = useState(
    new Date().toISOString().split('T')[0]
  )
  const [mission, setMission] = useState('')
  const [rocket, setRocket] = useState('Experimental IS1')
  const [target, setTarget] = useState('')

  const scheduleLaunchMutation = useScheduleLaunch()

  const {
    status: statusPlanets,
    data: dataPlanets,
    error: errorPlaents,
  } = usePlanets()

  const {
    status: statusLaunches,
    data: dataLaunches,
    error: errorLaunches,
  } = useLaunches()

  const scheduleLaunch = () => {
    scheduleLaunchMutation.mutate({
      launchDate: new Date(launchDate),
      flightNumber: lastMissionNumber + 1,
      mission,
      rocket,
      target,
    })
    setLastMissionNUmber(lastMissionNumber + 1)
  }

  useEffect(() => {
    const updateMissionNumber = () => {
      const scheduledLaunches = _.sortBy(dataLaunches, ['flightNumber'])

      setLastMissionNUmber(
        scheduledLaunches[scheduledLaunches.length - 1]?.flightNumber || 0
      )
    }

    if (dataLaunches) {
      updateMissionNumber()
    }
  }, [statusLaunches, dataLaunches])

  return (
    <>
      {statusPlanets === 'loading' ||
      statusPlanets === 'error' ||
      statusLaunches === 'loading' ||
      statusLaunches === 'error' ? (
        <LaodingStatus
          status={
            statusPlanets === 'error' || statusLaunches === 'error'
              ? 'error'
              : 'loading'
          }
          error={errorPlaents || errorLaunches}
        />
      ) : (
        <>
          <Flex
            align="center"
            justify={{
              base: 'center',
              md: 'space-around',
              xl: 'space-between',
            }}
            direction={{ base: 'column', md: 'row' }}
            w="100%"
            wrap="no-wrap"
            minH="70vh"
            px={8}
            mb={16}
          >
            <Box
              w={{ base: '80%', sm: '60%', md: '50%' }}
              mb={{ base: 12, md: 0 }}
            >
              <Text
                fontSize="xl"
                textAlign="left"
                color="primary.800"
                opacity="0.6"
                mb={4}
                display="flex"
                alignItems="center"
              >
                Only confirmed planets orbiting stars matching the following
                criteria are available for the earliest scheduled missions:
              </Text>
              <UnorderedList opacity="0.6">
                <ListItem>{`0.78 M☉ < Solar Mass < 1.04 M☉`}</ListItem>
                <ListItem>{`0.99 R☉ < Solar Radius < 1.01 R☉`}</ListItem>
                <ListItem>{`0.50 R⊕ < Planetary Radius < 1.50 R⊕`}</ListItem>
              </UnorderedList>
              <Box display="flex" justifyContent="flex-end" w="100%" mb={4}>
                <Planets style={{ width: '45%', height: '45%' }} />
              </Box>
            </Box>
            <Stack
              spacing={4}
              w={{ base: '80%', md: '40%' }}
              align={['center', 'center', 'flex-start', 'flex-start']}
            >
              <Heading
                as="h1"
                size="4xl"
                pb={2}
                bgGradient="linear(to-l, #63B3ED,#B794F4)"
                bgClip="text"
                fontWeight="black"
                textAlign={['center', 'center', 'left', 'left']}
              >
                Schedule a mission
              </Heading>
              <Input
                placeholder="Launch Date"
                size="md"
                w="100%"
                value={launchDate}
                onChange={e => setLaunchDate(e.target.value)}
                type="date"
                max="2030-12-31"
              />
              <Input
                placeholder="Mission Name"
                size="md"
                value={mission}
                onChange={e => setMission(e.target.value)}
              />
              <Input
                placeholder="Rocket Type"
                size="md"
                value={rocket}
                onChange={e => setRocket(e.target.value)}
              />
              <Select
                placeholder="Destination Exoplanet"
                size="md"
                isRequired
                onChange={e => setTarget(e.target.value)}
              >
                {dataPlanets.map(planet => (
                  <option key={planet.kepler_name} value={planet.kepler_name}>
                    {planet.kepler_name}
                  </option>
                ))}
              </Select>

              <Button onClick={() => scheduleLaunch()}>
                Save Mission
                <span
                  role="img"
                  aria-label="confirm"
                  style={{ marginLeft: '5px' }}
                >
                  📝
                </span>
              </Button>
            </Stack>
          </Flex>

          <Hero
            title="Mission Control"
            subtitle="Schedule a mission launch for interstellar travel to one of the Kepler Exoplanets 🌍 🚀"
            image={<ScheduleLaunch style={{ width: '100%', height: '100%' }} />}
            ctaText="Source code"
            ctaLink="https://github.com/doninialessandro/fullstack-deno-react-docker"
            disclaimer="This is not an official site. Illustrative purposes only"
          />
        </>
      )}
    </>
  )
}

export default NewMission
