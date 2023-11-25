<template>
  <div v-if="true">
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
  </div>

  <div v-else>
    <main class="main-content">
      <div class="admin">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-xxl-3 col-xl-4 col-md-6 col-sm-8">
              <div class="edit-profile">
                <div class="edit-profile__logos">
                  <a href="index.html">
                    <img class="dark" src="img/logo-dark.png" alt="" />
                    <img class="light" src="img/logo-white.png" alt="" />
                  </a>
                </div>
                <div class="card border-0">
                  <div class="card-header">
                    <div class="edit-profile__title">
                      <h6>Sign in HexaDash</h6>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="edit-profile__body">
                      <div class="form-group mb-25">
                        <label for="username">Username or Email Address</label>
                        <input
                          type="text"
                          class="form-control"
                          id="username"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div class="form-group mb-15">
                        <label for="password-field">password</label>
                        <div class="position-relative">
                          <input
                            id="password-field"
                            type="password"
                            class="form-control"
                            name="password"
                            placeholder="Password"
                          />
                          <div
                            class="uil uil-eye-slash text-lighten fs-15 field-icon toggle-password2"
                          ></div>
                        </div>
                      </div>
                      <div class="admin-condition">
                        <div class="checkbox-theme-default custom-checkbox">
                          <input
                            class="checkbox"
                            type="checkbox"
                            id="check-1"
                          />
                          <label for="check-1">
                            <span class="checkbox-text">Keep me logged in</span>
                          </label>
                        </div>
                        <a href="forget-password.html">forget password?</a>
                      </div>
                      <div
                        class="admin__button-group button-group d-flex pt-1 justify-content-md-start justify-content-center"
                      >
                        <button
                          class="btn btn-primary btn-default w-100 btn-squared text-capitalize lh-normal px-50 signIn-createBtn"
                        >
                          sign in
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- End: .card-body -->
                  <div class="admin-topbar">
                    <p class="mb-0">
                      Don't have an account?
                      <a href="sign-up.html" class="color-primary"> Sign up </a>
                    </p>
                  </div>
                  <!-- End: .admin-topbar  -->
                </div>
                <!-- End: .card -->
              </div>
              <!-- End: .edit-profile -->
            </div>
            <!-- End: .col-xl-5 -->
          </div>
        </div>
      </div>
      <!-- End: .admin-element  -->
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
  </div>
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

  // mounted() {
  //   console.log(this.currentRouteName);
  // },
  // computed: {
  //   currentRouteName() {
  //     console.log(this.$route.name);
  //     return this.$route.name;
  //   },
  // },
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
