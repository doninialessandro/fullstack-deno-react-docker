import { useQuery, useMutation } from 'react-query'
import { useToast } from '@chakra-ui/react'
import API from '../utils/api'

const getLaunches = async () => {
  const { data } = await API.get('/launches')
  return data
}

const scheduleLaunch = async ({
  launchDate,
  flightNumber,
  mission,
  rocket,
  target,
}) => {
  const { data } = await API.post('/launches', {
    launchDate: Math.floor(launchDate / 1000),
    flightNumber,
    mission,
    rocket,
    target,
  })
  return data
}

const abortLaunch = async id => {
  const { data } = await API.delete(`/launches/${id}`)
  return data
}

export const useLaunches = () => useQuery('launches', getLaunches)
export const useScheduleLaunch = () => {
  const toast = useToast()
  return useMutation(scheduleLaunch, {
    onSuccess: () => {
      getLaunches()
      toast({
        title: '🚀 Mission Scheduled!',
        description: 'New interstellar launch scheduled',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    },
    onError: error => {
      toast({
        title: '💥 Oops...!',
        description: `Error: ${error.message}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    },
  })
}
export const useAbortLaunch = () => {
  const toast = useToast()
  return useMutation(abortLaunch, {
    onSuccess: () => {
      getLaunches()
      toast({
        title: '🚀 Mission canceled',
        description: `Don't worry, better be sure`,
        status: 'warning',
        duration: 9000,
        isClosable: true,
      })
    },
    onError: error => {
      toast({
        title: '💥 Oops...!',
        description: `Error: ${error.message}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    },
  })
}
