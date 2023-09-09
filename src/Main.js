import { findByLabelText } from "@testing-library/react";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';

import HornedBeast from "./HornedBeast";
import SelectedBeast from './SelectedBeast';
import "./Main.css";

class Main extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            //data: this.props.data,
            image_url: '',
            description: '',
            title: ''
        };
    }

    hideModal = () => {
        this.setState({
            showModal: false
        })
    }
    openModal = (title, description, image_url) =>
    {
        this.setState({
        showModal: true,
        image_url: image_url,
        description: description,
        title: title
        });
    }

    mainStyle = 
    {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    }   
    render()
    {
            return (
                <main style={this.mainStyle}>
                    <SelectedBeast
                    showModal={this.state.showModal}
                    hideModal={this.hideModal}
                    image_url={this.state.image_url}
                    description={this.state.description}
                    title={this.state.title}
                    />
                    <Container>
                        <Row xs={1} md={3} lg={4}>
                            {this.props.data?.map((animal, index) =>(
                                <Col key={index}>
                                    <HornedBeast 
                                    title={animal.title}
                                    name={animal.name}
                                    image_url={animal.image_url}
                                    description={animal.description}
                                    horns={animal.horns}
                                    key={index}
                                    openModal={this.openModal}
                                    animal={animal}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </main>
        );
    }
}
export default Main;