<template>
    <div class="stopwatch-widget">
      <h2>Stopwatch</h2>
      <div class="timer-container">
        <p>{{ formatTime }}</p>
      </div>
      <div class="button-container">
        <button @click="startStopwatch" :disabled="isRunning">Start</button>
        <button @click="stopStopwatch" :disabled="!isRunning">Stop</button>
        <button @click="resetStopwatch">Reset</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isRunning: false,
        startTime: null,
        elapsedTime: 0,
      };
    },
    computed: {
      formatTime() {
        const milliseconds = this.elapsedTime % 1000;
        const seconds = Math.floor(this.elapsedTime / 1000) % 60;
        const minutes = Math.floor(this.elapsedTime / 60000) % 60;
        const hours = Math.floor(this.elapsedTime / 3600000);
  
        return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
      },
    },
    methods: {
      startStopwatch() {
        if (!this.isRunning) {
          this.isRunning = true;
          this.startTime = Date.now();
  
          this.timerInterval = setInterval(() => {
            this.elapsedTime = Date.now() - this.startTime;
          }, 10);
        }
      },
      stopStopwatch() {
        if (this.isRunning) {
          this.isRunning = false;
          clearInterval(this.timerInterval);
        }
      },
      resetStopwatch() {
        this.isRunning = false;
        clearInterval(this.timerInterval);
        this.elapsedTime = 0;
      },
    },
  };
  </script>
  
  <style scoped>
  .stopwatch-widget {
    border-radius: 8px;
    background: rgb(34,193,195);
    background: linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(240,45,253,1) 100%);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    padding: 24px;
    text-align: center;
  }
  
  .stopwatch-widget h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 16px;
  }
  
  .timer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
  }
  
  .timer-container p {
    color: #333;
    font-size: 48px;
    font-weight: bold;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
  
  .stopwatch-widget button {
    padding: 12px 24px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .stopwatch-widget button:hover {
    background-color: #0056b3;
  }
  
  .stopwatch-widget button:disabled {
    background-color: #ccc;
    color: #999;
    cursor: not-allowed;
  }

  </style>
  