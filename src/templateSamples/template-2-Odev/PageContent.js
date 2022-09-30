import React from 'react'
import About from './About'
import Contact from './Contact'
import ImageLocation from './ImageLocation'
import Project from './Project'


function PageContent() {
  return (
    <>

  <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}></div>
  <Project/>
  <About/>
  <Contact/>
   <ImageLocation/>


  

</>
  )
}

export default PageContent