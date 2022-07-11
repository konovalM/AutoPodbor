import React from 'react';
import styles from './Form.module.scss'
import cn from "classnames";
export const FullFormWrapper = ({children}) => {

    return (
        <div className={cn(styles.formWrapper)}>
            {children}
        </div>
    );
};

