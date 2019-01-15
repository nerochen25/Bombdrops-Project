// function playerNameInput() {
//     document.getElementById('player_name')
// }
const playerName = document.getElementById('player_name').value;


class Player {
    constructor(options) {
        this.name = options.name
        this.score = options.score
    }
}