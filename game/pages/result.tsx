import { useRouter } from 'next/router'

import styles from '../styles/Result.module.css'
import Statistic from '../components/Statistic'
import Button from '../components/Button'

export default function Result() {
    const router = useRouter()

    const total = +router.query.total
    const correct = +router.query.correct
    const percent = Math.round((correct / total) * 100)

    return (
        <div className={styles.result}>
            <h1>Resultado Final</h1>
            <div style={{ display: 'flex' }}>
                <Statistic text="Perguntas" value={total} />
                <Statistic text="Certas" value={correct} backgroundColor="#2BAA6D" />
                <Statistic text="Percentual" value={`${percent}%`} />
            </div>
            <Button href="/" text="Tentar Novamente!" />
        </div>
    )
}