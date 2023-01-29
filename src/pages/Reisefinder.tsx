import { BaseLayout } from '@/components'
import { useEffect, useState } from 'react'
import { Destination, Question, vacationFinderData } from '@/data'

type ResultCounts = Record<Destination, number>

export const Reisefinder = () => {
  const { questions, results } = vacationFinderData
  const shuffledQuestions = [...questions]
    .sort(() => 0.5 - Math.random())
    .slice(0, 10)
  console.log(shuffledQuestions)
  const [resultCounts, setResultCounts] = useState<ResultCounts>({
    madeira: 0,
    copenhagen: 0,
    portugal: 0,
    draw: 0,
  })
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    shuffledQuestions[0],
  )
  const [questionCount, setQuestionCount] = useState(1)
  console.log(questionCount)
  useEffect(() => {}, [])

  return (
    <BaseLayout headline="Reiseziel Finder">
      <div>
        <h4 className="sr-only">Fortschritt zu deinem Reiseziel</h4>
        <p className="text-sm font-medium text-gray-900">
          Fortschritt zu deinem Reiseziel
        </p>
        <div className="mt-4" aria-hidden="true">
          <div className="overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-green-300"
              style={{ width: `${questionCount * 10}%` }}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div key={currentQuestion.id}>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Frage {questionCount + 1}: {currentQuestion.text}
          </h3>
        </div>
      </div>
    </BaseLayout>
  )
}
