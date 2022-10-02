import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";
import './LoadingSpinner.css'
export default function LoadingSpinner() {
  return (
    <div id='LoadingSpinnerContainer'>
            <PropagateLoader margin={10} color="#36d7b7"  loading={true} size={15} />

    </div>

  )
}
