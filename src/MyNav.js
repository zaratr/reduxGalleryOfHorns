import { useState } from 'react';
import {Button, Offcanvas, Dropdown, Form} from 'react-bootstrap';
import data from './data.json';
import { useSelector, useDispatch } from 'react-redux';
import { setFilteredData } from './redux/filteredReducer';

function MyNav(props) {
  const [show, setShow] = useState(false);
  //const [filteredData, setFilteredData] = useState(data);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const filteredData = useSelector((state) => state.filter.filteredData);

  const handleSelect = (event) => {
    const choice = event.target.value;
    let newData = data;

    if (choice === 'single') newData = data.filter((animal) => animal.horns === 1);
    else if (choice === 'few') newData = data.filter((animal) => animal.horns > 1 && animal.horns < 100);
    else if (choice === 'many') newData = data.filter((animal) => animal.horns >= 100);

    dispatch(setFilteredData(newData))
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form>
            <Form.Label>Filter the beasts:</Form.Label>
            <Form.Select
              name="select"
              onChange={handleSelect}>
              <option value="all">All Beasts</option>
              <option value="many">Many Horns</option>
              <option value="few">Few Horns</option>
              <option value="single">Single Horns</option>
            </Form.Select>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MyNav;