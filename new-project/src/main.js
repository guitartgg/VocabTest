import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
new Vue({
  el: '#app',
  render: h => h(App),
  mounted() {
    axios
      .get('https://vocab-77f73-default-rtdb.firebaseio.com/',
      {headers: { "Access-Control-Allow-Origin": "*" }
  })
      .then(response => (this.info = response))
      // console.log('response: '+response)
  }
})
