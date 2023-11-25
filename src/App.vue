<template>
  <div class="mobile-search">
    <form action="/" class="search-form">
      <img src="img/svg/search.svg" alt="search" class="svg" />
      <input
        class="form-control me-sm-2 box-shadow-none"
        type="search"
        placeholder="Search..."
        aria-label="Search"
      />
    </form>
  </div>
  <div class="mobile-author-actions"></div>

  <HeaderTop></HeaderTop>
  <main class="main-content">
    <SidebarWrapper></SidebarWrapper>

    <router-view />

    <FooterWrapper></FooterWrapper>
  </main>
  <div id="overlayer">
    <div class="loader-overlay">
      <div class="dm-spin-dots spin-lg">
        <span class="spin-dot badge-dot dot-primary"></span>
        <span class="spin-dot badge-dot dot-primary"></span>
        <span class="spin-dot badge-dot dot-primary"></span>
        <span class="spin-dot badge-dot dot-primary"></span>
      </div>
    </div>
  </div>
  <div class="overlay-dark-sidebar"></div>
  <div class="customizer-overlay"></div>
</template>

<script>
import HeaderTop from "./components/HeaderTop.vue";
import SidebarWrapper from "./components/SidebarWrapper.vue";
import FooterWrapper from "./components/FooterWrapper.vue";

export default {
  components: {
    HeaderTop,
    SidebarWrapper,
    FooterWrapper,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
