import React from 'react'
import PropTypes from 'prop-types'

import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css'


const Alerta = props => {

  return (
    <> 
        <div className='caja-validacion'>

          {
            props.validarFuncion ? (props.validacion ?  <Alert variant="danger" className='mt-2 p-2 validacion'>Invalido!! Verificar tus datos y contraseña</Alert> :
                                    <Alert variant="success" className='mt-2 p-2 validacion'>Validado, Gracias por registrarte</Alert>) : null
                                                       
          }
        </div>
        
    </>
  )
    
}

Alerta.propTypes = {}

export default Alerta