<template>
    <div class="photo-widget">
      <h2>{{ title }}</h2>
      <div class="photo-container">
        <img :src="photoUrl" :alt="title" />
      </div>
      <button @click="getRandomPhoto">Load New Photo</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        photoUrl: '',
      };
    },
    mounted() {
      this.getRandomPhoto();
    },
    methods: {
      async getRandomPhoto() {
        try {
          const apiKey = '38037020-2c48722c03be8437a05b588e6';
          const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&orientation=horizontal`;
  
          const response = await fetch(apiUrl);
          const data = await response.json();
  
          const randomIndex = Math.floor(Math.random() * data.hits.length);
          const randomPhoto = data.hits[randomIndex];
  
          this.title = randomPhoto.tags;
          this.photoUrl = randomPhoto.webformatURL;
        } catch (error) {
          console.error('Error fetching random photo:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .photo-widget {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(34,193,195);
    background: linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(240,45,253,1) 100%);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .photo-widget h2 {
    margin-bottom: 10px;
    font-size: 20px;
    color: #333;
  }
  
  .photo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin-top: 10px;
  }
  
  .photo-container img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
  }
  
  .photo-widget button {
    margin-top: 10px;
    padding: 8px 16px;
    font-size: 14px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .photo-widget button:hover {
    background-color: #0056b3;
  }
  
  .photo-widget button:active {
    background-color: #004190;
  }
  </style>
  