import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import { uiHelper } from '../../../../../../../helpers'

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
  plugins: {
    legend: {
      display: false
    }
  }
}

const Stats = ({ resources }) => {
  const chartData = () => {
    return {
      labels: resources.map((r) => r.kind),
      datasets: [
        {
          label: 'Items',
          data: resources.map((r) => r.items.length),
          backgroundColor: resources.map((r) => uiHelper.colorByWord(r.kind))
        }
      ]
    }
  }

  return (
    <React.Fragment>
      <Doughnut data={chartData()} options={options} />
    </React.Fragment>
  )
}

export default Stats
