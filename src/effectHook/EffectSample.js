import React, { useEffect, useState } from 'react'

function EffectSample() {

      // life cycle 
    //Bu componenet state değiştiğinde ve Parent component state değiştiğinde çalışır.
    console.log('Effect Sample Rendered');

const [counter, setcounter] = useState(0);
const [counter2, setcounter2] = useState(0)



//Eğer boş bir dizi var ise [] sadece 1 kez çalışır.
useEffect(() => {

     console.log('Use Effect');

       }, [])

       // Bu kod boğu sadece counter-2 state edildiğinde çalışır.
       useEffect(() => {

        console.log('Use effect-2');
   
          }, [counter2])

  return (<>

  <div>
  <h1>Counter: {counter}</h1>
<button onClick={() => setcounter(counter +1 )}>Increase</button>
   </div>

   <div>
  <h1>Counter-2: {counter2}</h1>
<button onClick={() => setcounter2(counter2 +1 )}>Increase-2</button>
   </div>

   
  </>
   
  )
}

export default EffectSample