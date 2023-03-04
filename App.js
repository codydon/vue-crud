const app = Vue.createApp({
    //this creates a vue app
    //data, function
    // template: '<h2> I am the template </h2>'
    data() {
        return {
            showBooks: true,
            title: 'Atomic habits',
            author: 'James Clear',
            age: 52,
            x: 0,
            y: 0,
            books : [
                { author: 'J.K. Rowling', title: 'Harry Potter and the Philosopher\'s Stone' },
                { author: 'Harper Lee', title: 'To Kill a Mockingbird' },
                { author: 'George Orwell', title: '1984' },
                { author: 'J.R.R. Tolkien', title: 'The Lord of the Rings' },
                { author: 'Markus Zusak', title: 'The Book Thief' }
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