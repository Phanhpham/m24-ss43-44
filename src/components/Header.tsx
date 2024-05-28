export default function Header() {
  return (
    <div className="container">
      <div className="left-container">
        <div className="tab">
          <span>
            <i className="fa-solid fa-house"></i>
          </span>
          <a href="">Trang chủ</a>
        </div>
        <div className="tab">
          <span>
            <i className="fa-solid fa-bars"></i>
          </span>
          <a href="">Contents</a>
        </div>
        <div className="tab">
          <span>
            <i className="fa-solid fa-list"></i>
          </span>
          <a href="">Categories</a>
        </div>
        <div className="tab">
          <span>
            <i className="fa-solid fa-gear"></i>
          </span>
          <a href="">Settings</a>
        </div>
      </div>
      <div className="right-container">
        <button>
          <i className="fa-solid fa-user"></i>
          <span>Admin</span>
        </button>
      </div>
    </div>
  );
}
