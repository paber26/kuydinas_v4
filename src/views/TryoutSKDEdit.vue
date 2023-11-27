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
                    <a href="#"><i class="uil uil-estate"></i>Home</a>
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
              <div class="card-header">
                <h6>Informasi Try Out</h6>
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
                        <input
                          type="text"
                          class="form-control ih-medium ip-light radius-xs b-light px-15"
                          placeholder="Masukkan nama tryout...."
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
                          placeholder="Masukkan jumlah TWK...."
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
                          placeholder="Masukkan jumlah TIU...."
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
                          placeholder="Masukkan jumlah TKP...."
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
                          placeholder="Masukan waktu pengerjaan...."
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
                          placeholder="Masukkan harga...."
                        />
                      </div>
                    </div>
                    <!-- End of informasi try out -->

                    <div class="form-group row">
                      <div class="col-sm-3 d-flex aling-items-center">
                        <label
                          class="col-form-label color-dark fs-14 fw-500 align-center"
                          >Informasi Instagram</label
                        >
                      </div>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control ih-medium ip-light radius-xs b-light px-15"
                          placeholder="Masukkan informasi instagram...."
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-3 d-flex aling-items-center">
                        <label
                          class="col-form-label color-dark fs-14 fw-500 align-center"
                          >Link WhatsApp</label
                        >
                      </div>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control ih-medium ip-light radius-xs b-light px-15"
                          placeholder="Masukkan link wa...."
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- ends: .card -->
          </div>
          <!-- Akhir informasi try out -->

          <div class="col-lg-12" v-for="(i, index) in 5" :key="index">
            <div class="card card-horizontal card-default card-md mb-4">
              <div class="card-header">
                <h6>Soal nomor {{ i }}</h6>
              </div>
              <div class="card-body py-md-30">
                <div class="horizontal-form">
                  <form action="#">
                    <div class="form-group row">
                      <div class="col-sm-3 d-flex aling-items-center">
                        <label
                          class="col-form-label color-dark fs-14 fw-500 align-center"
                          >Pertanyaan</label
                        >
                      </div>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control ih-medium ip-light radius-xs b-light px-15"
                          placeholder="Duran Clayton"
                        />
                      </div>
                    </div>

                    <div
                      class="form-group row"
                      v-for="(i, index) in 5"
                      :key="index"
                    >
                      <div class="col-sm-3 d-flex aling-items-center">
                        <label
                          class="col-form-label color-dark fs-14 fw-500 align-center"
                          >Opsi {{ i }},
                          {{ String.fromCharCode(index + 65) }}</label
                        >
                      </div>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control ih-medium ip-light radius-xs b-light px-15"
                          placeholder="Duran Clayton"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-3 d-flex aling-items-center">
                        <label
                          class="col-form-label color-dark fs-14 fw-500 align-center"
                          >Poin A</label
                        >
                      </div>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control ih-medium ip-light radius-xs b-light px-15"
                          placeholder="Duran Clayton"
                        />
                      </div>
                    </div>
                    <!-- Akhir opsi soal -->

                    <div class="form-group row">
                      <div class="col-sm-3 d-flex aling-items-center">
                        <label
                          class="col-form-label color-dark fs-14 fw-500 align-center"
                          >Jawaban Benar</label
                        >
                      </div>
                      <div class="col-sm-9">
                        <select
                          class="form-control px-15"
                          id="exampleFormControlSelect1"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-3 d-flex aling-items-center">
                        <label
                          class="col-form-label color-dark fs-14 fw-500 align-center"
                          >Pembahasan</label
                        >
                      </div>
                      <div class="col-sm-9">
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="4"
                        ></textarea>
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
export default {
  props: {
    expanded: Boolean,
  },
};
</script>

<style></style>
