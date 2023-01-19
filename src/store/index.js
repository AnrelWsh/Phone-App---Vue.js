import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
          //id: 1,
          nom: "Nico",
          numero: "0623456767"
      },
      {
          //id: 2,
          nom: "Clemsou",
          numero: "0987654321"
      }
    ],

    journal: []
  },
  getters: {
  },
  mutations: {
    ajoutContact(state, contact){
      state.contacts.push(contact)
      this.commit('elementExists', contact)
    },

    nouvelAppel(state, contact) {
      state.journal.push(contact)
    },

  },
  actions: {
  },
  modules: {
  }
})
