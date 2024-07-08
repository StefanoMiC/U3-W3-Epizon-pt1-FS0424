import { Col, Row, Button, ListGroup } from "react-bootstrap";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

const Cart = ({ cart = [] }) => {
  return (
    <div className="cart">
      <Row>
        <Col sm={12} className="font-weight-bold mb-5 ms-3">
          TOTAL: <span className="display-6 text-primary">{cart.reduce((acc, currentValue) => acc + parseFloat(currentValue.price), 0).toFixed(2)}€</span>
        </Col>
        <Col sm={12} className="mb-5">
          <ListGroup variant="flush">
            {cart.length > 0 ? (
              cart.map((book, i) => (
                <ListGroup.Item key={i}>
                  <Button variant="danger" onClick={() => {}}>
                    <FaTrash />
                  </Button>
                  <img className="book-cover-small" src={book.imageUrl} alt="book selected" />
                  {book.title}
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item className="lead ">
                <span className="text-primary opacity-50 fs-1 me-2">
                  <FaShoppingCart />
                </span>
                Your cart is empty
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
