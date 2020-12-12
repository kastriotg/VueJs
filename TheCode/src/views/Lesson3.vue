<template>
  <div id="header">
    <h1>Vue Dynamic Styling</h1>
  </div>
  <section id="styling">
    <!-- Not using computed -->
    <div
      class="demo"
      :class="{ active: boxASelected }"
      @click="boxSelected('A')"
    >
      Click to select or deselect!
    </div>
    <!-- Dynamic classes using computed-->
    <div class="demo" :class="boxBClasses" @click="boxSelected('B')">
      Click to select or deselect!
    </div>
    <!-- Dynamic classes Array syntax -->
    <div :class="['demo', { active: boxCSelected }]" @click="boxSelected('C')">
      Click to select or deselect!
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    // if boxBSelected is true, the B box will get the 'active' class
    boxBClasses() {
      return { active: this.boxBSelected };
    },
  },

  methods: {
    boxSelected(select) {
      // console.log(select)
      // Checking which box is selected and then changing the
      switch (select) {
        case "A":
          this.boxASelected = !this.boxASelected;
          break;
        case "B":
          this.boxBSelected = !this.boxBSelected;
          break;
        case "C":
          this.boxCSelected = !this.boxCSelected;
          break;
        default:
          console.log("Box doesnt exist");
      }
    },
  },
};
</script>

<style scoped>
#styling {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

.demo {
  width: calc(100% - 32px);
  height: 100px;
  margin: 16px;
  border: 2px dashed #ccc;
  font-size: 1.4em;
  font-weight: bold;
  padding: 30px 0;
}
#header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #4fc08d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
.active {
  border-color: red;
  background-color: #4fc08d;
  color: #fff;
}
</style>
