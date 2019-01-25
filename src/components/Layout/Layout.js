import React from 'react';
import styles from './Layout.module.css'

const layout = (props) => (
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.content}>
            {props.children}
        </main>
    </>
)

export default layout;