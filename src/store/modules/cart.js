const state = () => ({
  cart: [],
  cartVisible: false,
  paymentMethod: 0, // способ оплаты - 0 карта, 1 наличные,
  totalCartPrice: 0,
});

const getters = {
  cart: (state) => state.cart,

  cartVisible: (state) => state.cartVisible,

  totalCartPrice: (state) => {
    if (!state.cart.length) {
      state.totalCartPrice = 0;
      return 0;
    }
    return state.totalCartPrice;
  },

  cartPaymentMethod: (state) => state.paymentMethod,

  cartCount: (state) => {
    const length = state.cart.length;
    const count = length % 10;
    if (length > 10 && length < 20) return `${length} элементов`;
    if (count > 1 && count < 5) return `${length} элемента`;
    if (count === 1) return `${length} элемент`;

    return `${length} элементов`;
  },
};

const actions = {
  addToCart({ commit }, product) {
    commit("ADD_ITEM_TO_CART", product);
  },

  removeFromCart({ commit }, id) {
    commit("REMOVE_ITEM_FROM_CART", id);
  },

  toggleCart({ commit }) {
    commit("CHANGE_VISIBLE_STATUS");
  },

  changePaymentMethod({ commit }, method) {
    commit("CHANGE_PAYMENT_METHOD", method);
  },
};

const mutations = {
  ADD_ITEM_TO_CART(state, product) {
    const candidate = state.cart.filter((el) => el.id === product.id);
    if (candidate.length) {
      return;
    }
    state.cart.push(product);
    state.totalCartPrice += product.price;
  },

  REMOVE_ITEM_FROM_CART(state, item) {
    const element = state.cart.filter((el) => el.id === item.id);
    if (!element.length) return;

    state.totalCartPrice -= item.price;
    const index = state.cart.indexOf(element[0]);
    if (index > -1) {
      if (state.cart.length === 1) {
        state.cartVisible = false;
      }
      state.cart.splice(index, 1);
    }
  },

  CHANGE_VISIBLE_STATUS(state) {
    state.cartVisible = !state.cartVisible;
  },

  CHANGE_PAYMENT_METHOD(state, method) {
    state.paymentMethod = method;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
