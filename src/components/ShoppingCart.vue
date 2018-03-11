<template>
<div>
  <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Shopping Cart</md-dialog-title>
        <md-table md-card>
            <md-table-toolbar>
                <h1 class="md-title">Items</h1>
            </md-table-toolbar>
            <md-table-row v-for="(item, index) in cart" :key="item.id">
                <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
                <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Price" md-sort-by="price">{{ item.price|dollars }}</md-table-cell>
                <md-table-cell md-label="Remove" >
                     <md-button class="md-accent md-raised" @click="removeFromCart(index)" >&times;</md-button>
                </md-table-cell>
            </md-table-row>
            <md-table-row slot="md-table-row">
                <md-table-head></md-table-head>
                <md-table-head></md-table-head>
                <md-table-head>{{ total | dollars }}</md-table-head>
                <md-table-head></md-table-head>
            </md-table-row>
        </md-table>
      <md-dialog-actions>
        <md-button @click="showDialog = false">Keep shopping</md-button>
        <md-button class="md-raised md-primary" @click="showDialog = false">Check out</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-primary md-raised" @click="showDialog = true">Cart ({{ numInCart }})</md-button>
</div>
</template>
<script>
import { dollars } from '../filters';

export default {
    name: 'shoppingCart',
    data: () => ({
        showDialog : false,
    }), 
    computed: {
        inCart() {
            return this.$store.getters.inCart;
        },
        numInCart(){
            return this.inCart.length;
        },
        cart() {
            return this.$store.getters.inCart.map((cartItem) => {
                return this.$store.getters.forSale.find((forSaleItem) => {
                    return cartItem === forSaleItem.id;
                });
            });
        },
         total() {
            return this.cart.reduce((acc, cur) => acc + cur.price, 0);
        },
    },
    filters: {
        dollars,
    },
    methods: {
        removeFromCart(index){
            this.$store.dispatch('removeFromCart', index);
        },
    },
}
</script>
<style lang="scss" scoped>
  .md-dialog {
    max-width: 768px;
  }
</style>