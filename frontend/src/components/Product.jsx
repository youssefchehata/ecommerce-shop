import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Card className='mb-3' p-3 rounded>
      <a href={`/product/${product.id}`}>
        <Card.Img src={product.image} variant='top' alt={product.name} />
      </a>
      <Card.Body>
        <a href={`/product/${product.id}`}>
          <Card.Title as='div'>{product.name}</Card.Title>
        </a>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
