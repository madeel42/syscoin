import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import LayerPng from '../../assets/layer.png'
export const Layer = () => {
    const useStyles = makeStyles(theme => ({
        mainWrapper: {
            padding: '100px 0',
            [theme.breakpoints.down('sm')]: {
                padding: '30px 0',
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
                lineHeight: '36px',
            },
            [theme.breakpoints.down('sm')]: {
                maxWidth: '1180px',
                paddingLeft: '59px',
                paddingRight: '59px',
                margin: 'auto',
            }

        },
        IMGLAYER: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2.9em',
            '& img': {
                [theme.breakpoints.down('sm')]: {
                    width: '100%'
                }
            }
        }
    }));
    const classes = useStyles()
    return (
        <div className={classes.mainWrapper}>
            <div className={classes.wrapper}>
                <div className={classes.IMGLAYER} >
                    <img src={LayerPng} alt="" />
                </div>
                <p >
                    These capabilities go beyond the scope of Ethereum 2.0 and Bitcoin, leaving Syscoin well-placed to disrupt.
                    Our community will be at the forefront as we combine cryptographic advancements into a newly designed computation-oriented blockchain
                    that can also plug into our existing innovations,
                    robust network, and security model. Syscoin will bring smart contract functionality into the future.
                </p>
            </div>
        </div>
    )
}
