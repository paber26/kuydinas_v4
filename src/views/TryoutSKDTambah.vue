<template>
  <div class="contents">
    <div class="job-apply mt-md-20">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-main">
              <h4 class="text-capitalize breadcrumb-title">
                Tambah Try Out SKD
              </h4>
              <div class="breadcrumb-action justify-content-center flex-wrap">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <router-link to="/"
                        ><i class="uil uil-estate"></i>Dashboard</router-link
                      >
                    </li>
                    <li class="breadcrumb-item" aria-current="page">
                      <router-link to="/tryoutskd">Try Out SKD</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Tambah
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          <div class="row justify-content-center mt-md-25">
            <div class="col-xl-6">
              <div class="card card-default card-md mb-4">
                <div class="card-header">
                  <h6>Masukkan detail</h6>
                </div>
                <div class="card-body pb-md-50">
                  <form class="was-validated">
                    <div class="row mx-n15">
                      <div class="mb-3 px-15">
                        <label class="il-gray fs-14 fw-500 align-center mb-10"
                          >Nama Tryout</label
                        >
                        <input
                          type="text"
                          class="form-control is-invalid ih-medium ip-light radius-xs b-light"
                          v-model="detailskd.title"
                          placeholder="Masukkan nama tryout...."
                          required
                        />
                        <div class="valid-feedback">Oke</div>
                      </div>
                      <div class="mb-3 px-15">
                        <label class="il-gray fs-14 fw-500 align-center mb-10"
                          >Jumlah soal</label
                        >
                        <input
                          type="number"
                          class="form-control is-invalid ih-medium ip-light radius-xs b-light"
                          v-model="detailskd.total"
                          placeholder="Masukkan jumlah soal...."
                          required
                        />
                        <div class="valid-feedback">Oke</div>
                      </div>
                      <div class="mb-3 px-15">
                        <label class="il-gray fs-14 fw-500 align-center mb-10"
                          >Jumlah TWK</label
                        >
                        <input
                          type="number"
                          class="form-control is-invalid ih-medium ip-light radius-xs b-light"
                          v-model="detailskd.twk"
                          placeholder="Masukkan jumlah twk...."
                          required
                        />
                        <div class="valid-feedback">Oke</div>
                      </div>
                      <div class="mb-3 px-15">
                        <label class="il-gray fs-14 fw-500 align-center mb-10"
                          >Jumlah TIU</label
                        >
                        <input
                          type="number"
                          class="form-control is-invalid ih-medium ip-light radius-xs b-light"
                          v-model="detailskd.tiu"
                          placeholder="Masukkan jumlah tiu...."
                          required
                        />
                        <div class="valid-feedback">Oke</div>
                      </div>
                      <div class="mb-3 px-15">
                        <label class="il-gray fs-14 fw-500 align-center mb-10"
                          >Jumlah TKP</label
                        >
                        <input
                          type="number"
                          class="form-control is-invalid ih-medium ip-light radius-xs b-light"
                          v-model="detailskd.tkp"
                          placeholder="Masukkan jumlah tkp...."
                          required
                        />
                        <div class="valid-feedback">Oke</div>
                      </div>
                      <div class="mb-3 px-15">
                        <label class="il-gray fs-14 fw-500 align-center mb-10"
                          >Waktu pengerjaan</label
                        >
                        <input
                          type="number"
                          class="form-control is-invalid ih-medium ip-light radius-xs b-light"
                          v-model="detailskd.time"
                          placeholder="Masukkan waktu pengerjaan...."
                          required
                        />
                        <div class="valid-feedback">Oke</div>
                      </div>
                    </div>
                    <div class="d-flex pt-15 justify-content-center">
                      <button
                        @click.prevent="tambahkantryout()"
                        class="btn btn-primary btn-default btn-squared"
                      >
                        Tambahkan Try Out
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      detailskd: {
        title: null,
        total: null,
        twk: null,
        tiu: null,
        tkp: null,
        time: null,
      },
    };
  },
  methods: {
    tambahkantryout() {
      if (this.detailskd.title == null) return;
      if (
        this.detailskd.total !=
        parseInt(this.detailskd.twk) +
          parseInt(this.detailskd.tiu) +
          parseInt(this.detailskd.tkp)
      )
        return;
      if (this.detailskd.twk == null) return;
      if (this.detailskd.tiu == null) return;
      if (this.detailskd.tkp == null) return;
      if (this.detailskd.time == null) return;

      axios
        .post(this.http + "/api/tryoutskd/tambah", this.detailskd)
        .then((response) => {
          console.log(response.data);
          if (response.data[0] == "berhasil") {
            this.$router.push("/tryoutskd/edit/" + response.data[1]);
          }
        });
    },
  },
};
</script>

<style></style>
