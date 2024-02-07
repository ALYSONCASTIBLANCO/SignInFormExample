import Figure from 'react-bootstrap/Figure';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
export default function Intro(){
    return(
        <Container>
            <Row className='justify-content-md-center'>
                <Col sm={2}>
                <Figure>
                    <Figure.Image
                    width={400}
                    height={500}
                    alt='400x500'
                    src='child.jpg'/>
                </Figure>
                </Col>
                <Col sm={7}>
                <h1 className='fs-1 text-center'>Welcome to SignIn.com</h1>
                </Col>
                <Col sm={3}>
                    <Button variant='secondary' href='/'>Back to Home</Button>
                </Col>
            </Row>
        </Container>

            

    );
}