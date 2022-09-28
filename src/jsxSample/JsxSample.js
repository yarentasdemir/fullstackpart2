
import React from 'react'


function JsxSample() {

    let h1Element = (<h1>xxx</h1>)
    let name = "Yaren";

    return (<>
        <p>{name.toUpperCase()}</p>
        {h1Element}
    </>
    )
}

export default JsxSample


// jsx elementi için () sytnax kullanılır.
// JSX içerisinde JS kodu için {} kullanılır.