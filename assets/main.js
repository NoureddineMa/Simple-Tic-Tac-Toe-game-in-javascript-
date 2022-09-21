        let form = document.getElementById('form');
        let submit = document.getElementById('sub');
        let title = document.getElementById('PlayerC');
        let squares = [];
        let turn = 'X';
        // Get HTML elements:

        let player_1 = document.getElementById('player1').value;
        let player_2 = document.getElementById('player2').value;
        
        // Set data to localtstorage : 
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
        let resultPlayer = RandomPlay[Math.floor(Math.random()*RandomPlay.length)];
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
        title.innerHTML =  ' Turn : O';
        }
        else if (turn === 'O' && element.innerHTML == '' )
        {
        element.innerHTML = 'O';
        element.style.color =  'red';
        turn = 'X'
        title.innerHTML =  ' Turn : X';
        }
        WhoWin();
        }
        // check Who Win: 
        // take element for HTML : 
        let DeclareWinner = document.getElementById('winner');

        function WhoWin() {
        for (let i= 1; i<10; i++)
            {
                squares[i] =  document.getElementById('item' + i).innerHTML;
            }
            if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
                winner1();
            }
            else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != ''){
                winner2();
            }
            else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != ''){
                winner3();
            }
            else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''){
                winner4();
            }
            else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != ''){
                winner5();
            }
            else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != ''){
                winner6();
            }
            else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != ''){
                winner7();
            }
            else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != ''){
                winner8();
        }
        }
        // function coloring Winning Squares:
        function Result(num1,num2,num3){
            // take elements HTML: 
            document.getElementById('item'+num1).style.background = '#000';
            document.getElementById('item'+num2).style.background = '#000';
            document.getElementById('item'+num3).style.background = '#000';
        }
        // Row 1,2,3 :who win?(X OR O):
        function winner1(){
            if(squares[1] == 'X' && squares[2] == 'X' && squares[3] == 'X'){
                DeclareWinner.innerHTML = '<h1 style="padding: 20px 16px;background-color:black";padding:5px 10px;"> X Win The Game </h1>' 
                title.innerText = "X O GAME"
            } else if (squares[1] == 'O' && squares[2] == 'O' && squares[3] == 'O') {
                DeclareWinner.innerHTML = '<h1 style="padding: 20px 16px;background-color:black";padding:5px 10px;"> O Win The Game </h1>';
                title.innerText = "X O GAME"
            }
            Result(1,2,3);
            refresh();
        }
        // Row 4,5,6:
        function winner2(){
            if(squares[4] == 'X' && squares[5] == 'X' && squares[6] == 'X'){
                DeclareWinner.innerHTML = '<h1 style="padding: 20px 16px;background-color:black";padding:5px 10px;"> X Win The Game </h1>' 
                title.innerText = "X O GAME"
            } else if (squares[4] == 'O' && squares[5] == 'O' && squares[6] == 'O') {
                DeclareWinner.innerHTML = '<h1 style="padding: 20px 16px;background-color:black";padding:5px 10px;"> O Win The Game </h1>';
                title.innerText = "X O GAME"
            }
            Result(4,5,6);
            refresh();
        }
        // Row 7,8,9:
        function winner3(){
            if(squares[7] == 'X' && squares[8] == 'X' && squares[9] == 'X'){
                DeclareWinner.innerHTML = '<h1 style="padding: 20px 16px;background-color:black";padding:5px 10px;"> X Win The Game </h1>' 
                title.innerText = "X O GAME"
            }  else if (squares[7] == 'O' && squares[8] == 'O' && squares[9] == 'O') {
                DeclareWinner.innerHTML = '<h1 style="padding: 20px 16px;background-color:black";padding:5px 10px;"> O Win The Game </h1>';
                title.innerText = "X O GAME"
            }
            Result(7,8,9);
            refresh();
        }
        // row 1,4,7:
        function winner4(){
            if(squares[1] == 'X' && squares[4] == 'X' && squares[7] == 'X'){
                DeclareWinner.innerHTML = '<h1 style="padding: 20px 16px;background-color:black";padding:5px 10px;"> X Win The Game </h1>' 
                title.innerText = "X O GAME"
            }  else if (squares[1] == 'O' && squares[4] == 'O' && squares[7] == 'O') {
                DeclareWinner.innerHTML = '<h1 style="padding: 20px 16px;background-color:black";padding:5px 10px;"> O Win The Game </h1>';
                title.innerText = "X O GAME"
            }
            Result(1,4,7);
            refresh();
        }
        // row 2,5,8:
        function winner5(){
            if(squares[2] == 'X' && squares[5] == 'X' && squares[8] == 'X'){
                DeclareWinner.innerHTML = '<h1 style="padding: 20px 16px;background-color:black";padding:5px 10px;"> X Win The Game </h1>' 
                title.innerText = "X O GAME"
            }  else if (squares[2] == 'O' && squares[5] == 'O' && squares[8] == 'O') {
                DeclareWinner.innerHTML = '<h1 style="padding: 20px 16px;background-color:black";padding:5px 10px;"> O Win The Game </h1>';
                title.innerText = "X O GAME"
            }
            Result(2,5,8);
            refresh();
        }
        // row 3,6,9:
        function winner6(){
            if(squares[3] == 'X' && squares[6] == 'X' && squares[9] == 'X'){
                DeclareWinner.innerHTML = '<h1 style="padding: 20px 16px;background-color:black";padding:5px 10px;"> X Win The Game </h1>' 
                title.innerText = "X O GAME"
            } else if (squares[3] == 'O' && squares[6] == 'O' && squares[9] == 'O') {
                DeclareWinner.innerHTML = '<h1 style="padding: 20px 16px;background-color:black";padding:5px 10px;"> O Win The Game </h1>' 
                title.innerText = "X O GAME"
            }
            Result(3,6,9);
            refresh();
        }
        // row 1,5,9:
        function winner7(){
            if(squares[1] == 'X' && squares[5] == 'X' && squares[9] == 'X'){
                DeclareWinner.innerHTML = '<h1 style="padding: 20px 16px;background-color:black";padding:5px 10px;"> X Win The Game </h1>' 
                title.innerText = "X O GAME"
            }  else if (squares[1] == 'O' && squares[5] == 'O' && squares[9] == 'O') {
                DeclareWinner.innerHTML = '<h1 style="padding: 20px 16px;background-color:black";padding:5px 10px;"> O Win The Game </h1>';
                title.innerText = "X O GAME"
            }
            Result(1,5,9);
            refresh();
        }

        function winner8(){
            if(squares[3] == 'X' && squares[5] == 'X' && squares[7] == 'X'){
                DeclareWinner.innerHTML = '<h1 style="padding: 20px 16px;background-color:black";padding:5px 10px;"> X Win The Game </h1>' 
                title.innerText = "X O GAME"
            }  else if (squares[3] == 'O' && squares[5] == 'O' && squares[7] == 'O') {
                DeclareWinner.innerText = '<h1 style="padding: 20px 16px;background-color:black";padding:5px 10px;"> O Win The Game </h1>';
                title.innerText = "X O GAME"
            }
            Result(3,5,7);
            refresh();
        }

        // display block for the game:
        // get Div 
        let game = document.querySelector('.game');
        function AddClass(){
            game.style.display =  "block";
            form.style.display = "none";  
        }

        // get button refresh:
        function refresh() {
        let refresh = document.getElementById('refresh');
        refresh.innerHTML = '<input value="Refresh" type="submit" id="refresh" class="refresh" onclick="window.location.reload();">'
        }



       
       

        


        
        











