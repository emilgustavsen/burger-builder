import React, {Component} from 'react';
import styles from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

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