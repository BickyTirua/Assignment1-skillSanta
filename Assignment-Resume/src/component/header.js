import React, {Component } from 'react';
import me from "../component/me.jpg";

class Header extends Component {
    render() { 
        return (
            <div className="container mb-6">
               <div className="row mt-3">
                   <div className="col-sm-6 left text-center p-lg-3">
                       <img src={me} alt="" className=" img-fluid rounded-circle  " />
                   </div>
                   <div className="col-sm-6 left pt-4 text-center">
                       <h1>Biki Tirua</h1>
                       <p className="fd">FontEnd Developer</p>
                   </div>
               </div>
            </div>
          );
    }
}
 
export default Header;