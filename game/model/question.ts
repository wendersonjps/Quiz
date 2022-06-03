import AnswerModel from './answer'
import { shuffle } from '../functions/arrays'

export default class QuestionModel {
    #id: number
    #wording: string
    #answer: AnswerModel[]
    #correct: boolean

    constructor(id: number, wording: string, answer: AnswerModel[], correct = false) {
        this.#id = id
        this.#wording = wording
        this.#answer = answer
        this.#correct = correct
    }

    get id() {
        return this.#id
    }

    get wording() {
        return this.#wording
    }

    get answer() {
        return this.#answer
    }

    get correct() {
        return this.#correct
    }

    get answered() {
        for (let answer of this.#answer) {
            if (answer.revealed) return true
        }
        return false
    }

    get unanswered() {
        return !this.answered
    }

    replyWith(indice: number): QuestionModel {
        const correct = this.#answer[indice]?.correct
        const answers = this.#answer.map((answer, i) => {
            const answerSelected = indice === i
            const shouldReveal = answerSelected || answer.correct
            return shouldReveal ? answer.reveal() : answer
        })
        return new QuestionModel(this.id, this.wording, answers, correct)
    }

    shuffleAnswer(): QuestionModel {
        let answersShuffled = shuffle(this.#answer)
        return new QuestionModel(this.#id, this.#wording, answersShuffled, this.#correct)
    }

    toObject() {
        return {
            id: this.#id,
            wording: this.#wording,
            answer: this.#answer.map(resp => resp.toObject()),
            answered: this.answered,
            correct: this.#correct
        }
    }
}