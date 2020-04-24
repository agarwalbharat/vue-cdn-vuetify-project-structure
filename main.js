
import { ToolBar } from './components/toolbar.js';
  
  import {
    MainTemplate
  } from './templates/main-template.js'

new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    components: {
      ToolBar
    },
    template: MainTemplate
  })
//   Vue.use(Vuetify, {
    
//   })
