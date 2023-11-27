<template>
  <div class="sidebar-wrapper">
    <div
      class="sidebar sidebar-collapse"
      :class="expanded ? 'collapsed' : ''"
      id="sidebar"
    >
      <div class="sidebar__menu-group">
        <ul class="sidebar_nav">
          <li :class="currentRouteName == '/' ? 'active' : ''">
            <router-link to="/">
              <span class="nav-icon uil uil-create-dashboard"></span>
              <span class="menu-text">Dashboard</span>
              <!-- <span class="toggle-icon"></span> -->
            </router-link>
          </li>
          <li :class="currentRouteName == '/tryoutskd' ? 'active' : ''">
            <router-link to="/tryoutskd">
              <span class="nav-icon uil uil-clipboard-notes"></span>
              <span class="menu-text">Try Out SKD CPNS</span>
            </router-link>
          </li>
          <li :class="currentRouteName == '/materiskd' ? 'active' : ''">
            <router-link to="/materiskd">
              <span class="nav-icon uil uil-meeting-board"></span>
              <span class="menu-text">Materi SKD</span>
            </router-link>
          </li>
          <li :class="currentRouteName == '/akun' ? 'active' : ''">
            <router-link to="/akun">
              <span class="nav-icon uil uil-users-alt"></span>
              <span class="menu-text">Akun</span>
            </router-link>
          </li>
          <li :class="currentRouteName == '/testimoni' ? 'active' : ''">
            <router-link to="/testimoni">
              <span class="nav-icon uil uil-book-open"></span>
              <span class="menu-text">Testimoni</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
    expanded: Boolean,
  },
  // data() {
  //   return {
  //     currentRouteName: this.$router.currentRoute.value.path,
  //   };
  // },
  // mounted() {
  //   console.log(this.currentRouteName);
  // },
  computed: {
    currentRouteName() {
      return "/" + this.$router.currentRoute.value.path.split("/")[1];
    },
  },
};
</script>

<style></style>
