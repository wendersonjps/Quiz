import questions from '../questionBase'

export default function handler(req, res) {
  const idSelected = +req.query.id
  const questionsSelected = questions.filter(question => question.id === idSelected)

  if (questionsSelected.length === 1) {
    const questionSelected = questionsSelected[0]
    res.status(200).json(questionSelected.toObject())
  } else {
    res.status(204).send()
  }
}