import { NavLink, useLocation } from 'react-router-dom'

import { Box, Flex, IconButton, Stack, Button } from '@chakra-ui/react'
import { VscRocket } from 'react-icons/vsc'

import DarkModeSwitch from '../../dataDisplay/DarkModeSwitch'

const MenuItem = ({ children, isLast, ...rest }) => (
  <Box mb={{ base: isLast ? 0 : 8 }} mr={{ base: 0 }} display="block" {...rest}>
    {children}
  </Box>
)

const Header = props => {
  const { ...rest } = props
  const location = useLocation()

  const isActive = path => location.pathname === path

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      {...rest}
    >
      <NavLink to="/">
        <Button
          display={{ base: 'none', sm: 'inline-flex' }}
          leftIcon={<VscRocket />}
          size="sm"
          colorScheme={isActive('/new-mission') ? 'blue' : null}
          variant={isActive('/new-mission') ? 'outline' : null}
        >
          New Mission
        </Button>
        <IconButton
          display={{ base: 'inline-flex', sm: 'none' }}
          colorScheme={isActive('/new-mission') ? 'blue' : null}
          variant={isActive('/new-mission') ? 'outline' : null}
          icon={<VscRocket />}
          size="sm"
          rounded="md"
        />
      </NavLink>
      <Box display={{ base: 'block' }} flexBasis={{ base: '100%', xs: 'auto' }}>
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
        >
          <MenuItem isLast>
            <Stack direction="row">
              <NavLink to="/upcoming">
                <Button
                  size="sm"
                  colorScheme={isActive('/upcoming') ? 'blue' : null}
                  variant={isActive('/upcoming') ? 'outline' : null}
                >
                  Upcoming
                </Button>
              </NavLink>
              <NavLink to="/history">
                <Button
                  size="sm"
                  colorScheme={isActive('/history') ? 'blue' : null}
                  variant={isActive('/history') ? 'outline' : null}
                >
                  History
                </Button>
              </NavLink>
              <DarkModeSwitch />
            </Stack>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
