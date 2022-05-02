import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

import { uiConstants } from '../../../../../../../../constants'
import { uiHelper } from '../../../../../../../../helpers'

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
  plugins: {
    legend: {
      display: false
    }
  }
}

const Stats = ({ runs }) => {
  const chartData = () => {
    let result = []
    runs.reduce((res, value) => {
      if (!res[value.status]) {
        res[value.status] = { status: value.status, count: 0 }
        result.push(res[value.status])
      }
      res[value.status].count++
      return res
    }, {})

    return {
      labels: result.map((r) => r.status),
      datasets: [
        {
          label: 'Status',
          data: result.map((r) => r.count),
          backgroundColor: result.map((r) => uiHelper.colorByStatus(r.status))
        }
      ]
    }
  }

  return (
    <React.Fragment>
      <Pie data={chartData()} options={options} />
    </React.Fragment>
  )
}

export default Stats
