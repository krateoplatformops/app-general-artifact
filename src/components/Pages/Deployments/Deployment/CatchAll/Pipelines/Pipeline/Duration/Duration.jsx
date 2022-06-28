import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import { uiHelper } from '../../../../../../../../helpers'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

const options = {
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}

const Duration = ({ runs }) => {
  const chartData = () => {
    const srt = [...runs].sort((a, b) => a.time - b.time)

    return {
      labels: srt.map((r) => 'id: ' + r.id),
      datasets: [
        {
          label: 'Duration',
          data: srt.map((r) => r.duration),
          backgroundColor: srt.map((r) => uiHelper.colorByStatus(r.status)),
          tension: 0.4
        }
      ]
    }
  }

  return (
    <React.Fragment>
      <Line data={chartData()} options={options} />
    </React.Fragment>
  )
}

export default Duration
