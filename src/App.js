import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <nav className="header">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-3">
              <img src="/images/logo.png" className="logo" />
              
            </div>

            <div className="col-9">
              <ul className="menu">
                <li><a href="#">Trang chủ</a></li>
                <li><a href="#">Giới thiệu</a></li>
                <li><a href="#">Sản phẩm</a></li>
                <li><a href="#">Liên hệ</a></li>
                <li><a href="#">Giỏ hàng</a></li>
              </ul>
            </div>

          </div>
        </div>
      </nav>

      <img src="/images/BANER.png" className="banner" alt="Banner" />

    <section className="banner-section">

  <div className="container">
    <div className="row align-items-center">

      {/* chữ */}
      <div className="col-md-6 banner-text">

        <h2>Sản phẩm mới của<br/>TH DiGi</h2>

        <p>
          Những ly trà mới với hương vị độc đáo tạo nên
          hương vị rất riêng của TH DiGi mà nhất định bạn phải thử
        </p>

        <button className="btn-uong">Uống trà ngay</button>

      </div>

      {/* sản phẩm */}
      <div className="col-md-6">

        <div className="row g-3">

          <div className="col-6">
            <div className="product-card p-2">
              <img src="https://media.vov.vn/sites/default/files/styles/large/public/2024-09/uong_tra_xanh_moi_ngay_co_tot_khong_1.png" className="img-fluid"/>
              <h6>Trà xanh Thái Nguyên </h6>
              <p className="price">60.000đ - 85.000đ</p>
            </div>
          </div>

          <div className="col-6">
            <div className="product-card p-2">
              <img src="https://congnghemaythienphu.com/wp-content/uploads/2025/05/gioi-thieu-ve-tra-den.webp" className="img-fluid"/>
              <h6>Trà đen</h6>
              <p className="price">60.000đ - 85.000đ</p>
            </div>
          </div>

          <div className="col-6">
            <div className="product-card p-2">
              <img src="https://dongsontea.com/wp-content/uploads/2019/12/12-OOLONG-LAI-phache.png" className="img-fluid"/>
              <h6>Trà ô long</h6>
              <p className="price">60.000đ - 85.000đ</p>
            </div>
          </div>

          <div className="col-6">
            <div className="product-card p-2">
              <img src="https://s7ap1.scene7.com/is/image/aia/ai-khong-nen-uong-tra-hoa-nhai%20(5)?qlt=85&wid=1024&ts=1732175447849&dpr=off" className="img-fluid"/>
              <h6>Trà hoa nhài </h6>
              <p className="price">55.000đ - 85.000đ</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>

</section>
<div className="container">

  <h3 className="tieude">CÁC LOẠI TRÀ PHA CHẾ SẴN</h3>

  <div className="row g-4">

    <div className="col-md-3">
      <div className="card position-relative">
        <img src="/images/matttcha.png" className="w-100"/>
        <div className="overlay">
          <h6>MATCHA LATTE </h6>
          <span>30.000 VND</span>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card position-relative">
        <img src="/images/tra tat.jpeg" className="w-100"/>
        <div className="overlay">
          <h6>TRÀ TẮT THÁI XANH</h6>
          <span>99.000 VND</span>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card position-relative">
        <img src="/images/THAIXANH.jpeg" className="w-100"/>
        <div className="overlay">
          <h6>MATTCHA KEM CHESE</h6>
          <span>99.000 VND</span>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card position-relative">
        <img src="/images/TRA.webp" className="w-100"/>
        <div className="overlay">
          <h6> TRÀ CHANH THÁI XANH</h6>
          <span>99.000 VND</span>
        </div>
      </div>
    </div><div className="col-md-3">
      <div className="card position-relative">
        <img src="/images/tra xanh sua.jpeg" className="w-100"/>
        <div className="overlay">
          <h6>TRÀ XANH SỮA</h6>
          <span>99.000 VND</span>
        </div>
      </div>
    </div><div className="col-md-3">
      <div className="card position-relative">
        <img src="/images/cabuchio.jpg" className="w-100"/>
        <div className="overlay">
          <h6>CABUCHINO MATCHA</h6>
          <span>99.000 VND</span>
        </div>
      </div>
    </div><div className="col-md-3">
      <div className="card position-relative">
        <img src="/images/traxanhkiqi.jpg" className="w-100"/>
        <div className="overlay">
          <h6>TRÀ XANH KIQI</h6>
          <span>99.000 VND</span>
        </div>
      </div>
    </div><div className="col-md-3">
      <div className="card position-relative">
        <img src="/images/matcha daudo.png" className="w-100"/>
        <div className="overlay">
          <h6>MATTCHA ĐẬU ĐỎ</h6>
          <span>99.000 VND</span>
        </div>
      </div>
    </div>

  </div>

</div>
<section className="contact-section" id="contact">
  <div className="container">

    <h3 className="contact-title">LIÊN HỆ VỚI CHÚNG TÔI</h3>

    <div className="row justify-content-center">
      <div className="col-md-6">

        <form className="contact-form">

          <div className="mb-3">
            <label>Họ và tên</label>
            <input 
              type="text"
              className="form-control"
              placeholder="Nhập họ và tên của bạn"
            />
          </div>

          <div className="mb-3">
            <label>Lời góp ý</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Nhập lời góp ý của bạn"
            ></textarea>
          </div>

          <button className="btn-contact">Gửi liên hệ</button>

        </form>

      </div>
    </div>

  </div>
</section>
      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="row">

            <div className="col-md-4">
              <h5>Giới thiệu</h5>
              <p>
                Chào mừng bạn đến với website của chúng tôi – nơi mang đến những ly trà sữa thơm ngon,
                đậm vị và chất lượng. Chúng tôi cung cấp nhiều loại đồ uống hấp dẫn như trà sữa,
                trà trái cây và các loại topping đa dạng.
              </p>
            </div>

            <div className="col-md-4">
              <h5>Liên hệ</h5>
              <p>Địa chỉ: Số 2 Trường Sa, Phường Gia Định, TP. Hồ Chí Minh</p>
              <p>Điện thoại: 0903092026</p>
              <p>Email: truongthachhuy@gmail.com</p>
            </div>

            <div className="col-md-4">
              <h5>Mạng xã hội</h5>

              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>

            </div>

          </div>

          <div className="copyright">
            <p>© 2026 Bản quyền thuộc về truongthachhuy</p>
          </div>

        </div>
      </footer>
    </>
  );
}

export default App;