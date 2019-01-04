import React, { Component } from 'react';
import Footer from '../Footer';

class Main extends Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
  
export default Main;