import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button'


class PageNotFound extends Component {
    render () {
        return (
            <div style={{textAlign: 'center', paddingTop: '30%'}}>
            <h1>ERROR 404 PAGE NOT FOUND</h1>
            <p>Sorry, we couldn't find the page you were looking for.</p>
            <Button btnType='Danger'clicked={this.props.history.goBack}>Go back?</Button>
            </div>
        );
    }
}

export default PageNotFound;