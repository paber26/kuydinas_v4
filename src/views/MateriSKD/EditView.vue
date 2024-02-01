<template>
  <div class="contents" :class="expanded ? 'expanded' : ''">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-main">
            <h4 class="text-capitalize breadcrumb-title">Tambah Materi SKD</h4>
            <div class="breadcrumb-action justify-content-center flex-wrap">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/"
                      ><i class="uil uil-estate"></i>Home</router-link
                    >
                  </li>
                  <li class="breadcrumb-item">
                    <router-link to="/materiskd">Materi SKD</router-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Tambah
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="form-element">
        <div class="row">
          <div class="col-lg-12">
            <div class="card card-horizontal card-default card-md mb-4">
              <div class="d-flex justify-content-between align-center">
                <div class="card-header border-0">
                  <h6>Informasi Try Out</h6>
                </div>
              </div>
              <div class="card-body py-md-30">
                <div class="horizontal-form">
                  <div class="form-group row">
                    <div class="col-sm-3 d-flex aling-items-center">
                      <label
                        class="col-form-label color-dark fs-14 fw-500 align-center"
                        >Judul blog</label
                      >
                    </div>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                        v-model="detailblog.judul"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <div class="col-sm-3 d-flex aling-items-center">
                      <label
                        class="col-form-label color-dark fs-14 fw-500 align-center"
                        >Kategori</label
                      >
                    </div>
                    <div class="col-sm-9">
                      <select
                        v-model="detailblog.kategori"
                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                      >
                        <option value="-">Pilih Kategori</option>
                        <option value="twk">TWK</option>
                        <option value="tiu">TIU</option>
                        <option value="tkp">TKP</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-3 d-flex aling-items-center">
                      <label
                        class="col-form-label color-dark fs-14 fw-500 align-center"
                        >Isi blog</label
                      >
                    </div>
                    <div class="col-sm-9">
                      <textarea
                        type="text"
                        class="form-control ip-light radius-xs b-light"
                        rows="20"
                        v-model="detailblog.isi"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  class="button-group d-flex pt-sm-25 justify-content-md-end justify-content-start"
                >
                  <button
                    @click.prevent="simpandanlanjutkan()"
                    class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2 btn-sm"
                  >
                    Simpan &amp; Lihat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ends: .card -->
      </div>
    </div>
    <!-- ends: .dm-page-content -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    expanded: Boolean,
  },
  data() {
    return {
      detailblog: {
        judul: "",
        kategori: "-",
        isi: "",
      },
    };
  },
  methods: {
    simpandanlanjutkan() {
      if (
        this.detailblog.judul == "" &&
        this.detailblog.kategori == "-" &&
        this.detailblog.isi == ""
      ) {
        // this.$swal("Belum lengkap");
        console.log("belum lengkap");
        return;
      } else {
        axios
          .post(this.http + "/api/tambahmateriskd", this.detailblog)
          .then((response) => {
            //   this.tryoutskd = response.data;
            if (response.data == "berhasil") {
              this.$router.push("/materiskd");
            }
          });
      }
      //   console.log(this.detailblog);
    },
  },
};
</script>

<style></style>
