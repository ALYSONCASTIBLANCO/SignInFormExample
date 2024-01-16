import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Choose(){
    return(
        <Container>
            <Row className='justify-content-md-center'>
                <ButtonGroup size="lg" classname='mb=2'>
                    <Button href='/signin'>Sign In</Button>
                    <Button href='/register'>Register</Button>
                </ButtonGroup>
            </Row>
        </Container>
    );
}