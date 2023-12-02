<template>
  <div class="contents" :class="expanded ? 'expanded' : ''">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-main">
            <h4 class="text-capitalize breadcrumb-title">Edit Try Out</h4>
            <div class="breadcrumb-action justify-content-center flex-wrap">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/"
                      ><i class="uil uil-estate"></i>Home</router-link
                    >
                  </li>
                  <li class="breadcrumb-item">
                    <router-link to="/tryoutskd">Try Out SKD</router-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Edit Try Out
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
                <div class="card-header">
                  <h6>Informasi Try Out</h6>
                </div>
                <div class="action-btn mx-2">
                  <router-link
                    :to="'/tryoutskd/lihat/' + eid"
                    class="btn btn-primary"
                    >Lihat</router-link
                  >
                </div>
              </div>
              <div class="card-body py-md-30">
                <div class="horizontal-form">
                  <div class="form-group row">
                    <div class="col-sm-3 d-flex aling-items-center">
                      <label
                        class="col-form-label color-dark fs-14 fw-500 align-center"
                        >Nama Try Out</label
                      >
                    </div>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                        v-model="info.title"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-3 d-flex aling-items-center">
                      <label
                        class="col-form-label color-dark fs-14 fw-500 align-center"
                        >Jumlah TWK</label
                      >
                    </div>
                    <div class="col-sm-9">
                      <input
                        type="number"
                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                        v-model="info.twk"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-3 d-flex aling-items-center">
                      <label
                        class="col-form-label color-dark fs-14 fw-500 align-center"
                        >Jumlah TIU</label
                      >
                    </div>
                    <div class="col-sm-9">
                      <input
                        type="number"
                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                        v-model="info.tiu"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-3 d-flex aling-items-center">
                      <label
                        class="col-form-label color-dark fs-14 fw-500 align-center"
                        >Jumlah TKP</label
                      >
                    </div>
                    <div class="col-sm-9">
                      <input
                        type="number"
                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                        v-model="info.tkp"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-3 d-flex aling-items-center">
                      <label
                        class="col-form-label color-dark fs-14 fw-500 align-center"
                        >Waktu Pengerjaan</label
                      >
                    </div>
                    <div class="col-sm-9">
                      <input
                        type="number"
                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                        v-model="info.time"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-3 d-flex aling-items-center">
                      <label
                        class="col-form-label color-dark fs-14 fw-500 align-center"
                        >Harga</label
                      >
                    </div>
                    <div class="col-sm-9">
                      <input
                        type="number"
                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                        v-model="info.harga"
                      />
                    </div>
                  </div>
                  <!-- End of informasi try out -->

                  <div class="form-group row">
                    <div class="col-sm-3 d-flex aling-items-center">
                      <label
                        class="col-form-label color-dark fs-14 fw-500 align-center"
                        >Postingan Instagram</label
                      >
                    </div>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                        v-model="info.postingan"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-3 d-flex aling-items-center">
                      <label
                        class="col-form-label color-dark fs-14 fw-500 align-center"
                        >Grup WhatsApp</label
                      >
                    </div>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                        v-model="info.grupwa"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-3 d-flex aling-items-center">
                      <label
                        class="col-form-label color-dark fs-14 fw-500 align-center"
                        >Informasi</label
                      >
                    </div>
                    <div class="col-sm-9">
                      <textarea
                        type="text"
                        class="form-control ip-light radius-xs b-light"
                        rows="5"
                        v-model="info.informasi"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- ends: .card -->
          </div>
          <!-- Akhir informasi try out -->

          <div class="col-lg-12" v-for="dsoal in soals" :key="dsoal.qid">
            <div class="card card-horizontal card-default card-md mb-4">
              <div class="card-header">
                <h6>Soal nomor {{ dsoal.sn }}</h6>
              </div>
              <div class="card-body" v-if="opsis != ''">
                <div class="horizontal-form">
                  <div class="form-group row">
                    <div class="col-sm-3 d-flex aling-items-center">
                      <label
                        class="col-form-label color-dark fs-14 fw-500 align-center"
                        >Pertanyaan</label
                      >
                    </div>
                    <div class="col-sm-9">
                      <input
                        type="hidden"
                        v-model="dsoal.qid"
                        :name="qidindex(dsoal.sn)"
                      />
                      <textarea
                        type="text"
                        class="form-control ip-light radius-xs b-light"
                        rows="5"
                        v-model="dsoal.qns"
                      ></textarea>
                    </div>
                  </div>

                  <div v-for="(i, pilihan) in rangeopsi(dsoal.sn)" :key="i.eid">
                    <div class="form-group row">
                      <div class="col-sm-3 d-flex aling-items-center">
                        <label
                          class="col-form-label color-dark fs-14 fw-500 align-center"
                          >Opsi {{ String.fromCharCode(pilihan + 65) }}</label
                        >
                      </div>
                      <div class="col-sm-9">
                        <input
                          type="hidden"
                          v-model="opsis[i].optionid"
                          :name="optionidindex(dsoal.sn, pilihan)"
                        />
                        <input
                          type="text"
                          class="form-control ih-medium ip-light radius-xs b-light px-15"
                          v-model="opsis[i].option"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-3 d-flex aling-items-center">
                        <label
                          class="col-form-label color-dark fs-14 fw-500 align-center"
                          >Poin {{ String.fromCharCode(pilihan + 65) }}</label
                        >
                      </div>
                      <div class="col-sm-2">
                        <input
                          type="number"
                          class="form-control ih-medium ip-light radius-xs b-light px-15"
                          :name="poinindex(dsoal.sn, pilihan)"
                          v-model="opsis[i].poin"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- Akhir opsi soal -->

                  <div class="form-group row">
                    <div class="col-sm-3 d-flex aling-items-center">
                      <label
                        class="col-form-label color-dark fs-14 fw-500 align-center"
                        >Pembahasan</label
                      >
                    </div>
                    <div class="col-sm-9">
                      <textarea
                        type="text"
                        class="form-control ip-light radius-xs b-light"
                        rows="5"
                        v-model="dsoal.exp"
                        :name="expindex(dsoal.sn)"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- ends: .card -->
          </div>

          <div class="col-lg-12">
            <button
              class="btn btn-primary btn-default btn-squared mb-4"
              @click="simpanperubahan()"
            >
              Simpan Try Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["eid", "expanded"],
  data() {
    return {
      info: [],
      soals: [],
      opsis: [],
      totalsoal: "",
    };
  },
  mounted() {
    axios
      .get(this.http + "/api/tryoutskd/getsoal/" + this.eid)
      .then((response) => {
        this.info = response.data[0];
        this.soals = response.data[1];
        this.totalsoal = this.soals.length;
      });

    axios
      .get(this.http + "/api/tryoutskd/getopsi/" + this.eid)
      .then((response) => {
        this.opsis = response.data;
      });
  },
  methods: {
    qidindex(val) {
      return "qid" + val.toString();
    },
    optionidindex(val, pilihan) {
      return "optionid" + val.toString() + (pilihan + 1).toString();
    },
    poinindex(val, pilihan) {
      return "poin" + val.toString() + (pilihan + 1).toString();
    },
    expindex(val) {
      return "exp" + val.toString();
    },
    rangeopsi(val) {
      this.rangeop = [];
      for (let i = 5 * (val - 1); i < 5 * val; i++) {
        this.rangeop.push(i);
      }
      return this.rangeop;
    },
    simpanperubahan() {
      // var soaldanopsi = [this.soals, this.opsis];
      axios
        .post(this.http + "/api/tryoutskd/edit/simpan", [
          this.soals,
          this.opsis,
        ])
        .then((response) => {
          // this.info = response.data[0];
          // this.soals = response.data[1];
          // this.totalsoal = this.soals.length;
          console.log(response.data);
        });
    },
  },
};
</script>

<style></style>
