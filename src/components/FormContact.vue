<template>
    <form @submit.prevent="ajoutContact">
        <input type="text" placeholder="Nom du contact" v-model="formContact.nom">
        <p>Numéro: {{ formContact.numero }}</p>
        <div v-for="contact in contacts" :key="contact.nom">
          <p v-if="formContact.numero == contact.numero">{{ contact.nom }}</p>
        </div>
        <div class="keyboard">
            <button @click="ajouterNombre('1')">1</button>
            <button @click="ajouterNombre('2')">2</button>
            <button @click="ajouterNombre('3')">3</button>
            <button @click="ajouterNombre('4')">4</button>
            <button @click="ajouterNombre('5')">5</button>
            <button @click="ajouterNombre('6')">6</button>
            <button @click="ajouterNombre('7')">7</button>
            <button @click="ajouterNombre('8')">8</button>
            <button @click="ajouterNombre('9')">9</button>
            <button @click="ajouterNombre('0')">0</button>
            <button @click="suppNombre">supp</button>
        </div>
        
        <button v-if="this.$route.name === 'contact'" type="submit">Ajouter un contact</button>
        <button v-else type="submit">vknernrigrjg</button>
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
.error{
    color: rgb(192, 44, 44);
}
</style>