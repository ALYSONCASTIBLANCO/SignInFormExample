import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

export default function SignIn(){
    return(
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={5}>
                <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>User</Form.Label>
                    <Form.Control type='text' placeholder='Type your User'></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Type your Password'></Form.Control>
                </Form.Group>
                <Button variant='primary' type='submit' value='Submit' onClick={alert("Done")}>Sign In</Button>
            </Form>

                </Col>
            </Row>
        </Container>
    );
}