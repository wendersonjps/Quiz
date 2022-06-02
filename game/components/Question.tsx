import styles from '../styles/Question.module.css'
import QuestionModel from '../model/question'

interface QuestionProps {
    value: QuestionModel
}

export default function Question(props: QuestionProps) {
    const question = props.value

    return (
        <div className={styles.question}>
            <h1>Questão</h1>
        </div>
    )
}