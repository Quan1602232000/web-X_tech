import React from 'react';
import './HomeScreen.css';

function HomeScreen() {
  return (
    <div>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <div class="bottom-grid">
              <img src="https://vn.blog.kkday.com/wp-content/uploads/blogcover-1.jpg" alt="" />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <div class="bottom-grid-info">
                <a href="#">DIVADI</a>
                <p>Hãy Để Chúng Tôi Mang Đến Cho Bạn Những Trải Nghiệm Tuyệt vời
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bottom-grid">
              <img src="https://static.tapchitaichinh.vn/600x315/images/upload/duongthanhhai/05082020/15-dia-diem-du-lich-hot-nhat-viet-nam.jpg" alt="" />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <div class="bottom-grid-info">
                <a href="#">DIVADI</a>
                <p>Hãy Để Chúng Tôi Mang Đến Cho Bạn Những Trải Nghiệm Tuyệt vời
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bottom-grid">
              <img src="https://img.nhandan.com.vn/Files/Images/2020/09/26/ConDao-1601106244584.jpg" alt="" />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <div class="bottom-grid-info">
                <a href="#">DIVADI</a>
                <p>Hãy Để Chúng Tôi Mang Đến Cho Bạn Những Trải Nghiệm Tuyệt vời
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      <section className="welcome py-5">
        <div className="container py-3">
          <h3 className="heading text-center mb-md-5 mb-4"> Giới Thiệu Về Chúng Tôi </h3>
          <div className="row welcome-grids">
            <div className="col-lg-6">
              <h4 className="mb-3">Chào mừng đến với đại gia đình DIVADI</h4>
              <h3>Hãy nhớ rằng hạnh phúc là con đường bạn đi, không phải là một điểm đến.</h3>
              <p className="my-4">Chúng tôi mang lại cho bạn những gợi ý hữu ích và những trải nghiệm tuyệt vời, tìm hiểu và lên hành trang ở những nơi bạn đến thông qua những review, những tiện ích đi kèm khi mà giờ đây bạn có thể tự lên ý tưởng cho chuyến đi của bạn và chúng tôi sẽ gợi ý cho bạn những điểm đến thật lý tưởng</p>
              <a href="#">Read More</a>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5 welcome-grid3">
              <div className="position">
                <img src="https://vietnamtourism.gov.vn/images/2020/camnhi-191814101854-chinh-phuc-dinh-fansipan-2157.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured_services py-5">
        <div className="container py-3">
          <h3 className="heading text-center mb-5">Our Services</h3>
          <div className="row agile_inner_info">
            <div className="col-lg-4 col-md-6 w3_agile_services_grid">
              <div className="agile_services_grid">
                <div className="hover06 column">
                  <div>
                    <figure><img src="https://dulichkhampha24.com/wp-content/uploads/2020/05/thue-xe-may-ha-noi.jpg" alt=" " className="img-responsive" /></figure>
                  </div>
                </div>
                <div className="agile_services_grid_pos">
                  <i className="fa fa-globe" aria-hidden="true" />
                </div>
              </div>
              <h4>Dịch Vụ Cho Thuê Xe Máy</h4>
              <p>Lorem ipsum dolor sit amet, do eiusmod tempor incididunt .Aliquam lacus turpis.</p>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-0 mt-5 w3_agile_services_grid">
              <div className="agile_services_grid">
                <div className="hover06 column">
                  <div>
                    <figure><img src="http://elmistibota.com/wp-content/uploads/2019/10/cau-noi-hay-cho-dan-du-lich.jpg" alt=" " className="img-responsive" /></figure>
                  </div>
                </div>
                <div className="agile_services_grid_pos">
                  <i className="fa fa-suitcase" aria-hidden="true" />
                </div>
              </div>
              <h4>ReView Thức Ăn</h4>
              <p>Lorem ipsum dolor sit amet, do eiusmod tempor incididunt .Aliquam lacus turpis.</p>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-5 w3_agile_services_grid">
              <div className="agile_services_grid">
                <div className="hover06 column">
                  <div>
                    <figure><img src="https://media1.nguoiduatin.vn/media/ngac-kim-giang/2020/06/16/dao-vinh-thuc-4.jpg" alt=" " className="img-responsive" /></figure>
                  </div>
                </div>
                <div className="agile_services_grid_pos">
                  <i className="fa fa-bed" aria-hidden="true" />
                </div>
              </div>
              <h4>Review Địa Điểm Vui Chơi</h4>
              <p>Lorem ipsum dolor sit amet, do eiusmod tempor incididunt .Aliquam lacus turpis.</p>
            </div>
            <div className="mx-auto mt-lg-4 mt-5 text-center">
              <a href="services.html">Khám Phá Ngay</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeScreen