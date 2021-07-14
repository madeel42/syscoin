import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Polygon from './../../assets/polygon.png'
import binance from './../../assets/binance.png'
import bigg from './../../assets/bigg.png'
import corion from './../../assets/corion.png'
import dif from './../../assets/dif.png'
import elintwhole from './../../assets/elint-whole.png'
import itsa from './../../assets/itsa.png'
import klever from './../../assets/klever.png'
import komodo from './../../assets/komodo.png'
import quan from './../../assets/quan.png'
export const Services = () => {
    const useStyles = makeStyles(theme => ({
        mainWrapper: {
            padding: '100px 0'
        },
        wrapper: {
            maxWidth: '1180px',
            paddingLeft: '10px',
            paddingRight: '10px',
            margin: 'auto',
            [theme.breakpoints.down('sm')]: {
                maxWidth: '1180px',
                paddingLeft: '59px',
                paddingRight: '59px',
                margin: 'auto',
            }

        },
        Para: {
            fontSize: '20px',
            lineHeight: '36px',
            marginBottom: '2.5em',
            '& strong': {
                fontSize: '24px',
                fontWeight: 500,
                marginBottom: '2.5em',
            }
        },
        R_AND_D: {
            fontSize: '20px',
            lineHeight: '36px',
            marginBottom: '2.5em',
        },
        mainSDiv: {
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            maxWidth: 960,
            margin: 'auto',
            '& div': {
                margin: '15px 30px'
            }
        }
    }));
    const classes = useStyles()
    return (
        <div className={classes.mainWrapper}>
            <div className={classes.wrapper}>
                <p className={classes.Para}>
                    <strong> Syscoin is a decentralized and open source project founded in 2014</strong><br />
                    by the Founders of Blockchain Foundry, who remain Syscoin's core developers. The platform has been guided by the Syscoin Foundation since 2019.
                </p>
                <p className={classes.R_AND_D}>
                    Our research and development partners:
                </p>
                <div className={classes.mainSDiv}>
                    <div><img src={Polygon} alt='Polygon' /></div>
                    <div><img src={binance} alt='binance' /></div>
                    <div><img src={bigg} style={{ height: '50px' }} alt='bigg' /></div>
                    <div><img src={corion} style={{ height: '50px' }} alt='corion' /></div>
                    <div><img src={dif} style={{ height: '50px' }} alt='dif' /></div>
                    <div><img src={elintwhole} style={{ height: '50px' }} alt='elintwhole' /></div>
                    <div><img src={itsa} style={{ height: '50px' }} alt='itsa' /></div>
                    <div><img src={klever} style={{ height: '50px' }} alt='klever' /></div>
                    <div><img src={komodo} style={{ height: '50px' }} alt='komodo' /></div>
                    <div><img src={quan} style={{ height: '50px' }} alt='quan' /></div>
                </div>
            </div>
        </div>
    )
}
