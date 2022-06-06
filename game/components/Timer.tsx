import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import styles from '../styles/Timer.module.css'

interface TimerProps {
    key: any
    duration: number
    timeout: () => void
}

export default function Timer(props: TimerProps) {
    return (
        <div className={styles.timer}>
            <CountdownCircleTimer duration={props.duration} size={120} isPlaying onComplete={props.timeout} colors={['#2BAA6D', '#FF8C00', '#DC143C']} colorsTime={[10, 5, 0]}>
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}