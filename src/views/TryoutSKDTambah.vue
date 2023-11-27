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
        </div>
        <div class="row justify-content-center mt-md-25">
          <div class="col-xl-6">
            <div class="job-apply-wrapper">
              <div class="job-apply__content">
                <h1>Masukkan Detail</h1>
                <form>
                  <div class="form-group">
                    <label>Nama Try Out</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="e.g. John Smith"
                    />
                  </div>
                  <div class="form-group">
                    <label>Jumlah TWK</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Number"
                    />
                  </div>
                  <div class="form-group">
                    <label>Jumlah TIU</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Number"
                    />
                  </div>
                  <div class="form-group">
                    <label>Jumlah TKP</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Number"
                    />
                  </div>
                  <div class="form-group">
                    <label>Waktu Pengerjaan</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Number"
                    />
                  </div>
                  <div class="button-group d-flex pt-15 justify-content-center">
                    <button class="btn btn-primary btn-default btn-squared">
                      Simpan Try Out
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- ends: .row -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
