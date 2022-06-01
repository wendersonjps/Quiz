import AnswerModel from './answer'

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

    toObject() {
        return {
            id: this.#id,
            wording: this.#wording,
            answer: this.#answer.map(resp => resp.toObject()),
            correct: this.#correct
        }
    }
}