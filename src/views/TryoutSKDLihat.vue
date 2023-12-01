<template>
  <div class="contents" :class="expanded ? 'expanded' : ''">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-main">
            <h4 class="text-capitalize breadcrumb-title">Lihat Try Out</h4>
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
                    Lihat Try Out
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
                    :to="'/tryoutskd/edit/' + eid"
                    class="btn btn-info"
                    >Edit</router-link
                  >
                </div>
              </div>
              <div class="card-body py-md-30">
                <div class="horizontal-form">
                  <form action="#">
                    <div class="form-group row">
                      <div class="col-sm-3 d-flex aling-items-center">
                        <label
                          class="col-form-label color-dark fs-14 fw-500 align-center"
                          >Nama Try Out</label
                        >
                      </div>
                      <div class="col-sm-9">
                        <span
                          class="form-control ip-light radius-xs b-light px-15 justify-content-start text-start"
                        >
                          {{ info.title }}
                        </span>
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
                        <span
                          class="form-control ip-light radius-xs b-light px-15 justify-content-start text-start"
                        >
                          {{ info.twk }}
                        </span>
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
                        <span
                          class="form-control ip-light radius-xs b-light px-15 justify-content-start text-start"
                        >
                          {{ info.tiu }}
                        </span>
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
                        <span
                          class="form-control ip-light radius-xs b-light px-15 justify-content-start text-start"
                        >
                          {{ info.tkp }}
                        </span>
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
                        <span
                          class="form-control ip-light radius-xs b-light px-15 justify-content-start text-start"
                        >
                          {{ info.time }}
                        </span>
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
                        <span
                          class="form-control ip-light radius-xs b-light px-15 justify-content-start text-start"
                        >
                          {{ info.harga }}
                        </span>
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
                        <span
                          class="form-control ip-light radius-xs b-light px-15 justify-content-start text-start"
                        >
                          {{ info.postingan }}
                        </span>
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
                        <span
                          class="form-control ip-light radius-xs b-light px-15 justify-content-start text-start"
                        >
                          {{ info.grupwa }}
                        </span>
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
                        <span
                          class="form-control ip-light radius-xs b-light px-15 justify-content-start text-start"
                        >
                          {{ info.informasi?.substring(0, 60) + "...." }}
                        </span>
                      </div>
                    </div>
                  </form>
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
              <div class="card-body py-md-30">
                <div class="horizontal-form">
                  <form action="#">
                    <div class="form-group row">
                      <div class="col-sm-3 d-flex aling-items-center">
                        <label
                          class="col-form-label color-dark fs-14 fw-500 align-center"
                          >Pertanyaan {{ dsoal.sn }}</label
                        >
                      </div>
                      <div class="col-sm-9">
                        <span
                          type="text"
                          class="form-control ip-light radius-xs b-light px-15 justify-content-start text-start"
                          v-html="dsoal.qns"
                        ></span>
                      </div>
                    </div>

                    <div
                      v-for="(i, pilihan) in rangeopsi(dsoal.sn)"
                      :key="i.eid"
                    >
                      <div class="form-group row">
                        <div class="col-sm-3 d-flex aling-items-center">
                          <label
                            class="col-form-label color-dark fs-14 fw-500 align-center"
                            >Opsi {{ String.fromCharCode(pilihan + 65) }}</label
                          >
                        </div>
                        <div class="col-sm-9">
                          <span
                            class="form-control ip-light radius-xs b-light px-15 justify-content-start text-start"
                            :class="opsis[i]?.poin == 5 ? 'bg-success' : ''"
                            v-html="opsis[i]?.option"
                          ></span>
                        </div>
                      </div>
                      <div class="form-group row">
                        <div class="col-sm-3 d-flex aling-items-center">
                          <label
                            class="col-form-label color-dark fs-14 fw-500 align-center"
                            >Poin {{ String.fromCharCode(pilihan + 65) }}</label
                          >
                        </div>
                        <div class="col-sm-9">
                          <span
                            class="form-control ip-light radius-xs b-light px-15 justify-content-start text-start"
                            :class="opsis[i]?.poin == 5 ? 'bg-success' : ''"
                            v-html="opsis[i]?.poin"
                          ></span>
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
                        <span
                          class="form-control ip-light radius-xs b-light px-15 justify-content-start text-start"
                          v-html="dsoal.exp"
                        >
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- ends: .card -->
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
    rangeopsi(val) {
      this.rangeop = [];
      for (let i = 5 * (val - 1); i < 5 * val; i++) {
        this.rangeop.push(i);
      }
      return this.rangeop;
    },
  },
};
</script>

<style></style>
