import React from 'react'
import "./Card.css"

export default function Card(props) {
  return (
    <div id={props.CurrentRecord.Category + "Div"} className='CCOntainer'>
        <div  className="BgColorContainer">
            <img className='CategoriesIcons' src={props.CurrentRecord.Icon}></img>
        </div>
        <div className='StatsDiv'>
            <div className='Test'>
            <div className='Title'>{props.CurrentRecord.Category}</div>
            <div className='HoursContainer'>
                <h1>{props.CurrentRecord.Hours}</h1>
                <label className='Comparrison'>LastWeek {props.CurrentRecord.LastWeek}</label>
            </div>
            </div>
           
        </div>
    </div>
  )
}
