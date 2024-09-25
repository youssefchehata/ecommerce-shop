import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='mb-3' p-3 rounded>
      <Link to={`/product/${product.id}`}>
        <Card.Img src={product.image} variant='top' alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='product-title'>{product.name}</Card.Title>
        </Link>
        <Card.Text as="div"> <Rating value={product.rating} text={`${product.numReviews} reviews`} /></Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
