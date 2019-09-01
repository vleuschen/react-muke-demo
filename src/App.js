import React from 'react';
import { Provider } from 'react-redux';
import { GloabalStyle } from './style';
import { Route,BrowserRouter} from 'react-router-dom';
import { IconFontStyle } from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store';

import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Write from './pages/write';
import Login from './pages/login';

function App() {
  return (
    <div>
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <IconFontStyle />
            <GloabalStyle />
            <Header />
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/write" component={Write}></Route>
            <Route exact path="/detail/:id" component={Detail}></Route>
          </BrowserRouter>
        </div>
      </Provider>
    </div>
    
  );
}

export default App;
