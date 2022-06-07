import styles from '../styles/Statistic.module.css'

interface StatisticProps {
    value: any
    text: string
    backgroundColor?: string
    fontColor?: string
}

export default function Statistic(props: StatisticProps) {
    return (
        <div className={styles.statistic}>
            <div className={styles.value} style={{ backgroundColor: props.backgroundColor ?? '#4169e1', color: props.fontColor ?? '#fff' }}>
                {props.value}
            </div>
            <div className={styles.text}>
                {props.text}
            </div>
        </div>
    )
}