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
  --background-modal-colar: rgb(255, 255, 255);
  --button-color-primary: rgb(123, 92, 250);
  --button-color-primary-light: rgb(146, 119, 255);
  --button-color-secondary: rgb(246, 248, 254);
  --button-color-secondary-dark: rgb(224, 228, 250);
  --error-color: rgb(236, 85, 85);
  --error-color-dark: rgb(219, 47, 47);
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
  --background-modal-colar: rgb(20, 22, 36);
  --button-color-secondary: rgb(37, 41, 70);
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
  transition: 0.2s;
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
  width: 300px;
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

input,
select {
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

  &:invalid {
    border: 1px solid var(--error-color);
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

  &--dark-grayish-blue {
    background-color: var(--background-nav-color);
    color: var(--font-color-tertiary);

    &:hover {
      background-color: #000;
    }
  }

  &--light-gray {
    background-color: var(--button-color-secondary);
    color: var(--font-color-tertiary);

    &:hover {
      background-color: var(--button-color-secondary-dark);
    }
  }

  &--error {
    color: var(--button-color-secondar);
    background-color: var(--error-color);

    &:hover {
      background-color: var(--error-color-dark);
    }
  }
}
</style>
