import styles from '../styles/Questionnaire.module.css'
import QuestionModel from '../model/question'
import Question from './Question'
import Button from './Button'

interface QuestionnaireProps {
    question: QuestionModel
    last: boolean
    questionAnswered: (question: QuestionModel) => void
    nextStep: () => void
}

export default function Questionnaire(props: QuestionnaireProps) {
    function answerProvided(indice: number) {
        if (props.question.unanswered) {
            props.questionAnswered(props.question.replyWith(indice))
        }
    }

    return (
        <div className={styles.questionnaire}>
            {props.question ?
                <Question value={props.question} responseTime={6} answerProvided={answerProvided} timeOut={props.nextStep} />
                : false
            }
            <Button onClick={props.nextStep} text={props.last ? 'Finalizar' : 'Próxima'} />
        </div>
    )
}