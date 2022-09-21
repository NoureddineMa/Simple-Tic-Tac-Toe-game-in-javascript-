        let form = document.getElementById('form');
        let submit = document.getElementById('sub');
        let title = document.getElementById('PlayerC');
        let squares = [];
        let turn = 'X';

        // get data to localtstorage : 
        form.addEventListener("submit", function(e) {
        e.preventDefault();
        // Get HTML elements:
        let player_1 = document.getElementById('player1').value;
        let player_2 = document.getElementById('player2').value;
        // Storing Data form:
        let p1 = localStorage.setItem('FirstPlayer',player_1);
        let p2 = localStorage.setItem('SecondPlayer',player_2); 
        // Get Data :
        let GetFirstPlayer =  localStorage.getItem('FirstPlayer');
        let GetSecondPlayer = localStorage.getItem('SecondPlayer');

        // Choose Player randomly : 
        let RandomPlay = [GetFirstPlayer,GetSecondPlayer];
        resultPlayer = RandomPlay[Math.floor(Math.random()*RandomPlay.length)];

        // Who play first: 
        if( GetFirstPlayer == '' && GetSecondPlayer == '' )
        {
            title.innerText = 'X O GAME'
        } else {
            title.innerText =  resultPlayer.toUpperCase() + "  PLAY FIRST" ;
        }
        })
    
        //   get id Square:
        function GetIdSquare(id){

            let element = document.getElementById(id)
            if(turn === 'X' && element.innerHTML == '' )
            {
                element.innerHTML = 'X';
                turn = 'O';
                title.innerHTML = 'O';
            }
            else if (turn === 'O' && element.innerHTML == '' )
            {
                element.innerHTML = 'O';
                element.style.color =  'red';
                turn = 'X'
                title.innerHTML = 'X';
            }
            WhoWin();
        }

        // check Who Win: 
            function WhoWin() {
            for (let i= 1; i<10; i++)
            {
                squares[i] =  document.getElementById('item' + i).innerHTML;
            }
            if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
                Result(1,2,3);
            }
            else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != ''){
                Result(4,5,6);
            }
            else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != ''){
                Result(7,8,9);
            }
            else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''){
                Result(1,4,7);
            }
            else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != ''){
                Result(2,5,8);
            }
            else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != ''){
                Result(3,6,9);
            }
            else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != ''){
                Result(1,5,9);
            }
            else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != ''){
                Result(3,5,7);
            }
        }
        
        function Result(num1,num2,num3){
            document.getElementById('item'+num1).style.background = '#000';
            document.getElementById('item'+num2).style.background = '#000';
            document.getElementById('item'+num3).style.background = '#000';
        }



        
        











