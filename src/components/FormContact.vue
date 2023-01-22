<template>
    <form @submit.prevent="ajoutContact" class="flex flex-col items-center">
        <input class="inputName text-xl font-semibold mb-4" type="text" placeholder="Nom du contact" v-model="formContact.nom">
        <input class="inputName mb-4 text-xl font-semibold" type="text" placeholder="Numéro du contact" v-model="formContact.numero">
        
        <button class="btn-submit" type="submit">Ajouter le contact</button>
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
        ajoutContact() {

            if(this.formContact.numero.length !== 10 ) return

            if(this.formContact.nom == "" || this.formContact.numero == "") return

            this.$store.commit('ajoutContact', this.formContact)                        

            this.formContact = {
                nom: '',
                numero: ''
            }
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