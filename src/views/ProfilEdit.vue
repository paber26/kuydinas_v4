<template>
  <div class="contents" :class="expanded ? 'expanded' : ''">
    <div class="profile-setting">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-main">
              <h4 class="text-capitalize breadcrumb-title">Edit Profil</h4>
              <div class="breadcrumb-action justify-content-center flex-wrap">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <router-link to="/"
                        ><i class="uil uil-estate"></i>Home</router-link
                      >
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Edit Profil
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <!-- Profile Acoount -->
          <div class="card mb-25">
            <div class="card-body text-center p-0">
              <div
                class="account-profile border-bottom pt-25 px-25 pb-0 flex-column d-flex align-items-center"
              >
                <div class="ap-img mb-20 pro_img_wrapper">
                  <img
                    class="ap-img__main rounded-circle wh-120"
                    :src="user.picture"
                    alt="profile"
                  />
                </div>
                <div class="ap-nameAddress pb-3">
                  <h5 class="ap-nameAddress__title">{{ user.name }}</h5>
                </div>
              </div>
            </div>
            <!-- Edit Profile -->
            <div class="card">
              <div class="card-body">
                <div class="row justify-content-center">
                  <div class="col-xxl-6">
                    <div class="edit-profile__body mx-xl-20">
                      <form class="text-start">
                        <div class="form-group mb-20">
                          <div class="countryOption">
                            <label for="countryOption"> Provinsi </label>
                            <select
                              v-model="detailuser.provinsi"
                              class="js-example-basic-single js-states form-control"
                            >
                              <option value="-">Pilih Provinsi</option>
                              <option value="Bali">Bali</option>
                              <option value="Bangka Belitung">
                                Bangka Belitung
                              </option>
                              <option value="Banten">Banten</option>
                              <option value="Bengkulu">Bengkulu</option>
                              <option value="Daerah Istimewa Yogyakarta">
                                Daerah Istimewa Yogyakarta
                              </option>
                              <option value="DKI Jakarta">DKI Jakarta</option>
                              <option value="Gorontalo">Gorontalo</option>
                              <option value="Jambi">Jambi</option>
                              <option value="Jawa Barat">Jawa Barat</option>
                              <option value="Jawa Tengah">Jawa Tengah</option>
                              <option value="Jawa Timur">Jawa Timur</option>
                              <option value="Kalimantan Barat">
                                Kalimantan Barat
                              </option>
                              <option value="Kalimantan Selatan">
                                Kalimantan Selatan
                              </option>
                              <option value="Kalimantan Tengah">
                                Kalimantan Tengah
                              </option>
                              <option value="Kalimantan Timur">
                                Kalimantan Timur
                              </option>
                              <option value="Kalimantan Utara">
                                Kalimantan Utara
                              </option>
                              <option value="Kepulauan Riau">
                                Kepulauan Riau
                              </option>
                              <option value="Lampung">Lampung</option>
                              <option value="Maluku">Maluku</option>
                              <option value="Maluku Utara">Maluku Utara</option>
                              <option value="Nanggroe Aceh Darussalam">
                                Nanggroe Aceh Darussalam
                              </option>
                              <option value="Nusa Tenggara Barat">
                                Nusa Tenggara Barat
                              </option>
                              <option value="Nusa Tenggara Timur">
                                Nusa Tenggara Timur
                              </option>
                              <option value="Papua">Papua</option>
                              <option value="Papua Barat">Papua Barat</option>
                              <option value="Papua Barat Daya">
                                Papua Barat Daya
                              </option>
                              <option value="Papua Pegunungan">
                                Papua Pegunungan
                              </option>
                              <option value="Papua Selatan">
                                Papua Selatan
                              </option>
                              <option value="Papua Tengah">Papua Tengah</option>
                              <option value="Riau">Riau</option>
                              <option value="Sulawesi Barat">
                                Sulawesi Barat
                              </option>
                              <option value="Sulawesi Selatan">
                                Sulawesi Selatan
                              </option>
                              <option value="Sulawesi Tengah">
                                Sulawesi Tengah
                              </option>
                              <option value="Sulawesi Tenggara">
                                Sulawesi Tenggara
                              </option>
                              <option value="Sulawesi Utara">
                                Sulawesi Utara
                              </option>
                              <option value="Sumatera Barat">
                                Sumatera Barat
                              </option>
                              <option value="Sumatera Selatan">
                                Sumatera Selatan
                              </option>
                              <option value="Sumatera Utara">
                                Sumatera Utara
                              </option>
                            </select>
                            <span
                              v-if="detailuser.warning_provinsi"
                              class="color-danger text-sm"
                              >Pilih provinsi asal</span
                            >
                          </div>
                        </div>
                        <div class="form-group mb-20">
                          <label for="phoneNumber1">Nomor WhatsApp</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="detailuser.nowa"
                          />
                          <span
                            v-if="detailuser.warning_nowa"
                            class="color-danger text-sm"
                            >{{ detailuser.warning_nowa_pesan }}</span
                          >
                        </div>

                        <div class="button-group d-flex flex-wrap pt-30 mb-15">
                          <button
                            @click.prevent="simpan()"
                            class="btn btn-primary btn-default btn-squared me-15 btn-sm"
                          >
                            Simpan Profil
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Edit Profile End -->
          </div>
          <!-- Profile Acoount End -->
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
      detailuser: {
        email: this.user.email,
        provinsi: this.user.provinsi,
        nowa: this.user.nowa,
        warning_provinsi: false,
        warning_nowa: false,
        warning_nowa_pesan: "Masukkan nomor WhatsApp",
      },
    };
  },
  methods: {
    simpan() {
      if (this.detailuser.provinsi == "-") {
        this.detailuser.warning_provinsi = true;
        return;
      } else {
        this.detailuser.warning_provinsi = false;
      }
      if (this.detailuser.nowa == "-") {
        this.detailuser.warning_nowa = true;
        console.log(this.detailuser.nowa.length);
        return;
      } else if (
        this.detailuser.nowa.length < 11 ||
        this.detailuser.nowa.length > 14
      ) {
        this.detailuser.warning_nowa = true;
        this.detailuser.warning_nowa_pesan =
          "Masukkan nomor whatsapp yang sesuai";
        return;
      } else {
        this.detailuser.warning_nowa = false;
      }
      console.log(this.detailuser);

      axios
        .post(this.http + "/api/editakun", this.detailuser)
        .then((response) => {
          console.log(response.data);
          if (response.data == "berhasil") {
            window.location.href = "/";
          }
        });
    },
  },
};
</script>
