import React from 'react'
import PropTypes from 'prop-types'

const countryImage = "data:image/jpeg;base64,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"
const Card = ({country,totalCase,totalRecovered,totalDeaths}) => {
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-all'>
            <img className='w-full' src={countryImage} alt='Country' />
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{country} </div>
                <p className='text-gray-700 text-base'>
                   totol case:{totalCase}
                </p>
                <p className='text-gray-700 text-base'>
                   totol Deaths:{totalDeaths}
                </p>
                <div className='px-6 pt-4 pb-2'>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{totalRecovered}
                    </span>
                </div>
            </div>  
        </div>
    )
}
Card.propTypes = {
    country: PropTypes.string,
    totalCase: PropTypes.string,
    totalRecovered: PropTypes.string,
    totalDeaths: PropTypes.string,

}
Card.defaultProps = {
    country: "",
    totalCase: "",
    totalRecovered: "",
    totalDeaths: "",
}


export default Card;