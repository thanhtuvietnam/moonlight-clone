import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, Auth, Explore, Search,Error } from './components/pages/index.js';
import { TVInfo, TVWatch } from './components/pages/TV/index.js';
import { MovieInfo, MovieWatch } from './components/pages/Movie/index.js';


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='movie/:id' element={<MovieInfo />} />
      <Route path='tv/:id' element={<TVInfo />} />
      <Route path='movie/:id/watch' element={<MovieWatch />} />
      <Route path='tv/:id/watch' element={<TVWatch />} />
      <Route path='explore' element={<Explore />} />
      <Route path='search' element={<Search />} />
      <Route path='auth' element={<Auth />} />
      <Route path='*' element={<Error/>}/>
    </Routes>
  );
}

export default App;
