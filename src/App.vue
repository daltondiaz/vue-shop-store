<template>
  <div id="app" class="md-layout">
    <div class="md-layout-item md-layout">
      <span class="md-title" >My Shop Store</span>
    </div>
    <div class="md-layout-item md-layout">
      <md-card v-for="item in forSale"  :key="item.id">
        <md-card-header>
          <div class="md-title">{{ item.name }}</div>
        </md-card-header>
        <md-card-content>
          {{ item.price }}
        </md-card-content>
        <md-card-actions>
          <md-button class="md-raised md-primary">Add to Cart</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>

// import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'

export default {
  name: 'app',
  data () {
    return {
      forSale: [
        { id: 1, name: 'An Item', image: '//placehold.it/200', price: 999 },
        { id: 2, name: 'Thing', image: '//placehold.it/200', price: 1499 },
        { id: 3, name: 'Doo-dad', image: '//placehold.it/200', price: 499 },
        { id: 4, name: 'Other thing', image: '//placehold.it/200', price: 299 },
      ],
    }
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
