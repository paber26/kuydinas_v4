<template>
  <header class="header-top">
    <nav class="navbar navbar-light">
      <div class="navbar-left">
        <div class="logo-area">
          <router-link class="navbar-brand" to="/">
            <img class="dark" src="/img/logo-kuydinas-2.png" alt="logo" />
            <img class="light" src="/img/logo-kuydinas-2.png" alt="logo" />
          </router-link>
          <a href="#" @click="expanded()" class="sidebar-toggle">
            <img class="svg" src="/img/svg/align-center-alt.svg" alt="img"
          /></a>
        </div>
      </div>
      <!-- ends: navbar-left -->
      <div class="navbar-right">
        <ul class="navbar-right__menu">
          <li class="nav-author">
            <div class="dropdown-custom">
              <a href="javascript:;" class="nav-item-toggle"
                ><img :src="user.picture" alt="" class="rounded-circle" />
                <span class="nav-item__title"
                  >{{ user.name
                  }}<i class="las la-angle-down nav-item__arrow"></i
                ></span>
              </a>
              <div class="dropdown-parent-wrapper">
                <div class="dropdown-wrapper">
                  <div class="nav-author__info">
                    <div class="author-img">
                      <img :src="user.picture" alt="" class="rounded-circle" />
                    </div>
                    <div>
                      <h6>{{ user.name }}</h6>
                      <span>User</span>
                    </div>
                  </div>
                  <div class="nav-author__options">
                    <ul class="text-start">
                      <li>
                        <router-link to="/profil">
                          <i class="uil uil-user"></i> Profil</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/dompet">
                          <i class="uil uil-wallet"></i> Dompet</router-link
                        >
                      </li>
                      <li>
                        <a href=""> <i class="uil uil-bell"></i> Try Out</a>
                      </li>
                    </ul>
                    <a href="#" @click="logout" class="nav-author__signout">
                      <i class="uil uil-sign-out-alt"></i> Keluar</a
                    >
                  </div>
                </div>
                <!-- ends: .dropdown-wrapper -->
              </div>
            </div>
          </li>
          <!-- ends: .nav-author -->
        </ul>
        <!-- ends: .navbar-right__menu -->
      </div>
      <!-- ends: .navbar-right -->
    </nav>
  </header>
</template>

<script>
import { googleLogout } from "vue3-google-login";

export default {
  props: {
    user: Object,
    listenerChild: Object,
  },
  data() {
    return {
      loggedIn: true,
    };
  },
  methods: {
    logout() {
      googleLogout();
      this.loggedIn = false;
      this.$emit("listenerChild", { stt: "loggedIn", loggedIn: false });
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("user");
    },
    expanded() {
      this.$emit("listenerChild", { stt: "expanded" });
    },
  },
};
</script>

<style></style>
