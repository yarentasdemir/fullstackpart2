import React from 'react'


     //JavaSricpt fonksiyonu dışarıdan bir parametre alıyor ( props u alıyor.)
function UserDetail(props) {

       
      // Parent Componentden Child Componente veri aktarımı :
  return ( <>
  <h1>{props.name}</h1>
  <h1>{props.surname}</h1>
  <h1>{props.age}</h1>
  <h1> Age: {props.age} bu şekilde de yazılabilir.</h1> 
  </>
    
  )
}

export default UserDetail