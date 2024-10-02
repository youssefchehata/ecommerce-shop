import {Link , useNavigate} from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import {Row ,Col , ListGroup , Card, Image,Form ,Button, ListGroupItem} from "react-bootstrap";
import {FaTrash} from 'react-icons/fa';
import Message from "../components/Message";
import { addToCart } from "../slices/cartSlice";

const CartScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const {cartItems}=cart;
    
    const addToCartHandler = async(el , qty)=>{
      dispatch(addToCart({...el, qty}));
      navigate(`/cart`);
  }

  return (
    <Row>
        <Col md={8}>
        <h1 style={{marginBottom:'20px'}}>Shopping Cart</h1>
        {cartItems.length===0 ?(<Message>Your cart is empty <Link to='/'>Go Back</Link> </Message>):(
            <ListGroup variant='flush'>
               {cartItems.map((el , index)=>(
                <ListGroupItem key={index}>
                    <Row>
                        <Col md={2}> <Image src={el.image} alt={el.name} fluid roundedCircle /> </Col>
                        <Col md={3} > <Link to={`/product/${el._id}`}>{el.name}</Link> </Col>
                        <Col md={2} > <strong>${el.price}</strong> </Col>
                        <Col md={2} > 
                                   <Form.Control
                               as='select'
                               value={el.qty}
                               onChange={(e)=>{ addToCartHandler(el , Number(e.target.value))}}
                             >
                               {[...Array(el?.countInStock).keys()].map((i) => ( <option key={i} value={i + 1}> {i + 1} </option> ))}
                             </Form.Control>
                        </Col>
                      <Col md={2} > <Button    type='button' variant="light" onClick={()=>{}}><FaTrash/></Button> </Col>
                    </Row>
                </ListGroupItem>)
               )}
            </ListGroup>
        )}
        </Col>

        <Col md={4}>
        <Card>
         <ListGroup variant='flush'>
         <ListGroup.Item><h2> Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
         ${cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}
         </ListGroup.Item>
         <ListGroup.Item>
            <Button type="button" className="btn-block" disabled={cartItems.length === 0} >Checkout</Button>
         </ListGroup.Item>
    
        </ListGroup>
        </Card>
        </Col>
       
    </Row>
  )
}

export default CartScreen