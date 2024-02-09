import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Register(){
    const [values, setValues]=React.useState({
        user:"",
        email:"",
        password:""
    });

    async function handleSubmit(e){
        e.preventDefault();
        const res=await fetch("http://localhost:4000/api/users",{
            headers:{
                "Content-Type": "application/json"
            },
            method:"POST",
            body: JSON.stringify({
                email: values.email,
                username: values. user,
                password: values.password
            })

        });
        const data = await res.json();
        if(data.token===undefined){
            alert(data);
        }
        else{
            alert("Usuario registrado exitosamente. Su token de acceso es: "+ data.token);
        }
        
        //alert(values.user+" "+values.password+" "+values.email)
    }

    function handleChange(e){
        const {target}=e;
        const{name, value}=target;

        const newValues={
            ...values,
            [name]:value
        };
        setValues(newValues);
    }
    return(
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={5}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control id="email" type='email' name="email" placeholder='example@email.com' onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Your username</Form.Label>
                            <Form.Control id="user" type='text' name="user" placeholder='Enter a valid username' onChange={handleChange}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control id="password" type='password' name="password"  placeholder='Enter a safe password' onChange={handleChange}></Form.Control>   
                        </Form.Group>
                        <Button variant='primary' type='submit'>Register</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}