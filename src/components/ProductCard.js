import { Card, Button, Form, Row, Col } from "react-bootstrap"; 
// used to access cart object
import { CartContext } from "../CartContext";
// useContext is a hook provided by React
import { useContext } from "react";

function ProductCard(props) { //props.product is the product we are selling 
    const product = props.product;
    // needed to access cart object
    const cart = useContext(CartContext);
    // allows us to see if we have an item that is in our cart
    const getProductQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;