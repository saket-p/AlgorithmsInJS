export const getRandomNumInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomNumArray = arrLen => {
    const min = 0;
    const max = arrLen * 100 - 1;
    const randSet = new Set();
    while(arrLen--) {
        let randNum = getRandomNumInRange(min, max);
        randSet.has(randNum) ? arrLen++ : randSet.add(randNum);
    }
    return [...randSet];
}

export const timed = func => (...args) => {
    const now = Date.now();
    const retVal = func(...args);
    console.log('Result = ', retVal);
    console.log('Time taken : ' + ((Date.now() - now) / 1000) + ' sec \n');
}
