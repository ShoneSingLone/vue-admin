<template>
  <div class="var-container">
    <div class="options">
      <el-dropdown v-if="childNameArray.length > 1">
        <span class="el-dropdown-link">
          {{ childView }}{{ childNameArray.length
          }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="childName in childNameArray"
            :key="childName"
            @click.native="toggle(childName)"
            >{{ childName }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <slot />
  </div>
</template>

<script>
const { APP_STATE, APP_ROUTER, _ } = window;

export default {
  TEMPLATE_PLACEHOLDER,
  data() {
    return {
      APP_STATE,
      APP_ROUTER,
      children: {},
      childView: "",
      childNameArray: [],
    };
  },
  async mounted() {
    const {
      _: { debounce },
    } = window;

    this.$watch(
      "childView",
      debounce((childView, childViewLast) => {
        const child = this.children[childView];
        const childLast = this.children[childViewLast];
        if (child) {
          child.zIndex = 1;
        }
        if (childLast) {
          childLast.zIndex = 0;
        }
      }, 300),
      { immediate: true }
    );
  },
  destroyed() {},
  methods: {
    toggle(childName) {
      this.childView = childName;
      /* 
      var index = this.childNameArray.indexOf(this.childView) || 0;
      var cIndex = (index + 1) % this.childNameArray.length;
      this.childView = this.childNameArray[cIndex];
     */
    },
    register(childName, child) {
      if (this.children[childName]) {
        console.error(`VarChild ${childName} i-am 属性值重复`);
      } else {
        this.$set(this.children, childName, child);
        this.childNameArray.push(childName);
        if (!this.childView) {
          this.childView = childName;
        }
      }
    },
    unregister(childName, child) {
      delete this.children[childName];
      var index = this.childNameArray.indexOf(childName);
      this.childNameArray.splice(index, 1);
    },
  },
};
</script>