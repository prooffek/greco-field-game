export function getRandomEl(counter, list) {
    let listToReturn = [];
    
    while (listToReturn.length < counter) {
        const randomEl = list[Math.floor(Math.random() * list.length)];
        if (!(randomEl in listToReturn)) listToReturn.push(randomEl);
    }
    
    return listToReturn;
}

export function shuffleList(list) {
    for (let i = 0; i < 3; i++){
        list.sort((a, b) => 0.5 - Math.random());
    }
}