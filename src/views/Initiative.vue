<template>
<div>

    <div class="relative pt-8 pb-8 flex content-center items-center justify-center">
        <div class="container relative mx-auto">
            <div class="items-center flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div>
                        <h1 
                            class="text-deep-blue font-semibold text-5xl"
                        >
                            {{titleText}}
                        </h1>
                        <div class="flex flex-wrap text-center justify-center ">
                            <p class="text-m leading-relaxed mt-4 mb-2  text-deep-blue">
                                Manage the order of initiative in combat
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
    <ActiveCombat/>

</div>
</template>

<script>
// import ActiveCombat from "../components/ActiveCombat.vue"
import ActiveCombat from "../components/Combat.vue"

export default {
    components: {
        ActiveCombat
    },
    data() {
        return {
            titleText: "Initiative & Health Tracker"
        }
    }  
}

</script>

<style scoped>
    

</style>