import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom"
import { CardWidgetComponent } from '../cardwidget/CardWidget';

export const NavBarComponent = () => {

  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">E-Commers</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} activeClasName="active" to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} activeClasName="active" to="/category/a">Remeras Rojas</Nav.Link>
          <Nav.Link as={NavLink} activeClasName="active" to="/category/b">Remeras Azules</Nav.Link>
          <Nav.Link as={NavLink} activeClasName="active" to="/category/c">Remeras Grises</Nav.Link>
          <Nav.Link as={NavLink} activeClasName="active" to="/items">Celulares</Nav.Link>
        </Nav>
        <CardWidgetComponent/>
    </Navbar>
    </>
    
  )
}