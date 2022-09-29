import React from 'react'

function CityList(props) {


    const { cities } = props;
  return ( <>
  
  <ul>

    {
   
    // &&undefined ya da nul değil ise demek.
        cities && cities.map((item,key) => {
            return <li key={key}>{item}</li>
         })
    }
  </ul>
  
  </>
  )
    
}

export default CityList

//Proplara; string, integer gibi dizi de verilebilir, obje dizisi de verilebilir.