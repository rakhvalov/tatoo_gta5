<template>
  <div class="modal">
    <div class="modal-head">
      <h2 class="modal-title">Информация о бизнесе</h2>
      <div class="modal-close" @click="closeModal">
        <img src="@/assets/img/modal-close.svg" alt="close" />
      </div>
    </div>
    <div class="modal-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>
