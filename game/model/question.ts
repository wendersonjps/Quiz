export default class QuestionModel {
    #id: number
    #wording: string
    #answer: any[]
    #correct: boolean
    /* #answered: boolean */

    constructor(id: number, wording: string, answer: any[], correct = false) {
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
        /* FIX-ME: Implementar esse método */
        return false
    }
}