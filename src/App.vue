<template>
  <div id="app">
    <div class="md-layout">
      <div class="md-layout-item md-alignment-top-center">
        <span class=" md-display-1 md-title" >My Shop Store</span>
      </div>
      <div class="md-layout-item md-alignment-top-right">
        <ShoppingCart/>
      </div>
    </div>
    <div class="md-layout">
     <div class="md-layout-item md-layout">
        <Item 
          v-for="item in forSale" 
          :key="item.id"
          :id="item.id"
          :name="item.name"
          :image="item.image"
          :price="item.price">
        </Item>
      </div>
    </div>
  </div>
</template>

<script>

import Item from './components/Item.vue';
import ShoppingCart from './components/ShoppingCart.vue';

export default {
  name: 'app',
  computed: {
    forSale() { return this.$store.getters.forSale; },
    inCart() { return this.$store.getters.inCart; }
  },
  components:{
    Item,
    ShoppingCart,
  }
}
</script>

<style lang="scss" scoped>
  
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
<style>
 /* Nothing for now */
</style>
<style src="vue-material/dist/vue-material.css"></style>
<style src="../node_modules/vue-material/dist/vue-material.css"></style>

