export default class GameView {
    constructor(){
   
    }

    updateBoard(game){
        
        this.updateTurn(game)
        this.won(game)

        // console.log(game.board)
        for(let i = 0; i < game.board.length; i ++){
            const tile = document.querySelector(`.board-tile[data-index ='${i}']`)
        // console.log(tile)

        tile.textContent = game.board[i]
        
        }


    }

    updateTurn(game){
        let playerX = document.querySelector(".playerx")
        let playerO = document.querySelector(".playero")
        for(let i = 0; i < game.board.length; i ++){
            const tile = document.querySelector(`.board-tile[data-index ='${i}']`)

            if (game.turn == "X") {
                playerX.classList.add("active")
                playerO.classList.remove("active")
                tile.style.color = "hotpink";
            } else {
                playerX.classList.remove("active")
                playerO.classList.add("active")
                tile.style.color = "rgb(59, 144, 201)";
            }
        }
    
    }

    won(game){
        let winning = game.winning()
        if (winning){
            winning.forEach(element => {
                const tile = document.querySelector(`.board-tile[data-index ='${element}']`)
                tile.classList.add("won")
            });
            // tile.classList.remove("won")
        } 
    }
}