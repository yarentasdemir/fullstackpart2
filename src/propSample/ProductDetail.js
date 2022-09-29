import React from 'react'


//Kütüphaneyi tanıtıyorum:
import PropTyeps from 'prop-types'


function ProductDetail({name, unitPrice, stock, status, calc }) {
    return ( <>

       <h4>Name: {name}</h4>
     <div>
        <span>Price:{unitPrice}</span>
      </div>
     <div>
        <span>Stock:{stock}</span>
     </div>
     <div>
        <span>Status:{status}</span>
     </div>

     <div>
        <button onClick={() => calc()}>Calc Price</button>
     </div>
         </>
    )
}

const calcTax = () => {
    console.log('Calc Tax');
}

ProductDetail.defaultProps = {
    unitPrice: 5000,
    calc: calcTax
}

 
//propTypes kütüphanesini terminalden indirdim:
  ProductDetail.propTypes = {
    name: PropTyeps.string.isRequired,
    unitPrice: PropTyeps.number,
    stock: PropTyeps.number.isRequired,
    status: PropTyeps.bool,
    calc: PropTyeps.func

 

  }

export default ProductDetail