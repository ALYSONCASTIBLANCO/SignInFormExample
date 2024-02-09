import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';


export default function SignIn(){
    //Se iniciaizan los valores una vez se renderice el comp.
    const [values, setValues]=React.useState({
        user:"",
        password:""
    }        
    );
    //Ejecuta cuando se da clic en el boton de Submit
async function handleSubmit(e){
    e.preventDefault();
    const res=await fetch('http://localhost:4000/api/login', {
        headers:{
            "Content-Type":"application/json"
        },
        method:"POST",
        body: JSON.stringify({
            username:values.user,
            password:values.password
        })
    });
    const data=await res.json();
    alert(data);

    //alert(values.user+" "+values.password);

}
//Identifica cuando hay un cambio en el estado 
//de la variable y lo actualiza.
function handleChange(e){
const {target}=e;
const {name, value}=target;

//Seccion que clona el estado actual y reemplaza
//solo el valor del input que cambia

const newValues={
    ...values,
    [name]:value,
};
setValues(newValues);}

    return(
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={5}>
                <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>User</Form.Label>
                    <Form.Control id="user" type='text' name='user' value={values.user} onChange={handleChange} placeholder='Type your User'></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control id="password" type='password' name="password" value={values.password} onChange={handleChange} placeholder='Type your Password'></Form.Control>
                </Form.Group>
                <ButtonGroup size='md' className='mb-2 px-2'>
                    <Button  type='submit' value='Submit' >Sign In</Button>
                    <Button  href='/recover'>Forgot user or password</Button>
                </ButtonGroup>
            </Form>

                </Col>
            </Row>
        </Container>
    );
}