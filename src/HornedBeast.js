//1. start by creating a class component. Always start by importing React.
import React from 'react';
//import './HornedBeast.css'; 
import{Card} from 'react-bootstrap';
import{Button} from 'react-bootstrap';
//2. Declare the Class Component.
class HornedBeast extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            favorites: 0,
        }
    }
    myFav = () => {
        this.setState({
        favorites : this.state.favorites + 1 //cant chane with ++1 inside the inline tag
        });
    }
    handleClick = () =>{
        this.myFav();
        //this.props.openModal(this.props.beast);
        this.props.openModal(this.props.title, this.props.description,this.props.image_url);
    }

    /*handleShowModal = () =>
    {
    }
    */

    cardStyle = {
        border: '2px solid black'
    }
    imgStyle = 
    {
        width: '100%',
        height:'100%'
    }
    hoveringButton =
    {
        width: '.2rem .1vw',
        cursor: 'pointer'
    }


    render()
    {
        return(
            <>
            <Card 
            style={this.cardStyle}>
                <Card.Img 
                className={this.imgStyle} 
                variant = "top"
                alt={this.props.title} 
                src={this.props.image_url}
                onClick={this.handleClick}//needs onclick to handle
                //onClick={this.handleShowModal}
                />

                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text> {this.state.favorites}</Card.Text>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Button
                    variant="primary"
                    className={this.hoveringButton}//this is for css
                    //NOTE EVENT Handler onClick...
                    onClick={this.myFav}> 
                    Favorite Me</Button>
                </Card.Body>
            </Card>
            </>
                //<Button/>
        );
    }
}

//3. export class 
export default HornedBeast;