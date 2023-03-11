// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const statusCheck = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class CowinDashboard extends Component {
  state = {
    vacByAge: [],
    vacByGender: [],
    vacCoverage: [],
    status: '',
  }

  componentDidMount = async () => {
    this.setState({status: statusCheck.loading})
    const covidVaccinationDataApiUrl =
      'https://apis.ccbp.in/covid-vaccination-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(covidVaccinationDataApiUrl, options)
    console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      const first = data.last_7_days_vaccination.map(each => ({
        dose1: each.dose_1,
        dose2: each.dose_2,
        vaccineDate: each.vaccine_date,
      }))

      this.setState({
        vacCoverage: first,
        vacByAge: data.vaccination_by_age,
        vacByGender: data.vaccination_by_gender,
        status: statusCheck.success,
      })
    } else {
      this.setState({status: statusCheck.failure})
    }
  }

  renderSuccess = () => {
    const {vacByAge, vacByGender, vacCoverage} = this.state

    return (
      <>
        <VaccinationCoverage item={vacCoverage} />
        <VaccinationByGender item={vacByGender} />
        <VaccinationByAge item={vacByAge} />
      </>
    )
  }

  renderFailure = () => (
    <div className="failure-container">
      <img
        className="fail-img"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
        alt="failure view"
      />
      <h1>Something Went Wrong</h1>
    </div>
  )

  renderLoader = () => (
    <div data-testid="loader" className="loader-div">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderAll = () => {
    const {status} = this.state

    switch (status) {
      case statusCheck.success:
        return this.renderSuccess()
      case statusCheck.failure:
        return this.renderFailure()

      default:
        return this.renderLoader()
    }
  }

  render() {
    return (
      <div className="all">
        <div className="main-container">
          <div className="logo-container">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <h1 className="logo-heading">Co-WIN</h1>
          </div>

          <h1 className="sub-heading">CoWIN Vaccination in India</h1>

          {this.renderAll()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
