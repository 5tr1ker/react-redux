import axios from 'axios';
import { useEffect, useState } from 'react';
import { combineReducers, createStore } from 'redux';
import './App.css';
import Contexts, { Userdispatcher } from './component/contextAPI';
import Test2 from './component/notuseref';
import Lifecycle from './component/usereducertest';
import Tester from './component/useref';
import Data from './Servers/data';
import { Provider } from 'react-redux';
import reducer from './reduces/myreduce_module';
import Myreduce from './reduces/myreduce';

function App() {
  const reducers = combineReducers({reducer}); // 리듀서 묶음
  const store = createStore(reducers); // store 생성 ~
  return (
    <Provider store={store}>
    <div>
    <Myreduce/>
    </div>
    </Provider>
  );
}

export default App;
