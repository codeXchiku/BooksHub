import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react'
import { useFireBase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const firebase = useFireBase()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log("sigining Up a user")
        await firebase.signUp(email,password)
        console.log("sign up completed")
    }

    const navigate = useNavigate()

        useEffect(()=>{
            if (firebase.isLoggedIn) {
                navigate("/")
            }
        },[firebase,navigate])
    
    return (
        <div className='container mt-4'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                         onChange={(e)=>setEmail(e.target.value)}
                        placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    create account
                </Button>
            </Form>
            <div className='mt-5'>
                <Button variant="danger" onClick={firebase.googleAuthentication}>continue with Google</Button>
            </div>
        </div>
    )
}

export default Register