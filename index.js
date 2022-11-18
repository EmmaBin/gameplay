import characterData from './data.js'
import Character from './Character.js'

/*
CHALLENGE:
1 Set up a function called attack()
2 Wire up the attack button so when pressed, the 
function logs out 'attack button working!'
3 Do this without declaring any new variables
**hint.md for help!!**
*/

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()