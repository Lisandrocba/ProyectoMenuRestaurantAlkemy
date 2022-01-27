import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';

const Login =()=>{

    const url = 'http://challenge-react.alkemy.org/';

    const [datos, setDatos] = useState({
        form:{
            'email': '',
            'password': ''
        },
        error: false,
        errorMsj: ''
    });
    
    const manejadorFormulario =(e)=>{
        e.preventDefault();
    }

    const guardarDatos = async e =>{
        await setDatos({
            form:{
                ...datos.form,
                [e.target.name] : e.target.value
            }
        })
    }

    const navigate = useNavigate();
    
    const btnLogin =()=>{
        setDatos({error:false})
        axios.post(url, datos.form)
        .then(res=>{
            if(res.statusText === 'OK'){
                console.log('confirmado el login')
                localStorage.setItem('token', res.data.token);
                navigate('/inicio');
            }else{
                setDatos({
                    error: true,
                    errorMsj: res.response.data.error
                })
            }
            
        }).catch(e => {
            if (!e)return
            setDatos({
                error: true,
                errorMsj: e.response.data.error
            })
        })
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className='col-md-6'>
                    <h1 className='text-center p-4' text='light'>Login</h1> 
                    <Form type='submit' onSubmit={manejadorFormulario}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Usuario:</Form.Label>
                        <input className='form-control'  name='email' type="email" placeholder="Usuario@mail" onChange={guardarDatos} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña:</Form.Label>
                        <input className='form-control'  name='password' type="password" placeholder="Password" onChange={guardarDatos} />
                    </Form.Group>
                
                    <Button variant="dark" type="submit" onClick={()=> btnLogin() }>
                        Iniciar Sesion
                    </Button>
                    {datos.error === true &&
                        <Alert className='mt-3'  variant='danger'>
                            {datos.errorMsj}
                        </Alert>
                    }

                    </Form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login