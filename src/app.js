const css = require('./app.scss');
// console.log('asdasd');
// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <h1>Hello, world yeahh!</h1>,
//   document.getElementById('root')
// );

import React from 'react'
import { render } from 'react-dom'
import { Button, Container, Header } from 'semantic-ui-react'
import { Divider, Dropdown, Grid, Image, List, Menu, Segment } from 'semantic-ui-react'
import Cabecera from './components/header/Cabecera';

const MOUNT_NODE = document.getElementById('root')

const App = () => (
  <Container fluid={true}>
  
    <Cabecera/>

    <Button
      content='Discover docs'
      href='http://react.semantic-ui.com'
      icon='github'
      labelPosition='left'
    />



  </Container>
)

render(<App />, MOUNT_NODE)
