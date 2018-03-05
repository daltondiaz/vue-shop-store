<template>
  <md-button class="md-primary">Cart ({{ numInCart }})</md-button>
</template>
<script>
export default {
    name: 'shoppingCart',
    computed: {
        inCart() {
            return this.$store.getters.inCart;
        },
        numInCart(){
            return this.inCart.length;
        }
    }
}
</script>
