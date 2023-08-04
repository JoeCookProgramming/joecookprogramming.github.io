<template>
  <div>
    <div class="relative pt-8 pb-8 flex content-center items-center justify-center">
        <div class="container relative mx-auto">
            <div class="items-center flex flex-wrap">

                <div :style="{'cursor': 'zoom-out'}" v-if="showCreateModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex" @click="deactivateAllModals" @touchstart="deactivateAllModals">
                    <div class="relative w-auto my-2 mx-auto max-w-6xl">
                        <img class="mt-2 border-solid border-2 border-indigo-800 rounded-md " src="/src/assets/Create.gif">
                    </div>
                </div>
                <div v-if="showCreateModal" class="opacity-50 fixed inset-0 z-40 bg-black"></div>

                <div :style="{'cursor': 'zoom-out'}" v-if="showInitiativeModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex" @click="deactivateAllModals" @touchstart="deactivateAllModals">
                    <div class="relative w-auto my-2 mx-auto max-w-6xl">
                        <img class="mt-2 border-solid border-2 border-indigo-800 rounded-md " src="/src/assets/Initiative.gif">
                    </div>
                </div>
                <div v-if="showInitiativeModal" class="opacity-50 fixed inset-0 z-40 bg-black"></div>

                <div :style="{'cursor': 'zoom-out'}" v-if="showDamageModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex" @click="deactivateAllModals" @touchstart="deactivateAllModals">
                    <div class="relative w-auto my-2 mx-auto max-w-6xl">
                        <img class="mt-2 border-solid border-2 border-indigo-800 rounded-md " src="/src/assets/Damage.gif">
                    </div>
                </div>
                <div v-if="showDamageModal" class="opacity-50 fixed inset-0 z-40 bg-black"></div>


                <div class="w-full px-4 mr-auto ml-auto mb-10">
                    <h3 class="text-5xl text-center mb-2 font-semibold leading-normal">
                        User Guide
                    </h3>
                </div>

                <div class="w-full xl:w-4/12 px-4 mr-auto ml-auto mb-10">
                    <h3 class="text-3xl text-center mb-2 font-semibold leading-normal">
                        Create Players, Enemies and NPCs
                    </h3>
                    <br/>
                    <p class="text-md text-center font-light leading-relaxed mt-4 mb-4 text-gray-700">
                        Click to enlarge
                    </p>
                    <img :style="{'cursor': 'zoom-in'}" class="mt-4" src="/src/assets/Create.gif" @click="createModalToggle" @touchstart="createModalToggle">
                </div>

                <div class="w-full xl:w-4/12 px-4 mr-auto ml-auto mb-10">
                    <h3 class="text-3xl text-center mb-2 font-semibold leading-normal">
                        Add To Initiative
                    </h3>
                    <p class="text-sm text-center font-light leading-relaxed mt-4 mb-4 text-red-700">
                        *Cannot scroll initiative score on mobile*
                    </p>
                    <p class="text-md text-center font-light leading-relaxed mt-4 mb-4 text-gray-700">
                        Click to enlarge
                    </p>
                    <img :style="{'cursor': 'zoom-in'}" class="mt-4" src="/src/assets/Initiative.gif" @click="initiativeModalToggle" @touchstart="initiativeModalToggle">
                </div>

                <div class="w-full xl:w-4/12 px-4 mr-auto ml-auto mb-10">
                    <h3 class="text-3xl text-center mb-2 font-semibold leading-normal">
                        Deal Damage and Heal
                    </h3>
                    <br/>
                    <p class="text-md text-center font-light leading-relaxed mt-4 mb-4 text-gray-700">
                        Click to enlarge
                    </p>
                    <img :style="{'cursor': 'zoom-in'}" class="mt-4" src="/src/assets/Damage.gif" @click="damageModalToggle" @touchstart="damageModalToggle">
                </div>



            </div>
        </div>        
    </div>
  </div>
</template>

<script>
// import ActiveCombat from "../components/ActiveCombat.vue"

export default {
    components: {

    },
    data() {
        return {
            titleText: "Initiative & Health Tracker",
            showCreateModal: false,
            showInitiativeModal: false,
            showDamageModal: false,
        }
    },
    methods: {
        createModalToggle() {
            this.showCreateModal = !this.showCreateModal
        },
        initiativeModalToggle() {
            this.showInitiativeModal = !this.showInitiativeModal
        },
        damageModalToggle() {
            this.showDamageModal = !this.showDamageModal
        },
        deactivateAllModals() {
            this.showCreateModal = false
            this.showInitiativeModal = false
            this.showDamageModal = false
        }
    }  
}

</script>