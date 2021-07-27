import { createStore } from 'vuex'

export default createStore({
  state: {
    scrollValue: 1,
    damageActive: true,
    players: [
      {name: "Amos", initiative: 0, type: "player", alive: true, suffix: null},
      {name: "Elias",  initiative: 0, type: "player", alive: true, suffix: null},
      {name: "Ildirim", initiative: 0, type: "player", alive: true, suffix: null},
      {name: "Vigo", initiative: 0, type: "player", alive: true, suffix: null},
    ],
    inInitiative: [
    ],
    encounters: [
      {name: "Goblin", maxHealth: 7, currentHealth: 7, initiative: 0, type: "enemy", alive: true, suffix: null},
      {name: "Owlbear", maxHealth: 59, currentHealth: 59, initiative: 0, type: "enemy", alive: true, suffix: null},
      {name: "Gnoll", maxHealth: 22, currentHealth: 22, initiative: 0, type: "enemy", alive: true, suffix: null},
      {name: "Ancient Red Dragon", maxHealth: 546, currentHealth: 546, initiative: 0, type: "enemy", alive: true, suffix: null},
      {name: "Sergei", maxHealth: 58, currentHealth: 58, initiative: 0, type: "npc", alive: true, suffix: null},
      {name: "The Old Barrel", maxHealth: 93, currentHealth: 93, initiative: 0, type: "npc", alive: true, suffix: null},
    ],
    movedEvent: null
  },

  mutations: {
    setScroll (state, value) {
      state.scrollValue = value
    },
    setDamageActive (state, value) {
      state.damageActive = value
    },
    setPlayers (state, value) {
      state.players = value
    },
    setInInitiative (state, value) {
      state.inInitiative = value
    },
    setEncounters (state, value) {
      state.encounters = value
    },
    addPlayer (state, value) {
      state.players.push(value)
    },
    addEncounter (state, value) {
      state.encounters.push(value)
    },
    setMovedEvent (state, value) {
      state.movedEvent = value
    }
  },

  actions: {
    setScroll ({commit}, value) {
      commit('setScroll', value)
    },
    setDamageActive ({commit}, value) {
      commit('setDamageActive', value)
    },
    setPlayers ({commit}, value) {
      commit('setPlayers', value)
      localStorage.setItem('players',JSON.stringify(value))
    },
    setInInitiative ({commit}, value) {
      commit('setInInitiative', value)
      localStorage.setItem('inInitiative',JSON.stringify(value))
    },
    setEncounters ({commit}, value) {
      commit('setEncounters', value)
      localStorage.setItem('encounters',JSON.stringify(value))
    },
    addPlayer({commit, state}, value) {
      commit('addPlayer', value)
      localStorage.setItem('players',JSON.stringify(state.players))
    },
    addEncounter({commit, state}, value) {
      commit('addEncounter', value)
      localStorage.setItem('encounters',JSON.stringify(state.encounters))
    },
    setMovedEvent({commit, state}, value) {
      commit('setMovedEvent', value)
      localStorage.setItem('players',JSON.stringify(state.players))
      localStorage.setItem('encounters',JSON.stringify(state.encounters))
      localStorage.setItem('inInitiative',JSON.stringify(state.inInitiative))
    },
    retrieveCookies({commit}) {
      const players = localStorage.getItem('players')
      const encounters = localStorage.getItem('encounters')
      const inInitiative = localStorage.getItem('inInitiative')
      if (players) {
        commit('setPlayers',JSON.parse(players))
      }
      if (encounters) {
        commit('setEncounters',JSON.parse(encounters))
      }
      if (inInitiative) {
        commit('setInInitiative',JSON.parse(inInitiative))
      }
    }, 
    commitToStorage({state}) {
      localStorage.setItem('players',JSON.stringify(state.players))
      localStorage.setItem('encounters',JSON.stringify(state.encounters))
      localStorage.setItem('inInitiative',JSON.stringify(state.inInitiative))
    }   
  },

  getters: {
    scrollValue (state) {
      return state.scrollValue
    },
    damageActive (state) {
      return state.damageActive
    },
    players (state) {
      return state.players
    },
    inInitiative (state) {
      return state.inInitiative
    },
    encounters (state) {
      return state.encounters
    },
    movedEvent (state) {
      return state.movedEvent
    }
  }
  
})
