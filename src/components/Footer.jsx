import { Col, Row } from "react-bootstrap";

const Footer = () => (
  <Row className="epizon-footer">
    <Col>
      <footer>
        <span className="text-muted">Epizon {new Date().getFullYear()}©</span>
      </footer>
    </Col>
  </Row>
);

export default Footer;
