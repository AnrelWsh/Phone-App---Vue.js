<template>
    <form>
        <input ref="numInput" class="inputName mb-4 text-xl font-semibold" placeholder="Numéro" disabled>
        
       
        <span class="text-[#e4bf88]">{{ contactExiste }}</span>  

        <div class="keyboard grid grid-cols-3 gap-6">
            <button @click="ajouterNombre('1')">1</button>
            <button @click="ajouterNombre('2')">2</button>
            <button @click="ajouterNombre('3')">3</button>
            <button @click="ajouterNombre('4')">4</button>
            <button @click="ajouterNombre('5')">5</button>
            <button @click="ajouterNombre('6')">6</button>
            <button @click="ajouterNombre('7')">7</button>
            <button @click="ajouterNombre('8')">8</button>
            <button @click="ajouterNombre('9')">9</button>
            <button>*</button>
            <button @click="ajouterNombre('0')">0</button>
            <button @click="suppNombre"><img class="m-[5px] w-[25px]" src="@/assets/delete.svg" alt="delete digit"></button>
        </div>

        
        <button class="btn-submit" type="submit" @click="nouvelAppel()"><img class="cursor-pointer w-[50px] m-auto" src="@/assets/appel.svg" alt="Appel"></button>

        <audio id="audioAppel">
            <source src="@/assets/appel.mp3" type="audio/mpeg">
        </audio>
        
    </form>
</template>

<script>
export default {
    name: "FormContact",

    computed: {
        contacts(){
            return this.$store.state.contacts
        },    
        
        journal() {
          return this.$store.state.journal
        } ,
        contactExiste(){
            return this.$store.state.contactExiste
        }
    },
    
    data() {
        return {

            formContact: {
                nom: '',
                numero: '',
            },
        }
    },

    methods: {
        nouvelAppel() {
            let audioAppel = document.getElementById("audioAppel")
            audioAppel.play()
            let inputValue = this.$refs.numInput.value
            this.$store.commit('appelClavier', inputValue)
        },
       
        ajouterNombre(input){
            let inputValue = this.$refs.numInput.value += input
            this.$store.commit('existe', inputValue)
        },

        suppNombre(){
            this.$refs.numInput.value = this.$refs.numInput.value.slice(0, -1)
        },
    },

    
}
</script>

<style scoped>
.inputName {
    border-bottom: solid 2px #2c3e50;
    transition: ease-in-out 250ms;
}
.inputName:focus {
    outline: none;
    border-bottom: solid 2px #e4bf88;
    transition: ease-in-out 250ms;
}
button{
    font-size:20px;
    color:#e4bf88;
    font-weight:400;
    width:80px;
    height:80px;
    text-align:center;
    padding:20px;
    border-radius:100%;
    box-shadow: 0px 0px 17px -1px rgba(132,132,132,0.15);
    transition: ease-in-out 250ms;
}
button:hover{
    color: #2c3e50;
    transition: ease-in-out 250ms;
    box-shadow: 0px 0px 25px -5px rgba(0, 0, 0, 0.437);
}

.btn-submit{
    width: 100%;
    border-radius: 0;
    box-shadow: none;
    transition: ease-in-out 250ms;
}
.btn-submit:hover{
    transition: ease-in-out 250ms;
    text-decoration: underline;
    box-shadow: none;
    font-weight: bold;
}

</style>