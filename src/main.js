import Vue from 'vue'
  import App from './App'
  import router from './router'

const Counter = {
  data() {
    return {
      counter: 0
    }
  }
}

Vue.createApp(Counter).mount('#counter')

//    new Vue ({
//        el: "#app",
//        data: {
//          message: "This is my First Code of Vue.js",
//        }
//    });
