import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './style.css';
import CartContext from '../../utils/cartContext';

function Productcard({ p, i }) {
  const {addToCart} = useContext(CartContext);

  function handleClick (){
    console.log("Adding " + p.name + " to cart")
    addToCart(p)
  }

  return (
    <section className="col-md-3 xs-12" key={i}>
      <Card>
        <Link to={`/product/${p._id}`}>
        <Card.Img variant="top" src={p.image} className="card-image" />
        </Link>
        <Card.Body>
          <Card.Title>
            {p.name} ${p.price}
          </Card.Title>
          <Card.Text>
            {p.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <p><Link to={`/user/products/${p.vendor._id}`}>{p.vendor.name}</Link></p>
          <Button onClick={handleClick}>Add to Cart</Button>
        </Card.Footer>
      </Card>
    </section>
  );
}

export default Productcard;

