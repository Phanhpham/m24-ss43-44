import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function Main() {
  return (
    <div className="main">
      <div className="first-main">
        <div className="left">
          <span style={{ fontWeight: "bold" }}>Add new post</span>
          <div className="button">
            <button>
              <i className="fa-solid fa-plus"></i>
              <span>Add Content</span>
            </button>
          </div>
          <div className="button">
            <button>
              <i className="fa-solid fa-gear"></i>
              <span>Settings</span>
            </button>
          </div>
        </div>
        <div className="right">
          <input type="text" placeholder="Search here" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div className="second-main">
        <div className="statisics">
          <i className="fa-solid fa-bag-shopping"></i>
          <div className="statisic">
            <p>Total Stores</p>
            <b>$2,456</b>
          </div>
        </div>
        <div className="statisics">
          <i className="fa-solid fa-store"></i>
          <div className="statisic">
            <p>Total Experiences</p>
            <b>$3,326</b>
          </div>
        </div>
        <div className="statisics">
          <i className="fa-solid fa-people-line"></i>
          <div className="statisic">
            <p>Total Visitors</p>
            <b>5,325</b>
          </div>
        </div>
        <div className="statisics">
          <i className="fa-solid fa-list"></i>
          <div className="statisic">
            <p>Total Order</p>
            <b>1,326</b>
          </div>
        </div>
      </div>
      <div className="last-main">
        <b>Form Title</b>
        <p>
          Sed tortor, sed velit ridiculus ipsum pharetra locus adio gravida
          angue enim
        </p>
        <br />
        {["danger"].map((variant) => (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Table Title</th>
              <th>Table Title</th>
              <th>Table Title</th>
              <th>Table Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Etiam purus in</td>
              <td>Curabitur donec duis</td>
              <td>Morbi pharetta, accumsan</td>
              <td>
                <Button variant="warning">Edit</Button>{" "}
                <Button variant="danger">Delete</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>Etiam purus in</td>
              <td>Curabitur donec duis</td>
              <td>Morbi pharetta, accumsan</td>
              <td>
                <Button variant="warning">Edit</Button>{" "}
                <Button variant="danger">Delete</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>Etiam purus in</td>
              <td>Curabitur donec duis</td>
              <td>Morbi pharetta, accumsan</td>
              <td>
                <Button variant="warning">Edit</Button>{" "}
                <Button variant="danger">Delete</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>Etiam purus in</td>
              <td>Curabitur donec duis</td>
              <td>Morbi pharetta, accumsan</td>
              <td>
                <Button variant="warning">Edit</Button>{" "}
                <Button variant="danger">Delete</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>Etiam purus in</td>
              <td>Curabitur donec duis</td>
              <td>Morbi pharetta, accumsan</td>
              <td>
                <Button variant="warning">Edit</Button>{" "}
                <Button variant="danger">Delete</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>Etiam purus in</td>
              <td>Curabitur donec duis</td>
              <td>Morbi pharetta, accumsan</td>
              <td>
                <Button variant="warning">Edit</Button>{" "}
                <Button variant="danger">Delete</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>Etiam purus in</td>
              <td>Curabitur donec duis</td>
              <td>Morbi pharetta, accumsan</td>
              <td>
                <Button variant="warning">Edit</Button>{" "}
                <Button variant="danger">Delete</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>Etiam purus in</td>
              <td>Curabitur donec duis</td>
              <td>Morbi pharetta, accumsan</td>
              <td>
                <Button variant="warning">Edit</Button>{" "}
                <Button variant="danger">Delete</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>Etiam purus in</td>
              <td>Curabitur donec duis</td>
              <td>Morbi pharetta, accumsan</td>
              <td>
                <Button variant="warning">Edit</Button>{" "}
                <Button variant="danger">Delete</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>Etiam purus in</td>
              <td>Curabitur donec duis</td>
              <td>Morbi pharetta, accumsan</td>
              <td>
                <Button variant="warning">Edit</Button>{" "}
                <Button variant="danger">Delete</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>Etiam purus in</td>
              <td>Curabitur donec duis</td>
              <td>Morbi pharetta, accumsan</td>
              <td>
                <Button variant="warning">Edit</Button>{" "}
                <Button variant="danger">Delete</Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="next-tab">
          <div className="clicks">
            <button>
              <i className="fa-solid fa-angles-left"></i>
            </button>
          </div>
          <div className="click">
            <button>1</button>
          </div>
          <div className="click">
            <button>2</button>
          </div>
          <div className="click">
            <button>3</button>
          </div>
          <div className="click">
            <button>4</button>
          </div>
          <div className="click">
            <button>5</button>
          </div>
          <div className="clicks">
            <button>
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
