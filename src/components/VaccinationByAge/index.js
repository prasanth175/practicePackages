// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {item} = props

  return (
    <div className="container">
      <>
        <h1>Vaccination by Age</h1>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart className="pie-box">
            <Pie
              cx="70%"
              cy="40%"
              data={item}
              startAngle={0}
              endAngle={360}
              innerRadius="0%"
              outerRadius="60%"
              dataKey="count"
            >
              <Cell name="18-44" fill="#f54394" />
              <Cell name="44-60" fill="#5a8dee" />
              <Cell name="Above 60" fill="#2cc6c6" />
            </Pie>
            <Legend
              iconType="circle"
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </PieChart>
        </ResponsiveContainer>
      </>
    </div>
  )
}

export default VaccinationByAge
