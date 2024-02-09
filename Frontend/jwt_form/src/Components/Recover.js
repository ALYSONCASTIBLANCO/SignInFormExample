import Col from "react-bootstrap/esm/Col";
import Row from 'react-bootstrap/esm/Row';
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Figure from 'react-bootstrap/Figure';
export default function Recover(){
    return(
        <Container>
            <Row className='justify-content-md-center'>
                <Col md={6}>
                    <h1 className="fs-2 text-center">What do you want to recover?</h1>
                </Col>
            </Row>
            <Row className='justify-content-md-center'>
                <Col md={6}>
                    <h1 className="fs-3 text-center">I want to recover my user</h1>                    
                    <div className="row justify-content-center">
                        <Figure>
                            <Figure.Image 
                            className="mx-auto d-block"
                            width={300}
                            height={300}
                            src='user.png'/>
                        </Figure>
                    </div>
                    
                    <div className="d-grid gap-2">
                        <Button className="px-3" variant='primary' href="/userrecovery">Recover now</Button>
                    </div>
                </Col>
                <Col md={6}>
                    <h1 className="fs-3 text-center">I want to recover my password</h1>
                    <div className="row justify-content-center">
                        <Figure>
                            <Figure.Image 
                            className="mx-auto d-block"
                            width={300}
                            height={300}
                            src='key-png-11.png'/>
                        </Figure>
                    </div>

                    <div className="d-grid gap-2">
                        <Button className="px-3" variant='primary' href="/passrecovery">Recover now</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}