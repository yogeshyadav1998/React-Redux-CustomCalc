import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , combineReducers} from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import controlreducer from './store/reducers/controls';
import counterreducer from './store/reducers/counter';
import resultreducer from './store/reducers/results';

const rootreducer = combineReducers({
    controls: controlreducer,
    counter: counterreducer,
    result: resultreducer
})

const store = createStore(rootreducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
