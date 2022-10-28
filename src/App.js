import { Routes,Route, NavLink} from 'react-router-dom';
import './App.css';
import  Home from'./pages/Home'
import  Contact from './pages/Contact'
import ShopNow from './pages/ShopNow';
import TheChef from './pages/TheChef'
import Users from './pages/user';
// import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBoundary } from './components/ErrorBoundary';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    
    <div className="App">
       <NavLink exact to='/'><span></span>Home</NavLink>



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='ShopNow' element={<ShopNow/>} />
        <Route path='TheChef' element={<TheChef/>} />
        <Route  path='/users' element={<ErrorBoundary><Users /> </ErrorBoundary>} />
        <Route path='*' element={<PageNotFound />} />

       
        

      </Routes>

      
     
    
    </div>


  );
}

export default App;
