import React from 'react'

export default function HowItWork(props){
  return(
    <div className="container-fluid">
      <h1 className="text-center">{props.title}</h1>
      <div className="row">
        {
          props.img.map((t) =>(
            <div className="col-md-3">
              <img className="" src={t.name}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}