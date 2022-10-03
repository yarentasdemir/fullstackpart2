
import React from 'react'
import { useNavigate } from 'react-router-dom'

function AboutPage() {

  //Geri tuşu ekleyelim:
  const navigate = useNavigate();

  return (<>
    <div>AboutPage</div>
    <button onClick={() => navigate(-1)}>Back</button>
  </>
  )
}

export default AboutPage
