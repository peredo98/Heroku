import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { Button, Navbar, Nav, Col, NavDropdown, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Sandwiches from "../routers/SandwichesRouters";
import MyOffSet from "../components/MyOffSet";
import Loading from "../components/Loading";
import MyVerticallyCenteredModal from "../components/MyVerticallyCenteredModal";

import MyButton from "../components/MyButton";
//todo
import useTodoState from "../funciones/useTodoState";
import TodoForm from "../components/todo/TodoForm";
// import TodoList from "./components/todo/TodoList";

// import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Chart from "../components/Chart";
import Orders from "../components/Orders";
import Deposits from "../components/Deposits";

export default function Main(params) {
    const [modalShow, setModalShow] = useState(false);
    const [btnActivo, setBtnActivo] = useState("Cargando");
    const [mnsActivo, setMnsActivo] = useState("");
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [nombres, setNombres] = useState([]);

    const [open, setOpen] = React.useState(false);

    //todo
    const { todos, addTodo, deleteTodo, addSingleTodo } = useTodoState([]);

    const handleSelect = () => {
        setModalShow(true);
    };

    const handleSelectFromButton = (props) => {
        console.log(props.target.id);
        setBtnActivo(props.target.id);
        setModalShow(true);
    };

    const handleClick = (props) => {
        setMnsActivo(props);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setNombres(res.data);
            addTodo([...todos, res.data]);
        });
    }, []);
    
    return(
        <>
            <Navbar
                style={{ paddingLeft: 20, paddingRight: 20 }}
                sticky="top"
                collapseOnSelect
                bg="dark"
                variant="dark"
                expand="md"
            >
                <LinkContainer to="/nfl">
                    <Navbar.Brand>
                        {" "}
                        <img
                            alt=""
                            src="https://react-bootstrap.github.io/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{" "}
                        Quinielas
                    </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/nfl">
                            <Nav.Link>NFL</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/futbol">
                            <Nav.Link>Futbol</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/futbol">
                            <Nav.Link>{btnActivo}</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => handleShow()}>
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => handleSelect()}>
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <MyButton
                        todos={todos}
                        _handleSelectFromButton={(a) => handleSelectFromButton(a)}
                    />
                    <Button href='/logout' variant="outline-danger" >Logout</Button>{' '}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
