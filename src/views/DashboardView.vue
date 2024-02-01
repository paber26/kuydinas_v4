<template>
  <div class="contents" :class="expanded ? 'expanded' : ''">
    <div class="demo2 mb-25 t-thead-bg">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-main">
              <h4 class="text-capitalize breadcrumb-title">Dashboard</h4>
              <div class="breadcrumb-action justify-content-center flex-wrap">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item active">
                      <a href="#"><i class="uil uil-estate"></i>Dashboard</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-sm-6 col-ssm-12 mb-25">
            <!-- Card 1  -->
            <div
              class="ap-po-details ap-po-details--luodcy overview-card-shape radius-xl d-flex justify-content-between"
            >
              <div
                class="ap-po-details-content d-flex flex-wrap justify-content-between w-100"
              >
                <div class="ap-po-details__titlebar">
                  <p>Total Kunjungan</p>
                  <h1>100+</h1>
                  <div class="ap-po-details-time">
                    <span class="color-success"
                      ><i class="las la-arrow-up"></i>
                      <strong>25.36%</strong></span
                    >
                    <small>Sejak bulan lalu</small>
                  </div>
                </div>
                <div class="ap-po-details__icon-area color-primary">
                  <i class="uil uil-arrow-growth"></i>
                </div>
              </div>
            </div>
            <!-- Card 1 End  -->
          </div>

          <div class="col-xxl-3 col-sm-6 col-ssm-12 mb-25">
            <!-- Card 2 -->
            <div
              class="ap-po-details ap-po-details--luodcy overview-card-shape radius-xl d-flex justify-content-between"
            >
              <div
                class="ap-po-details-content d-flex flex-wrap justify-content-between w-100"
              >
                <div class="ap-po-details__titlebar">
                  <p>Total Akun</p>
                  <h1>{{ totalakun }}</h1>
                  <div class="ap-po-details-time">
                    <span class="color-success"
                      ><i class="las la-arrow-up"></i>
                      <strong>25.36%</strong></span
                    >
                    <small>Sejak bulan lalu</small>
                  </div>
                </div>
                <div class="ap-po-details__icon-area color-secondary">
                  <i class="uil uil-users-alt"></i>
                </div>
              </div>
            </div>
            <!-- Card 2 End  -->
          </div>

          <div class="col-xxl-3 col-sm-6 col-ssm-12 mb-25">
            <!-- Card 3 -->
            <div
              class="ap-po-details ap-po-details--luodcy overview-card-shape radius-xl d-flex justify-content-between"
            >
              <div
                class="ap-po-details-content d-flex flex-wrap justify-content-between w-100"
              >
                <div class="ap-po-details__titlebar">
                  <p>Total Pendapatan</p>
                  <h1>Rp. 3.000K</h1>
                  <div class="ap-po-details-time">
                    <span class="color-danger"
                      ><i class="las la-arrow-down"></i>
                      <strong>25.36%</strong></span
                    >
                    <small>Sejak bulan lalu</small>
                  </div>
                </div>
                <div class="ap-po-details__icon-area color-success">
                  <i class="uil uil-money-bill"></i>
                </div>
              </div>
            </div>
            <!-- Card 3 End  -->
          </div>

          <div class="col-xxl-3 col-sm-6 col-ssm-12 mb-25">
            <!-- Card 4  -->
            <div
              class="ap-po-details ap-po-details--luodcy overview-card-shape radius-xl d-flex justify-content-between"
            >
              <div
                class="ap-po-details-content d-flex flex-wrap justify-content-between w-100"
              >
                <div class="ap-po-details__titlebar">
                  <p>Total Testimoni</p>
                  <h1>103</h1>
                  <div class="ap-po-details-time">
                    <span class="color-success"
                      ><i class="las la-arrow-up"></i>
                      <strong>25.36%</strong></span
                    >
                    <small>Sejak bulan lalu</small>
                  </div>
                </div>
                <div class="ap-po-details__icon-area color-info">
                  <i class="uil uil-books"></i>
                </div>
              </div>
            </div>
            <!-- Card 4 End  -->
          </div>

          <div class="col-lg-12 mb-25">
            <div class="card border-0 px-25">
              <div class="card-header px-0 border-0">
                <h6>Sedang mengerjakan</h6>
              </div>
              <div class="card-body p-0">
                <div class="tab-content">
                  <div
                    class="tab-pane fade active show"
                    id="t_selling-today222"
                    role="tabpanel"
                    aria-labelledby="t_selling-today222-tab"
                  >
                    <div class="selling-table-wrap selling-table-wrap--source">
                      <div class="table-responsive">
                        <table class="table table--default table-borderless">
                          <thead>
                            <tr>
                              <th>Nama akun</th>
                              <th class="text-center">Try Out</th>
                              <th class="text-center">Jumlah Koin</th>
                              <th class="text-center">Jam Mulai</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div
                                  class="selling-product-img d-flex align-items-center"
                                >
                                  <div
                                    class="selling-product-img-wrapper order-bg-opacity-primary align-items-end"
                                  >
                                    <img
                                      class="img-fluid"
                                      src="img/author/robert-1.png"
                                      alt="img"
                                    />
                                  </div>
                                  <span>Robert Clinton</span>
                                </div>
                              </td>
                              <td class="text-center">Samsung</td>
                              <td class="text-center">$38,536</td>
                              <td class="text-center">Smart Phone</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="t_selling-week222"
                    role="tabpanel"
                    aria-labelledby="t_selling-week222-tab"
                  >
                    <div class="selling-table-wrap selling-table-wrap--source">
                      <div class="table-responsive">
                        <table class="table table--default table-borderless">
                          <thead>
                            <tr>
                              <th>Seller name</th>
                              <th>Company</th>
                              <th>Product</th>
                              <th>Revenue</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div
                                  class="selling-product-img d-flex align-items-center"
                                >
                                  <div
                                    class="selling-product-img-wrapper order-bg-opacity-primary align-items-end"
                                  >
                                    <img
                                      class="img-fluid"
                                      src="img/author/robert-1.png"
                                      alt="img"
                                    />
                                  </div>
                                  <span>Robert Clinton</span>
                                </div>
                              </td>
                              <td>Samsung</td>
                              <td>Smart Phone</td>
                              <td>$38,536</td>
                            </tr>
                            <tr>
                              <td>
                                <div
                                  class="selling-product-img d-flex align-items-center"
                                >
                                  <div
                                    class="selling-product-img-wrapper order-bg-opacity-primary align-items-end"
                                  >
                                    <img
                                      class="img-fluid"
                                      src="img/author/robert-2.png"
                                      alt="img"
                                    />
                                  </div>
                                  <span>Michael Johnson </span>
                                </div>
                              </td>
                              <td>Asus</td>
                              <td>Laptop</td>
                              <td>$20,573</td>
                            </tr>
                            <tr>
                              <td>
                                <div
                                  class="selling-product-img d-flex align-items-center"
                                >
                                  <div
                                    class="selling-product-img-wrapper order-bg-opacity-secondary align-items-end"
                                  >
                                    <img
                                      class="img-fluid"
                                      src="img/author/robert-3.png"
                                      alt="img"
                                    />
                                  </div>
                                  <span>Daniel White</span>
                                </div>
                              </td>
                              <td>Google</td>
                              <td>Watch</td>
                              <td>$17,457</td>
                              <td>Pending</td>
                            </tr>
                            <tr>
                              <td>
                                <div
                                  class="selling-product-img d-flex align-items-center"
                                >
                                  <div
                                    class="selling-product-img-wrapper order-bg-opacity-success align-items-end"
                                  >
                                    <img
                                      class="img-fluid"
                                      src="img/author/robert-4.png"
                                      alt="img"
                                    />
                                  </div>
                                  <span>Chris Barin </span>
                                </div>
                              </td>
                              <td>Apple</td>
                              <td>Computer</td>
                              <td>$15,354</td>
                            </tr>
                            <tr>
                              <td>
                                <div
                                  class="selling-product-img d-flex align-items-center"
                                >
                                  <div
                                    class="selling-product-img-wrapper order-bg-opacity-info align-items-end"
                                  >
                                    <img
                                      class="img-fluid"
                                      src="img/author/robert-5.png"
                                      alt="img"
                                    />
                                  </div>
                                  <span>Daniel Pink</span>
                                </div>
                              </td>
                              <td>Panasonic</td>
                              <td>Sunglass</td>
                              <td>$12,354</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="t_selling-month333"
                    role="tabpanel"
                    aria-labelledby="t_selling-month333-tab"
                  >
                    <div class="selling-table-wrap selling-table-wrap--source">
                      <div class="table-responsive">
                        <table class="table table--default table-borderless">
                          <thead>
                            <tr>
                              <th>Seller name</th>
                              <th>Company</th>
                              <th>Product</th>
                              <th>Revenue</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div
                                  class="selling-product-img d-flex align-items-center"
                                >
                                  <div
                                    class="selling-product-img-wrapper order-bg-opacity-primary align-items-end"
                                  >
                                    <img
                                      class="img-fluid"
                                      src="img/author/robert-1.png"
                                      alt="img"
                                    />
                                  </div>
                                  <span>Robert Clinton</span>
                                </div>
                              </td>
                              <td>Samsung</td>
                              <td>Smart Phone</td>
                              <td>$38,536</td>
                            </tr>
                            <tr>
                              <td>
                                <div
                                  class="selling-product-img d-flex align-items-center"
                                >
                                  <div
                                    class="selling-product-img-wrapper order-bg-opacity-primary align-items-end"
                                  >
                                    <img
                                      class="img-fluid"
                                      src="img/author/robert-2.png"
                                      alt="img"
                                    />
                                  </div>
                                  <span>Michael Johnson </span>
                                </div>
                              </td>
                              <td>Asus</td>
                              <td>Laptop</td>
                              <td>$20,573</td>
                            </tr>
                            <tr>
                              <td>
                                <div
                                  class="selling-product-img d-flex align-items-center"
                                >
                                  <div
                                    class="selling-product-img-wrapper order-bg-opacity-secondary align-items-end"
                                  >
                                    <img
                                      class="img-fluid"
                                      src="img/author/robert-3.png"
                                      alt="img"
                                    />
                                  </div>
                                  <span>Daniel White</span>
                                </div>
                              </td>
                              <td>Google</td>
                              <td>Watch</td>
                              <td>$17,457</td>
                              <td>Pending</td>
                            </tr>
                            <tr>
                              <td>
                                <div
                                  class="selling-product-img d-flex align-items-center"
                                >
                                  <div
                                    class="selling-product-img-wrapper order-bg-opacity-success align-items-end"
                                  >
                                    <img
                                      class="img-fluid"
                                      src="img/author/robert-4.png"
                                      alt="img"
                                    />
                                  </div>
                                  <span>Chris Barin </span>
                                </div>
                              </td>
                              <td>Apple</td>
                              <td>Computer</td>
                              <td>$15,354</td>
                            </tr>
                            <tr>
                              <td>
                                <div
                                  class="selling-product-img d-flex align-items-center"
                                >
                                  <div
                                    class="selling-product-img-wrapper order-bg-opacity-info align-items-end"
                                  >
                                    <img
                                      class="img-fluid"
                                      src="img/author/robert-5.png"
                                      alt="img"
                                    />
                                  </div>
                                  <span>Daniel Pink</span>
                                </div>
                              </td>
                              <td>Panasonic</td>
                              <td>Sunglass</td>
                              <td>$12,354</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
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
import axios from "axios";

export default {
  props: {
    expanded: Boolean,
  },
  data() {
    return {
      totalakun: "-",
    };
  },
  mounted() {
    axios.get(this.http + "/api/gettotalakun  ").then((response) => {
      console.log(response.data);
      this.totalakun = response.data;
      // this.soals = response.data[1];
      // this.totalsoal = this.soals.length;
    });
  },
};
</script>
