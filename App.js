const app = Vue.createApp({
    //this creates a vue app
    //data, function
    // template: '<h2> I am the template </h2>'
    data() {
        return {
            url:'www.unsplash.com',
            showBooks: true,
            title: 'Atomic habits',
            author: 'James Clear',
            age: 52,
            x: 0,
            y: 0,
            books : [
                { author: 'J.K. Rowling', title: 'Harry Potter and the Philosopher\'s Stone', img: 'assets/1.png', isFav:true},
                { author: 'Harper Lee', title: 'To Kill a Mockingbird', img: 'assets/2.png', isFav:false},
                { author: 'J.R.R. Tolkien', title: 'The Lord of the Rings', img: 'assets/3.png', isFav:true}
             ]
            
        }
    },

    methods: {
        changeTitle(title) {
            // this.title = "Things fall apart"
            this.title = title
        },

        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },

        handleEvent(e, data){
            console.log(e, e.type)
            if (data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }

})

app.mount('#app') // mounts to element of app id