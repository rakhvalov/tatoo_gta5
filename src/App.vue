<template>
  <div id="app">
    <div class="wrapper">
      <div class="content">
        <Menu />
        <Wallet />
        <Modal v-if="visible" @closeModal="closeModal">
          <div class="modal-place">Магазин одежды ADAMS</div>
          <div class="modal-wrap">
            <div class="modal-owner">
              <div class="modal-owner__label">Владелец бизнеса</div>
              <div class="modal-owner__name">Maksim Adams</div>
            </div>
            <div class="modal-owner">
              <div class="modal-owner__label">Фракция</div>
              <div class="modal-owner__name">Балассы</div>
            </div>
          </div>
          <button class="modal-button w100">Купить за 50000$</button>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Wallet from "@/components/Wallet.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "App",

  components: {
    Wallet,
    Menu,
    Modal,
  },

  data: () => ({
    visible: true,
  }),

  methods: {
    closeModal() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app.scss";
</style>
