import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'
/*
CHALLENGE
1. In the Character constructor, create a new 
property called "diceArray". --这个property是
属于整个class的，所以用this
2. Set diceArray equal to whatever is returned
by the getDicePlaceholderHtml function (think 
what two things you need to do to make this work!!).
一个是记得import, 一个是记得argument this.dicecount,  this is from Object.assign instance
的其中一个key value pair,

*/

function Character(data) {
    Object.assign(this, data)
     this.diceArray = getDicePlaceholderHtml(this.diceCount)
     
     this.getDiceHtml = function(diceCount) {
        return getDiceRollArray(diceCount).map(function(num){ 
            return  `<div class="dice">${num}</div>`
        }).join('')
    }

    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount,diceArray } = this;      
        let diceHtml = this.getDiceHtml(diceCount);
       
        
           return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${diceArray}
                   
                </div>
            </div>`
    }  
}

export default Character