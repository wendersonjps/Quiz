import QuestionModel from '../../model/question'
import AnswerModel from '../../model/answer'

const questions: QuestionModel[] = [
    new QuestionModel(1, 'Qual bicho transmite a Doença de Chagas?', [
        AnswerModel.wrong('Abelha'),
        AnswerModel.wrong('Barata'),
        AnswerModel.wrong('Pulga'),
        AnswerModel.correct('Barbeiro'),
    ]),
    new QuestionModel(2, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        AnswerModel.wrong('Caju'),
        AnswerModel.wrong('Chuchu'),
        AnswerModel.wrong('Coco'),
        AnswerModel.correct('Abóbora'),
    ]),
    new QuestionModel(3, 'Qual é o coletivo de cães?', [
        AnswerModel.wrong('Alcateia'),
        AnswerModel.wrong('Manada'),
        AnswerModel.wrong('Rebanho'),
        AnswerModel.correct('Matilha'),
    ]),
    /* new QuestionModel(4, 'Qual é o triângulo que tem todos os lados diferentes?', [
        AnswerModel.wrong('Equilátero'),
        AnswerModel.wrong('Isóceles'),
        AnswerModel.wrong('Trapézio'),
        AnswerModel.correct('Escaleno'),
    ]),
    new QuestionModel(5, 'Quem compôs o Hino da Independência?', [
        AnswerModel.wrong('Carlos Gomes'),
        AnswerModel.wrong('Castro Alves'),
        AnswerModel.wrong('Manuel Bandeira'),
        AnswerModel.correct('Dom Pedro I'),
    ]),
    new QuestionModel(6, 'Qual é o antônimo de "malograr"?', [
        AnswerModel.wrong('Desprezar'),
        AnswerModel.wrong('Fracassar'),
        AnswerModel.wrong('Perder'),
        AnswerModel.correct('Conseguir'),
    ]),
    new QuestionModel(7, 'Em que país nasceu Carmen Miranda?', [
        AnswerModel.wrong('Argentina'),
        AnswerModel.wrong('Espanha'),
        AnswerModel.wrong('Brasil'),
        AnswerModel.correct('Portugal'),
    ]),
    new QuestionModel(8, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        AnswerModel.wrong('Costa e Silva'),
        AnswerModel.wrong('Emílio Médici'),
        AnswerModel.wrong('Ernesto Geisel'),
        AnswerModel.correct('João Figueiredo'),
    ]),
    new QuestionModel(9, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        AnswerModel.wrong('Ás'),
        AnswerModel.wrong('Nove'),
        AnswerModel.wrong('Rei'),
        AnswerModel.correct('Valete'),
    ]),
    new QuestionModel(10, 'O adjetivo "venoso" está relacionado a:', [
        AnswerModel.wrong('Vela'),
        AnswerModel.wrong('Vento'),
        AnswerModel.wrong('Vênia'),
        AnswerModel.correct('Veia'),
    ]),
    new QuestionModel(11, 'Que nome se dá à purificação por meio da água?', [
        AnswerModel.wrong('Abrupção'),
        AnswerModel.wrong('Abolição'),
        AnswerModel.wrong('Abnegação'),
        AnswerModel.correct('Ablução'),
    ]),
    new QuestionModel(12, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        AnswerModel.wrong('Monte Branco'),
        AnswerModel.wrong('Monte Fuji'),
        AnswerModel.wrong('Monte Carlo'),
        AnswerModel.correct('Monte Everest'),
    ]),
    new QuestionModel(13, 'Em que parte do corpo se encontra a epiglote?', [
        AnswerModel.wrong('Estômago'),
        AnswerModel.wrong('Pâncreas'),
        AnswerModel.wrong('Rim'),
        AnswerModel.correct('Pescoço'),
    ]),
    new QuestionModel(14, 'A compensação por perda é chamada de...', [
        AnswerModel.wrong('Déficit'),
        AnswerModel.wrong('Indexação'),
        AnswerModel.wrong('Indébito'),
        AnswerModel.correct('Indenização'),
    ]),
    new QuestionModel(15, 'Que personagem do folclore brasileiro tem uma perna só?', [
        AnswerModel.wrong('Cuca'),
        AnswerModel.wrong('Curupira'),
        AnswerModel.wrong('Boitatá'),
        AnswerModel.correct('Saci-pererê'),
    ]),
    new QuestionModel(16, 'Quem é o "patrono" do Exército Brasileiro?', [
        AnswerModel.wrong('Marechal Deodoro'),
        AnswerModel.wrong('Barão de Mauá'),
        AnswerModel.wrong('Marquês de Pombal'),
        AnswerModel.correct('Duque de Caxias'),
    ]) */
]

export default questions