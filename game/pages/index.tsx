import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import QuestionModel from '../model/question'
import Questionnaire from '../components/Questionnaire'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()

  const [questionIds, setQuestionIds] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  const [correctAnswers, setCorrectAnswers] = useState<number>(0)

  async function loadIdQuestion() {
    const resp = await fetch(`${BASE_URL}/questionnaire`)
    const questionIds = await resp.json()
    setQuestionIds(questionIds)
  }

  async function loadQuestion(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`)
    const json = await resp.json()
    const newQuestion = QuestionModel.createUsingObject(json)
    setQuestion(newQuestion)
  }

  useEffect(() => {
    loadIdQuestion()
  }, [])

  useEffect(() => {
    questionIds.length > 0 && loadQuestion(questionIds[0])
  }, [questionIds])

  function questionAnswered(questionAnswered: QuestionModel) {
    setQuestion(questionAnswered)
    const correct = questionAnswered.correct
    setCorrectAnswers(correctAnswers + (correct ? 1 : 0))
  }

  function nextQuestionId() {
    if (question) {
      const nextIndice = questionIds.indexOf(question.id) + 1
      return questionIds[nextIndice]
    }
  }

  function nextStep() {
    const nextId = nextQuestionId()
    nextId ? nextQuestion(nextId) : finish()
  }

  function nextQuestion(nextId: number) {
    loadQuestion(nextId)
  }

  function finish() {
    router.push({
      pathname: "/result",
      query: {
        total: questionIds.length,
        correct: correctAnswers
      }
    })
  }

  return (
    <Questionnaire question={question} last={nextQuestionId() === undefined} questionAnswered={questionAnswered} nextStep={nextStep} />
  )
}