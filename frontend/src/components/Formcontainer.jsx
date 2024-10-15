import {Container , Row , Col} from 'react-bootstrap'

const FormContainer = ({children}) => {
  return (
    <Container>
        <Row className='justify-content-center'>
            <Col xs={6} md={6} >
             { children }
            </Col>
        </Row>
    </Container>
  )
}

export default FormContainer