import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Message from "./pages/Message";

function App() {
  return (
    <HashRouter>
      <Route path='/index' component={Home} />
      <Route path='/message' component={Message} />
      {/* <Route path='/home' component={Home} />
      <Route path='/home' component={Home} /> */}
    </HashRouter>
  );
}

export default App;
