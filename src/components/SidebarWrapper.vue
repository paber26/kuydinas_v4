<template>
  <div class="sidebar-wrapper">
    <div class="sidebar sidebar-collapse" id="sidebar">
      <div class="sidebar__menu-group">
        <ul class="sidebar_nav">
          <li>
            <router-link to="/" class="active">
              <span class="nav-icon uil uil-create-dashboard"></span>
              <span class="menu-text">Dashboard</span>
              <!-- <span class="toggle-icon"></span> -->
            </router-link>
          </li>
          <li>
            <router-link to="/tryoutskd" class="">
              <span class="nav-icon uil uil-clipboard-notes"></span>
              <span class="menu-text">Try Out SKD CPNS</span>
            </router-link>
          </li>
          <li>
            <router-link to="/pembayaran" class="">
              <span class="nav-icon uil uil-check-square"></span>
              <span class="menu-text">Pembayaran</span>
            </router-link>
          </li>
          <li>
            <router-link to="/akun" class="">
              <span class="nav-icon uil uil-users-alt"></span>
              <span class="menu-text">Akun</span>
            </router-link>
          </li>
          <li class="">
            <router-link to="/testimoni" class="">
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
export default {};
</script>

<style></style>
