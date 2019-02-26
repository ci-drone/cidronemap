import React from 'react'
import '../css/HowItWork.css';

export default function HowItWork(props){
  return(
    <div className="container-fluid">
      <h1 className="text-center">{props.title}</h1>
      <div className="row row-img">
        <div className="col-md-3 myimg">
          <img className="img-responsive" src={'static/img/1.png'}/>
        </div>
        
      </div>
    </div>
  )
}