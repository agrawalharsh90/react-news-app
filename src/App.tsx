import React from 'react';
import './App.css';
import {Home} from "./components/home/Home";
import {RootStore} from "./store/RootStore";
import {Provider} from "mobx-react";

export interface GlobalProps {
    store?: RootStore;
}

function App() {
    return <Provider store={RootStore.getInstance()}> <Home/> </Provider>;
}

export default App;
