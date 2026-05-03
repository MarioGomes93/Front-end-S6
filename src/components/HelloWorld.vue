<template>
  <div>
    <h1>{{ msg }}</h1>

    <section>
      <h2>Produtos</h2>
      <ul class="product-list">
        <li v-for="product in products" :key="product.id">
          <strong>{{ product.name }}</strong>
          <span>R$ {{ product.price.toFixed(2) }}</span>
          <button @click="addToCart(product)">Adicionar ao carrinho</button>
        </li>
      </ul>
    </section>

    <section>
      <h2>Carrinho ({{ cartItemCount }})</h2>
      <ul class="cart-list">
        <li v-if="cart.length === 0">O carrinho está vazio.</li>
        <li v-for="(item, index) in cart" :key="index">{{ item.name }} - R$ {{ item.price.toFixed(2) }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Produto A', price: 19.90 },
        { id: 2, name: 'Produto B', price: 29.90 },
        { id: 3, name: 'Produto C', price: 39.90 }
      ]
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
    cartItemCount() {
      return this.$store.getters.cartItemCount
    }
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product)
    }
  }
}
</script>

<style scoped>
.hello {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
}
section {
  margin-bottom: 24px;
}
.product-list,
.cart-list {
  list-style: none;
  padding: 0;
}
.product-list li,
.cart-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8f8f8;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 6px;
}
.product-list button {
  padding: 6px 10px;
  border: none;
  background: #42b983;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
.product-list button:hover {
  background: #2c8f6c;
}
</style>
