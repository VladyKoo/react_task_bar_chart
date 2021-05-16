import React from 'react'
import PropTypes from 'prop-types';
import './Chart.css'

const Chart = ( {data = [], range = [0, 100], color} ) => {

  const computedStyle  = (bar) => {
    bar = bar > range[1] ? range[1] : bar

    const height = `${ (bar * 100) / range[1] }%`
    const width = `${ 100 / data.length }%`
    
    return { height, width, backgroundColor: color }
  }

  return (
    <div className='chart'>
      {
        data.map( ( bar, index ) => {
          return (
            <div className='bar' key={index} style={computedStyle(bar)}></div>
          )
        })
      }
    </div>
  )
}

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  range: PropTypes.array.isRequired,
  color: PropTypes.string,  
};

export default Chart;

