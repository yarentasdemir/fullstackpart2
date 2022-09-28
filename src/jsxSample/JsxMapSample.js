
import React from 'react'

function JsxMapSample() {

    let metalBands = ['Iron Maiden', 'Gojira', 'Slipknot', 'Sylosis'];


  return (<>
    
<ul>
{
     metalBands.map((item) => {
         return (<li>{item}</li>)
           
     })

  //  kısa yoldam yazımı:
  //  metalBands.map((item) => <li>{item}</li>)
}

</ul>

    </>
  )
}

export default JsxMapSample