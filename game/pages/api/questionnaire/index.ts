import questions from '../questionBase'
import { shuffle } from '../../../functions/arrays'

export default (req, res) => {
    const ids = questions.map(question => question.id)
    res.status(200).json(shuffle(ids))
}