document.addEventListener('DOMContentLoaded' ,()=>{


    //select the elements from html files :
    const grid =document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const scoreDisplay = document.querySelector('#score');
    const startBtn = document.querySelector('#start-button');
    let nextRandom=0

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
    }


    // function : move down the tt:
    timeId = setInterval(moveDown,500)
    //key listnner:

    function control(e){
        if(e.keyCode===37) { moveLeft()}
        else if (e.keyCode===38){ rotate()}
    
        else if (e.keyCode===39){ moveRight()}

        else if (e.keyCode===40){ moveDown()}

    }   

    document.addEventListener('keyup',control)



    function moveDown(){
        unDraw()
        currentPosition+=width
        draw()
        // create a new tt to loop (undraw->draw) on it 
        freeze();
    }

    // stop the tt at the block
    function freeze(){
        //condition : stop when the the dives has class of "taken" (the last row of divs)
        if(current.some(index=> squares[currentPosition +index + width].classList.contains('taken'))){
            current.forEach(index=>squares[currentPosition +index ].classList.add('taken'))
        
          currentPosition = 4
          random = nextRandom
          nextRandom=Math.floor(Math.random()*theTetriminoes.length)
          current = theTetriminoes[random][currentRotation]
          draw()
          displayShape()

        }
        }
        

        function moveLeft(){
            unDraw()
            const isAtLeftEdge=current.some(index=> (currentPosition + index) % width ===0)

            if(!isAtLeftEdge){currentPosition-=1}

            if(current.some(index => squares[currentPosition+index].classList.contains('.taken')))
                {currentPosition+=1}
            
            draw()

        }


        
        function moveRight(){
            unDraw()
            const isAtLeftEdge=current.some(index=> (currentPosition + index) % width ===width-1)

            if(!isAtLeftEdge){currentPosition+=1}

            if(current.some(index => squares[currentPosition+index].classList.contains('.taken')))
                {currentPositio-=1}
            
            draw()

        }


        function rotate(){
            unDraw()
            currentRotation++
            if(currentRotation==current.length){currentRotation=0}   
            current=theTetriminoes[random][currentRotation]
            draw()
        }




        // show the next tt :

        const displaySquares = document.querySelectorAll(".mini-grid div")

        const displayWidth =4
        const displayindex=0
      

        const upNextTetrominoes = [
            [1, displayWidth+1, displayWidth*2+1, 2], //lTetromino
            [0, displayWidth, displayWidth+1, displayWidth*2+1], //zTetromino
            [1, displayWidth, displayWidth+1, displayWidth+2], //tTetromino
            [0, 1, displayWidth, displayWidth+1], //oTetromino
            [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] //iTetromino
          ]


          //function to display the shape:
          function displayShape(){
            displaySquares.forEach(square=>{    
                square.classList.remove('tetrimino')
            })

            upNextTetrominoes[nextRandom].forEach(index=>{displaySquares[displayindex+index].classList.add('tetrimino')})
          }



})

    
    

    
