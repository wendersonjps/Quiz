import { useState } from 'react'

import QuestionModel from '../model/question'
import AnswerModel from '../model/answer'
import Questionnaire from '../components/Questionnaire'

const questionMock = new QuestionModel(1, 'Melhor cor?', [
  AnswerModel.wrong('Vermelho'),
  AnswerModel.wrong('Verde'),
  AnswerModel.wrong('Azul'),
  AnswerModel.correct('Preto')
])

export default function Home() {
  const [question, setQuestion] = useState(questionMock)

  function questionAnswered(question: QuestionModel) {

  }

  function nextStep() {

  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Questionnaire question={question} last={true} questionAnswered={questionAnswered} nextStep={nextStep} />
    </div>
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