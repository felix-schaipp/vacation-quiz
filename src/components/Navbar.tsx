import { Disclosure } from '@headlessui/react'
import {
  XMarkIcon,
  Bars3Icon,
  ArrowSmallRightIcon,
} from '@heroicons/react/24/outline'
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
                      src="/mum.jpg"
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
            <div className="space-y-1 px-4 pt-2 pb-3">
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
                <div className="flex">
                  Reisefinder starten
                  <ArrowSmallRightIcon
                    className="ml-2 -mr-1 h-5 w-5"
                    aria-hidden="true"
                  />
                </div>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
