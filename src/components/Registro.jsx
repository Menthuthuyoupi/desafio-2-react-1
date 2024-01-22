import React from 'react'
import PropTypes from 'prop-types'

import Socialbutton from './Socialbutton'
import Formulario from './Formulario'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Registro = () => {
  return (
    <>  
        <div className='bg-secondary bg-gradient p-5'>
            <div className='mb-4'>
                <h1 className='mb-4'>Crea una cuenta</h1>
                <Socialbutton logo={faLinkedin}/>
                <Socialbutton logo={faFacebook}/>
                <Socialbutton logo={faGithub}/>
                <p className='mt-3'>o usa tu mail para registrarse</p>  
            </div>
        
            <Formulario/>
        </div>

    </>
  )
}

export default Registro