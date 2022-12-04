/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useState, useEffect, Fragment, createRef } from 'react'
import Link from 'next/link'
import { useAuth } from 'apps/web/src/context/auth.context'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Button from './Button'
import { useRouter } from 'next/router'
import { BellIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const router = useRouter()
  const { user: authUser, isAuthenticated, logoutFunc } = useAuth()
  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Tours', href: '/tours', current: false }
  ]

  return (
    <>
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex justify-between h-16">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gw-primary-400 hover:text-gw-primary-500 hover:bg-gw-primary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gw-primary-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center mr-10">
                    <>
                      <Link href="/">
                        <img
                          className="block lg:hidden h-8 w-auto hover:cursor-pointer"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt="Workflow"
                        />
                      </Link>
                      <Link href="/">
                        <img
                          className="hidden lg:block h-8 w-auto hover:cursor-pointer"
                          src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                          alt="Workflow"
                        />
                      </Link>
                    </>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {/* Current: "border-gw-primary-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <span
                          className={classNames(
                            (router.route.includes(item.href) && item.href != '/') ||
                              (router.route === '/' && item.href === router.route)
                              ? 'border-gw-primary-500 text-gw-primary-900 border-b-2'
                              : ' hover:text-gray-900 text-gray-500 ',
                            'inline-flex items-center px-1 pt-1 hover:border-b-2 text-sm font-medium hover:cursor-pointer'
                          )}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {isAuthenticated && (
                    <>
                      <button
                        type="button"
                        className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gw-primary-500"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gw-primary-500">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={authUser.image} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <div className="block px-4 py-2 text-sm text-gray-700">
                                  <div> {`${authUser.firstName} ${authUser.lastName}`}</div>
                                  <div className="text-gray-500">{authUser.email}</div>
                                </div>
                              )}
                            </Menu.Item>
                            <hr />
                            <Menu.Item>
                              {({ active }) => (
                                <div
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                                  )}
                                  onClick={() => {
                                    router.push('/profile')
                                  }}
                                >
                                  My Profile
                                </div>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                  onClick={logoutFunc}
                                >
                                  Sign out
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </>
                  )}
                </div>

                {!isAuthenticated && (
                  <div className="hidden  align-middle items-center sm:flex">
                    <Button
                      type="primary"
                      className="mr-2"
                      onClick={() => {
                        router.push('/sign-up')
                      }}
                    >
                      Sign Up
                    </Button>

                    <Button
                      type="secondary"
                      onClick={() => {
                        router.push('/login')
                      }}
                    >
                      Log In
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-4 space-y-1">
                {/* Current: "bg-gw-primary-50 border-gw-primary-500 text-gw-primary-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}

                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.href === router.route
                        ? 'text-white bg-gw-primary-50 border-gw-primary-500'
                        : 'text-gray-300 hover:bg-gw-primary-50 hover:text-gw-primary',
                      ' text-gw-primary-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <Disclosure.Button
                  key={'login'}
                  as="a"
                  href={'/login'}
                  className={classNames(
                    ' text-gray-300 hover:bg-gw-primary-50 hover:text-gw-primary block sm:hidden pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                  )}
                >
                  Login
                </Disclosure.Button>
                <Disclosure.Button
                  key={'sign-up'}
                  as="a"
                  href={'/sign-up'}
                  className={classNames(
                    ' text-gray-300 hover:bg-gw-primary-50 hover:text-gw-primary block sm:hidden pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                  )}
                >
                  Sign Up
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}
