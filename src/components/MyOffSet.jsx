// import { Offcanvas } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas'
//import Offcanvas from 'react-bootstrap/Offcanvas';
import TodoList from "../components/todo/TodoList";

export default function MyOffSet(props) {
  return (
    <Offcanvas show={props.show} onHide={props.onHide} placement={"bottom"}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <TodoList todos={props.todos} deleteTodo={props.deleteTodo} />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
