import { BaseLayout } from '../components'
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export const Welcome = () => (
  <BaseLayout headline="Willkommen">
    <div className="h-screen">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Dein persönlicher
        <br />
        Reiseziel Finder
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Liebe Manuela, wir wünschen dir ganz herzlich alles Gute zu deinem
        Geburtstag.
        <br />
        Da wir wissen, dass du einige wunderschöne Orte auf dieser Welt noch
        besuchen möchtest, soll dir dieser kleine Reisefinder dabei helfen, das
        richtige Ziel auszuwählen.
      </p>
      <div className="mt-8 flex items-center gap-x-6 lg:justify-start">
        <Link
          to="/reisefinder"
          className="whitespace-nowrap rounded-md bg-green-300 px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-green-400 hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <div className="flex items-center">
            Reisefinder starten
            <ArrowSmallRightIcon
              className="ml-2 -mr-1 h-5 w-5"
              aria-hidden="true"
            />
          </div>
        </Link>
      </div>
    </div>
  </BaseLayout>
)
