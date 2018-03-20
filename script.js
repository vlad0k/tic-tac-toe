let row = [...document.getElementsByClassName('board__line')]
let info = document.getElementsByClassName('info')[0]

check= [[0,0,0],[0,0,0],[0,0,0]]

cell = new Array()
for(let i = 0; i < 3; i++){
    cell[i] = [...row[i].getElementsByClassName('board__cell')]
}

let startButton = document.getElementsByClassName('button_start')[0]
let restartButton = '<button class="button button_restart"> Начать сначала </button>'
let stroke_count = 0
let stroke_x = '<i class="material-icons material-icons_X">clear</i>'
let stroke_o = '<i class="material-icons material-icons_O">panorama_fish_eye</i>'
let stroke_now

let check_start = () =>{
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      check[i][j] = 0
    }
  }
}

let check_end = () =>{
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      check[i][j] = 1
    }
  }
}

let game = () => {
    stroke_now = stroke_x
    stroke_count = 0
    check_start ()
    info.innerHTML = `Сейчас ход ${stroke_now}`
    startButton.style.display = 'none'
    info.style.display = 'inline-block'
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        cell[i][j].innerHTML = ""
        cell[i][j].onclick = () => {
          if(check[i][j] == 0){
            cell[i][j].innerHTML = stroke_now
            stroke_count += 1
            check[i][j] = 1

            if(stroke_count % 2 != 0){
              stroke_now = stroke_o
              info.innerHTML = 'Сейчас ход '+ stroke_now
            } else {
              stroke_now = stroke_x
              info.innerHTML = 'Сейчас ход '+ stroke_now
            }
            if(stroke_count == 9){
              info.innerHTML = 'Ничья!' + restartButton
              document.getElementsByClassName('button_restart')[0].style.visibility = "visible"
              check_end()
              document.getElementsByClassName('button_restart')[0].onclick = game
            }
            if(cell[i][0].outerText == cell[i][1].outerText && cell[i][0].outerText == cell[i][2].outerText && cell[i][0].outerText != "" && cell[i][1].outerText != "" && cell[i][2].outerText != "" ){
              info.innerHTML = 'Победил ' + cell[i][0].outerHTML + restartButton
              document.getElementsByClassName('button_restart')[0].style.visibility = "visible"
              check_end()
              document.getElementsByClassName('button_restart')[0].onclick = game
            }
            if(cell[0][j].outerText == cell[1][j].outerText && cell[0][j].outerText == cell[2][j].outerText && cell[0][j].outerText != "" && cell[1][j].outerText != "" && cell[2][j].outerText != ""){
              info.innerHTML = 'Победил ' + cell[0][j].outerHTML + restartButton
              document.getElementsByClassName('button_restart')[0].style.visibility = "visible"
              check_end()
              document.getElementsByClassName('button_restart')[0].onclick = game
            }
            if(cell[0][0].outerText == cell[1][1].outerText && cell[0][0].outerText == cell[2][2].outerText && cell[1][1].outerText != "" && cell[2][2].outerText != "" && cell[0][0].outerText != ""){
              info.innerHTML = 'Победил ' + cell[0][0].outerHTML + restartButton
              document.getElementsByClassName('button_restart')[0].style.visibility = "visible"
              check_end()
              document.getElementsByClassName('button_restart')[0].onclick = game
            }
            if(cell[0][2].outerText == cell[1][1].outerText != ""  && cell[0][2].outerText == cell[2][0].outerText && cell[0][2].outerText != "" && cell[1][1].outerText != "" && cell[2][0].outerText != ""){
              info.innerHTML = 'Победил ' + cell[2][0].outerHTML + restartButton
              document.getElementsByClassName('button_restart')[0].style.visibility = "visible"
              check_end()
              document.getElementsByClassName('button_restart')[0].onclick = game
            }
          }
        }
      }

    }

}

startButton.onclick = game
