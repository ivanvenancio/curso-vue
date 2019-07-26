new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        clicarBotao(){
            alert("Clicou no Botao")
        },
        apertou(event){
            return this.valor = event.target.value
        },
        apertouEnter(event){
            return this.valor = event.target.value
        }
    }
})