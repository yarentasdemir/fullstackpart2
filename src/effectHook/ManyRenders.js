import React, { useEffect, useState } from 'react'

function ManyRenders() {

    const [webuser, setwebuser] = useState({});

    let webuserDetail ={
        name:'Yaren',
        surname:'Taşdemir'
    };

   ///setwebuser(webuserDetail)
   //useEffecte hookun içerisine boş bir dizi koyuyoruz ki 1 kez çalışsın.
   useEffect(() => {
    setwebuser(webuserDetail)
   }, [])


    
  return (<>
  
  <h1>{webuser.name}</h1>
  <h1>{webuser.surname}</h1>
  
  </>
  )
}

export default ManyRenders