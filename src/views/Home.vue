<template>
  <div :class="{ 'modal-overlay': newInvoice }">
    <transition name="invoice-modal">
      <invoice-modal v-if="newInvoice" @close="toggleInvoiceModal" />
    </transition>
  </div>
  <div class="container">
    <div class="header">
      <!-- <div class="header__invoices">Invoices</div>
      <div class="header__filter">Filter by Status</div> -->
      <button
        class="header__button btn btn--purple"
        type="button"
        @click="toggleInvoiceModal"
      >
        <img src="../assets/icon-plus.svg" alt="add icon" />New Invoice
      </button>
    </div>
  </div>
</template>

<script>
import InvoiceModal from "../components/InvoiceModal.vue";
import { ref } from "vue";

export default {
  name: "Home",
  components: { InvoiceModal },
  setup() {
    const newInvoice = ref(false);

    const toggleInvoiceModal = () => {
      newInvoice.value = !newInvoice.value;
    };

    return {
      newInvoice,
      toggleInvoiceModal,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  transition: 0.4s;
}

.invoice-modal-enter-active,
.invoice-modal-leave-active {
  transition: 0.4s ease all;
}
.invoice-modal-enter-from,
.invoice-modal-leave-to {
  transform: translateX(-660px);
}

.container {
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  &__button {
    display: flex;
    gap: 15px;
    align-items: center;
    padding: 10px 15px 10px 10px;

    & img {
      background-color: #fff;
      border-radius: 50%;
      padding: 10px;
    }
  }
}
</style>
