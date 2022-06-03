import { useState } from 'react'

import Question from '../components/Question'
import QuestionModel from '../model/question'
import AnswerModel from '../model/answer'
import Button from '../components/Button'

const questionMock = new QuestionModel(1, 'Melhor cor?', [
  AnswerModel.wrong('Vermelho'),
  AnswerModel.wrong('Verde'),
  AnswerModel.wrong('Azul'),
  AnswerModel.correct('Preto')
])

export default function Home() {
  const [question, setQuestion] = useState(questionMock)

  function onResponse(indice: number) {
    setQuestion(question.replyWith(indice))
  }

  function timeout() {
    if (question.unanswered) {
      setQuestion(question.replyWith(-1))
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Question value={question} responseTime={10} onResponse={onResponse} timeout={timeout} />
      <Button text='Próxima' href='/result' />
    </div>
  )
}
