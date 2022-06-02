import styles from '../styles/Question.module.css'
import QuestionModel from '../model/question'
import Wording from './Wording'
import Answer from './Answer'

interface QuestionProps {
    value: QuestionModel
}

export default function Question(props: QuestionProps) {
    const question = props.value

    function renderAnswer() {
        return question.answer.map((answer, i) => {
            return (
                <Answer value={answer} indice={i} letter='A' letterColor='#F2C866' />
            )
        })
    }

    return (
        <div className={styles.question}>
            <Wording text={question.wording} />
            {renderAnswer()}
        </div>
    )
}