import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
export const Main = ({ children }) => {
    const useStyles = makeStyles(theme => ({
        mainWrapper: {
            position: 'relative',
            minHeight: '100vh',
            // overflow: 'hidden'
        }
    }));
    const classes = useStyles()
    return (
        <div className={classes.mainWrapper}>
            {children}
        </div>
    )
}
