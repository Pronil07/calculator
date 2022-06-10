import React from 'react'
import classes from "./InputArea.module.css";


function InputArea(props) {


  const submit = (e) => {
    e.preventDefault();
  }


  return (
    <form className={classes.area} onSubmit={submit}>
      <button className={`${classes.box} ${classes.functionBox}`} onClick={()=>props.expression('%')}>%</button>
      <button className={`${classes.box} ${classes.functionBox}`} onClick={()=>props.expression('AC')}>AC</button>
      <button className={`${classes.box} ${classes.functionBox}`} onClick={()=>props.expression('C')}>C</button>
      <button className={`${classes.box} ${classes.functionBox}`} onClick={()=>props.expression('/')}>÷</button>

      <button className={classes.box} onClick={()=>props.expression(7)}>7</button>
      <button className={classes.box} onClick={()=>props.expression(8)}>8</button>
      <button className={classes.box} onClick={()=>props.expression(9)}>9</button>
      <button className={`${classes.box} ${classes.functionBox}`} onClick={()=>props.expression('*')}>x</button>

      <button className={classes.box} onClick={()=>props.expression(4)}>4</button>
      <button className={classes.box} onClick={()=>props.expression(5)}>5</button>
      <button className={classes.box} onClick={()=>props.expression(6)}>6</button>
      <button className={`${classes.box} ${classes.functionBox}`} onClick={()=>props.expression('-')}>-</button>

      <button className={classes.box} onClick={()=>props.expression(1)}>1</button>
      <button className={classes.box} onClick={()=>props.expression(2)}>2</button>
      <button className={classes.box} onClick={()=>props.expression(3)}>3</button>
      <button className={`${classes.box} ${classes.functionBox}`} onClick={()=>props.expression('+')}>+</button>

      <button className={classes.box}>±</button>
      <button className={classes.box} onClick={()=>props.expression(0)}>0</button>
      <button className={classes.box} onClick={()=>props.expression('.')}>.</button>
      <button className={`${classes.box} ${classes.functionBox}`} onClick={()=>props.expression('=')}>=</button>
    </form>
  )
}

export default InputArea;