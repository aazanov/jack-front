import * as React           from 'react';
import {render}             from 'react-dom';
import {HashRouter}         from 'react-router-dom';
import {App}                from "./app/app";
import {Transport}          from "./app/infrastructure/transport/transport";


render(React.createElement(HashRouter, null, React.createElement(App)), document.getElementById('app'));

new Transport().connect();