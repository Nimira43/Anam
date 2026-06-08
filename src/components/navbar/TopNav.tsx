import { Navbar, NavbarBrand, NavbarContent, NavbarItem }  from '@heroui/navbar'
import { Button } from '@heroui/button'
import Link from 'next/link'
import { GiAbstract065 } from 'react-icons/gi'

export default function TopNav() {
  return (
    <Navbar
      maxWidth='xl'
      className='bg-grey-4'
      classNames={{
        item: [
          'text-lg',
          'text-main',
          'hover:text-dark',
          'transitioning'
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
        <NavbarItem
          as={Link}
          href='/members'
        >
          Matches
        </NavbarItem>
        <NavbarItem
          as={Link}
          href='/lists'
        >
          Lists
        </NavbarItem>
        <NavbarItem
          as={Link}
          href='/messages'
        >
          Messages
        </NavbarItem>
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