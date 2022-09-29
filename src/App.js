import CategoryPage from "./propSample/CategoryPage";
import ChildComp from "./propSample/ChildComp";
import CityList from "./propSample/CityList";
import ProductDetail from "./propSample/ProductDetail";
import UserDetail from "./propSample/UserDetail";
import ArraySample from "./state/ArraySample";
import CounterSample from "./state/CounterSample";


function App() {

  let citiesSource = [ 'İzmir', 'İstanbul' , 'Bakü', 'Paris' ];


  const hello = () => {
       alert ('Hello React Props');
  }

  return ( 
  <>

   {/* <UserDetail name='Yaren' surname='Taşdemir' age={24}></UserDetail>
   <CityList cities={citiesSource}/>
   <ChildComp merhaba={hello}/> */}
<ArraySample/>
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