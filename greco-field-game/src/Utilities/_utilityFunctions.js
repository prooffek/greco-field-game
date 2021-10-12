export function getRandomEl(counter, list) {
    let listToReturn = [];
    
    while (listToReturn.length < counter) {
        const randomEl = list[Math.floor(Math.random() * list.length)];
        if (!(listToReturn.includes(randomEl))) listToReturn.push(randomEl);
    }
    
    return listToReturn;
}

export function shuffleList(list) {
    for (let i = 0; i < 3; i++){
        list.sort((a, b) => 0.5 - Math.random());
    }
}

export function removeDuplicatedAnswer(list, answer) {
    if (answer){
        return list.filter(a => a.questionId !== answer.questionId);
    }
    return list;
}