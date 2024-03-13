// store.js
import { createStore } from 'redux';
import rootReducer from './components/Reducer'; // Assuming you have reducers defined


const store = createStore(rootReducer);

export { store };
