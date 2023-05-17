import React from 'react';
import {BrowserRouter, Routes, Route} from'react-router-dom';
import Navigation from './Components/Navigation';
import Landing from './Pages/Landing';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Books from './Pages/Books';
import Contact from './Pages/Contact';
import {Layout} from './Components'
import TestBlog from './Pages/TestBlog';
import './Styles/App.css';

function App() {
  return (
    <div className = 'App'>
      <div className = 'container'>
        <BrowserRouter>
          <h1>Mark Engellson</h1>
          <div className = 'Navigation'>
            {/* <Navigation /> */}
          </div>
          <div className = 'content'>
            <Routes>
              <Route path = '/' element = {<Landing />} />
              <Route path = '/about' element = {<About />} />
              {/* <Route path = '/blog' element = {<TestBlog />} /> */}
              <Route path = '/blog' element = {<Blog />} />
              <Route path = '/books' element = {<Books />} />
              <Route path = '/contact' element = {<Contact />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
