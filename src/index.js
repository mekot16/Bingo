import React from 'react';
import ReactDom from 'react-dom';
import './css/bingo.css';

"use strict";

class CardHeader extends React.Component {
    render() {
        return (
            <tr id="header" class="text-center">
                <th width="20%"><strong>B</strong></th>
                <th width="20%"><strong>I</strong></th>
                <th width="20%"><strong>N</strong></th>
                <th width="20%"><strong>G</strong></th>
                <th width="20%"><strong>O</strong></th>
            </tr>
        );
    }
}

class CardRow extends React.Component {
    render() {
        return (
            <tr id="row-{idNum}" class="text-center">
                <td class="b"></td>
                <td class="i"></td>
                <td class="n"></td>
                <td class="g"></td>
                <td class="o"></td>
            </tr>
        );
    }
}

class Card extends React.Component {
    constructor() {
        super();
        this.card = {
            b : {value: [0,0,0,0,0], marked: [false,false,false,false,false]},
            i : {value: [0,0,0,0,0], marked: [false,false,false,false,false]},
            n : {value: [0,0,0,0,0], marked: [false,false,false,false,false]},
            g : {value: [0,0,0,0,0], marked: [false,false,false,false,false]},
            o : {value: [0,0,0,0,0], marked: [false,false,false,false,false]},
        }

        this.range = {
            bMin : 1,  bMax : 15,
            iMin : 16, iMax : 30,
            nMin : 31, nMax : 45,
            gMin : 46, gMax : 60,
            oMin : 61, oMax : 75,
        }
    }

    createTableBody = () => {
       let body = [];
        for (var i=1; i<=5; i++) {
           body.push(<CardRow idNum={i} />);
       }
       return body;
    }

    render() {
        return (
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <CardHeader />
                </thead>
                <tbody id="card1-body">
                    {this.createTableBody()}  
                </tbody>
            </table>
        );
    }

    generateColumnNumbers(col) {
        console.log("inside column numbers");
        for (var i=0; i<this.card[col].value.length; i++) {
            while(true) { // continuous loop, exit check at end
                let canExit = true;
                let rand = Math.floor(Math.random() * (this.range[col+"Max"] - this.range[col+"Min"])) + this.range[col+"Min"];
                // compare to existing values
                for (var j=0; j<i; j++) {
                    if (rand === this.card[col].value[j]) {
                        console.log("dupes");
                        canExit = false;
                        break; // have to get a new value, so stop comparison early
                    }
                }

                if (canExit){ // exit loop check
                    this.card[col].value[i] = rand;
                    break; // exit continuous loop
                }
            }
            this.card[col].marked[i] = false;
        }
        if (col === "n") { // free space in middle of column N
            this.card[col].value[2] = 0;
            this.card[col].marked[2] = true;
        }
    }

    generateCardNumbers() {
        console.log("something something");
        for (var col in this.card) {
            this.generateColumnNumbers(col);
        }
        console.log("here's the card:");
        console.log(this.card);
    }
}

class Player {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

ReactDom.render(
    <Card />,
    document.getElementById('card1')
);
