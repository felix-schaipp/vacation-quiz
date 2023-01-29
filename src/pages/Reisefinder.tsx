import { BaseLayout } from '@/components'
import { useState } from 'react'
import { Answer, Destination, Question, vacationFinderData } from '@/data'
import { useNavigate } from 'react-router-dom'

export type ResultCounts = Record<Destination, number>

export const Reisefinder = () => {
  const navigate = useNavigate()
  const { questions } = vacationFinderData
  const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random())
  const [resultCounts, setResultCounts] = useState<ResultCounts>({
    madeira: 0,
    kopenhagen: 0,
    portugal: 0,
  })
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    shuffledQuestions[0],
  )
  const [questionCount, setQuestionCount] = useState(1)

  const handleSelectAnswer = (answer: Answer) => {
    if (questionCount < 10) {
      setCurrentQuestion(shuffledQuestions[questionCount])
      setQuestionCount((currentQuestionCount) => currentQuestionCount + 1)
    }
    setResultCounts((currentResultsCount) => ({
      ...currentResultsCount,
      [answer.destinationPoint]:
        currentResultsCount[answer.destinationPoint] + 1,
    }))
    if (questionCount === 10) {
      navigate('/ergbnis', { state: resultCounts })
    }
  }

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
      <div className="mt-10 h-screen">
        <div key={currentQuestion.id}>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Frage {questionCount}: {currentQuestion.text}
          </h3>
          <div className="mt-4 flex flex-col">
            {shuffleAnswers(currentQuestion.answers).map((answer) => (
              <div key={answer.id} className="py-2">
                <button
                  type="button"
                  onClick={() => handleSelectAnswer(answer)}
                  className="inline-flex items-center rounded-md border border-transparent bg-green-400 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                >
                  {answer.text}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

const shuffleAnswers = (answers: Answer[]): Answer[] => {
  return [...answers.sort(() => 0.5 - Math.random())]
}
