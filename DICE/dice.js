let round = 1;
    let player1Score = 0;
    let player2Score = 0;
    let gameEnded = false;

    function rollDice() {
      return Math.floor(Math.random() * 6) + 1;
    }

    function getDiceEmoji(num) {
      const diceFaces = ['⚀','⚁','⚂','⚃','⚄','⚅'];
      return diceFaces[num - 1];
    }

    function playRound() {
      if (gameEnded || round > 6) return;

      const dice1 = document.getElementById('dice1');
      const dice2 = document.getElementById('dice2');
      const log = document.getElementById('log');

      // Start roll animation
      dice1.classList.add('rolling');
      dice2.classList.add('rolling');

      setTimeout(() => {
        // Stop animation
        dice1.classList.remove('rolling');
        dice2.classList.remove('rolling');

        // Roll results
        const roll1 = rollDice();
        const roll2 = rollDice();

        dice1.innerHTML = getDiceEmoji(roll1);
        dice2.innerHTML = getDiceEmoji(roll2);

        player1Score += roll1;
        player2Score += roll2;

        let message = `<strong>Round ${round}:</strong> Player 1 rolled ${roll1}, Player 2 rolled ${roll2}<br>`;

        if (roll1 === roll2) {
          message += `🎯 Dice matched! Game ends early.<br>`;
          gameEnded = true;
        }

        round++;

        if (gameEnded || round > 6) {
          message += `<br><strong>Final Scores:</strong><br>`;
          message += `Player 1: ${player1Score}<br>`;
          message += `Player 2: ${player2Score}<br>`;

          if (player1Score > player2Score) {
            message += `<h3>🏆 Player 1 Wins!</h3>`;
          } else if (player2Score > player1Score) {
            message += `<h3>🏆 Player 2 Wins!</h3>`;
          } else {
            message += `<h3>🤝 It's a Draw!</h3>`;
          }
        }

        log.innerHTML += message + '<hr>';
      }, 600);
    }