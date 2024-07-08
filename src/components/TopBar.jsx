import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartIndicator from "./CartIndicator";

const TopBar = () => (
  <Row>
    <Col sm={12} className="text-center background-div">
      <Link to="/" className="text-decoration-none">
        <h1 className="display-4 me-3">Epizon Book Store</h1>
      </Link>
    </Col>
    <Col>
      <CartIndicator />
    </Col>
  </Row>
);
export default TopBar;
