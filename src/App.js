import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home';
import PostList from './components/post/PostList';
import Comments from './components/Comments/Comments'


function App() {
  return (
    <BrowserRouter>
    <Route exact path = '/' component={Home} />
    <Route exact path = '/Posts/:id' render = {(props) => <PostList {...props} />} />
    <Route exact path= '/Comments/:id' render={(props) => <Comments {...props} />} ></Route>
    </BrowserRouter>
  );
}

export default App;
