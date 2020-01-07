import React from 'react';
import Navbar from '../Components/navbar';


class Contact extends React.Component {
    render() {
        return (
            <>
                <Navbar />

                <div className="form-container">
                    <div className="form-row">
                {/* name */}
                <form>
                    <label>
                        Artist Name:
    <input type="text" name="name" placeholder="artist name"/>
                    </label>
                </form>


                {/* song */}
                <form>
                    <label>
                        Song Link:
    <input type="text" name="name" />
                    </label>
                </form>
                {/* email */}
                </div>
                </div>
            </>
        )
    }
}

export default Contact;