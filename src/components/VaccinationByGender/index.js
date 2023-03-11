// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {item} = props

  return (
    <div className="container">
      <>
        <h1>Vaccination by gender</h1>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart className="pie-box">
            <Pie
              cx="70%"
              cy="40%"
              data={item}
              startAngle={0}
              endAngle={180}
              innerRadius="40%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="Male" fill="#fecba6" />
              <Cell name="Female" fill="#b3d23f" />
              <Cell name="Other" fill="#a44c9e" />
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

export default VaccinationByGender
