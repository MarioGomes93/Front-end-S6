import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [], // Lista de produtos no carrinho
  },
  mutations: {
    // Função para mudar o estado (adicionar ao array)
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    },
  },
  actions: {
    // Ação que o botão vai chamar
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
  },
  getters: {
    // Contador reativo para mostrar na tela
    cartItemCount: state => {
      return state.cart.length;
    },
  }
});