import React from 'react';
import {Modal} from 'react-bootstrap';

class SelectedBeast extends React.Component
{
    render()
    {
        return(
        <Modal
        show={this.props.showModal}
        onHide={this.props.hideModal}
        >
            <Modal.Header closeButton>
                <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img
                style={{width: '100%'}}
                src={this.props.image_url}
                alt={this.props.title}
                >
                </img>
                {this.props.description}
            </Modal.Body>
        </Modal>
        );
    }
}

export default SelectedBeast;