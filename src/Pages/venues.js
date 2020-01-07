import React from 'react';
import Navbar from '../Components/navbar';
import {Card} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Venue1 from '../Components/venue1'
import Venue2 from '../Components/venue2'
import Venue3 from '../Components/venue3'

class Venues extends React.Component {
    render () {
        return (
            <>
            <Navbar />
            <Venue1 />
            <Venue2 /> 
            <Venue3 />
          </>
        )
    }
}

export default Venues;