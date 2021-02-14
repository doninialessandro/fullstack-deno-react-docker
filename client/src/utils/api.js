import axios from 'axios'
import { env } from '../env'

export default axios.create({
  baseURL: `${env.api.endpoint.protocol}://${env.api.endpoint.host}:${env.api.endpoint.port}`,
  headers: { 'content-type': 'application/json' },
})
