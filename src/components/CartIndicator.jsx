import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Button, Container, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const CartIndicator = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const cartLength = useSelector(state => state.cart.content.length);
  const user = useSelector(state => state.user.content);

  return (
    <Container>
      <div className="text-end mt-3 mb-4 px-0">
        <div className="d-flex justify-content-end align-items-center">
          {user ? (
            <>
              <span className="me-2">
                Ciao, <strong>{user}</strong>
              </span>
              <Link to="/cart" className="btn btn-primary">
                <FaShoppingCart />
                <span className="ms-2">{cartLength}</span>
              </Link>
            </>
          ) : (
            <>
              <FormControl placeholder="Inserisci il tuo nome" className="w-25" value={inputValue} onChange={e => setInputValue(e.target.value)} />
              <Button
                variant="info"
                onClick={() => {
                  dispatch({ type: "SET_USER", payload: inputValue });
                }}
              >
                Log In
              </Button>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CartIndicator;
