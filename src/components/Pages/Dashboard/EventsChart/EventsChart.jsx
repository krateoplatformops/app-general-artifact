import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

import { timeHelper, uiHelper } from '../../../../helpers'
import css from './EventsChart.module.scss'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
)

const options = {
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true
    },
    y: {
      stacked: true
    }
  }
}

const EventsChart = ({ data }) => {
  const chartData = {
    labels: data.labels.map((x) => timeHelper.dateToDayFormat(x)),
    datasets: data.datasets.map((x) => {
      return {
        label: x.label,
        data: x.data,
        backgroundColor: uiHelper.backgroundColorByLevel(x.label, 0.5),
        borderColor: uiHelper.borderColorByLevel(x.label),
        borderWidth: 1
      }
    })
  }

  return (
    <div className={css.Container}>
      <div className={css.Title}>Latest events</div>
      <div className={css.Chart}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  )
}

export default EventsChart
