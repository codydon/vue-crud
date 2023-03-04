const app = Vue.createApp({
    //this creates a vue app
    //data, function
    // template: '<h2> I am the template </h2>'
    data () {
        return {
            title: 'Atomic habits',
            author: 'James Clear',
            age: 52
        }
    }, 
    methods:{
        changeTitle(title){
            // this.title = "Things fall apart"
            this.title = title
        }
    }

}) 

app.mount('#app') // mounts to element of app id