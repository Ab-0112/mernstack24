import './App.css';
import{createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './home';
import About from './about';


 const config = createBrowserRouter([
  {path:"/home",element:<Home/>},
  {path:"/about",element:<About/>}
 ]);

function App() {
  const getUser = async () =>{
    let res = await fetch("https://reqres.in/api/users");
    let serverres = await res.json();
    console.log(serverres['data']);
  }
  return (
    <div className="App">
      {/* <RouterProvider config = {config}/> */
      <h1>This is the first session of MERN Stack Course</h1>}
      <Home/>
      <About/>
      <button onClick={getUser}>Click to get User List</button>
    </div>
  );
}

export default App;
