import {Row, Col} from "react-bootstrap";
import { productsArray } from "../ProductsStore";
import ProductCard from "../components/ProductCard";

function Store() {
    return (
        <>
            <h1 align="center" className="p-3">Welcome to the store!</h1>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        {/* Left product defines property, right product defines
                        product we are mapping over  */}
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store;