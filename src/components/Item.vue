<template>
    <md-card>
        <md-card-header>
            <div class="md-title">{{ name }}</div>
        </md-card-header>
        <md-card-content>
            {{ price | dollars }}
        </md-card-content>
        <md-card-actions>
            <VueButton class="round primary" icon-left="flag" @click="addToCart(id)" >Add to Cart</VueButton>
        </md-card-actions>
    </md-card>
</template>
<script>

import { dollars } from '../filters';

export default {
  name: 'item',
  props:{
      id: Number,
      name: String,
      imagem: String,
      price: Number,
  },
  filters: {
      dollars,
  },
  methods:{
      addToCart(id){
          this.$store.dispatch('addToCart', id);
      },
  }
}
</script>


