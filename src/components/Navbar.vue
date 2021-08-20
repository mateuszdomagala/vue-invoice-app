<template>
  <div class="navbar">
    <div class="navbar__logo">
      <router-link :to="{ name: 'Home' }"
        ><img src="../assets/logo.svg" alt="logo"
      /></router-link>
    </div>
    <div class="navbar__items"></div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: var(--background-nav-color);
  min-height: 90px;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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
}
</style>
