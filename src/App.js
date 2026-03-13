import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      {/* Header */}
      <nav className="header">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-3">
              <img src="/images/logo.png" className="logo" alt="logo" />
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

      {/* Banner */}
      <img src="/images/bannner.png" className="banner" alt="Banner" />

      {/* Section sản phẩm */}
      <div style={{  padding:"20px", borderRadius:"10px"}}>
        <div className="container">
          <div className="row">
            {/* Text bên trái */}
            <div className="col-3">
              <div className="tieudetrai">
              <h2>Sản phẩm mới của<br/>TH DiGi</h2>
              <p>
                Những ly trà mới với hương vị độc đáo tạo nên
                hương vị rất riêng của TH DiGi mà nhất định bạn phải thử
              </p>
              <button className="btn-uong">Uống trà ngay</button>
            </div>
</div>
            {/* Sản phẩm */}
            <div className="col-9">
              <div className="row g-2">
                <div className="col-6 category-item">
                  <img src="/images/product1.jpg" alt="Trà ô long"/>
                  <h3 style={{color: "rgb(34, 92, 62)"}}>Trà ô long</h3>
                </div>
                <div className="col-6 category-item">
                  <img src="/images/product2.jpg" alt="Trà đen"/>
                  <h3 style={{color: "rgb(34, 92, 62)"}}>Trà đen</h3>
                </div>
                <div className="col-6 category-item">
                  <img src="/images/sp10.jpg" alt="Fress coco matcha"/>
                  <h3 style={{color: "rgb(34, 92, 62)"}}>Fress coco matcha</h3>
                </div>
                <div className="col-6 category-item">
                  <img src="/images/sp5.jpg" alt="Matcha xoài"/>
                  <h3 style={{color: "rgb(38, 106, 71)"}}>Matcha xoài</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <h3 style={{color: "rgb(34, 92, 62)", textAlign:"center", marginBottom:"20px",fontWeight: "600"}}>SẢN PHẨM CỦA CHÚNG TÔI</h3>
         <div className="row" style={{backgroundColor: "rgb(0, 31, 14)", padding:"20px", borderRadius:"10px"}}>
        <div className="col-3 product-item">
        <img src="images/sp1.jpg" alt="Matcha đậu đỏ"/>
        <h3>Matcha đậu đỏ</h3>
        <p className="price">38.000đ</p>
        </div>

         
        <div className="col-3 product-item">
        <img src="images/sp2.jpg" alt="Trà xanh kiwi"/>
        <h3>Trà xanh kiwi</h3>
        <p className="price">35.000đ</p>
        </div>

         
        <div className="col-3 product-item">
        <img src="images/sp3.jpg" alt="Matcha latte"/>
        <h3>Matcha latte </h3>
        <p className="price">40.000đ</p>
        </div>
         
        <div className="col-3 product-item">
        <img src="images/sp4.jpg" alt="Trà sữa thái xanh"/>
        <h3>Trà sữa thái xanh</h3>
        <p className="price">25.000đ</p>
        </div>
         
        <div className="col-3 product-item">
        <img src="images/sp5.jpg" alt="Matcha xoài"/>
        <h3>Matcha xoài</h3>
        <p className="price">32.000đ</p>
        </div>
         
        <div className="col-3 product-item">
        <img src="images/sp6.jpg" alt="Trà tắt thái xanh"/>
        <h3>Trà tắt thái xanh</h3>
        <p className="price">20.000đ</p>
        </div>
         
        <div className="col-3 product-item">
        <img src="images/sp7.jpg" alt="Matcha đá xay"/>
        <h3>Matcha đá xay</h3>
        <p className="price">45.000đ</p>
        </div>
         
        <div className="col-3 product-item">
        <img src="images/sp8.jpg" alt="Trà chanh xanh"/>
        <h3>Trà chanh xanh</h3>
        <p className="price">35.000đ</p>
        </div>
         
        <div className="col-3 product-item">
        <img src="images/sp9.jpg" alt="Capuchino"/>
        <h3>Capuchino</h3>
        <p className="price">45.000đ</p>
        </div>
         
        <div className="col-3 product-item">
        <img src="images/sp10.jpg" alt="Fress coco matcha"/>
        <h3>Fress coco matcha</h3>
        <p className="price">65.000đ</p>
        </div>
      </div>
      </div>

  {/* Liên hệ */}
<div className="lienhe" style={{backgrsoundColor: "rgb(0, 31, 14)", padding:"20px", borderRadius:"10px"}}>
  <div className="container">

    <h2 className="titles">LIÊN HỆ VỚI CHÚNG TÔI</h2>

    <div className="contact-box">
      <p>Họ và tên</p>
      <input 
        type="text" 
        placeholder="Nhập họ và tên của bạn"
      />

      <p>Lời góp ý</p>
      <textarea 
        rows="4"
        placeholder="Nhập lời góp ý của bạn"
      ></textarea>

      <button className="btn-send mt-3">Gửi liên hệ</button>

    </div>

  </div>
</div>
    </>
  );
}

export default App;