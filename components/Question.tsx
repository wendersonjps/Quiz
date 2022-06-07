import styles from '../styles/Question.module.css'
import QuestionModel from '../model/question'
import Wording from './Wording'
import Answer from './Answer'
import Timer from './Timer'

const letters = [
    { value: 'A', collor: '#4169E1' },
    { value: 'B', collor: '#4169E1' },
    { value: 'C', collor: '#4169E1' },
    { value: 'D', collor: '#4169E1' }
]

interface QuestionProps {
    value: QuestionModel
    responseTime?: number
    onResponse: (indice: number) => void
    timeout: () => void
}

export default function Question(props: QuestionProps) {
    const question = props.value

    function renderAnswer() {
        return question.answer.map((answer, i) => {
            return (
                <Answer key={`${question.id}-${i}`} value={answer} indice={i} letter={letters[i].value} letterBackgroundColor={letters[i].collor} onResponse={props.onResponse} />
            )
        })
    }

    return (
        <div className={styles.question}>
            <Wording text={question.wording} />
            <Timer key={question.id} duration={props.responseTime ?? 10} timeout={props.timeout} />
            {renderAnswer()}
        </div>
    )
}