import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 left">
            <div className="row m-0">
              <h3 className="">Contact</h3>
            </div>
            <div className="row mt-3 pt-3">
              <div className="col-sm-6">
                <ul className="sci">
                  <li>
                    <i class="fab fa-twitter" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i class="fab fa-facebook" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i class="fab fa-instagram" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <div className="info">
                  <p><i class="fa fa-phone" aria-hidden="true"></i>  8876371345</p>
                  <p><i class="fas fa-envelope"></i> bikitirua321@gmail.com</p>
                  <p><i class="fab fa-whatsapp"></i> 8876371345</p>
                </div>
              </div>
              {/* <div className="col-sm-6"></div> */}
            </div>
          </div>
          <div className="col-md-6 right">
            <div className="row m-0">
              <h3 className="h3R">INFORMATION</h3>
            </div>
             <div className="ps-info">
            <p>Full Name: Biki Tirua</p>
            <p>Father’s Name: Bishnu Tirua</p>
            <p>Mother’s Name: Gita Tirua</p>
            <p>D.O.B:24/10/1995</p>
            <p>Location : Tangla,Assam,India</p>
            <p>PO/PS-Tangla</p>
            <p>Dist- Udalguri</p>
             </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
