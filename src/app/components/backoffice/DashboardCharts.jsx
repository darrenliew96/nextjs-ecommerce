import React from 'react'
import BestSellingProductsChart from './BestSellingProductsChart'
import WeeklySalesChart from './WeeklySalesChart'

function DashboardCharts() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <WeeklySalesChart/>
        <BestSellingProductsChart/>
    </div>
  )
}

export default DashboardCharts