import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from './Component/Main/About';
import { Cart } from './Component/Main/Cart';
import {Profile} from './Component/Main/Profile';
import {Invoices} from './Component/Main/Invoices';
import {Error} from './Component/Error';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/auth'>
            <Route path='/login'/>
            <Route path='/register'/>
          </Route> */}
          <Route path='/'>
            {/* <Route path='/products'>
              <Route path='/:id' />
            </Route> */}
            <Route path='/invoices/:id' element = {<Invoices/>}>
              {/* <Route path='/:id' /> */}
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/profile'element={<Profile/>}/>
            <Route path='/about' element = {<About/>}/>
          </Route>
          <Route path='/*' element = {<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
