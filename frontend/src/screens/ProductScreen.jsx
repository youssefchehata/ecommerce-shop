import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row , Col , Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
// import products from "../products";
import {useGetProductByIdQuery} from "../slices/productsApiSlice";


const ProductScreen = () => {
    const { id :productId} = useParams();
    console.log("productId",productId);
    const { data:product, isLoading, error } = useGetProductByIdQuery(productId);


  return (

    <>
    <Link className="btn btn-light my-3" to='/'> Go Back </Link>
   {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error?.data?.message || error.error}</h1>
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

            <ListGroup.Item>
                <Button className="btn-block"  type='button' disabled={product?.countInStock === 0}>Add to Cart</Button>
            </ListGroup.Item>
            
          </ListGroup>
         </Card>
         </Col>

    </Row>)}
    </>
  )
}

export default ProductScreen