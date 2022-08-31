import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Text } from 'react-native'

import TextInput from '@components/input/TextInput'
import { AnimatedTile } from '@components/animated/AnimatedTile'
import { Row, View } from '@design/layout'
import { H1 } from '@design/typography'

interface LinkProps extends React.ComponentProps<typeof Link> {}

interface AnimatedTileProps
  extends Omit<React.ComponentProps<typeof AnimatedTile>, 'isActive'> {}

type NavLinkProps = LinkProps & AnimatedTileProps

const NavLink: React.FC<NavLinkProps> = ({ label, iconName, href }) => {
  const router = useRouter()
  const isActiveRoute = router.pathname === href ? true : false

  return (
    <Link href={href}>
      <Text>
        <AnimatedTile
          iconName={iconName}
          label={label}
          isActive={isActiveRoute}
        />
      </Text>
    </Link>
  )
}

const Navbar = () => {
  return (
    <Row className='px-2 py-2 w-full items-center justify-between'>
      <Row className='items-center'>
        <H1 className='font-["Pacifico"] h-14 text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-sky-400 to-red-400'>
          Reloop
        </H1>
        <View className='ml-9 mr-2'>
          <NavLink href='/' label='Movies' iconName='film' />
        </View>
        <NavLink href='/tv-shows' label='TV Shows' iconName='tv' />
      </Row>
      <TextInput placeholder='Search' />
    </Row>
  )
}

export default Navbar
