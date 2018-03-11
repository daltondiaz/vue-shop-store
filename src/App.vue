<template>
  <div id="app">
     <div class="page-container md-layout-row">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">My Shop Store</span>
       
      </md-app-toolbar>
      <div class="md-right">
         
      </div>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>
        <md-list>
          <md-list-item>Plain Text</md-list-item>
          <md-list-item >Button</md-list-item>
          <md-list-item href="https://google.com" target="_blank">Link</md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <div class="md-right">
          <ShoppingCart/>
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
      </md-app-content>
    </md-app>
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

