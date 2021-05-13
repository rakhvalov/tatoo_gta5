import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart";
import tattoo from "./modules/tattoo";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    tattoo,
  },
});
