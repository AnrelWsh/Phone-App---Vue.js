<template>
    <form @submit.prevent="ajoutContact">
        <input class="inputName text-xl font-semibold mb-4" type="text" placeholder="Nom du contact" v-model="formContact.nom">
        <p class="mb-4 text-xl font-semibold"><span class="text-[#e4bf88]">Numéro: </span>{{ formContact.numero }}</p>
        <div v-for="contact in contacts" :key="contact.nom">
            <p class="mb-4 text-xl font-semibold" v-if="formContact.numero == contact.numero">
                <span v-if="this.$route.name === 'contact'">Ce contact existe déjà: </span>
                <span v-else>Appeler: </span>
                <span class="text-[#e4bf88]">{{ contact.nom }}</span>
            </p>
        </div>
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
            <button @click="suppNombre"><img src="@/assets/delete.svg" alt="delete digit"></button>
        </div>
        
        <button class="btn-submit" v-if="this.$route.name === 'contact'" type="submit">Ajouter le contact</button>
        <button class="btn-submit" v-else type="submit"><img class="cursor-pointer" src="@/assets/appel.svg" alt="Appel" @click="nouvelAppel(contact)"></button>
    </form>
</template>

<script>
export default {
    name: "FormContact",

    computed: {
        contacts(){
            return this.$store.state.contacts
        },     
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
       
        ajouterNombre(input){
            this.formContact.numero += input
        },

        suppNombre(){
            this.formContact.numero = this.formContact.numero.slice(0, -1)
        },


        ajoutContact(e) {

            if(this.formContact.numero.length < 10 ){
                return
            }

            if(this.formContact.nom == "" || this.formContact.numero == "") return

            this.$store.commit('ajoutContact', this.formContact)

                       

            this.formContact = {
                nom: '',
                numero: ''
            }


            e.preventDefault() 
        }
    },

    
}
</script>

<style scoped>
.error{
    color: red;
}
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

img{    
    margin: 5px;
    width: 50px;
}


</style>