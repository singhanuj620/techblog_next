import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader"
import './spinner.css'

const Spinner = () => {
  return (
    <div className="spinner">
        <div><PacmanLoader color="#36d7b7" /></div>
        </div>
  )
}

export default Spinner;