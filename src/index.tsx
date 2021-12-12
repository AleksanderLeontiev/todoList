import React, {createContext} from "react";
import ReactDOM  from 'react-dom';
import App from './App';
import './index.scss'
import {Provider} from "react-redux";
import {store} from "./store";
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Menu from "./components/Menu";



// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
});


const Context = createContext(null);

// const auth = firebase.auth();
// const firestore = firebase.firestore();

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </ThemeProvider>
  ,
  document.getElementById('root')
);


