import React, { useEffect, useState } from 'react'
import './MainInfoScreen.css';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';
import { useSelector, useDispatch } from 'react-redux';
import { ReviewDLTC, ReviewDTLS } from '../../actions/ReviewActions'
import Raiting from '../../components/Raiting/Raiting'



function MainInfoScrenn(props) {
  const listreviewDLTC = useSelector((state) => state.listreviewDLTC)
  const { DLTC } = listreviewDLTC
  const listreviewDTLS = useSelector((state) => state.listreviewDTLS)
  const { DTLS } = listreviewDTLS
  const dispatch = useDispatch();
  const city = props.location.search ? props.location.search.split("=")[1] : '';
  const brandDLTC = "Danh Lam Thắng Cảnh";
  const brandDTLS = "Di Tích Lịch Sử";
  const options = {
    items: 4,
    nav: true,
    rewind: true,
    autoplay: true,
    margin: 10
  };
  useEffect(() => {
    dispatch(ReviewDLTC(city, brandDLTC))
    return () => {

    }
  }, [city])
  useEffect(() => {
    dispatch(ReviewDTLS(city, brandDTLS))
    return () => {

    }
  }, [city])
  return (
    <div>
      <section class="w3l-about-breadcrumb">
        <div class="breadcrumb-bg breadcrumb-bg-about py-5">
          <div class="container py-lg-5 py-md-3">
            <h2 class="title">Đà Nẵng</h2>
          </div>
        </div>
      </section>
      <section class="w3l-grids-hny-2">
        {/* /content-6-section */}
        <div class="grids-hny-2-mian py-5">
          <div class="container py-lg-5">
            <h3 class="hny-title mb-0 text-center">Shop With <span>Us</span></h3>
            <p class="mb-4 text-center">Handpicked Favourites just for you</p>
            <div class="welcome-grids row mt-5">
              <div class="col-lg-2 col-md-4 col-6 welcome-image">
                <div class="boxhny13">
                  <Link to={"/RentMoto/?city=" + city}>
                    <img src="https://xedapdienlinhvuong.com/wp-content/uploads/2019/12/Xe-ga-50CC-Espero-2.jpg" className="img-fluid" alt="" />
                    <div class="boxhny-content">
                      <h3 class="title">Xem Chi Tiết
                      </h3></div>
                  </Link>
                </div>
                <h4><Link to={"/RentMoto/?city=" + city}>Thuê Xe</Link></h4>
              </div>
              <div class="col-lg-2 col-md-4 col-6 welcome-image">
                <div class="boxhny13">
                  <Link to={'/foodScreen/?city=' + city + '?brand=Nhà Hàng'}>
                    <img src="https://pastaxi-manager.onepas.vn/content/uploads/articles/dungtv/anh-bo-suu-tap/top-20-nha-hang-co-khong-gian-dep-nhat-o-hcm/top-20-nha-hang-co-khong-gian-dep-noi-tieng-nhat-o-tphcm-23.jpg" class="img-fluid" alt="" />
                    <div class="boxhny-content">
                      <h3 class="title">Xem Chi Tiết</h3>
                    </div>
                  </Link>
                </div>
                <h4><a href="#URL">
                  Nhà Hàng</a></h4>
              </div>
              <div class="col-lg-2 col-md-4 col-6 welcome-image">
                <div class="boxhny13">
                  <Link to={'/foodScreen/?city=' + city + '?brand=Ăn Vặt'}>
                    <img src="https://mangphuyen.com/wp-content/uploads/2019/06/am-thuc-duong-pho-696x557.jpg" class="img-fluid" alt="" />
                    <div class="boxhny-content">
                      <h3 class="title">Xem Chi Tiết</h3>
                    </div>
                  </Link>
                </div>
                <h4><a href="#URL">
                  Ăn Vặt</a></h4>
              </div>
              <div class="col-lg-2 col-md-4 col-6 welcome-image">
                <div class="boxhny13">
                  <Link to={'/DLTC_Screen/?city=' + city + '?brand=Di Tích Lịch Sử'}>
                    <img src="https://www.topuytin.com/wp-content/uploads/2018/06/New-Bitmap-Image-36.bmp" class="img-fluid" alt="" />
                    <div class="boxhny-content">
                      <h3 class="title">Xem Chi Tiết</h3>
                    </div>
                  </Link>
                </div>
                <h4><a href="#URL">Di Tích Lịch Sử</a></h4>
              </div>
              <div class="col-lg-2 col-md-4 col-6 welcome-image">
                <div class="boxhny13">
                  <Link to={'/DLTC_Screen/?city=' + city + '?brand=Danh Lam Thắng Cảnh'}>
                    <img src="https://geos-nature.org/wp-content/uploads/2019/10/danh-lam-thang-canh-mien-bac-11.jpg" class="img-fluid" alt="" />
                    <div class="boxhny-content">
                      <h3 class="title">Xem Chi Tiết</h3>
                    </div>
                  </Link>
                </div>
                <h4><Link to={'/DLTC_Screen/?city=' + city + '?brand=Danh Lam Thắng Cảnh'}>Danh Lam Thắng Cảnh</Link></h4>
              </div>
              <div class="col-lg-2 col-md-4 col-6 welcome-image">
                <div class="boxhny13">
                  <a href="#URL">
                    <img src="https://list.vn/wp-content/uploads/2018/11/%C4%91%E1%BB%8Ba-%C4%91i%E1%BB%83m-vui-ch%C6%A1i-2.jpg" class="img-fluid" alt="" />
                    <div class="boxhny-content">
                      <h3 class="title">Xem Chi Tiết</h3>
                    </div>
                  </a>
                </div>
                <h4><a href="#URL">Khu vui chơi</a></h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="w3l-content-w-photo-6">
        <div class="content-photo-6-mian py-5">
          <div class="container py-lg-5">
            <div class="align-photo-6-inf-cols row">

              <div class="photo-6-inf-right col-lg-6">
                <h3 class="hny-title text-left"><span>Đà Nẵng </span>thiên đường hút hàng triệu du khách đến mỗi năm</h3>
                <p>Đà Nẵng đã thay đổi chóng mặt với tốc độ phát triển kinh hoàng đó là lời nhận xét của đa số mọi người khi quay lại nơi đây. Thành phố Đà Nẵng thuộc miền Trung của Việt Nam nằm giữa đất nước nên rất thuận tiện cho mọi người cả miền Bắc hoặc miền Nam di chuyển đến. Với vị trí tuyệt vời và kết hợp tham quan được cả Hội An và Huế bởi thế hàng năm thu hút hàng triệu du khách trong nước cũng như quốc tế đến tham quan du lịch.</p>
              </div>
              <div class="photo-6-inf-left col-lg-6">
                <img src="https://static.ebk.vn/thienduongholiday.com/images/mk-av.jpg" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="w3l-video-6">

        <div class="video-66-info">
          <div class="container-fluid">
            <div class="video-grids-info row">
              <div class="video-gd-right col-lg-8">
                <div class="video-inner text-center">

                  <a class="play-button btn popup-with-zoom-anim" href="#small-dialog">
                    <span class="fa fa-play" aria-hidden="true"></span>
                  </a>
                  <div id="small-dialog" class="mfp-hide">
                    <div class="search-top notify-popup">
                      <iframe src="https://player.vimeo.com/video/246139491" frameborder="0"
                        allow="autoplay; fullscreen" allowfullscreen></iframe>
                    </div>
                  </div>

                </div>
              </div>
              <div class="video-gd-left col-lg-4 p-lg-5 p-4">
                <div class="p-xl-4 p-0 video-wrap">
                  <h3 class="hny-title text-left">Xem Video Giới Thiệu Về <span>Đà Nẵng</span>
                  </h3>
                  <p>Visit our shop to see amazing creations from our designers.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <div className="title-owl">
          <h3 class="hny-title-owl text-left mb-3">Danh Lam Thắng Cảnh</h3>
        </div>

        <OwlCarousel
          options={options}
        >
          {DLTC.length > 0 ? DLTC.map((review) =>
            <div className="item">
              <div class="gal-img">
                <div class="gal-info">
                  <a href="#gal1"><img src={review.image} alt="news image" class="img-fluid" /></a>
                  <div class="property-info-list">
                    <div class="detail">
                      <h4 class="title">
                        <a href="about.html">{review.Name}</a>
                      </h4>
                      <div class="location mt-2">
                        <a href="about.html">
                          <span class="fa fa-map-marker"></span> {review.city} / {review.brand}
                        </a>
                      </div>
                      <ul class="facilities-list clearfix">
                        <li>
                          <span class="fa fa-clock-o"></span> 3 days
                                    </li>
                        <li>
                          <span class="fa fa-clock-o"></span> 2 nights
                                    </li>
                      </ul>
                    </div>
                    <div class="footer-properties">
                      <a class="admin" href="#">
                        <Raiting rating={review.raiting}></Raiting>
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : <div></div>}


        </OwlCarousel>
        <div className="title-owl">
          <h3 class="hny-title-owl text-left mb-3">Di Tích Lịch Sử</h3>
        </div>
        <OwlCarousel
          options={options}
        >
          {DTLS.length > 0 ? DTLS.map((Review) =>
            <div key={Review.id} className="item">
              <div class="gal-img">
                <div class="gal-info">
                  <a href="#gal1"><img src={Review.image} alt="news image" class="img-fluid" /></a>
                  <div class="property-info-list">
                    <div class="detail">
                      <h4 class="title">
                        <a href="about.html">{Review.Name}</a>
                      </h4>
                      <div class="location mt-2">
                        <a href="about.html">
                          <span class="fa fa-map-marker"></span> {Review.city} /{Review.brand}
                        </a>
                      </div>
                      <ul class="facilities-list clearfix">
                        <li>
                          <span class="fa fa-clock-o"></span> 3 days
                                  </li>
                        <li>
                          <span class="fa fa-clock-o"></span> 2 nights
                                  </li>
                      </ul>
                    </div>
                    <div class="footer-properties">
                      <a class="admin" href="#">
                        <Raiting rating={Review.raiting}></Raiting>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : <div></div>}

        </OwlCarousel>
      </div>
    </div>
  )
}

export default MainInfoScrenn
