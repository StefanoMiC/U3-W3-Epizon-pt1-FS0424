import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Container } from "react-bootstrap";

const CartIndicator = () => {
  return (
    <Container>
      <div className="text-end mt-3 mb-4 px-0">
        <div className="d-flex justify-content-end align-items-center">
          <Link to="/cart" className="btn btn-primary">
            <FaShoppingCart />
            <span className="ms-2">0</span>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default CartIndicator;
