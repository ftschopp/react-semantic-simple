import React from 'react'

import { Input, Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
const css = require('./cabecera.scss');

const Cabecera = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container fluid={true}>

          <Menu.Item as='a' header>
            Titulo
          </Menu.Item>
          <Menu.Item color='red' as='a'>Inicio</Menu.Item>
          <Dropdown item simple text='Idioma'>
            <Dropdown.Menu>
              <Dropdown.Item>EN</Dropdown.Item>
              <Dropdown.Item>ES</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Menu position='right'>
                <Menu.Item className={css.textbox}>
                  <Input icon='search' placeholder='Search...' />
                </Menu.Item>
          </Menu.Menu>

      </Container>
    </Menu>
  </div>
)

export default Cabecera
