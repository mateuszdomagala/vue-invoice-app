<template>
  <div class="wrapper">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@400;700&display=swap");

:root {
  --font-color-primary: rgb(12, 14, 22);
  --font-color-secondary: rgb(136, 142, 176);
  --font-color-tertiary: rgb(126, 136, 195);
  --border-color-primary: rgb(224, 228, 250);
  --border-color-secondary: rgb(145, 117, 255);
  --background-color: rgb(248, 248, 251);
  --background-nav-color: rgb(55, 58, 83);
  --background-box-color: rgb(255, 255, 255);
  --button-color-primary: rgb(123, 92, 250);
  --button-color-primary-light: rgb(146, 119, 255);
  --error-color: rgb(236, 85, 85);
}

[data-theme="dark"] {
  --font-color-primary: rgb(255, 255, 255);
  --font-color-secondary: rgb(223, 227, 250);
  --font-color-tertiary: rgb(126, 136, 195);
  --border-color-primary: rgb(37, 41, 70);
  --border-color-secondary: rgb(123, 92, 250);
  --background-color: rgb(20, 22, 37);
  --background-nav-color: rgb(30, 33, 57);
  --background-box-color: rgb(30, 33, 57);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Spartan", sans-serif;
  color: var(--font-color-primary);
  background-color: var(--background-color);
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 900px) {
    flex-direction: row;
  }
}

.form-wrapper {
  margin: auto;
  min-width: 300px;
  border: 1px solid var(--border-color-primary);
  border-radius: 5px;
  padding: 20px;

  &__title {
    margin-bottom: 10px;
  }

  &__error {
    font-size: 0.75rem;
    margin: 20px auto;
    color: var(--error-color);
    padding: 10px;
    border: 1px dashed var(--error-color);
    border-radius: 5px;
  }

  &__link {
    margin-top: 25px;
    padding-top: 20px;
    font-size: 0.75rem;
    text-align: center;
    border-top: 1px solid var(--border-color-primary);

    & a {
      text-decoration: none;
      color: var(--button-color-primary);
      font-weight: 700;

      &:hover {
        opacity: 0.85;
      }
    }
  }
}

input {
  outline: none;
  border: 1px solid var(--border-color-primary);
  background-color: var(--background-box-color);
  padding: 15px;
  display: block;
  width: 100%;
  margin: 10px 0 15px 0;
  transition: 0.2s;
  color: inherit;
  border-radius: 5px;

  &:focus {
    border-color: var(--border-color-secondary);
  }
}

label {
  color: var(--font-color-secondary);
  font-size: 0.7rem;
}

.btn {
  cursor: pointer;
  padding: 16px 24px;
  border-radius: 30px;
  border: none;
  font-size: 0.75rem;
  font-weight: 700;
  margin-right: 8px;
  color: #fff;
  transition: 0.2s;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
  }

  &--purple {
    background-color: var(--button-color-primary);
  }
}
</style>
