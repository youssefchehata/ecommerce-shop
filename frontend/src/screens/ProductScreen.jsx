import { useState } from "react";
import { useParams , useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import { Row , Col , Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import Rating from "../components/Rating";
// import products from "../products";
import {useGetProductByIdQuery} from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";



const ProductScreen = () => {
    const { id :productId} = useParams();
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const [qty ,setQty] = useState(1);
     const { data:product, isLoading, error } = useGetProductByIdQuery(productId);
     const addToCartHandler =()=>{
      dispatch(addToCart({...product, qty}));
      navigate(`/cart`);
  }

  return (

    <>
    <Link className="btn btn-light my-3" to='/'> Go Back </Link>
   {isLoading ? (
        <Loader/>
      ) : error ? (
        <Message variant={'danger'}>{error?.data?.message || error.error}</Message>

      ) : (
    <Row>
        <Col md={5} ><Image src={product?.image} alt={product?.name} fluid /></Col>
        <Col md={4} >
        <ListGroup variant='flush'>
        <ListGroup.Item>Price: ${product?.price}</ListGroup.Item>
        <ListGroup.Item>Rating: <Rating value={product?.rating} text={`${product?.numReviews} reviews`} /></ListGroup.Item>
        <ListGroup.Item>Description: {product?.description}</ListGroup.Item>
        </ListGroup>
         </Col>

        <Col  md={3} >
         <Card>
          <ListGroup variant='flush'>

            <ListGroup.Item>
                <Row>
                    <Col>Price:</Col>
                    <Col><strong>${product?.price}</strong></Col>
                </Row>
            </ListGroup.Item>

            <ListGroup.Item>
                <Row>
                    <Col>Status:</Col>
                    <Col><strong>${product?.countInStock > 0 ? "In Stock" : "Out of Stock"}</strong></Col>
                </Row>
            </ListGroup.Item>
          
          {product?.countInStock > 0 && (
            <ListGroup.Item>
                <Row>
                    <Col>Qty:</Col>
                    <Col>
                    <Form.Control
                    as='select'
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                  >
                    {[...Array(product?.countInStock).keys()].map((i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </Form.Control>
                    </Col>
                </Row>
           </ListGroup.Item>
          )}
            <ListGroup.Item>
                <Button onClick={addToCartHandler} className="btn-block"  type='button' disabled={product?.countInStock === 0}>Add to Cart</Button>
            </ListGroup.Item>
          </ListGroup>
         </Card>
         </Col>

    </Row>)}
    </>
  )
}

export default ProductScreen