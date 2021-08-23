<template>
  <div class="navbar">
    <div class="navbar__logo">
      <router-link :to="{ name: 'Home' }"
        ><img src="../assets/logo.svg" alt="logo"
      /></router-link>
    </div>
    <div class="navbar__items">
      <div class="navbar__logout" v-if="user">
        <button class="btn btn--purple" @click="handleLogout">
          <img src="../assets/sign-out-alt.svg" alt="sign-out" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();
    const router = useRouter();

    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        router.push({ name: "Login" });
      }
    };

    return { handleLogout, user };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: var(--background-nav-color);
  min-height: 90px;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 900px) {
    min-height: 100%;
    min-width: 90px;
    border-radius: 0 20px 20px 0;
    flex-direction: column;
  }

  &__logo {
    border-radius: 0 20px 20px 0;
    background-color: var(--button-color-primary);
    width: 90px;
    height: 90px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      height: 50%;
      width: 100%;
      left: 0;
      bottom: 0;
      background-color: var(--button-color-primary-light);
      border-radius: 20px 0px;
      transition: 0.2s;
    }

    &:hover::after {
      height: 80%;
    }

    & img {
      position: relative;
      z-index: 1;
      padding: calc(100% / 3);
      transition: 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  &__logout {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    border-left: 1px solid var(--font-color-tertiary);
    height: 90px;

    @media (min-width: 900px) {
      padding: 30px 0;
      border-left: 0;
      border-top: 1px solid var(--font-color-tertiary);
      width: 90px;
    }

    & button {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      padding: 0;
    }
  }
}
</style>
