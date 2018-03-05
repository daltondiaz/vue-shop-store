<template>
    <md-card>
        <md-card-header>
            <div class="md-title">{{ name }}</div>
        </md-card-header>
        <md-card-content>
            {{ price | dollars }}
        </md-card-content>
        <md-card-actions>
            <md-button 
                class="md-raised md-primary" 
                @click="addToCart(id)">Add to Cart</md-button>
        </md-card-actions>
    </md-card>
</template>
<script>
export default {
  name: 'item',
  props: ['id', 'name', 'image', 'price'],
  filters: {
      dollars: num => `$${num / 100 }`,
  },
  methods:{
      addToCart(id){
          this.$store.dispatch('addToCart', id);
      },
  }
}
</script>


