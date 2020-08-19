
import  "./style/style.css";
import Header from "./component/header";
import Skills from "./component/skill";
import Edu from "./component/edu" ;
import Exp from "./component/exp" ;

var React = require('react');
var ReactDOM = require('react-dom');

// let content = <h1>hello</h1>

ReactDOM.render(
    <div>
        < Header/>
         <Skills/>
         <Edu/>
         <Exp/>
    </div>,
    document.getElementById("root"));
