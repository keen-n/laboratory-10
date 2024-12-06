const images = ['🍒', '🍊', '🍉', '🍋', '🍓']; 

    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const leverBtn = document.getElementById('lever-btn');
    const usernameInput = document.getElementById('username');
    const slot1 = document.getElementById('slot1');
    const slot2 = document.getElementById('slot2');
    const slot3 = document.getElementById('slot3');
    const resultMessage = document.getElementById('result-message');
    const overlay = document.querySelector('.overlay');
    const gameContainer = document.querySelector('.game-container');

    let username = '';

    startBtn.addEventListener('click', () => {
      username = usernameInput.value.trim();
      if (username) {
        document.getElementById('username-display').textContent = username;
        overlay.style.display = 'none';
        gameContainer.style.display = 'flex';
      } else {
        alert('Будь ласка, введіть імя!');
      }
    });

    leverBtn.addEventListener('click', playGame);

    restartBtn.addEventListener('click', () => {
      resultMessage.textContent = '';
      gameContainer.style.display = 'none';
      overlay.style.display = 'flex';
      usernameInput.value = '';
    });

    function generateRandomImage() {
      return images[Math.floor(Math.random() * images.length)];
    }

    function playGame() {
      let iteration = 0;
      const maxIterations = 10;

      resultMessage.textContent = '';

      const interval = setInterval(() => {
        slot1.textContent = generateRandomImage();
        slot2.textContent = generateRandomImage();
        slot3.textContent = generateRandomImage();

        iteration++;
        if (iteration >= maxIterations) {
          clearInterval(interval);
          checkWin();
        }
      }, 150); 
    }

    function checkWin() {
      if (slot1.textContent === slot2.textContent && slot2.textContent === slot3.textContent) {
        resultMessage.textContent = `${username}, ви виграли!`;
        resultMessage.style.color = "lime";
        resultMessage.style.textShadow = "0 0 10px lime";
      } else {
        resultMessage.textContent = `${username}, ви програли!`;
        resultMessage.style.color = "red";
        resultMessage.style.textShadow = "0 0 10px red";
      }
    }