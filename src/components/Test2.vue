<template>
  <div class="row">
    

    <div class="col-3">
      <h3>Drag into me</h3>
      <draggable
        class="dragArea list-group"
        :list="list2"
        group="people"
        
        item-key="name"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>

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
      list2: [
        { name: "Alex", id: 5 },
        { name: "Emily", id: 6 },
        { name: "Milo", id: 7 }
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