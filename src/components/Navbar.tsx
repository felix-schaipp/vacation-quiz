import { Disclosure } from '@headlessui/react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { classNames } from '../helper'

export const Navbar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <Disclosure as="nav" className="bg-green-300">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-14 justify-between">
              <div className="flex items-center">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="block h-8 w-auto rounded-full lg:block"
                      src="/src/assets/mum.jpg"
                      alt="profile picture"
                    />
                  </Link>
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/reisefinder"
                    className={classNames(
                      pathname === '/reisefinder'
                        ? 'border-b border-gray-700 hover:border-gray-900'
                        : '',
                      'py-2 text-sm font-medium text-gray-700 hover:border-b hover:border-gray-900 hover:text-gray-900',
                    )}
                    aria-current={
                      pathname === 'reisefinder' ? 'page' : undefined
                    }
                  >
                    Reisefinder
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center"></div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  id="mobile-expand"
                  className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              <Disclosure.Button
                as="a"
                href="/reisefinder"
                className={classNames(
                  pathname === 'reisefinder'
                    ? 'border-b border-gray-700 hover:border-gray-900'
                    : '',
                  'py-2 text-sm font-medium text-gray-700 hover:border-b hover:border-gray-900 hover:text-gray-900',
                )}
                aria-current={pathname === 'reisefinder' ? 'page' : undefined}
              >
                Reisefinder
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="/src/assets/mum.jpg"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    Manuela's Geburtstagsquiz
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
