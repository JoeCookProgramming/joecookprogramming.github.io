<template>
  <div class="row">
 

    <div class="col-3">
      <h3>Clone from me</h3>
      <draggable
        class="dragArea list-group"
        :list="list3"
        :group="{ name: 'people', pull: 'clone', put: false }"
        
        item-key="name"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
    <br>



    <rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" />
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "clone",
  display: "Clone",
  order: 2,
  components: {
    draggable
  },
  data() {
    return {
      list3: [
          { name: "Joe", id: 8},
          { name: "Gem", id: 9}
      ]
    };
  },
  methods: {
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>

<style scoped></style>