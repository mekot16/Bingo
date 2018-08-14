"use strict";

function helloWorld() {
    console.log("Hello World!");
}

class Card {
    constructor() {
        this.card = {
            colB : [0,0,0,0,0],
            colI : [0,0,0,0,0],
            colN : [0,0,0,0,0],
            colG : [0,0,0,0,0],
            colO : [0,0,0,0,0],
        }

        this.range = {
            bMin : 1, bMax : 15,
            iMin : 16, iMax : 30,
            nMin : 31, nMax : 45,
            gMin : 46, gMax : 60,
            oMin : 61, oMax : 75,
        }
    }

    generateCardNumbers() {
        console.log("something something");
    }
}

class Player {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
