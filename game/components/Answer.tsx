import styles from '../styles/Answer.module.css'
import AnswerModel from '../model/answer'

interface AnswerProps {
    value: AnswerModel
    indice: number
    letter: string
    letterBackgroundColor: string
    onResponse: (indice: number) => void
}

export default function Answer(props: AnswerProps) {
    const answer = props.value

    return (
        <div className={styles.answer} onClick={() => props.onResponse(props.indice)}>
            <div className={styles.answerContent}>
                {!answer.revealed ? (
                    <div className={styles.front}>
                        <div className={styles.letter} style={{ backgroundColor: props.letterBackgroundColor }}>
                            {props.letter}
                        </div>
                        <div className={styles.value}>
                            {answer.value}
                        </div>
                    </div>
                ) : (
                    <div className={styles.back}>
                        {answer.correct ? (
                            <div className={styles.correct}>
                                <div>A resposta certa é...</div>
                                <div className={styles.value}>{answer.value}</div>
                            </div>
                        ) : (
                            <div className={styles.wrong}>
                                <div>Resposta errada!</div>
                                <div className={styles.value}>{answer.value}</div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}