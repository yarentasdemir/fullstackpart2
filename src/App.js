import JsxMapObjectArraySample from "./jsxSample/JsxMapObjectArraySample";
import JsxStyle from "./jsxSample/JsxStyle";
import Footer from "./templateSamples/template-1/Footer";
import Header from "./templateSamples/template-1/Header";
import Navbar from "./templateSamples/template-1/Navbar";
import PageContent from "./templateSamples/template-1/PageContent";






function App() {

  return ( <>

    <Navbar/>
    <Header/>
    <PageContent/>
    <Footer/>



   </>
  
    

  );
}



export default App;

// export edilmezse kullanılamaz.
//Export edilecek ki import edilebilsin.
//Boş bi düğüm,kapsayıcı atanır içine yazılır.
//  <>  </>  Bu düğüme fragment denir.
// <Fragment> <Fragment/>