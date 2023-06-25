import React from "react";
import './Fruits.css'
// import banana  from './assets/banana.jpg'

function Fruits(props){
    return(
        <div className="card">
            <div className="card_img">
                {/* <img width={160} src={banana} alt="nimadir" /> */}
                <img width={140} src={props.data.img} alt="nimadir" />

            </div>
            <div className="card_title">
                <div className="card_btn">
                    <h1>{props.data.title}</h1>
                    <button className="btn">Add</button>
                </div>
                <div className="card_titles">
                    <div className="card_details">
                        <h6>
                            <p className="card_name">UOM</p>
                            <span><b>{props.data.uom}</b></span>
                        </h6>
                        <h6>
                            <p className="card_name">Pack Size</p>
                            <p><b>0.2</b></p>
                        </h6>
                        <h6>
                            <p className="card_name">Per Unit</p>
                            <p><b>$8.99</b></p>
                        </h6>
                        <h6>
                            <p className="card_name">Total</p>
                            <p><b>12.99</b></p>
                        </h6>
                    </div>
                </div>
            </div>
          
           
        </div>
    )
}

export default Fruits;