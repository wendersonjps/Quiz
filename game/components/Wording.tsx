import styles from '../styles/Wording.module.css'

interface WordingProps {
    text: string
}

export default function Wording(props: WordingProps) {
    return (
        <div className={styles.wording}>
            <span className={styles.text}>
                {props.text}
            </span>
        </div>
    )
}