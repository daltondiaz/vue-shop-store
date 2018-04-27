<template>
<div>
  <VueModal 
    v-if="showDialog"
    @close="showDialog = false" 
    title="Shopping Cart"
    >
        <md-table md-card>
            <md-table-toolbar>
                <h1 class="md-title">Items</h1>
            </md-table-toolbar>
            <md-table-row v-for="(item, index) in cart" :key="item.id">
                <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
                <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Price" md-sort-by="price">{{ item.price|dollars }}</md-table-cell>
                <md-table-cell md-label="Remove" >
                    <VueButton class="flat danger" @click="removeFromCart(index)">&times;</VueButton>
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
        <VueButton class="round warning" icon-left="warning" @click="showDialog = false">Keep shopping</VueButton>
        <VueButton class="round primary" icon-left="done" @click="showDialog = false">Check out</VueButton>
      </md-dialog-actions>
    </VueModal>
    <VueButton class="round accent" icon-left="start" @click="showDialog = true" >Cart ({{ numInCart }})</VueButton>
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