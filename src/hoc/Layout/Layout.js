import React, {Component} from 'react';
import styles from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import {connect} from 'react-redux' 

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }

    sideDrawerHideHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerShowHandler = () => {
        this.setState({showSideDrawer: true})
    }

    render() {
        return(
    <>
        <Toolbar auth={this.props.isAuthenticated} show={this.sideDrawerShowHandler}/>
        <SideDrawer auth={this.props.isAuthenticated} open={this.state.showSideDrawer} hide={this.sideDrawerHideHandler} />
        <main className={styles.content}>
            {this.props.children}
        </main>
    </>

    )}
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);