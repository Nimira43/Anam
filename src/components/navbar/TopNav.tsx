import { Navbar, NavbarBrand, NavbarContent }  from '@heroui/navbar'
import { Button } from '@heroui/button'
import Link from 'next/link'
import { GiAbstract065 } from 'react-icons/gi'
import NavLink from './NavLink'

export default function TopNav() {
  return (
    <Navbar
      maxWidth='xl'
      className='bg-grey-5 shadow-md'
      classNames={{
        item: [
          'text-lg',
          'text-main',
          'hover:text-dark',
          'transitioning',
          'data-[active=true]:text-dark',
          'data-[active=true]:font-light'
        ]
      }}
    >
      <NavbarBrand
        as={Link}
        href='/'
      >
        <GiAbstract065
          className='text-main'
          size={36}
        />
        <div className='logo-text text-3xl text-main font-bold ml-2'>
          Anam
        </div>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavLink
          href='/members'
          label='Matches'
        />
        <NavLink
          href='/lists'
          label='Lists'
        />
        <NavLink
          href='/messages'
          label='Messages'
        />
      </NavbarContent>
      <NavbarContent justify='end'>
        <Button
          as={Link}
          href='/login'
          className='main-btn transitioning'>
          Login
        </Button>
        <Button 
          as={Link}
          href='/register'
          className='main-outline-btn transitioning'>
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  )
}