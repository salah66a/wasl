
import './App.css';
import Dashboard from './Pages/Dashboard/dashboard';
// import Home from './Pages/Home/Home';
// import LoginPage from './Pages/Login/loginPage';

function App() {
  return (
    <div className="App">
    
      {/* <Home/>    
      <LoginPage/> */}
      <Dashboard login={true}/>
    </div>
  );
}

export default App;
