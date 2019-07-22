new Vue ({
    el: '#desafio',
    data: {
        nome: "Ivan Venancio",
        idade: "41",
        img: "https://abrilsuperinteressante.files.wordpress.com/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png"
    },
    methods:{
        randomico: function(){
            return Math.random()
        }
    }
    
})