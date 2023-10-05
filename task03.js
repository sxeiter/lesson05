'use strict';

const reversePhrase = (phrase) => {
    let reverse = "";
    for ( let i = phrase.length - 1; i >= 0; i--) {
        reverse += phrase[i];
    }
    return reverse;
}

console.log(reversePhrase ("Привет мир"));
