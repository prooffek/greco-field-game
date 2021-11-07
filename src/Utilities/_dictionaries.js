import map_0 from "../videos/step_0.mp4";
import map_1 from "../videos/step_1.mp4";
import map_2 from "../videos/step_2.mp4";
import map_3 from "../videos/step_3.mp4";
import map_4 from "../videos/step_4.mp4";
import map_5 from "../videos/step_5.mp4";
import map_6 from "../videos/step_6.mp4";
import map_7 from "../videos/step_7.mp4";

export const _gameNamesDict = {
    Italy: {
        Gaddiciano: "Gaddiciano Field Game",
        Bova: "Bova Field Game"
    },
}

export const _languages = {
    english: "EN",
    italian: "IT",
    polish: "PL",
    greek: "EL"
}

export const _mapImports = {
    map_0: map_0,
    map_1: map_1,
    map_2: map_2,
    map_3: map_3,
    map_4: map_4,
    map_5: map_5,
    map_6: map_6,
    map_7: map_7,
}

export const _reducerDict = {
    modifier: "modifier"
}

export const _targetFolders = {
    questions: "Questions",
    answers: "Answers"
}

export const _places = {
    [_gameNamesDict.Italy.Gaddiciano]: "Gaddiciano"
}

export const _modifiers = {
    increment: 1,
    decrement: -1
}

export const _buttonModifiers = {
    next: "increment",
    previous: "decrement"
}

export const _state = {
    phase: "phase",
    game: "game"
}

export const _gameReducerActions = {
    setGame: "setGame",
    setPhase: "setPhase",
    setLanguage: "setLanguage",
    setAnswers: "setAnswers",
    game: "game",
    phase: "phase",
    type: "type",
    resetGame: "resetGame",
    modifier: "modifier",
    answer: "answer"
}