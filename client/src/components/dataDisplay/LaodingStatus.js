import { Flex, Spinner, Text } from '@chakra-ui/react'

function LaodingStatus({ status, error }) {
  return (
    <Flex
      align="center"
      direction={{ base: 'column' }}
      justify={{
        base: 'center',
      }}
      w="100%"
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
    >
      {status === 'loading' ? (
        <Spinner size="lg" color="blue.400" />
      ) : (
        <Text>
          <span role="img" aria-label="sad" style={{ marginRight: '5px' }}>
            😔
          </span>{' '}
          Error: {error.message}
        </Text>
      )}
    </Flex>
  )
}

export default LaodingStatus
