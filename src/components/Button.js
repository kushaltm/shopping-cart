import React from 'react'
import { IntlProvider } from 'react-intl'

const Button = ({text,onAdd}) => {
  return (
    <IntlProvider locale='en'>
      <button className='btn' 
        onClick={onAdd}>{text}
      </button>
    </IntlProvider>
  )
}

export default Button
