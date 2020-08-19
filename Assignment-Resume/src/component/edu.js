import React, { Component } from "react";

class Edu extends Component {
  render() {
    return (
      <div className="container pb-6">
      <div className="row  ">
          <div className="col-md-6 left">
            <div className="row m-0">
            <h3 className="">Eductation</h3>
            </div>
              <ul className="edu">
                <li><h2>2012</h2> 
                  <h4>HSLC, Tangla,Aadrsha Vidyapeeth</h4>
                  <p>10th</p>
                  <p>Percentage : 60%</p>
                </li>
                <li><h2>2016:</h2>
                  <h4>HS, Tangla College</h4>
                  <p>high School</p>
                  <p>Percentage : 53%</p>
                </li>
                <li><h2>2016-2019</h2>
                  <h4>Bachelor's Degree, Tangla College</h4>
                  <p>BCA</p>
                  <p>CGPA : 6.9</p>
                </li>
              </ul>
          </div>
          <div className="col-md-6 right">
          <div className="row m-0">
                <h3 className="h3R">Skils</h3>
            </div>
            <div className="ps-info">
             <p>Languages:-   C,C++,  JavaScript,ShellScript</p>
            <p>Web Technology:- HTML,CSS,React.js, Node.js</p>
            <p>Other- Web desgin, Linux, git </p>
            <p>MTools:- Vs code, Atoms, BootStrap, Figma</p>
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default Edu;
