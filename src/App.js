import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main'
import data from './data.json';
import { Modal, Form } from 'react-bootstrap';

class App extends React.Component
{
  constructor(props){
    super(props)
    this.state ={
      filteredData : data
      //beast: {}
      //beast: '',
      //image_url: '',
      //description: '',
      //title: ''
    }
  }

  handleSelect = event => {
    let choice = event.target.value;

    if (choice === 'single') {
      let newData = data?.filter(animal => animal.horns === 1);
      console.log("here apphandleone", newData);
      this.setState({filteredData: newData});
    }
    else if (choice === 'few') {
      let newData = data?.filter(animal => animal.horns > 1 && animal.horns < 100);
      console.log("here apphandle", newData);
      this.setState({filteredData: newData});
    }
    else if (choice === 'many') {
      let newData = data?.filter(animal => animal.horns >= 100);
      console.log("here apphandle many", newData);
      this.setState({filteredData: newData});
    } 
    else {
      this.setState({
        filteredData: data
      })
    }
  }


  render(){
    return (
      <>
        <Header />
        <div className="beast-layout">
          <Form>
            <Form.Label>Filter the beasts:</Form.Label>
            <Form.Select
              name="select"
              onChange={this.handleSelect}>
              <option value="all">All Beasts</option>
              <option value="many">Many Horns</option>
              <option value="few">Few Horns</option>
              <option value="single">Single Horns</option>
            </Form.Select>
          </Form>
          <Main
            data={this.state.filteredData}
            showModalHandler={this.showModalHandler}
          />
        </div>
        <Footer />
      </>
    )
  }
}


export default App;