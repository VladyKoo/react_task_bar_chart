import React, { useState } from "react"; 
import './App.css'
import Chart from './components/chart/Chart'


function App() {
  const [firstChartData,  setFirstChartData] = useState([10, 20, 25, 40, 80, 70, 50, 150, 25, 40, 80, 70, 50])
  const [secondChartData,  setSecondChartData] = useState([100, 200, 300, 1000, 1500, 250, 400, 800, 700, 500, 1500, 250, 400, 800, 700, 500])
 
  return (
    <div className="app">
      <div className='firstChart'>
        <Chart data={firstChartData} range={[0, 100]} color='blue'/>      
      </div>
      <div className='secondChart'>
        <Chart data={secondChartData} range={[0, 1000]} color='red'/>        
      </div>
    </div>
  )
}

export default App
