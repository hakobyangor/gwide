/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useState, useEffect } from 'react'
import { Navbar, MobileNav, Typography, Button, IconButton } from '@material-tailwind/react'
import Link from 'next/link'
import { useAuth } from 'apps/web/src/context/auth.context'

export default function Header() {
  const [openNav, setOpenNav] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false)

  const { user: authUser, isAuthenticated } = useAuth()

  useEffect(() => {
    window.addEventListener('resize', () => {
      return window.innerWidth >= 960 ? setShowMobileNav(false) : setShowMobileNav(true)
    })

    window.innerWidth >= 960 ? setShowMobileNav(false) : setShowMobileNav(true)
  }, [])

  const navList = (
    <ul
      className={
        showMobileNav
          ? 'mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6'
          : 'mb-4 mt-2 flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'
      }
    >
      <Typography as="li" variant="small" color="blue-gray" className="p-1 px-4 font-normal">
        <Link href="/tours">Tours</Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 px-4 font-normal">
        <a href="#" className="flex items-center">
          Guides
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 px-4 font-normal">
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 px-4 font-normal">
        <a href="#" className="flex items-center">
          About Us
        </a>
      </Typography>
    </ul>
  )

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 rounded-none">
      <div
        className="container mx-auto flex items-center justify-between text-blue-gray-900"
        style={{ margin: '0 auto' }}
      >
        <Link href="/">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-bold"
          >
            Gwide
          </Typography>
        </Link>
        {!showMobileNav && <div className=" lg:block">{navList}</div>}

        {!showMobileNav && (
          <div>
            {isAuthenticated && `${authUser.firstName} (${authUser.email})`}
            {!isAuthenticated && (
              <>
                <Link href="/sign-up">
                  <Button
                    variant="gradient"
                    size="sm"
                    className="lg:inline-block mr-2"
                    style={{ marginRight: 8 }}
                  >
                    Get Started
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outlined" size="sm" className="lg:inline-block">
                    Login
                  </Button>
                </Link>
              </>
            )}
          </div>
        )}
        {showMobileNav && (
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        )}
      </div>
      {showMobileNav && (
        <MobileNav open={openNav} className="block">
          {navList}
          <Button variant="gradient" fullWidth size="sm" style={{ marginRight: 8 }}>
            <span>Get Started</span>
          </Button>

          <Button variant="outlined" size="sm" fullWidth className="mt-2">
            <span>Login</span>
          </Button>
        </MobileNav>
      )}
    </Navbar>
  )
}
