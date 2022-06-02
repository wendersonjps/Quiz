import styles from '../styles/Home.module.css'
import Question from '../components/Question'
import QuestionModel from '../model/question'
import AnswerModel from '../model/answer'

export default function Home() {
  const questionTest = new QuestionModel(1, 'Melhor cor?', [
    AnswerModel.wrong('Vermelho'),
    AnswerModel.wrong('Verde'),
    AnswerModel.wrong('Azul'),
    AnswerModel.wrong('Preto')
  ])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Question value={questionTest} />
    </div>
  )
}
