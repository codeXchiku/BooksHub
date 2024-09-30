import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFireBase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
        const[email,setEmail]=useState('')
        const[password,setPassword] = useState('')

        const firebase = useFireBase()

        const handleSubmit = async(e)=>{
            e.preventDefault()
            console.log("siginIn a user")
            await firebase.signIn(email,password)
            console.log("siginIn successfull")
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
                placeholder="Enter email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                value={password}
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>

        <div className='mt-5'>
                <Button variant="danger" onClick={firebase.googleAuthentication}>continue with Google</Button>
            </div>
        </div>
    )
}

export default Login