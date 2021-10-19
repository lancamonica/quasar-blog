import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

// baseURL
axios.defaults.baseURL = 'http://localhost:3000/'
