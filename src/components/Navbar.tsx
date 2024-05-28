export default function Navbar() {
  return (
    <div className="sidebar">
      <button>
        <i className="fa-solid fa-plus"></i>
        New Item
      </button>
      <div className="selected">
        <span>
          <i className="fa-solid fa-list-check"></i>
        </span>
        <select name="" id="">
          <option value="">Dashboard</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
      <div className="selected">
        <span>
          <i className="fa-solid fa-list-check"></i>
        </span>
        <select name="" id="">
          <option value="">Application</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
      <div className="selected">
        <span>
          <i className="fa-solid fa-list-check"></i>
        </span>
        <select name="" id="">
          <option value="">Elements</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
      <div className="selected">
        <span>
          <i className="fa-solid fa-list-check"></i>
        </span>
        <select name="" id="">
          <option value="">Forms</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
      <div className="selected">
        <span>
          <i className="fa-solid fa-list-check"></i>
        </span>
        <select name="" id="">
          <option value="">Plugins</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
      <div className="selected">
        <span>
          <i className="fa-solid fa-list-check"></i>
        </span>
        <select name="" id="">
          <option value="">Datagrid</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
      <div className="selected">
        <span>
          <i className="fa-solid fa-list-check"></i>
        </span>
        <select name="" id="">
          <option value="">Settings</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
    </div>
  );
}
