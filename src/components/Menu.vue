<template>
  <div class="menu">
    <div class="menu__title">
      <div class="menu__title__main">Тату</div>
      <div class="menu__title__submain">Салон</div>
    </div>
    <div
      :class="[
        'menu__subblock',
        'menu__subblock--click',
        { 'step--hide': step !== 0 },
      ]"
    >
      Выйти из тату салона
    </div>
    <div
      :class="[
        'menu__subblock',
        'menu__subblock--buttons',
        { 'step--hide': step === 0 },
      ]"
    >
      <div class="menu__subblock__item" @click="changeStep(0, false)">
        Назад
      </div>
      <div class="menu__subblock__item">Выйти</div>
    </div>
    <div class="menu__block">
      <template v-if="step === 0">
        <div
          class="block"
          v-for="cat in categories"
          :key="cat.id"
          @click="changeStep(1, cat.id)"
        >
          <div class="block__category">
            <div class="block__category__title">{{ cat.title }}</div>
            <div class="block__category__subtitle">{{ cat.name }}</div>
          </div>
        </div>
      </template>
      <template v-if="cat.length">
        <div
          class="block"
          v-for="tattoo in cat"
          :key="tattoo.id"
          @click="addItemToCart(tattoo)"
        >
          <div class="block__item">
            <div class="block__item__title">{{ tattoo.name }}</div>
            <div class="block__item__subtitle">{{ tattoo.price }}$</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    categories() {
      return this.$store.getters["tattooCategories"] || [];
    },

    cat() {
      return this.$store.getters["currentCat"];
    },

    step() {
      return this.$store.getters["tattooStep"] || 0;
    },
  },

  methods: {
    changeStep(step, id) {
      this.$store.dispatch("changeStep", { step, id });
    },

    addItemToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
  },
};
</script>
