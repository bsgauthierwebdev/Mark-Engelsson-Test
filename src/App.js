import React from 'react';
import {BrowserRouter, Routes, Route} from'react-router-dom';
import Navigation from './Components/Navigation';
import Landing from './Pages/Landing';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Books from './Pages/Books';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Press from './Pages/Press';
import PostDetails from './Pages/PostDetails';
import {Layout} from './Components'
import './Styles/App.css';

function App() {
  return (
    <div className = 'App'>
      <div className = 'container'>
        <BrowserRouter>
          <div className = 'Navigation'>
            <Navigation />
          </div>
          <div className = 'content'>
            <Routes>
              <Route path = '/' element = {<Landing />} />
              <Route path = '/about' element = {<About />} />
              <Route exact path = '/blog' element = {<Blog />} />
              <Route exact path = '/blog/posts/:slug' element = {<PostDetails />} />
              <Route exact path = '/books' element = {<Books />} />
              <Route path = '/contact' element = {<Contact />} />
              <Route path = '/press' element = {<Press />} />
            </Routes>
          </div>
          <Footer />

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
