import React from 'react'

function JsxStyle() {

    //Yaren yazısının kırmızı olması için:
    //backgroundColor şeklinde yazılır ( - yerine 2.harf büyük harfle başlanır.)
    
    let h1Style = {
        color:'tomato',
        backgroundColor:'yellow'
    }

  return ( <>
  
  <h1 style ={h1Style}>Yaren</h1>
  <h1 style = {{backgroundColor:'black', color:'green'}}>Yağmur</h1>
  </>
   
  )
}

export default JsxStyle