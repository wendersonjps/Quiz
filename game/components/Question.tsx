import styles from '../styles/Question.module.css'
import QuestionModel from '../model/question'
import Wording from './Wording'

interface QuestionProps {
    value: QuestionModel
}

export default function Question(props: QuestionProps) {
    const question = props.value

    return (
        <div className={styles.question}>
            <Wording text={question.wording} />
        </div>
    )
}