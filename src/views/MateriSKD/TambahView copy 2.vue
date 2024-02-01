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
                <div class="card-header">
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
                      <div class="form-group mb-25" data-select2-id="19">
                        <div class="cityOption" data-select2-id="18">
                          <label for="cityOption"> city </label>
                          <select
                            class="js-example-basic-single js-states form-control select2-hidden-accessible"
                            id="cityOption"
                            data-select2-id="cityOption"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="JAN" data-select2-id="5">
                              event
                            </option>
                            <option value="FBR" data-select2-id="20">
                              Venues
                            </option></select
                          ><span
                            class="select2 select2-container select2-container--default select2-container--below select2-container--open select2-container--focus"
                            dir="ltr"
                            data-select2-id="4"
                            style="width: 971.828px"
                            ><span class="selection"
                              ><span
                                class="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="true"
                                tabindex="0"
                                aria-disabled="false"
                                aria-labelledby="select2-cityOption-container"
                                aria-owns="select2-cityOption-results"
                                aria-activedescendant="select2-cityOption-result-ktx3-JAN"
                                ><span
                                  class="select2-selection__rendered"
                                  id="select2-cityOption-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="event"
                                  ><span
                                    class="select2-selection__clear"
                                    title="Remove all items"
                                    data-select2-id="6"
                                    >×</span
                                  >event</span
                                ><span
                                  class="select2-selection__arrow"
                                  role="presentation"
                                  ><b
                                    role="presentation"
                                  ></b></span></span></span
                            ><span
                              class="dropdown-wrapper"
                              aria-hidden="true"
                            ></span
                          ></span>
                        </div>
                      </div>
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
                        rows="20"
                      ></textarea>
                    </div>
                  </div>
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
      tryoutskd: [],
    };
  },
  mounted() {
    axios.get(this.http + "/api/tryoutskd").then((response) => {
      this.tryoutskd = response.data;
      console.log(response.data);
    });
    console.log(this.http);
  },
};
</script>

<style></style>
