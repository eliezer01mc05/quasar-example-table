import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

axios.defaults.headers.common["Authorization"] = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFbGllemVyIE0gQ29lbGhvIiwiZXhwIjoxNjE0NjM1NjgyLCJ1c2VyX2lkIjoxLCJyb2xlcyI6IkRFRkFVTFQifQ.ub2s0hlNOySypZlD81NM4S5pX-oGcC0WJhR7106hg9F1tWotBsPx1_r060ObQLrXEUAMvdC9kX3zhqgcgXxPfQ";
axios.defaults.headers.post["Content-Type"] = 'application/x-www-form-urlencoded';