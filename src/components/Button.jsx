import React from 'react'

const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
    return (
        <button className={`flex justify-center items-center gap-2 font-montserrat px-7 py-4 border leading-none
            ${
                backgroundColor
                ? `${backgroundColor} ${textColor} ${borderColor}`
                : 'bg-coral-red text-white text-lg'
            } rounded-full ${fullWidth && 'w-full'}`}>
        
            {label}

            {iconURL && <img 
                src={iconURL}
                alt='arrow right icon'
                className='ml-2 rounded-full w-5 h-5'
            />}
        </button>
    )
}

export default Button