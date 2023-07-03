import './App.css';
import Login from './Components/login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Items from './Components/items';
import Item from './Components/item';
import Heder from './Components/heder';
import Donationform from './Components/donationform';
import Additem from './Components/additem';
import Donation from './Components/donation';
import Showalldonations from './Components/showalldonations';
function App() {
  return (
<BrowserRouter>
<Heder/>
<Routes>
<Route path="/" element={<Login />} />
<Route path="/login" element={<Login />} />
<Route path="/items" element={<Items />} />
<Route path="/item/:id" element={<Item />} />
<Route path="/item" element={<Item />} />
<Route path="/donationform" element={<Donationform/>} />
<Route path="/additem" element={<Additem/>} />
<Route path="/donation" element={<Donation/>} />
<Route path="/showalldonations" element={<Showalldonations/>} />
</Routes>
</BrowserRouter>
  );
}

export default App;
