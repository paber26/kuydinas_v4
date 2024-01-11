<template>
  <div class="contents">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-main">
            <h4 class="text-capitalize breadcrumb-title">Daftar Akun</h4>
            <div class="breadcrumb-action justify-content-center flex-wrap">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/"
                      ><i class="uil uil-estate"></i>Dashboard</router-link
                    >
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Akun
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
                    Daftar Akun
                  </h4>
                </div>
              </div>
              <div class="action-btn">
                <a href="#" class="btn btn-primary">
                  Export
                  <i class="las la-angle-down"></i>
                </a>
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
                        <span class="userDatatable-title">Akun</span>
                      </th>
                      <th>
                        <span class="userDatatable-title">Email</span>
                      </th>
                      <th>
                        <span class="userDatatable-title">WhatsApp</span>
                      </th>
                      <th>
                        <span class="userDatatable-title">Jumlah Koin</span>
                      </th>
                      <th>
                        <span class="userDatatable-title">Tryout Diikuti</span>
                      </th>
                      <th>
                        <span class="userDatatable-title">Terakhir Login</span>
                      </th>
                      <th class="actions">
                        <span class="userDatatable-title">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(dakun, index) in akuns" :key="dakun.email">
                      <td>{{ index + 1 }}</td>
                      <td>
                        <div class="d-flex">
                          <div class="userDatatable-inline-title">
                            <a href="#" class="text-dark fw-500">
                              <h6>{{ dakun.name }}</h6>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="userDatatable-content--subject">
                          {{ dakun.email }}
                        </div>
                      </td>
                      <td>
                        <div class="userDatatable-content--subject">
                          {{ dakun.nowa }}
                        </div>
                      </td>
                      <td>
                        <div class="userDatatable-content--priority">
                          {{ dakun.koin }}
                        </div>
                      </td>
                      <td>
                        <div class="userDatatable-content--priority">5¬</div>
                      </td>
                      <td>
                        <div class="userDatatable-content--priority">
                          January 20, 2020
                        </div>
                      </td>
                      <td>
                        <ul
                          class="orderDatatable_actions mb-0 d-flex flex-wrap"
                        >
                          <li>
                            <a href="#" class="view">
                              <i class="uil uil-setting"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" class="edit">
                              <i class="uil uil-edit"></i>
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
    user: Object,
    listenerChild: Object,
  },
  data() {
    return {
      akuns: "",
    };
  },
  mounted() {
    axios.get(this.http + "/api/getakun").then((response) => {
      console.log(response.data);
      this.akuns = response.data;
    });
  },
};
</script>

<style></style>
