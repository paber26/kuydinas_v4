<template>
  <div class="contents" :class="expanded ? 'expanded' : ''">
    <div class="container-fluid">
      <div class="profile-content mb-50">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-main">
              <h4 class="text-capitalize breadcrumb-title">Profil Saya</h4>
              <div class="breadcrumb-action justify-content-center flex-wrap">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="#"><i class="uil uil-estate"></i>Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Profil Saya
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          <!-- Profile Acoount -->
          <div class="card mb-25">
            <div class="card-body text-center pt-sm-30 pb-sm-0 px-25 pb-0">
              <div class="account-profile">
                <div class="ap-img w-100 d-flex justify-content-center">
                  <!-- Profile picture image-->
                  <img
                    class="ap-img__main rounded-circle mb-3 wh-120 d-flex bg-opacity-primary"
                    :src="user.picture"
                    alt="profile"
                  />
                </div>
                <div class="ap-nameAddress pb-3 pt-1">
                  <h5 class="ap-nameAddress__title">{{ user.name }}</h5>
                  <p class="ap-nameAddress__subTitle fs-14 m-0">
                    <img
                      src="img/svg/map-pin.svg"
                      alt="map-pin"
                      class="svg"
                    />{{ user.provinsi }}
                  </p>
                  <p class="ap-nameAddress__subTitle fs-14 m-0">
                    <img class="svg" src="img/svg/mail.svg" alt="mail" />{{
                      user.email
                    }}
                  </p>
                  <p class="ap-nameAddress__subTitle fs-14 m-0">
                    <img src="img/svg/phone.svg" alt="phone" class="svg" />
                    {{ user.nowa }}
                  </p>
                </div>
                <div
                  class="ap-button button-group d-flex justify-content-center flex-wrap"
                >
                  <router-link
                    to="/profil/edit"
                    class="btn btn-primary btn-default btn-squared text-capitalize px-25"
                  >
                    edit
                  </router-link>
                </div>
              </div>

              <div class="card-footer mt-20 pt-20 pb-20 px-0 bg-transparent">
                <div
                  class="profile-overview d-flex justify-content-between flex-wrap"
                >
                  <div class="po-details">
                    <h6 class="po-details__title pb-1">$72,572</h6>
                    <span class="po-details__sTitle">Total Koin</span>
                  </div>
                  <div class="po-details">
                    <h6 class="po-details__title pb-1">3,257</h6>
                    <span class="po-details__sTitle">Tryout diikuti</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Profile Acoount End -->

          <!-- Profile User Bio -->
          <!-- <div class="card mb-25">
            <div class="user-info border-bottom">
              <div
                class="card-header border-bottom-0 pt-sm-25 pb-sm-0 px-md-25 px-3"
              >
                <div class="profile-header-title">Informasi Kontak</div>
              </div>
              <div class="card-body pt-md-1 pt-0">
                <div class="user-content-info">
                  <p class="user-content-info__item">
                    <img class="svg" src="img/svg/mail.svg" alt="mail" />{{
                      user.email
                    }}
                  </p>
                  <p class="user-content-info__item">
                    <img src="img/svg/phone.svg" alt="phone" class="svg" />
                    {{ user.nowa }}
                  </p>
                </div>
              </div>
            </div>
          </div> -->
          <!-- Profile User Bio End -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["user", "eid", "expanded"],
  data() {
    return {
      tryoutskd: [],
      kointidakcukup: false,
    };
  },
  mounted() {
    console.log(this.user);
    axios
      .get(this.http + "/api/tryoutskd/getdetail/" + this.eid)
      .then((response) => {
        this.tryoutskd = response.data;
      });
  },
  methods: {
    konfirmasi() {
      // let data = [
      //   {
      //     email: this.user.email,
      //   },
      // ];
      // return;
      // document.getElementById('')
      this.$refs.Close.click();
      axios
        .post(this.http + "/api/tryoutskd/ikuti/konfirmasi", {
          email: this.user.email,
          eid: this.eid,
          title: this.tryoutskd.title,
          harga: this.tryoutskd.harga,
        })
        .then((response) => {
          // this.tryoutskd = response.data;
          if (response.data == "koin tidak cukup") {
            // this.$router.push("/tryoutskd/lihat/" + this.eid);
            this.$router.push("/dompet/true");
            this.kointidakcukup = true;
          }
          if (response.data == "berhasil") {
            window.location.href = "/tryoutskd";
            // this.$router.push("/tryoutskd");
          }
        });
    },
  },
};
</script>
