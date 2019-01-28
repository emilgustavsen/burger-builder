import React from 'react';
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <>
        <Toolbar/>
        
        <main className={styles.content}>
            {props.children}
        </main>
    </>
)

export default layout;