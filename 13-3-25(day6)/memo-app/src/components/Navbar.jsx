import React, { memo } from 'react'

const Navbar = ({aaa,changeAAA}) => {
    console.log("navbar is rendered");
    
  return (
    <div>
      i am {aaa} jjj
      <button onClick={()=>{changeAAA()}}> click</button>
    </div>
  )
}

export default memo(Navbar)
