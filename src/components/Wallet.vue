<template>
  <div class="wallet">
    <div :class="['card', { 'card--closed': !visible }]">
      <div class="card__title" @click="showCart">
        <div class="card__title__icon"></div>
        <div class="card__title__name">Корзина</div>
        <div class="card__title__value">{{ cartCount }}</div>
        <div class="card__title__arrow"></div>
      </div>
      <transition name="slide">
        <div class="card__content">
          <div class="card-item" v-for="item in cart" :key="item.name">
            <div class="card-item__name">
              <div>{{ item.name }}</div>
              <div class="card-item__name__price">{{ item.price }}$</div>
            </div>
            <div
              class="card-item__remove"
              @click="removeItemFromCart(item)"
            ></div>
          </div>
        </div>
      </transition>
    </div>
    <div class="buttons">
      <div class="buttons__result">
        <div>К оплате</div>
        <div class="buttons__result__value">{{ totalPrice }}$</div>
      </div>
      <div
        :class="[
          'buttons__item',
          { 'buttons__item--card': paymentMethod === 1 }
        ]"
        @click="changePaymentMethod(0)"
      >
        Картой
      </div>
      <div
        :class="[
          'buttons__item',
          { 'buttons__item--card': paymentMethod === 0 }
        ]"
        @click="changePaymentMethod(1)"
      >
        Наличкой
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    visible() {
      return this.$store.getters["cartVisible"];
    },

    cart() {
      return this.$store.getters["cart"] || [];
    },

    totalPrice() {
      return this.$store.getters["totalCartPrice"];
    },

    paymentMethod() {
      return this.$store.getters["cartPaymentMethod"] || 0;
    },

    cartCount() {
      if (this.cart.length === 0) {
        this.showCart();
        return "Корзина пуста";
      }
      return this.$store.getters["cartCount"];
    }
  },

  methods: {
    showCart() {
      if (!this.cart.length) return;
      this.$store.dispatch("toggleCart");
    },

    removeItemFromCart(item) {
      this.$store.dispatch("removeFromCart", item);
    },

    changePaymentMethod(method) {
      this.$store.dispatch("changePaymentMethod", method);
    }
  }
};
</script>
