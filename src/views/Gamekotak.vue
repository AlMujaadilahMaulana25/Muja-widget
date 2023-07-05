<template>
    <div>
      <h1>Game Test Aim FPS</h1>
      <div id="game-container">
        <div v-for="box in boxes" :key="box.id" :style="{ top: box.y + 'px', left: box.x + 'px' }" class="box" @click="boxClicked(box)"></div>
      </div>
      <button @click="startGame" :disabled="gameStarted">Mulai Game</button>
      <p>Skor: {{ score }}</p>
      <p>Sisa Waktu: {{ timeLeft }} detik</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        boxes: [],
        timer: null,
        gameStarted: false,
        score: 0,
        totalTime: 60, // Durasi total bermain dalam detik
        timeLeft: 0 // Waktu yang tersisa dalam detik
      };
    },
    methods: {
      startGame() {
        this.score = 0;
        this.gameStarted = true;
        this.generateBoxes();
        this.timeLeft = this.totalTime; // Set waktu yang tersisa ke durasi total bermain
        this.timer = setInterval(() => {
          this.timeLeft--; // Mengurangi waktu yang tersisa setiap detik
          if (this.timeLeft === 0) {
            clearInterval(this.timer); // Menghentikan interval saat waktu habis
            this.gameStarted = false;
            this.boxes = [];
            alert('Waktu habis! Skor kamu: ' + this.score);
          }
        }, 1000);
      },
      generateBoxes() {
        setInterval(() => {
          const box = {
            id: Math.random().toString(36).substring(2, 15),
            x: Math.floor(Math.random() * 350),
            y: Math.floor(Math.random() * 350)
          };
          this.boxes.push(box);
        }, 1000);
      },
      boxClicked(clickedBox) {
        if (!this.gameStarted) return;
        const boxIndex = this.boxes.indexOf(clickedBox);
        if (boxIndex !== -1) {
          this.boxes.splice(boxIndex, 1);
          this.score++;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  #game-container {
    width: 400px;
    height: 400px;
    border: 1px solid black;
    position: relative;
    margin: 0 auto;
    background: rgb(34,193,195);
    background: linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(240,45,253,1) 100%);
  }
  
  .box {
    width: 50px;
    height: 50px;
    background-color: blue;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s;
  }
  
  .box:hover {
    background-color: darkblue;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }
  
  p {
    margin-top: 10px;
    font-size: 18px;
  }

  </style>
  