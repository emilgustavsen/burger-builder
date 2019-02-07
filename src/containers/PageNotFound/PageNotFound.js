import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button'


class PageNotFound extends Component {
    componentDidMount() {
    console.log(this.props)
}
    render () {
        return (
            <div style={{textAlign: 'center', paddingTop: '30%'}}>
            <h1>ERROR 404 PAGE NOT FOUND</h1>
            <Button btnType='Danger'clicked={this.props.history.goBack}>Go back?</Button>
            </div>
        );
    }
}

export default PageNotFound;