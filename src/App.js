
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Main/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
      {path:'/home', element:<Home></Home>},
      {path:'/products', element:<Products></Products>}
    ]
  },

    {path:'/about', element:<About></About>}
  ])


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
