import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

function App() {
 

  return (
    <div className="App">
      <Sidebar/>
      <Navbar/>
      <Card/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
         <Route path="Blogs" element={<Blogs/>}/>
          <Route path="Courses" element={<Courses/>}/>
           <Route path="Events" element={<Events/>}/>
            <Route path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
