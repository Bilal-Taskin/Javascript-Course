let score =  JSON.parse(localStorage.getItem('score')) || {
      Tie:0,
      wins:0,
      Lose:0  
      }; // || default değer vermemizi sağladı. Eğer || nun solu yanlış ise sağına yönlendiriyor
    
      
     
      console.log( JSON.parse(localStorage.getItem('score')));
      console.log(localStorage.getItem('message'));

     
  
    //  if(!score/* parametrenin anlamı bu: score === null çünkü nu falsy bir değer*/){
    //   score={
    //   Tie:0,
    //   wins:0,
    //   Lose:0  
    //   }
    //  }

      function PlayGame(PlayerMove) {
        const computerMOve = computerMoveFunction();
        console.log(computerMoveFunction());
        let result = "";

        if (PlayerMove === "Scissors") {
          if (computerMOve === "Rock") result = "Lose";
          else if (computerMOve == "Paper") result = "Win";
          else if (computerMOve == "Scissors") result = "Tie";
        } 
        
        else if (PlayerMove === "Rock") {
          if (computerMOve === "Rock") result = "Tie";
          else if (computerMOve == "Paper") result = "Lose";
          else if (computerMOve == "Scissors") result = "Win";
        } 
        
        else if (PlayerMove === "Paper") {
          if (computerMOve === "Rock") result = "Win";
          else if (computerMOve == "Paper") result = "Tie";
          else if (computerMOve == "Scissors") result = "Lose";
        }

        if(result==='Win'){
          score.wins +=1;
        }
        else if(result ==='Tie'){
          score.Tie += 1
        }
        else if(result === 'Lose'){
          score.Lose += 1;
        }

        localStorage.setItem('message', 'hello'); //ilk parametre veriye hangi isimle erişeceğimizi, ikinvi parametre ise localde tutmak istediğimiz değeri belirler. Local storage only support strings. 

        localStorage.setItem('score', JSON.stringify(score));

           updateScore();

           document.querySelector('.js-result').
           innerHTML = result;

          document.querySelector('.js-moves').
          innerHTML = `You<img src="images/${PlayerMove}-emoji.png" class="move-icon"><img src="images/${computerMOve}-emoji.png" class="move-icon">Computer`;

        
      }


      function updateScore(){
             document.querySelector('.js-score')
                .innerHTML=`Wins:${score.wins}, Loses:${score.Lose},  Tie:${score.Tie}`;
      }

      function computerMoveFunction() {
        const randomNumber = Math.random();

        let computerMove = "";

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = "Rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = "Paper";
        } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
          computerMove = "Scissors";
        }

        return computerMove;
      }