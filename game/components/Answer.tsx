import styles from '../styles/Answer.module.css'
import AnswerModel from '../model/answer'

interface AnswerProps {
    value: AnswerModel
    indice: number
    letter: string
    letterColor: string
}

export default function Answer(props: AnswerProps) {
    const answer = props.value

    return (
        <div className={styles.answer}>
            <div className={styles.answerContent}>
                <div className={styles.front}>
                    <div className={styles.letter}>
                        {props.letter}
                    </div>
                    <div className={styles.value}>
                        {answer.value}
                    </div>
                </div>
                <div className={styles.back}>

                </div>
            </div>
        </div>
    )
}