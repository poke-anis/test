import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component, useState, useEffect } from "react";

function App() {
  const [products, setproducts] = useState([]);
  const [cart, setcart] = useState([]);

  const addProduct = async (product) => {
    await setcart([...cart, product]);
    console.log(cart);
  };

  useEffect(() => {
    fetch("products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "applicaction/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setproducts([...data.products]);
        console.log(products);
      });
  }, []);

  return (
    <div className="App">
      <Nav />
      <Main />
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {products.map((element) => (
              <Product
                key={element.id}
                currentProd={element}
                addProd={addProduct}
              />
            ))}
          </div>
        </div>
      </div>
      <Modal mycart={cart} />
    </div>
  );
}

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Ouedkniss
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Products
            </a>
          </li>
        </ul>
        <div className="cart">
          <div data-toggle="modal" data-target="#myModal">
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              className="bi bi-cart"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
            <span className="badge">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Main = (props) => {
  return (
    <main role="main">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Products example</h1>
          <p className="lead text-muted">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </p>
          <p>
            <a href="#" className="btn btn-primary m-2">
              Main call to action
            </a>
            <a href="#" className="btn btn-secondary m-2">
              Secondary action
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

const Carousel = (props) => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row"></div>
      </div>
    </div>
  );
};
const Product = (props) => {
  var { currentProd, addProd } = props;
  var { name, price, quantity } = currentProd;
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img
          className="card-img-top"
          data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
          alt="Thumbnail [100%x225]"
          style={{ height: "225px", width: "100%", display: "block" }}
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17609e8b5a0%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17609e8b5a0%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          data-holder-rendered="true"
        ></img>
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            et quos vel temporibus asperiores aliquam doloremque excepturi quam,
            reiciendis labore?
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <button
              onClick={() => addProd(currentProd)}
              type="button"
              className="btn btn-primary"
            >
              Add to cart
            </button>
            <p className="font-weight-bold">{price}.00 $</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  const { mycart } = props
  return (
    <div
      className="modal fade"
      id="myModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable .modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Your Cart
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody id="cartItems">
                {mycart.map((el) => <Tr currentProd={el} />)}
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Checkout
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tr = (props) => {
  var { name, price, quantity } = props.currentProd;
  return (
    <tr>
      <th scope="row">#</th>
      <td> {name} </td>
      <td>{price}</td>
      <td> {quantity}</td>
    </tr>
  );
};


export default App;
