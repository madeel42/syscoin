import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Headerpi } from '../../assets/headerpi.svg'
import Button from '@material-ui/core/Button';
export const Header = () => {
    const useStyles = makeStyles(theme => ({
        root: {
            maxWidth: '1180px',
            paddingLeft: '46px',
            paddingRight: '46px',
            margin: 'auto'
        },
        Header1: {
            fontSize: 70,
            fontWeight: 700,
            lineHeight: '84px',
            marginBottom: 20,
            [theme.breakpoints.down('sm')]: {
                fontSize: 26,
                fontWeight: 700,
                lineHeight: '45px',
                marginTop: 21,
                marginBottom: 20
            }
        },
        MainDiv: {
            display: 'flex',
            "@media (max-width: 1100px)": {
                flexWrap: 'wrap'
            }
        },
        Box1: {
            width: '50%',
            '& button': {
                padding: '11px 12px',
                background: '#101d48',
                color: '#fff'
            },
            '@media (max-width: 1100px)': {
                width: '100%',
            }
        },
        Box2: {
            width: '50%',
            paddingLeft: 50,
            paddingTop: 45,
            height: 551,
            '@media (max-width: 1100px)': {
                width: '100%',
                paddingTop: 45,
                paddingLeft: 0
            }
        },
        Paragraph1: {
            fontSize: '24px',
            fontWeight: 300,
            lineHeight: '43px',
            paddingRight: 160,
            marginBottom: 34,
            [theme.breakpoints.down('sm')]: {
                fontSize: '24px',
                fontWeight: 300,
                lineHeight: '43px',
                paddingRight: 0,
                marginBottom: 34,
            }
        },
        Box2Header: {
            fontSize: 40,
            fontWeight: 200,
        },
        StatusList: {
            paddingLeft: 27,
            '& li': {
                fontSize: '20px',
                fontWeight: '200',
                lineHeight: '43px',
                fontStyle: 'italic'
            }
        },
        HeaderpicStyle: {
            position: 'relative',
            right: '-137px',
            top: '-266px',
            bottom: '-343px',
            width: '450px',
            [theme.breakpoints.down('sm')]: {
                top: '-266px',
                right: '-2px',
                width: '250px',
                bottom: '-343px',
                position: 'relative'
            }
        }
    }));
    const classes = useStyles()
    return <div className={classes.root}>
        <div className={classes.MainDiv}>
            <div className={classes.Box1}>
                <Typography className={classes.Header1} variant='h1' component='h1'>
                    Future-Proof Payments and Value Transfer
                </Typography>
                <p className={classes.Paragraph1} >
                    Syscoin Platform offers fast and low-cost tokens, assets,
                    and NFTs secured by Bitcoin's censorship-resistance and hashrate.
                </p>
                <Button variant="contained" color="primary">
                    Kickstart your NFT in minutes
                </Button>
            </div>
            <div className={classes.Box2}>
                <div className={classes.Box2Header}>
                    Blockchain stats
                </div>
                <ul className={classes.StatusList}>
                    <li>Masternodes enabled 2,344</li>
                    <li>Transaction fee $0.00000750</li>
                    <li>Hashrate  21.70 EH/s</li>
                </ul>
                <Headerpi className={classes.HeaderpicStyle} />
            </div>
        </div>
    </div>
}
