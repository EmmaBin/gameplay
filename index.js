import characterData from './data.js'
import Character from './Character.js'
const attackBtn = document.getElementById('attack-button')

function attack(){
    render()

}
function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}

attackBtn.addEventListener('click', attack)
const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()
