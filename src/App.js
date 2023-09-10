import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import MyNav from './MyNav'
import data from './data.json';
import { Modal, Form } from 'react-bootstrap';
import { setFilteredData } from './redux/filteredReducer';
import { connect } from 'react-redux';


class App extends React.Component
{
  // constructor(props){
    // super(props)
    // this.state ={
      // filteredData : data
      //beast: {}
      //beast: '',
      //image_url: '',
      //description: '',
      //title: ''
    // }
  // }

  parentHandler = (newFilteredData) => {
    if(newFilteredData === null)
      this.setState({filteredData:data})
    else
      this.setState({filteredData:newFilteredData})
  }

  handleSelect = event => {
    let choice = event.target.value;
    let newData = data;

    if (choice === 'single') newData = data?.filter(animal => animal.horns === 1);
    else if (choice === 'few') newData = data?.filter(animal => animal.horns > 1 && animal.horns < 100);
    else if (choice === 'many') newData = data?.filter(animal => animal.horns >= 100);
    
    // this.setState({filteredData: newData});
    this.props.dispatch(setFilteredData(newData));
  }


  render(){
    return (
      <>
      {console.log("app fildata:", this.props.filteredData)}
        <MyNav parentHandler = {this.parentHandler}/>
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
            filteredData={this.props.filteredData}
            // showModalHandler={this.showModalHandler}
          />
        </div>
        <Footer />
      </>
    )
  }
}

export default connect()(App);