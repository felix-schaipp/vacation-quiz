import { Disclosure } from '@headlessui/react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { classNames } from '../helper'

export const Navbar = () => {
  const router = useRouter()

  return (
    <Disclosure as="nav" className="bg-green-300">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-14 justify-between">
              <div className="flex items-center">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <img
                      className="block h-8 w-auto rounded-full lg:block"
                      src="/mum.jpg"
                      alt="profile picture"
                    />
                  </Link>
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    href="/reisefinder"
                    className={classNames(
                      router.pathname === '/reisefinder'
                        ? 'border-b border-white text-white hover:border-gray-50'
                        : '',
                      'py-2 text-sm font-medium hover:border-gray-50 hover:text-gray-50',
                    )}
                    aria-current={
                      router.pathname === 'reisefinder' ? 'page' : undefined
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
                  router.pathname === 'reisefinder'
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                    : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                  'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
                )}
                aria-current={
                  router.pathname === 'reisefinder' ? 'page' : undefined
                }
              >
                Reisefinder
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="/mum.jpg"
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
