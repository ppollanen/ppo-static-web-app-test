const HelloVueApp = {
    data() {
        return {
            message: 'Hello Vue!!'
        }
    }
}

HelloVueApp.createApp(HelloVueApp).mount('#hello-vue')