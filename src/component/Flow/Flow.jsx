import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Structure } from '../../assets/structure.svg'
export const Flow = () => {
    const useStyles = makeStyles(theme => ({
        mainWrapper: {
            paddingTop: '100px',
            background: '#101d48',
            [theme.breakpoints.down('sm')]: {
                padding: '10px 0',
                background: '#101d48',
            }
        },
        wrapper: {
            maxWidth: '1180px',
            paddingLeft: '10px',
            paddingRight: '10px',
            margin: 'auto',
            '& h3': {
                fontSize: 24,
                color: 'white',
                marginBottom: 40
            },
            '& p': {
                fontSize: 20,
                color: 'white',
                lineHeight: '32px',
                marginBottom: '2.5em'
            },
            [theme.breakpoints.down('sm')]: {
                maxWidth: '1180px',
                paddingLeft: '59px',
                paddingRight: '59px',
                margin: 'auto',
                marginBottom: '2.5em'
            }

        },
    }));
    const classes = useStyles()
    return (
        <div className={classes.mainWrapper}>
            <div className={classes.wrapper}>
                <Typography variant='h3' component='h3' >
                    NEVM: The Roadmap to Smart Cities and Beyond
                </Typography>
                <p>
                    In the coming year we will release what we're currently calling Syscoin NEVM (Network-Enhanced Virtual Machine).
                    This will not be your typical EVM blockchain. Our network will use parallel processing to enable projects to access
                    much more processing power than Ethereum. Meaning bigger programs,
                    more complex calculations, and thousands more simultaneous calculations, all executed at far lower fees than Ethereum.
                </p>
                <div>
                    <Structure />
                </div>
            </div>
        </div>
    )
}
