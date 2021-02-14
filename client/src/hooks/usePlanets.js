import { useQuery } from 'react-query'
import API from '../utils/api'

const getPlanets = async () => {
  const { data } = await API.get('/planets')
  return data
}

export default function usePlanets() {
  return useQuery('planets', getPlanets)
}
