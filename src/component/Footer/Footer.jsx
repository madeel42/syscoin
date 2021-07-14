import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as FooterLogo } from '../../assets/footerlogo.svg'
export const Footer = () => {
    const useStyles = makeStyles(theme => ({
        MainWrapper: {
            // width: '100%',
            background: '#27292d'
        },
        MainWrapperChild: {
            maxWidth: '1180px',
            paddingLeft: '10px',
            paddingRight: '10px',
            paddingTop: 84,
            margin: 'auto',
            color: '#fff',
            '& h1': {
                fontSize: 32,
                fontWeight: 700,
            },
            [theme.breakpoints.down('sm')]: {
                color: '#fff',
                margin: 'auto',
                maxWidth: '1180px',
                paddingTop: 31,
                paddingLeft: 56,
                paddingRight: 56
            }
        },
        footerLogo: {
            margin: '8px 0 45px',
            width: 180,
        },
        Head1: {
            paddingBottom: 12,

            '& h2': {
                marginTop: 0,
                fontSize: 18,
                textAlign: 'center'
            }
        },
        Head2: {
            paddingBottom: 12,
            fontSize: 18
        },
        ULLIST: {
            width: 252,
            display: 'flex',
            listStyleType: 'none',
            paddingLeft: 9,
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            '& li': {
                padding: '15px',
                paddingBottom: '1px'
            }
        },
        FooterIconWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
        },
        FooterchildWrapper: {
            display: 'flex',
            width: '58%',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            // [theme.breakpoints.down('xs')]: {
            //     color: '#fff',
            //     margin: 'auto',
            //     maxWidth: '1180px',
            //     paddingTop: 39,
            //     paddingLeft: 56,
            //     paddingRight: 56,
            // },
            [theme.breakpoints.down('sm')]: {
                display: 'flex',
                width: '58%',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
            },
            '& div': {
                '& ul': {
                    listStyleType: 'none'
                },
                [theme.breakpoints.down('xs')]: {
                    display: 'flex',
                    width: '58%',
                    justifyContent: 'start',
                    flexWrap: 'wrap',
                },
                // [theme.breakpoints.down('sm')]: {
                //     display: 'flex',
                //     width: '58%',
                //     justifyContent: 'start',
                //     // paddingLeft: 30,
                //     flexWrap: 'wrap',
                // }
            }
        },

    }));
    const classes = useStyles();
    return (
        <div className={classes.MainWrapper}>
            <div className={classes.MainWrapperChild}>
                <div >
                    <FooterLogo className={classes.footerLogo} />
                </div>
                <div className={classes.FooterIconWrapper}>
                    <div>
                        <Typography varient='h3' component='h3' className={classes.Head2} >Social Media</Typography>
                        <ul className={classes.ULLIST}>
                            <li><i className="fab fa-facebook-f"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-github"></i></li>
                            <li><i className="fab fa-discord"></i></li>
                            <li><i className="fab fa-telegram-plane"></i></li>
                            <li><i className="fab fa-bitcoin"></i></li>
                            <li><i className="fab fa-youtube"></i></li>
                            <li><i className="fab fa-linkedin"></i></li>
                            <li><i className="fab fa-facebook-messenger"></i></li>
                        </ul>
                    </div>
                    <div className={classes.FooterchildWrapper}>
                        <div className={classes.Head1} >
                            <h2>Resources</h2>
                            <ul>
                                <li>Wallets</li>
                                <li>Github</li>
                                <li>White Papers</li>
                            </ul>
                        </div>
                        <div className={classes.Head1} >
                            <h2>Compunity</h2>
                            <ul>
                                <li>Discord</li>
                                <li>News</li>
                                <li>Twitter</li>
                            </ul>
                        </div>
                        <div className={classes.Head1} >
                            <h2>AboutUs</h2>
                            <ul>
                                <li>Meet the team</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
