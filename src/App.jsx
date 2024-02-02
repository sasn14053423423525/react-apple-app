
import {Outlet, Route,Routes} from 'react-router-dom';
import Nav from './components/Nav';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
import './App.css';
// import Banner from './components/Banner';
// import DetailPage from './pages/DetailPage';

const Layout = () => {
  return (
    <div>
    <Nav />
    <Outlet />
    </div>
  );
} ;

function App() {
  // const [movie,setMovie] = useState(null)
  return (
    <div className="app">
     
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<LoginPage/>}/>
        <Route path="main" element={<MainPage/>}/>
        <Route path=":movieId" element={<DetailPage/>}/>
        <Route path="search" element={<SearchPage/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default App;

