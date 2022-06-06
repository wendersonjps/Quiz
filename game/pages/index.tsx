import { useEffect, useState } from 'react'

import QuestionModel from '../model/question'
import AnswerModel from '../model/answer'
import Questionnaire from '../components/Questionnaire'

const questionMock = new QuestionModel(1, 'Melhor cor?', [
  AnswerModel.wrong('Vermelho'),
  AnswerModel.wrong('Verde'),
  AnswerModel.wrong('Azul'),
  AnswerModel.correct('Preto')
])

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const [questionIds, setQuestionIds] = useState<number[]>([])
  const [question, setQuestion] = useState(questionMock)

  async function loadIdQuestion() {
    const resp = await fetch(`${BASE_URL}/questionnaire`)
    const questionIds = await resp.json()
    setQuestionIds(questionIds)
  }

  async function loadQuestion(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`)
    const json = await resp.json()
    console.log(json)
  }

  useEffect(() => {
    loadIdQuestion()
  }, [])

  useEffect(() => {
    questionIds.length > 0 && loadQuestion(questionIds[0])
  }, [questionIds])

  function questionAnswered(question: QuestionModel) {

  }

  function nextStep() {

  }

  return (
    <Questionnaire question={question} last={true} questionAnswered={questionAnswered} nextStep={nextStep} />
  )
}

/*   function onResponse(indice: number) {
    setQuestion(question.replyWith(indice))
  }

  function timeout() {
    if (question.unanswered) {
      setQuestion(question.replyWith(-1))
    }
  } */