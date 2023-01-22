import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
          //id: 1,
          nom: "Nico",
          numero: "6666666666"
      },
      {
          //id: 2,
          nom: "Clemsou",
          numero: "0987654321"
      }
    ],

    journal: [],

    contactExiste: "",

  },
  getters: {
  },
  mutations: {
    ajoutContact(state, contact){
      state.contacts.push(contact)
    },

    appelClavier(state, inputValue){
      let contact = state.contacts.find(contact => contact.nom == inputValue)
      if( contact == undefined){
        let callDate = new Date().toLocaleString()

        contact = {
          nom: inputValue,
          numero: "",
          date: callDate
        }
      }
      state.journal.push(contact)
    },

    nouvelAppel(state, nom, numero) {
      let callDate = new Date().toLocaleString()
      let calledContact = {
        nom: nom,
        numero: numero,
        date: callDate,
      }
      state.journal.push(calledContact)
    },

    existe(state, inputValue) {
      if(state.contacts.find(contact => contact.numero == inputValue) == undefined){
        state.contactExiste = ""
      }else{
        state.contactExiste = state.contacts.find(contact => contact.numero == inputValue).nom
      }
      

    },

  },
  actions: {
  },
  modules: {
  }
})
