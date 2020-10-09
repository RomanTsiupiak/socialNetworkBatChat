import state from "./redux/state";
import * as serviceWorker from './serviceWorker';
import {renderEntireTree} from "./render";


renderEntireTree(state);

//
//
//
serviceWorker.unregister();