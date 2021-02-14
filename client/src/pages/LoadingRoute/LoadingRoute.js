import { Flex, Spinner } from '@chakra-ui/react'

const LoadingRoute = () => (
  <Flex align="center" justify={{ base: 'center' }} minH="70vh" px={8} mb={16}>
    <Spinner size="lg" color="blue.400" />
  </Flex>
)
export default LoadingRoute
