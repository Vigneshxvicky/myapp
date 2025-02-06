import React, { Component } from 'react'
import Card from './cardUI';   

import img1 from "../assets/img1.jpg"       
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"
import img4 from "../assets/img4.jpeg"  
import img5 from "../assets/img5.jpeg"
import img6 from "../assets/img6.jpeg"

class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-3">
                        <Card imgsrc={img1} title="Coding"/>
                    </div>
                    <div className="col-md-3">
                    <Card imgsrc={img2} title="Coding And Debugging"/>
                    </div>
                    <div className="col-md-3">
                    <Card imgsrc={img3} title="Presentations"/>
                    </div>
                    <div className="col-md-3">
                    <Card imgsrc={img4} title="Apptitude Test" />
                    </div>
                    <div className="col-md-3">
                    <Card imgsrc={img5} title="Short Flim"/>
                    </div>
                    <div className="col-md-3">
                    <Card imgsrc={img6} title="Memory Master    "/>
                    </div>

                </div>
            </div>
        )
    }
}
export default Cards