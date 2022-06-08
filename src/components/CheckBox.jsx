import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const CheckBox = props => {

const inputRef = useRef(null);

const onChange = () => {
    if (props.onChange) {
        props.onChange(inputRef.current)
    }
}

  return (
    <div>
        <label className='custom-checkbox'>
            <input 
            type="checkbox" 
            ref={inputRef} 
            onChange={onChange} 
            checked={props.checked} />
            <span className='custom-checkbox__checkmark'>
                <i className='bx bx-check'></i>
            </span>
            {props.label}
        </label>
      
    </div>
  )
}

CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    chacked: PropTypes.bool

}

export default CheckBox
