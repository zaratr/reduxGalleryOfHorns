import { useState } from 'react';
import {Button, Offcanvas, Dropdown, Form} from 'react-bootstrap';
import data from './data.json';


function MyNav(props) {
  const [show, setShow] = useState(false);
  const [filteredData, setFilteredData] = useState(data); // Initialize with the full data

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = (event) => {
    const choice = event.target.value;

    if (choice === 'single') {
      const newData = data.filter((animal) => animal.horns === 1);
      setFilteredData(newData);
    } else if (choice === 'few') {
      const newData = data.filter(
        (animal) => animal.horns > 1 && animal.horns < 100
      );
      setFilteredData(newData);
    } else if (choice === 'many') {
      const newData = data.filter((animal) => animal.horns >= 100);
      setFilteredData(newData);
    } 
    else {
      setFilteredData(data);
    }
    props.parentHandler(filteredData);
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