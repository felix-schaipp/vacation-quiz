import { BaseLayout } from '@/components'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { ResultOptions, vacationFinderData } from '@/data'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ResultCounts } from './Reisefinder'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

export const Ergebnis = () => {
  const { results } = vacationFinderData
  const { state } = useLocation()
  const [isCalculating, setIsNotCalculating] = useState(true)

  const result: ResultCounts = state

  const winnerObject = Object.fromEntries(
    Object.entries(result).sort(([, a], [, b]) => b - a),
  )

  const isDraw = () => {
    const madeira = winnerObject['madeira']
    const copenhagen = winnerObject['kopenhagen']
    const portugal = winnerObject['portugal']

    if (
      madeira == copenhagen ||
      madeira == portugal ||
      copenhagen == portugal
    ) {
      return true
    }

    return false
  }

  const [winner, ...others] = Object.keys(winnerObject)

  useEffect(() => {
    setTimeout(() => {
      setIsNotCalculating(false)
    }, 1300)
  }, [])
  return (
    <BaseLayout headline="Ergebnis">
      <div>
        {isCalculating && (
          <div className="h-screen">
            <div className="flex items-center">
              <p className="mr-4 text-lg leading-8 text-gray-600">
                Wir berechnen dein Ergebnis...
              </p>
              <LoadingSpinner />
            </div>
          </div>
        )}
      </div>
      <div>
        {!isCalculating && !isDraw() && (
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Dein persönlicher Favourit
            </h2>
            <div className="flex flex-col">
              <div className="max-w-xs rounded-lg bg-green-300 dark:border-gray-700">
                {results[winner as ResultOptions].picture}
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Platz 1:{' '}
                    {`${winner.charAt(0).toUpperCase()}${winner.slice(
                      1,
                      winner.length,
                    )}`}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700">
                    {results[winner as ResultOptions].teaserText}
                  </p>
                </div>
              </div>
              <p className="pt-8 pb-2 text-lg leading-8 text-gray-600">
                Natürlich gibt es auch noch weitere schöne Ziel:
              </p>
              <div className="flex space-x-6">
                {others.map((looser, index) => (
                  <div className="max-w-xs rounded-lg bg-green-600 shadow dark:border-gray-700">
                    {results[looser as ResultOptions].picture}
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-50">
                        Platz {index + 2}:{' '}
                        {`${looser.charAt(0).toUpperCase()}${looser.slice(
                          1,
                          looser.length,
                        )}`}
                      </h5>
                      <p className="mb-3 font-normal text-gray-100">
                        {results[looser as ResultOptions].teaserText}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Du möchtest es nochmal probieren?
              </p>
              <Link
                to="/reisefinder"
                className="mt-4 w-56 whitespace-nowrap rounded-md bg-green-300 px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-green-400 hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <div className="flex items-center">
                  Reisefinder neu starten
                  <ArrowUturnLeftIcon
                    className="ml-2 -mr-1 h-5 w-5"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
      {!isCalculating && isDraw() && (
        <div className="flex">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unentschieden
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hier lagen zwei Reiseziele genau gleich auf.
              <br /> Starte den Reisefinder neu um ein eindeutiges Ergebnis zu
              erhalten.
            </p>
            <Link
              to="/reisefinder"
              className="mt-4 w-56 whitespace-nowrap rounded-md bg-green-300 px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-green-400 hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <div className="flex items-center">
                Reisefinder neu starten
                <ArrowUturnLeftIcon
                  className="ml-2 -mr-1 h-5 w-5"
                  aria-hidden="true"
                />
              </div>
            </Link>
          </div>
          <div>{results.draw.picture}</div>
        </div>
      )}
    </BaseLayout>
  )
}
