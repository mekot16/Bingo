import React from 'react';
import ReactDom from 'react-dom';
import './css/bingo.css';

"use strict";

function Tile(props) {
    return (
        <td className={"tile " + (props.isMarked ? "marked-tile" : "")}>
            <span>{props.value}</span>
        </td>
    );
}

function CardHeader(props) {
    return (
        <tr id="header" className="text-center">
            <th width="20%"><strong>B</strong></th>
            <th width="20%"><strong>I</strong></th>
            <th width="20%"><strong>N</strong></th>
            <th width="20%"><strong>G</strong></th>
            <th width="20%"><strong>O</strong></th>
        </tr>
    );
}

function CardRow(props) {
    return (
        <tr id="row-{idNum}" className="text-center">
            <td className="b"></td>
            <td className="i"></td>
            <td className="n"></td>
            <td className="g"></td>
            <td className="o"></td>
        </tr>
    );
}

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.cardId = 1; // TODO- this will need to be supplied by the game class once it is created
        this.state = {
            card : Array(25).fill(0),
            marked : Array(25).fill(false),
        };

        this.range = {
            bMin : 1,  bMax : 15,
            iMin : 16, iMax : 30,
            nMin : 31, nMax : 45,
            gMin : 46, gMax : 60,
            oMin : 61, oMax : 75,
        }
    }

    createBody = () => {
       let body = [];
        for (let i=1; i<=5; i++) {
           body.push(<CardRow idNum={i} />);
       }
       return body;
    }

    // generateColumnNumbers(col) {
    //     for (let i=0; i<this.card[col].value.length; i++) {
    //         while(true) { // continuous loop, exit check at end
    //             let canExit = true;
    //             let rand = Math.floor(Math.random() * (this.range[col+"Max"] - this.range[col+"Min"])) + this.range[col+"Min"];
    //             // compare to existing values
    //             for (let j=0; j<i; j++) {
    //                 if (rand === this.card[col].value[j]) {
    //                     canExit = false;
    //                     break; // have to get a new value, so stop comparison early
    //                 }
    //             }

    //             if (canExit){ // exit loop check
    //                 this.card[col].value[i] = rand;
    //                 break; // exit continuous loop
    //             }
    //         }
    //         this.card[col].marked[i] = false;
    //     }
    //     if (col === "n") { // free space in middle of column N
    //         this.card[col].value[2] = 0;
    //         this.card[col].marked[2] = true;
    //     }
    // }

    // generateCardNumbers() {
    //     for (let col in this.card) {
    //         this.generateColumnNumbers(col);
    //     }
    // }

    render() {
        const bodyContent = this.createBody();

        return (
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <CardHeader />
                </thead>
                <tbody id="card-body-{this.cardId}">
                    {bodyContent}  
                </tbody>
            </table>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        // TODO- make cards limited so I don't have a ton of players in the same game
        this.state = {
            cards: [],
        };
    }

    handleNewCardClick() {
        const cards = this.state.cards.slice();
        cards.push({key: cards.length+1});
        this.setState({cards: cards});
    }

    renderBoard(i) {

    }

    render() {
        const cardInfo = this.state.cards;
        const cards = cardInfo.map((card) => {
            return (
                <div>
                    <Card key={card.key} />
                </div>
            );
        });

console.log(cardInfo);
console.log(cards);
        return (    
            <div>{cards}</div>
            <button onClick={() => this.handleNewCardClick()}>Add Card</button>
        );
    }
}

class Player {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

ReactDom.render(
    <Game />,
    document.getElementById('game')
);
