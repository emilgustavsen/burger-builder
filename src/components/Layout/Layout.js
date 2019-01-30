import React, {Component} from 'react';
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

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
        <Toolbar show={this.sideDrawerShowHandler}/>
        <SideDrawer open={this.state.showSideDrawer} hide={this.sideDrawerHideHandler} />
        <main className={styles.content}>
            {this.props.children}
        </main>
    </>

    )}
}

export default Layout;