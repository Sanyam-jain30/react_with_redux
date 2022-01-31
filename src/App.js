import React from "react";
import { connect, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';

function App(props) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="main">
      <div class="input-group mb-3 inputarea">
        <label>String 1: </label>
        <input onChange={event => dispatch({ type: "UPDATE_STR1", val: event.target.value})} type="text" className="form-control" placeholder="String 1" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <div class="input-group mb-3 inputarea">
        <label>String 2: </label>
        <input onChange={event => dispatch({ type: "UPDATE_STR2", val: event.target.value})} type="text" className="form-control" placeholder="String 2" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <div className="btns">
        <button type="button" onClick={() => dispatch({ type: "CONCAT", str2: state.r2.str2})} className="btn btn-outline-success">Concat</button>
        <button type="button" onClick={() => dispatch({ type: "COMPARE", str1: state.r1.str1})} className="btn btn-outline-success">Compare</button>
      </div>
      <div className="btns">
        <span className="next">{state.r1.str3}</span>
        <span className="next">{state.r2.str4}</span>
      </div>
      
    </div>
  );
}

const mapDispachToProps = dispach => {
  return {
    updateStr1: event => dispach({ type: "UPDATE_STR1", val: event.target.value}),
    updateStr2: event => dispach({ type: "UPDATE_STR2", val: event.target.value}),
    concat: () => dispach({ type: "CONCAT", str2: this.props.str2}),
    compare: () => dispach({ type: "COMPARE", str1: this.props.str1})
  }
}

const mapStateToProps = state => {
  return {
    str1: state.r1.str1,
    str2: state.r2.str2
  }
}

export default connect(
  mapStateToProps,
  mapDispachToProps
)
(App);