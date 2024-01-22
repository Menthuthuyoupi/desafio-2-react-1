import React from 'react'
import { useState } from 'react'
import Alerta from './Alerta'

import Form from 'react-bootstrap/Form';

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const [verificarPassword, setVerificarPassword] = useState('')

    const [entrarValidarInput, setEntrarValidadInput] = useState(false)
    const [errorValidacion, setErrorValidacion] = useState(false)
    const [errorNombre, setErrorNombre] = useState(false)
    const [errorCorreo, setErrorCorreo] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorVerificarPassword, setErrorVerificarPassword] = useState(false)

    const validarInput = (e) => {
            e.preventDefault()
            setEntrarValidadInput(true)
            setErrorValidacion((nombre ==='' || correo ==='') || (password ==='' || password != verificarPassword))

            if((nombre ==='' || correo ==='') || (password ==='' || password != verificarPassword)){
                const validarNombre = () => {
                    if(nombre === ''){
                        setErrorNombre(true)
                        return
                    }
                    setErrorNombre(false)
                }
    
                validarNombre()
    
                const validarCorreo = () => {
                    if(correo === ''){
                        setErrorCorreo(true)
                        return
                    }
                    setErrorCorreo(false)
                }
    
                validarCorreo()
    
                const validarPassword = () => {
                    if(password === ''){
                        setErrorPassword(true)
                        return
                    }
                    setErrorPassword(false)
                }
    
                validarPassword()
    
                const revalidarPassword = () => {
                    if(password != verificarPassword){
                        setErrorVerificarPassword(true)
                        return
                    }
                    setErrorVerificarPassword(false)
                }
             
                revalidarPassword()    
            }else{
                setErrorNombre(false)
                setErrorCorreo(false)
                setErrorPassword(false)
                setErrorVerificarPassword(false)
            }
        }                           

     return (
        <Form onSubmit={validarInput}>
            <div className='div-input'>
                {errorNombre ? <p className='error'>Introduzca su nombre</p> : null}
                <input className='inputs' type='text' placeholder='juan perez' name='nombre' onChange={(e) => setNombre(e.target.value)} value={nombre}/>
            </div>
            <div className='div-input'>
                {errorCorreo? <p className='error'>Introduzca su Correo</p> : null}
                <input className='inputs' type='email' placeholder='juanperez@banana.cl' name='email' onChange={(e) => setCorreo(e.target.value)} value={correo} />
            </div>
            <div className='div-input'>
                {errorPassword ? <p className='error'>Introduzca su contraseña</p> : null}
                <input className='inputs' type='password' placeholder='Cotraseña' name='password' onChange={(e) => setPassword(e.target.value)} value={password}/> 
            </div>
            <div className='div-input'>
                {errorVerificarPassword ? <p className='error'>La contraseña no coincide</p> : null}    
                <input className='inputs' type='password' placeholder='Confirma tu Contraseña' name='repassword' onChange={(e) => setVerificarPassword(e.target.value)} value={verificarPassword}/> 
            </div>

            <button type="submit" className="btn btn-success mt-1 pb-2 boton-reg">Registrarse</button>

            <Alerta validacion={errorValidacion} validarFuncion={entrarValidarInput}/>

        </Form>
    )
}

export default Formulario