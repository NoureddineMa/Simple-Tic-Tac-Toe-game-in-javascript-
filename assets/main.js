        let form = document.getElementById('form');
        let submit = document.getElementById('sub');
        let title = document.getElementById('PlayerC');
        let squares = [];
        let turn = 'X';
        let ScoreX = 0;
        let ScoreO = 0;

        // Set data to localtstorage : 
        form.addEventListener("submit", function(e) {
        e.preventDefault();
        // Get HTML elements:
        
        let player_1 = document.getElementById('player1').value;
        let player_2 = document.getElementById('player2').value;
        // Storing Data form:
        localStorage.setItem('FirstPlayer',player_1);
        localStorage.setItem('SecondPlayer',player_2); 
        // TEST : 
        ScorePlayers();
        title.innerText = `${player_1} Play first`;
        GetIdSquare();
        })
    
        
        //   get id Square:
        function GetIdSquare(id){

        // Get First Player and second one: 
        let GetSecondPlayer = localStorage.getItem('SecondPlayer');
        let GetFirstPlayer =  localStorage.getItem('FirstPlayer');
        // Get Title to write who play first 
        let Pl2 = document.getElementById('PlayerC');

        let element = document.getElementById(id)
        if(turn === 'X' && element.innerHTML == '' )
        {
        element.innerHTML = 'X';
        turn = 'O';
        Pl2.innerText =  `Turn  : ${GetSecondPlayer}`;
        }
        else if (turn === 'O' && element.innerHTML == '' )
        {
        element.innerHTML = 'O';
        element.style.color =  'white';
        turn = 'X'
        Pl2.innerText =  `Turn  : ${GetFirstPlayer}`;
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

        } else {
            Draw();
        }
        }
        // function coloring Winning Squares:
        function Result(num1,num2,num3){
            // take elements HTML: 
            document.getElementById('item'+num1).style.background = '#25316D';
            document.getElementById('item'+num2).style.background = '#25316D';
            document.getElementById('item'+num3).style.background = '#25316D';
        }
        // Row 1,2,3 :who win?(X OR O):
        
        function winner1(){
            let GetSecondPlayer = localStorage.getItem('SecondPlayer');
            let GetFirstPlayer =  localStorage.getItem('FirstPlayer'); 
            if(squares[1] == 'X' && squares[2] == 'X' && squares[3] == 'X'){
                DeclareWinner.innerHTML = `<h1 style="padding: 20px 16px;background-color:#D6CDA4";padding:5px 10px;"> ${GetFirstPlayer} Win The Game </h1>`;
                document.getElementById('P1').innerText = `SCORE DE ${GetFirstPlayer} :  ${++ScoreX}`;
                title.innerText = "X O GAME"
            } else if (squares[1] == 'O' && squares[2] == 'O' && squares[3] == 'O') {
                document.getElementById('P2').innerText = `SCORE DE ${GetSecondPlayer} :  ${++ScoreO}`;
                DeclareWinner.innerHTML = `<h1 style="padding: 20px 16px;background-color:#D6CDA4";padding:5px 10px;"> ${GetSecondPlayer} Win The Game </h1>`;
                title.innerText = "X O GAME"
            }
            Result(1,2,3);
            refresh();
            replay();
        }
        // Row 4,5,6:
        function winner2(){
            let GetSecondPlayer = localStorage.getItem('SecondPlayer');
            let GetFirstPlayer =  localStorage.getItem('FirstPlayer');
            if(squares[4] == 'X' && squares[5] == 'X' && squares[6] == 'X'){
                DeclareWinner.innerHTML = `<h1 style="padding: 20px 16px;background-color:#D6CDA4";padding:5px 10px;"> ${GetFirstPlayer} Win The Game </h1>`
                document.getElementById('P1').innerText = `SCORE DE ${GetFirstPlayer} :  ${++ScoreX}`; 
                title.innerText = "X O GAME"
            } else if (squares[4] == 'O' && squares[5] == 'O' && squares[6] == 'O') {
                document.getElementById('P2').innerText = `SCORE DE ${GetSecondPlayer} :  ${++ScoreO}`;
                DeclareWinner.innerHTML = `<h1 style="padding: 20px 16px;background-color:#D6CDA4";padding:5px 10px;"> ${GetSecondPlayer} Win The Game </h1>`;
                title.innerText = "X O GAME"
            }
            Result(4,5,6);
            refresh();
            replay();
        }
        // Row 7,8,9:
        function winner3(){
            let GetSecondPlayer = localStorage.getItem('SecondPlayer');
            let GetFirstPlayer =  localStorage.getItem('FirstPlayer');
            if(squares[7] == 'X' && squares[8] == 'X' && squares[9] == 'X'){
                DeclareWinner.innerHTML = `<h1 style="padding: 20px 16px;background-color:#D6CDA4";padding:5px 10px;"> ${GetFirstPlayer} Win The Game </h1>` 
                document.getElementById('P1').innerText = `SCORE DE ${GetFirstPlayer} :  ${++ScoreX}`;
                title.innerText = "X O GAME"
            }  else if (squares[7] == 'O' && squares[8] == 'O' && squares[9] == 'O') {
                document.getElementById('P2').innerText = `SCORE DE ${GetSecondPlayer} :  ${++ScoreO}`;
                DeclareWinner.innerHTML = `<h1 style="padding: 20px 16px;background-color:#D6CDA4";padding:5px 10px;"> ${GetSecondPlayer} Win The Game </h1>`;
                title.innerText = "X O GAME"
            }
            Result(7,8,9);
            refresh();
            replay();
        }
        // row 1,4,7:
        function winner4(){
            let GetSecondPlayer = localStorage.getItem('SecondPlayer');
            let GetFirstPlayer =  localStorage.getItem('FirstPlayer');
            if(squares[1] == 'X' && squares[4] == 'X' && squares[7] == 'X'){
                DeclareWinner.innerHTML = `<h1 style="padding: 20px 16px;background-color:#D6CDA4";padding:5px 10px;"> ${GetFirstPlayer} Win The Game </h1>` 
                document.getElementById('P1').innerText = `SCORE DE ${GetFirstPlayer} :  ${++ScoreX}`;
                title.innerText = "X O GAME"
            }  else if (squares[1] == 'O' && squares[4] == 'O' && squares[7] == 'O') {
                DeclareWinner.innerHTML = `<h1 style="padding: 20px 16px;background-color:#D6CDA4";padding:5px 10px;"> ${GetSecondPlayer} Win The Game </h1>`;
                document.getElementById('P2').innerText = `SCORE DE ${GetSecondPlayer} :  ${++ScoreO}`;
                title.innerText = "X O GAME"
            }
            Result(1,4,7);
            refresh();
            replay();
        }
        // row 2,5,8:
        function winner5(){
            let GetSecondPlayer = localStorage.getItem('SecondPlayer');
            let GetFirstPlayer =  localStorage.getItem('FirstPlayer');
            if(squares[2] == 'X' && squares[5] == 'X' && squares[8] == 'X'){
                DeclareWinner.innerHTML = `<h1 style="padding: 20px 16px;background-color:#D6CDA4";padding:5px 10px;"> ${GetFirstPlayer} Win The Game </h1>` 
                document.getElementById('P1').innerText = `SCORE DE ${GetFirstPlayer} :  ${++ScoreX}`;
                title.innerText = "X O GAME"
            }  else if (squares[2] == 'O' && squares[5] == 'O' && squares[8] == 'O') {
                DeclareWinner.innerHTML = `<h1 style="padding: 20px 16px;background-color:#D6CDA4";padding:5px 10px;"> ${GetSecondPlayer} Win The Game </h1>`;
                document.getElementById('P2').innerText = `SCORE DE ${GetSecondPlayer} :  ${++ScoreO}`;
                title.innerText = "X O GAME"
            }
            Result(2,5,8);
            refresh();
            replay();
        }
        // row 3,6,9:
        function winner6(){
            let GetSecondPlayer = localStorage.getItem('SecondPlayer');
            let GetFirstPlayer =  localStorage.getItem('FirstPlayer');
            if(squares[3] == 'X' && squares[6] == 'X' && squares[9] == 'X'){
                DeclareWinner.innerHTML = `<h1 style="padding: 20px 16px;background-color:#D6CDA4";padding:5px 10px;"> ${GetFirstPlayer} Win The Game </h1>`
                document.getElementById('P1').innerText = `SCORE DE ${GetFirstPlayer} :  ${++ScoreX}`; 
                title.innerText = "X O GAME"
            } else if (squares[3] == 'O' && squares[6] == 'O' && squares[9] == 'O') {
                DeclareWinner.innerHTML = `<h1 style="padding: 20px 16px;background-color:#D6CDA4";padding:5px 10px;"> ${GetSecondPlayer} Win The Game </h1>`;
                document.getElementById('P2').innerText = `SCORE DE ${GetSecondPlayer} :  ${++ScoreO}`;
                title.innerText = "X O GAME"
            }
            Result(3,6,9);
            refresh();
            replay();
        }
        // row 1,5,9:
        function winner7(){
            let GetSecondPlayer = localStorage.getItem('SecondPlayer');
            let GetFirstPlayer =  localStorage.getItem('FirstPlayer');
            if(squares[1] == 'X' && squares[5] == 'X' && squares[9] == 'X'){
                DeclareWinner.innerHTML = `<h1 style="padding: 20px 16px;background-color:#D6CDA4";padding:5px 10px;"> ${GetFirstPlayer} Win The Game </h1>` 
                document.getElementById('P1').innerText = `SCORE DE ${GetFirstPlayer} :  ${++ScoreX}`;
                title.innerText = "X O GAME"
            }  else if (squares[1] == 'O' && squares[5] == 'O' && squares[9] == 'O') {
                DeclareWinner.innerHTML = `<h1 style="padding: 20px 16px;background-color:#D6CDA4";padding:5px 10px;"> ${GetSecondPlayer} Win The Game </h1>`;
                document.getElementById('P2').innerText = `SCORE DE ${GetSecondPlayer} :  ${++ScoreO}`;
                title.innerText = "X O GAME"
            }
            Result(1,5,9);
            refresh();
            replay();
        }

        function winner8(){
            let GetSecondPlayer = localStorage.getItem('SecondPlayer');
            let GetFirstPlayer =  localStorage.getItem('FirstPlayer');
            if(squares[3] == 'X' && squares[5] == 'X' && squares[7] == 'X'){
                DeclareWinner.innerHTML = `<h1 style="padding: 20px 16px;background-color:#D6CDA4";padding:5px 10px;"> ${GetFirstPlayer} Win The Game </h1>` 
                document.getElementById('P1').innerText = `SCORE DE ${GetFirstPlayer} :  ${++ScoreX}`;
                title.innerText = "X O GAME"
            }  else if (squares[3] == 'O' && squares[5] == 'O' && squares[7] == 'O') {
                DeclareWinner.innerHTML = `<h1 style="padding: 20px 16px;background-color:#D6CDA4";padding:5px 10px;"> ${GetSecondPlayer} Win The Game </h1>`;
                document.getElementById('P2').innerText = `SCORE DE ${GetSecondPlayer} :  ${++ScoreO}`;
                title.innerText = "X O GAME"
            }
            Result(3,5,7);
            refresh();
            replay();
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

        // Get button Rejouer : 
        function replay(){
         let rejouer = document.getElementById('rejouer');
         rejouer.innerHTML = '<input value="Rejouer" type="submit" id="rejouer" class="rejouer" onclick="reset();">;'

        }
        // affichier ScoreBoard just When the game start:
        function ScorePlayers(){

        let ScoreB =  document.getElementById('visible');
        ScoreB.style.visibility = "visible";
        // take Values from input 
        let pm1 = localStorage.getItem('FirstPlayer');
        let pm2 = localStorage.getItem('SecondPlayer');
        let p1 = document.getElementById('P1');
        let p2 = document.getElementById('P2');
         p1.innerText = `SCORE DE  ${pm1} :`;
         p2.innerText = `SCORE DE  ${pm2} :`;
        }

        // In case Draw:
        function Draw(){
            if(squares.every(e => e != "")){
                if(squares.value != 'X' || 'O' ){
                DeclareWinner.innerHTML = '<h1 style="padding: 20px 16px;background-color:#D6CDA4";padding:5px 10px;"> DRAW </h1>';
                refresh();
                }
            }
        } 
        // Reset the game :
        function reset(){
            for (let i= 1; i<10; i++){
                document.getElementById('item' + i).innerHTML = "";
                document.getElementById('item' + i).style.backgroundColor = "#FFDE00";
                    }
                    let score = document.getElementById('winner');
                    score.textContent = "";
        }
        



       
       

        


        
        











