import { Link,Route, Routes } from "react-router-dom";
import AboutPage from "./routerSample/AboutPage";
import CategoryDetail from "./routerSample/CategoryDetail";
import CategoryPage from "./routerSample/CategoryPage";
import ChildSample from "./routerSample/ChildSample";
import ContactPage from "./routerSample/ContactPage";
import GuardSample from "./routerSample/GuardSample";
import HomePage from "./routerSample/HomePage";
import LoginPage from "./routerSample/LoginPage";



function App() {



  return ( 
     
    <>

    <h1>Site Header</h1>
    <ul style ={{display:'flex', justifyContent:'space-between'}}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/contact'>Contatc</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/categories'>Category List</Link></li>
      <li><Link to='/guardsample'>Guard Sample</Link></li>
    </ul>


    <Routes>
      <Route path ="/" element= {<HomePage/>}></Route>
      <Route path ="/about" element= {<AboutPage/>}></Route>
      <Route path ="/contact" element= {<ContactPage/>}></Route>
      <Route path ="/categories" element= {<CategoryPage/>}></Route>
      <Route path ="/categories/:id" element= {<CategoryDetail/>}></Route>
      <Route path ="/login" element= {<LoginPage/>}></Route>
      <Route path ="/guardSample" element= {
      <GuardSample>
        <ChildSample/>
        </GuardSample>
      }>
        </Route> 
      
       </Routes>
       <h1>Site Footer</h1>
     </>
  );
}

  //String değerler yukarıda ki gibi yollanırken, string dışındakiler {} içerisinde yollanır.
  // Sring olunca {} a gerek yok.
export default App;

// export edilmezse kullanılamaz.
//Export edilecek ki import edilebilsin.
//Boş bi düğüm,kapsayıcı atanır içine yazılır.
//  <>  </>  Bu düğüme fragment denir.
// <Fragment> <Fragment/>




// / var ise; ana dizin demektir, path derse; element.

