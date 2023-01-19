document.addEventListener('DOMContentLoaded' ,()=>{


    //select the elements from html files :
    const grid =document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const scoreDisplay = document.querySelector('#score');
    const startBtn = document.querySelector('#start-button');


    // create the tetriminos shapes :
    const width =10;

    const ltetrimino =[
        [1,width+1,width*2+1,2],
        [width,width+1,width+2,width*2+2],
        [2,width+2,width*2+2,width*2+1],
        [width,width*2,width*2+1,width*2+2]
    ]

    const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
      ]
    
      const tTetromino = [
          [1,width,width+1,width+2],
          [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
      ]
    
      const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
      ]
    
      const iTetromino = [
          [1,width+1,width*2+1,width*3+1],
          [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
      ]


      // the array of tetriminoes :
      const theTetriminoes=[ltetrimino,oTetromino,tTetromino,zTetromino,iTetromino]
      

      let currentPosition = 4
      let currentRotation = 0

      let random = Math.floor(Math.random()*theTetriminoes.length)
      let current = theTetriminoes[random][currentRotation]


      console.log(random)
    //function to draw the tetriminoes 
    function draw(){
        current.forEach(index =>{
            squares[currentPosition + index].classList.add('tetrimino')
        })
    }


    // function to undraw the tetriminoes:
    function unDraw(){
        current.forEach(index =>{
            squares[currentPosition + index].classList.remove('tetrimino')
        })
    
    

    
})