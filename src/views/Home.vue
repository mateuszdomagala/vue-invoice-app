<template>
  <div :class="{ 'modal-overlay': newInvoice }">
    <transition name="invoice-modal">
      <invoice-modal v-if="newInvoice" @close="toggleInvoiceModal" />
    </transition>
  </div>
  <div class="container">
    <div class="header">
      <div class="header__invoices">
        <h1>Invoices</h1>
        <p class="header__invoices__total">
          There are {{ invoices.length }} total invoices
        </p>
        <p class="header__invoices__total--short">
          {{ invoices.length }} invoices
        </p>
      </div>
      <div class="header__filter">Filter by Status</div>
      <button
        class="header__button btn btn--purple"
        type="button"
        @click="toggleInvoiceModal"
      >
        <img src="../assets/icon-plus.svg" alt="add icon" />New Invoice
      </button>
    </div>
    <invoices-list :invoices="invoices" :error="error" />
  </div>
</template>

<script>
import InvoiceModal from "../components/InvoiceModal.vue";
import InvoicesList from "../components/InvoicesList.vue";
import getCollection from "../composables/getCollection";

import { ref } from "vue";

export default {
  name: "Home",
  components: { InvoiceModal, InvoicesList },
  setup() {
    const newInvoice = ref(false);
    const { invoices, error } = getCollection("invoices", "timestamp");

    const toggleInvoiceModal = () => {
      newInvoice.value = !newInvoice.value;
    };

    return {
      newInvoice,
      toggleInvoiceModal,
      invoices,
      error,
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
  padding: 20px;
  max-width: 700px;
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 50px;

  @media (min-width: 900px) {
    margin: 50px 0;
  }

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

  &__invoices {
    flex: 2;

    h1 {
      font-weight: 700;
    }

    p {
      font-size: 0.8rem;
      margin-top: 5px;
    }

    &__total {
      display: none;

      @media (min-width: 900px) {
        display: block;
      }

      &--short {
        @media (min-width: 900px) {
          display: none;
        }
      }
    }
  }

  &__filter {
    flex: 1;
  }
}
</style>
