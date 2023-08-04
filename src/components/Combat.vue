<template>
<section class="">
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-start">
            <div class="w-full xl:w-4/12 px-4 mr-auto ml-auto mb-10">
                <h3 class="text-3xl text-center mb-2 font-semibold leading-normal">
                    Damage & Healing
                </h3>
                <p class="text-md text-center font-light leading-relaxed mt-4 text-gray-700">
                    Scroll or drag the value to pick your damage or healing.
                </p>
                <p class="text-md text-center font-light leading-relaxed mb-4 text-gray-700">
                    Select the sword to attack and the "+" to heal.
                </p>
                <Scroller/>

            </div>
            <div class="w-full xl:w-4/12 px-4 mr-auto ml-auto mb-10">
                <h3 class="text-3xl text-center mb-2 font-semibold leading-normal">
                    Active Combat
                </h3>
                <p class="text-md text-center font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    Manage health and initiative for players, enemies & NPCs
                </p>
                <ActiveCombat/>
            </div>

            <div class="w-full xl:w-4/12 px-4 mr-auto ml-auto mb-10">
                <h3 class="text-3xl text-center mb-2 font-semibold leading-normal">
                    Out of Combat
                </h3>
                <p class="text-2xl text-center mb-2 font-semibold leading-normal">
                    Players 
                </p>
                <div class="">
                  <div class="text-xs flex justify-center">
                      <button 
                          @click="togglePlayerModal()" 
                          class="w-3/12 text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase px-4 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                          type="button">
                          ADD NEW
                      </button>
                      <button 
                          @click="toggleHidePlayers()" 
                          class="w-3/12 text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase px-4 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                          type="button">
                          <span v-if="playersHidden == false">HIDE</span>
                          <span v-else>SHOW</span>
                      </button>
                  </div>
                </div>
                <div v-if="playersHidden == false">
                  <Players/>
                </div>
                <p class="text-2xl text-center mt-4 mb-2 font-semibold leading-normal">
                    Encounters
                </p>
                <div class="text-xs flex justify-center">
                    <button 
                        @click="toggleEncounterModal()" 
                        class="w-3/12 text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase px-4 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                        type="button">
                        ADD NEW
                    </button>
                    <button 
                        @click="toggleHideEncounters()" 
                        class="w-3/12 text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase px-4 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                        type="button">
                        <span v-if="encountersHidden == false">HIDE</span>
                        <span v-else>SHOW</span>
                    </button>
                </div>
                <div v-if="encountersHidden == false">
                  <Encounters/>
                </div>
                <!-- <v-if="encountersHidden" Encounters/> -->
            </div>
        </div>
    </div>



    <div v-if="showPlayerModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 class="text-3xl font-semibold">
              Add Player Character
            </h3>
          </div>

          <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-full px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
                Player Name
              </label>
              <input v-model="newPlayerName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Talbert">
              <p v-if="playerNameMessage" class="text-red-500 text-xs italic">{{this.playerNameMessage}}</p>
            </div>
          </div>


          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="cancelAddPlayer()">
              Close
            </button>
            <button class="ml-4 text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="addPlayer()">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showPlayerModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>


    <div v-if="showEncounterModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 class="text-3xl font-semibold">
              Add Enemy or NPC
            </h3>
          </div>
          <!--body-->

          <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-full px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
                Enemy/NPC Name
              </label>
              <input v-model="newEnemyName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Goblin">
              <p v-if="enemyNameMessage" class="text-red-500 text-xs italic">{{enemyNameMessage}}</p>
            </div>
          </div>
          <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-6/12 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-type">
                Type
              </label>
              <div class="relative">
                <select v-model="newEnemyType" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-type">
                  <option>Enemy</option>
                  <option>NPC</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-health">
                Health
              </label>
              <input v-model="newEnemyHealth" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-health" type="number" min="!" placeholder="1">
              <p v-if="enemyHealthMessage" class="text-red-500 text-xs italic">{{this.enemyHealthMessage}}</p>
            </div>
          </div>


          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="cancelAddEncounter()">
              Close
            </button>
            <button class="ml-4 text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-4 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="addEncounterCheck()">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showEncounterModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>


</section>
</template>

<script>
import Scroller from './Scroller2.vue'
import ActiveCombat from './ActiveCombat.vue'
import Players from './Players.vue'
import Encounters from './Encounters.vue'
export default {
    components: {
        Scroller,
        ActiveCombat,
        Players,
        Encounters,
    },
    data() {
        return {
            showPlayerModal: false,
            showEncounterModal: false,
            newPlayerName: null,
            newEnemyName: null,
            newEnemyType: "Enemy",
            newEnemyHealth: 1,
            playerNameMessage: null,
            enemyNameMessage: null,
            enemyHealthMessage: null,
            playersHidden: false,
            encountersHidden: false

        }
    },
    methods: {
      toggleHidePlayers() {
        this.playersHidden = !this.playersHidden
        console.log(this.playersHidden)
      },
      toggleHideEncounters() {
        this.encountersHidden = !this.encountersHidden
      },
      togglePlayerModal() {
          this.showPlayerModal = !this.showPlayerModal;
      },
      toggleEncounterModal() {
          this.showEncounterModal = !this.showEncounterModal;
      },
      addPlayer() {
        if (!this.newPlayerName || this.newPlayerName == "") {
          this.playerNameMessage = "Please enter a name"
        } else {
          this.togglePlayerModal()
          var newPlayer = {name: this.newPlayerName,  initiative: 0, type: "player", alive: true, suffix: null}
          this.$store.dispatch('addPlayer',newPlayer)
          this.newPlayerName = null
          this.playerNameMessage = null
        }
      },
      cancelAddPlayer() {
        this.togglePlayerModal()
        this.newPlayerName = null
        this.enemyHealthMessage = null
      },
      addEncounter() {
        this.toggleEncounterModal()
        var newEncounter= {name: this.newEnemyName, maxHealth: this.newEnemyHealth, currentHealth: this.newEnemyHealth, initiative: 0, type: this.newEnemyType, alive: true, suffix: null}
        this.$store.dispatch('addEncounter',newEncounter)
        this.newEnemyName = null
        this.newEnemyType = "Enemy"
        this.newEnemyHealth = 1
        this.enemyHealthMessage = null
      },
      addEncounterCheck() {
        if (this.newEnemyHealth <= 0 && (!this.newEnemyName || this.newEnemyName == "")) {
          this.enemyHealthMessage = "Character health must be greater than zero"
          this.enemyNameMessage = "Please enter a name"
        } else if (!this.newEnemyName || this.newEnemyName == "") {
          this.enemyNameMessage = "Please enter a name"
          this.enemyHealthMessage = null
        } else if (this.newEnemyHealth <= 0) {
          this.enemyHealthMessage = "Character health must be greater than zero"
          this.enemyNameMessage = null
        } else {
          this.addEncounter()
        }
      },
      cancelAddEncounter() {
        this.toggleEncounterModal()
        this.newEnemyName = null
        this.newEnemyType = "Enemy"
        this.newEnemyHealth = 1
      },

    }
}
</script>

<style>
  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>