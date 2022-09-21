import React, { useState } from 'react'
import './calc.css'

const Calc = () => {
    const[input,setInput] = useState([])
    const [ans,setAns] = useState(false)
    const handleClick = ( e ) =>{
        console.log(e.target.innerHTML)
        setAns(false)
        setInput([...input,e.target.innerHTML])
        
    }
    console.log(input)
    const solve = () =>{
        setAns(eval(input.join('')))
    }
    const clear = ( ) => {
        setAns(false)
        setInput([])
    }
    const Delete = ( ) =>{
        let newInput = input.slice(0,input.length-1)
        setInput(newInput)
    }
  return (
   <>
  <div className="calcContainer">
  <div className="display">{ans ? ans : input.join(' ')}</div>
    <div className="calcBox">
        <div className="calcBoxChild equalbutton" onClick={clear}>c</div>
        <div className="calcBoxChild equalbutton" onClick={Delete}>Del</div>
        <div className="calcBoxChild equalbutton" onClick={handleClick}>%</div>
        <div className="calcBoxChild equalbutton" onClick={handleClick}>/</div>
        <div className="calcBoxChild" onClick={handleClick}>7</div>
        <div className="calcBoxChild" onClick={handleClick}>8</div>
        <div className="calcBoxChild" onClick={handleClick}>9</div>
        <div className="calcBoxChild equalbutton" onClick={handleClick}>*</div>
        <div className="calcBoxChild" onClick={handleClick}>4</div>
        <div className="calcBoxChild" onClick={handleClick}>5</div>
        <div className="calcBoxChild" onClick={handleClick}>6</div>
        <div className="calcBoxChild equalbutton" onClick={handleClick}>-</div>
        <div className="calcBoxChild" onClick={handleClick}>1</div>
        <div className="calcBoxChild" onClick={handleClick}>2</div>
        <div className="calcBoxChild" onClick={handleClick}>3</div>
        <div className="calcBoxChild equalbutton" onClick={handleClick}>+</div>
    </div>
    <div className="lastrow">
    <div className="calcBoxChild" onClick={handleClick}>.</div>
        <div className="calcBoxChild" onClick={handleClick}>0</div>
        <div className="calcBoxChild equalbutton equalbutton2" onClick={solve} style={{borderRadius:'10px'}}>=</div>
    </div>
  </div>
   </>
  )
}

export default Calc