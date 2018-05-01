import * as React           from 'react';
import {render}             from 'react-dom';
import {App}                from "./app/app";
import {Transport}          from "./app/infrastructure/transport/transport";


render(React.createElement(App), document.getElementById('app'));

new Transport().connect();

console.log('heey');