import { createStore } from 'redux';
import { rootReducer } from '../pages/reducers/index';

export const store = createStore(rootReducer);
