<template>
  <div class="contents" :class="expanded ? 'expanded' : ''">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-main">
            <h4 class="text-capitalize breadcrumb-title">
              Daftar Materi SKD CPNS
            </h4>
            <div class="breadcrumb-action justify-content-center flex-wrap">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/"
                      ><i class="uil uil-estate"></i>Dashboard</router-link
                    >
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Materi SKD
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-30">
          <div class="support-ticket-system support-ticket-system--search">
            <div
              class="breadcrumb-main m-0 breadcrumb-main--table justify-content-sm-between"
            >
              <div
                class="d-flex flex-wrap justify-content-center breadcrumb-main__wrapper"
              >
                <div
                  class="d-flex align-items-center ticket__title justify-content-center me-md-25 mb-md-0 mb-20"
                >
                  <h4 class="text-capitalize fw-500 breadcrumb-title">
                    Materi SKD
                  </h4>
                </div>
              </div>
              <div class="action-btn">
                <router-link to="/materiskd/tambah" class="btn btn-primary"
                  >Tambah</router-link
                >
              </div>
            </div>

            <div
              class="support-form datatable-support-form d-flex justify-content-xxl-between justify-content-center align-items-center flex-wrap"
            >
              <div class="support-form__input">
                <div class="d-flex flex-wrap">
                  <div class="support-form__input-id">
                    <label>Id:</label>

                    <div class="dm-select">
                      <select
                        name="select-search"
                        class="select-search form-control"
                      >
                        <option value="01">All</option>
                        <option value="02">Option 2</option>
                        <option value="03">Option 3</option>
                        <option value="04">Option 4</option>
                        <option value="05">Option 5</option>
                      </select>
                    </div>
                  </div>
                  <div class="support-form__input-status">
                    <label>status:</label>

                    <div class="dm-select">
                      <select
                        name="select-search"
                        class="select-search form-control"
                      >
                        <option value="01">All</option>
                        <option value="02">Option 2</option>
                        <option value="03">Option 3</option>
                        <option value="04">Option 4</option>
                        <option value="05">Option 5</option>
                      </select>
                    </div>
                  </div>
                  <button class="support-form__input-button">search</button>
                </div>
              </div>
              <div class="support-form__search">
                <div class="support-order-search">
                  <form action="/" class="support-order-search__form">
                    <img src="img/svg/search.svg" alt="search" class="svg" />
                    <input
                      class="form-control border-0 box-shadow-none"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div
              class="userDatatable userDatatable--ticket userDatatable--ticket--2 mt-1"
            >
              <div class="table-responsive">
                <table class="table mb-0 table-borderless">
                  <thead>
                    <tr class="userDatatable-header">
                      <th>
                        <span class="userDatatable-title">Nomor</span>
                      </th>
                      <th>
                        <span class="userDatatable-title">Kategori</span>
                      </th>
                      <th>
                        <span class="userDatatable-title">Judul Materi</span>
                      </th>
                      <th>
                        <span class="userDatatable-title">Dilihat</span>
                      </th>
                      <th>
                        <span class="userDatatable-title">Tanggal Dibuat</span>
                      </th>
                      <th>
                        <span class="userDatatable-title">Status</span>
                      </th>
                      <th class="actions">
                        <span class="userDatatable-title">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(mskd, index) in materiskd" :key="mskd.eid">
                      <td>{{ index + 1 }}</td>
                      <td>
                        <div class="userDatatable-content--subject">
                          {{ mskd.kategori }}
                        </div>
                      </td>
                      <td>
                        <div class="userDatatable-content--subject">
                          {{ mskd.judul }}
                        </div>
                      </td>
                      <td>
                        <div class="userDatatable-content--subject">
                          {{ mskd.kunjungan }}
                        </div>
                      </td>
                      <td>
                        <div class="userDatatable-content--priority">
                          {{ mskd.date }}
                        </div>
                      </td>
                      <td>
                        <button
                          v-if="mskd.status == 'enabled'"
                          @click.prevent="nonaktifkan(mskd.id)"
                          class="userDatatable-content d-inline-block border-0 bg-none"
                        >
                          <span
                            class="userDatatable-content-status bg-opacity-success color-success"
                            >{{ mskd.status }}</span
                          >
                        </button>
                        <button
                          v-else-if="mskd.status == 'disabled'"
                          @click.prevent="aktifkan(mskd.id)"
                          class="userDatatable-content d-inline-block border-0 bg-none"
                        >
                          <span
                            class="userDatatable-content-status bg-opacity-danger color-danger"
                            >{{ mskd.status }}</span
                          >
                        </button>
                      </td>
                      <td>
                        <ul
                          class="orderDatatable_actions mb-0 d-flex flex-wrap"
                        >
                          <li>
                            <router-link
                              :to="'/materiskd/lihat/' + mskd.id"
                              class="view"
                            >
                              <i class="uil uil-eye"></i>
                            </router-link>
                          </li>
                          <li>
                            <router-link
                              :to="'/materiskd/edit/' + mskd.id"
                              class="edit"
                            >
                              <i class="uil uil-edit"></i>
                            </router-link>
                          </li>
                          <li>
                            <a href="#" class="remove">
                              <i class="uil uil-trash-alt"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="d-flex justify-content-end pt-30">
                <nav class="dm-page">
                  <ul class="dm-pagination d-flex">
                    <li class="dm-pagination__item">
                      <a href="#" class="dm-pagination__link pagination-control"
                        ><span class="la la-angle-left"></span
                      ></a>
                      <a href="#" class="dm-pagination__link"
                        ><span class="page-number">1</span></a
                      >
                      <a href="#" class="dm-pagination__link active"
                        ><span class="page-number">2</span></a
                      >
                      <a href="#" class="dm-pagination__link"
                        ><span class="page-number">3</span></a
                      >
                      <a href="#" class="dm-pagination__link pagination-control"
                        ><span class="page-number">...</span></a
                      >
                      <a href="#" class="dm-pagination__link"
                        ><span class="page-number">12</span></a
                      >
                      <a href="#" class="dm-pagination__link pagination-control"
                        ><span class="la la-angle-right"></span
                      ></a>
                      <a href="#" class="dm-pagination__option"> </a>
                    </li>
                    <li class="dm-pagination__item">
                      <div class="paging-option">
                        <select name="page-number" class="page-selection">
                          <option value="20">20/page</option>
                          <option value="40">40/page</option>
                          <option value="60">60/page</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </nav>
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
  props: {
    expanded: Boolean,
  },
  data() {
    return {
      materiskd: [],
    };
  },
  mounted() {
    this.getmateriskd();
  },
  methods: {
    aktifkan(id) {
      axios.put(this.http + "/api/materiskd/aktifkan/" + id).then(() => {
        this.getmateriskd();
      });
    },
    nonaktifkan(id) {
      axios.put(this.http + "/api/materiskd/nonaktifkan/" + id).then(() => {
        this.getmateriskd();
      });
    },
    getmateriskd() {
      axios.get(this.http + "/api/materiskd").then((response) => {
        this.materiskd = response.data;
      });
    },
  },
};
</script>

<style></style>
