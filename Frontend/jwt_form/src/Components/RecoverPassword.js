import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import React from "react";
import { useState } from "react";

export default function RecoverPassword() {
    const [values, setValues]=React.useState({
        email:""
    });
    async function handleSubmit(e){
        e.preventDefault();
        const res=await fetch("http://localhost:4000/api/forgotpass",{
            headers:{
                "Content-Type":"application/json"
            },
            method:"POST",
            body:JSON.stringify({
                email:values.email
            })
        });
        const data=await res.json();
        alert(data);
        //alert(values.email);
    }
    function handleChange(e){
        const{target}=e;
        const {name, value}=target;

        const newValues={
            ...values,
            [name]:value,
        };
        setValues(newValues);
    }
    return (
        <Container>
            <Row className="justify-content-md-center">
                <h1 className="fs-1 text-center">Password recovery</h1>
            </Row>
            <Row className="justify-content-md-center">
                <h1 className="fs-3 text-center">Please, type your email and you can recover your password through an email:</h1>
            </Row>
            <Row className="justify-content-md-center">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Type your email</Form.Label>
                        <Form.Control id='email' type='email' name="email" value={values.email} onChange={handleChange} placeholder='example@mail.com'></Form.Control>
                    </Form.Group>
                    <Button type="submit" value="Submit">Recover</Button>
                </Form>
            </Row>
        </Container>
    );
}