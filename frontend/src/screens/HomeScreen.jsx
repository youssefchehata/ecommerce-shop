import {Row , Col} from "react-bootstrap";
// import products from "../products";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";

const HomeScreen = () => {

  const { data:products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error?.data?.message || error.error}</h1>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product, index) => (
              <Col key={index} sm={12} md={6} lg={4} xl={3}>
                {' '}
                <Product product={product} />{' '}
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
}

export default HomeScreen