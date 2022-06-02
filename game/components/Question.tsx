import styles from '../styles/Question.module.css'
import QuestionModel from '../model/question'
import Wording from './Wording'
import Answer from './Answer'

const letters = [
    { value: 'A', collor: '#4169E1' },
    { value: 'B', collor: '#4169E1' },
    { value: 'C', collor: '#4169E1' },
    { value: 'D', collor: '#4169E1' }
]

interface QuestionProps {
    value: QuestionModel
}

export default function Question(props: QuestionProps) {
    const question = props.value

    function renderAnswer() {
        return question.answer.map((answer, i) => {
            return (
                <Answer key={i} value={answer} indice={i} letter={letters[i].value} letterBackgroundColor={letters[i].collor} />
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