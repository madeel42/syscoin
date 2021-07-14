import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import MenuIcon from '@material-ui/icons/Menu';
import { ReactComponent as LogoScroll } from '../../assets/logo-fullScroll.svg'
import Button from '@material-ui/core/Button';
import { useState } from 'react';
export const Navbar = () => {
    const [isScroll, setScroll] = useState(false)
    const [openTogle, setOpenTogle] = useState(false)
    const useStyles = makeStyles(theme => ({
        MainHeader: {
            padding: '10px 0',
            position: 'sticky',
            top: 0,
            zIndex: 1,
            transitionTimingFunction: 'ease-out',
            transition: '0.5s',
        },
        MainHeader1: {
            background: 'blue',
            position: 'fixed',
            left: 0,
            color: '#fff',
            transitionTimingFunction: 'ease-in',
            transition: '0.5s',
            right: 0,
            // position: 'sticky',
            // top: 0,
            zIndex: 1,

        },
        root: {
            maxWidth: '1180px',
            paddingLeft: '10px',
            paddingRight: '10px',
            margin: 'auto'
        },
        navStyle: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            margin: 'auto',
            padding: '25px 0',
            position: 'sticky',
            top: '0',
            '& ul': {
                listStyle: 'none',
                display: 'flex',
                '& li': {
                    // marginLeft: '24px'
                    marginLeft: theme.spacing(6)
                }
            },
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
        },
        navStyle1: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            margin: 'auto',
            padding: '0px 0',
            position: 'sticky',
            top: '0',
            '& ul': {
                listStyle: 'none',
                display: 'flex',
                '& li': {
                    // marginLeft: '24px'
                    marginLeft: theme.spacing(6)
                }
            },
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
        },
        endRow: {
            display: 'none'
        },
        endRow1: {
            display: 'block'
        },
        MobileView: {
            listStyleType: 'none',
            textAlign: 'end',
            display: 'block',
            padding: '0 7px',
            background: '#252862',
            color: '#fff',
            border: '2px solid #ffff',
            margin: 'auto',
            '& li': {
                padding: 12,
            }
        },
        MobileView1: {
            display: 'none',
        },
        Language: {
            listStyleType: 'none',
            display: 'flex',
            position: 'absolute',
            right: '26px',
            marginTop: 0,
            '& li': {
                marginLeft: theme.spacing(2)
            }
        },
        LogoStyle: {
            width: 180,
            height: 41,
        },
        ButtonStyle: {
            '& Button': {
                margin: theme.spacing(1),
            }
        },
        ButtonStyle1: {
            '& Button': {
                margin: theme.spacing(1),
                background: '#0a44aa',
                color: '#fff'
            }
        },
        menuItemIcon: {
            display: 'none',
            '& div': {
                display: 'flex',
                justifyContent: 'space-between',
                direction: 'rtl',
                alignItems: 'center',

            },
            [theme.breakpoints.down('sm')]: {
                display: 'block',
                padding: '34px 7px',
                paddingBottom: 0
            },
        }
    }));
    const classes = useStyles();
    window.onscroll = () => {
        if (window.scrollY > 100) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    const handleToggle = () => {
        setOpenTogle(openTogle => {
            return !openTogle
        })
    }
    return <div className={isScroll ? classes.MainHeader1 : classes.MainHeader}>
        <div className={classes.root}>
            <div>
                <ul className={classes.Language}>
                    <li>English</li>
                    <li>Korean</li>
                </ul>
            </div>
            <div className={classes.menuItemIcon}>
                <div>
                    <MenuIcon onClick={handleToggle} />
                    <div>{isScroll ? <LogoScroll className={classes.LogoStyle} /> : <Logo className={classes.LogoStyle} />} </div>
                </div>
            </div>
            <div className={isScroll ? `${classes.navStyle1}` : `${classes.navStyle}`}>
                <div>{isScroll ? <LogoScroll className={classes.LogoStyle} /> : <Logo className={classes.LogoStyle} />} </div>
                <ul className={openTogle ? classes.MobileView : ''}>
                    <li>Feaures</li>
                    <li>Developers</li>
                    <li>Team</li>
                    <li>News</li>
                    <li>Resources</li>
                </ul>
                <ul className={isScroll ? classes.ButtonStyle1 : classes.ButtonStyle}>
                    <Button variant="contained">Explorer</Button>
                    <Button variant="contained">By Says </Button>
                </ul>
            </div>
        </div>
        <ul className={openTogle ? classes.MobileView : classes.MobileView1}>
            <li>Feaures</li>
            <li>Developers</li>
            <li>Team</li>
            <li>News</li>
            <li>Resources</li>
            <li>Explorer</li>
            <li >By Says</li>
        </ul>
    </div>
}
