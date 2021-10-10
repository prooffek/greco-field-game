import {Question} from "../Classes/Question";
import {_gameNamesDict} from "./_gameNamesDict";

export const _questions = {
    [_gameNamesDict.Italy.Gaddiciano]: gaddicianoQuestionsDict
}

const gaddicianoQuestionsDict = {
    stage_0: [
        new Question(
            0, 
            "What is the Grèko name for the street leading to the village of Gaḍḍicianò?", 
            "Dròmo Patrùna ti Grècia \n(Street of the Madonna of Greece)")
    ],
    stage_1: [
        new Question(
            1,
            "Choose non-Italian names of the central square of the village.",
            "Ròcca tu Coràcu, \nKiàzza Àlimos, \nPlatìa Àlimos"
        )
    ],
    stage_2: [
        new Question(
            2,
            "Whose name bears the Ethnographioc Museum and why?",
            "Angela Bogasari Merianoù / Anzel Merianoù"
        ),
        new Question(
            3,
            "Entering the Ethnographic Museum write down your name in the book and find there what was transported in a bagpipe from the village to the seaside - what is the Grèko name of the goods?",
            "Crasì / Krasì (wine) \nAlealàdi (olive oil)"
        )
    ],
    stage_3: [
        new Question(
            4,
            "What is the Grèko name of the fountain?",
            "Cànnalo tis Agàpi (The Fountain of Love) "
        )
    ],
    stage_4: [
        new Question(
            5,
            "Walk up to the top of the Greek Amphitheatre of Bartholomeo I. What river valley do you see?",
            "Amandolea"
        )
    ],
    stage_5: [
        new Question(
            6,
            "What should you do 3 times when entering the Orthodox Church of the Madonna of Greece (Panaghìa tis Ellàdas)?",
            "Cudunìzo (to ring the bell)"
        )
    ],
    stage_6: [
        new Question(
            7,
            "The white marble slab near St. John the Baptist Church presents a text in 2 languages. What are these languages?",
            "Greek and Italian"
        ),
        new Question(
            8,
            "What is the Grèko name of the street you are going down from St. John the Baptist Church to the exhibition of old agricultural machinery?",
            "Stenò Àghio Nìlo (Saint Nilus Street)"
        )
    ],
    stage_7: [
        new Question(
            9,
            "What is the Grèko name of the machinery mention in the previous question?",
            "Palei mìli ton alèo (Archaic olive mills)"
        )
    ]
}