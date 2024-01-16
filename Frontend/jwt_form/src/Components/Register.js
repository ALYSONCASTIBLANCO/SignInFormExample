import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Register(){
    return(
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={5}>
                    <Form>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control type='email' placeholder='example@email.com'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Your username</Form.Label>
                            <Form.Control type='text' placeholder='Enter a valid username'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter a safe password'></Form.Control>   
                        </Form.Group>
                        <Button variant='primary' type='submit'>Register</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}