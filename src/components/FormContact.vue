<template>
    <form @submit.prevent="ajoutContact">
        <input type="text" placeholder="Nom du contact" v-model="formContact.nom">
        <p>Numéro: {{ formContact.numero }}</p>
        <div v-for="contact in contacts" :key="contact.nom">
          <p v-if="formContact.numero == contact.numero">{{ contact.nom }}</p>
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
            <button></button>
            <button @click="ajouterNombre('0')">0</button>
            <button @click="suppNombre">supp</button>
        </div>
        
        <button class="btn-submit" v-if="this.$route.name === 'contact'" type="submit">Ajouter un contact</button>
        <button class="btn-submit" v-else type="submit">vknernrigrjg</button>
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

          error: false,

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


        ajoutContact() {

            if(this.formContact.numero.length != 10){
                this.error = true
                return
            }

            if(this.formContact.nom == "" || this.formContact.numero == "") return

            if(this.$store.state.contacts.find((contact) => contact.nom == this.formContact.nom)) return

            this.$store.commit('ajoutContact', this.formContact)

            this.error = false

            this.formContact = {
                nom: '',
                numero: ''
            }
        }
    },

    
}
</script>

<style scoped>
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