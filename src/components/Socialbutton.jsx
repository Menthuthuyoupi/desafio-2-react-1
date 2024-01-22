import React from 'react'
import PropTypes from 'prop-types'

import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Socialbutton = props => {
  return (
    <>  
        <Button className='boton-icono' >
            <FontAwesomeIcon className='icono' icon={props.logo} />
        </Button>
    </>

  )
}

Socialbutton.propTypes = {}

export default Socialbutton