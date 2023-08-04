<template>
  <header class="bg-deep-blue md:flex md:px-4 md:py-3">
  <!-- <header class="bg-gray-900 md:flex md:justify-between md:items-center md:px-4 md:py-3"> -->
    <div class="flex items-center justify-between md:justify-start px-4 py-3 md:p-0">    
      <div>
          <router-link to="Home">
              <img class="h-8" src="/src/assets/d20.png">
          </router-link>
      </div>
      <div>
          <router-link class="px-4 text-xl text-white font-bold" to="/">Tinkerbolt Emporium</router-link>
      </div>
      <div class="md:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4  md:flex md:p-0">
        <router-link 
            tag="a" 
            class="mt-0 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2" 
            active-class="text-green-500"
            to="/">
            Initiative Tracker
        </router-link>
        <!-- <router-link 
            tag="a" 
            class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2" 
            active-class="text-green-500"
            to="Dice">
            Dice Roller
        </router-link> -->
        <router-link 
            tag="a" 
            class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2" 
            active-class="text-green-500"
            to="Guide">
            User Guide
        </router-link>
    </nav>
    <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 md:flex-grow md:flex md:p-0 md:justify-end">
        <!-- <router-link 
            tag="a" 
            class="block px-2 md:py-1 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2" 
            active-class="text-green-500"
            to="Login">
            Login
        </router-link> -->
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>