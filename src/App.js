import React from "react";
import { connect } from 'react-redux';
import './App.css';

var prop;

function App(props) {
  prop = props;

  return (
    <div className="main">
      <div className="input-group mb-3 inputarea">
        <label>String 1: </label>
        <input onChange={props.updateStr1} type="text" className="form-control" placeholder="String 1" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mb-3 inputarea">
        <label>String 2: </label>
        <input onChange={props.updateStr2} type="text" className="form-control" placeholder="String 2" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <div className="btns">
        <button type="button" onClick={props.concat} className="btn btn-outline-success">Concat</button>
        <button type="button" onClick={props.compare} className="btn btn-outline-success">Compare</button>
      </div>
      <div className="btns">
        <span className="next">{props.str3}</span>
        <span className="next">{props.str4}</span>
      </div>
      
    </div>
  );
}


const mapDispachToProps = dispach => {
  return {
    updateStr1: event => dispach({ type: "UPDATE_STR1", val: event.target.value}),
    updateStr2: event => dispach({ type: "UPDATE_STR2", val: event.target.value}),
    concat: () => dispach({ type: "CONCAT", str2: prop.str2}),
    compare: () => dispach({ type: "COMPARE", str1: prop.str1})
  }
}

const mapStateToProps = state => {
  return {
    str1: state.r1.str1,
    str2: state.r2.str2,
    str3: state.r1.str3,
    str4: state.r2.str4
  }
}

export default connect(
  mapStateToProps,
  mapDispachToProps
)
(App);