import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Scale } from '../../assets/scale.svg'
import { ReactComponent as Fee } from '../../assets/fee.svg'
import { ReactComponent as Compliance } from '../../assets/compliance.svg'
import { ReactComponent as Security } from '../../assets/security.svg'
import { ReactComponent as Token } from '../../assets/Token.svg'
import { ReactComponent as NFTS } from '../../assets/NFTS.svg'
import { ReactComponent as Node } from '../../assets/Node.svg'
import { ReactComponent as SDK } from '../../assets/SDK.svg'
import Typical from 'react-typical'
export const TSplateform = () => {
    const useStyles = makeStyles(theme => ({
        MainWrapper: {
            // width: '100%',
            background: '#101d48'
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
                paddingTop: 111,
                paddingLeft: 56,
                paddingRight: 56
            }
        },
        PlateFormPara: {
            fontSize: 16,
            color: '#8f8f9b',
        },
        SVGSTYLE: {
            width: '145px',
            [theme.breakpoints.down('sm')]: {
                width: '100px',
            },
        },
        SVGSTYLE1: {
            width: 119,
            height: 192
        },
        SVGSTYLE2: {
            width: 132,
            height: 156
        },
        h3Header: {
            fontSize: 24,
            fontWeight: 600,
            [theme.breakpoints.down('sm')]: {
                fontSize: 16,
                fontWeight: 600,
            },
        },
        h3Header1: {
            fontSize: 24,
            fontWeight: 600,
            marginTop: -33,
            [theme.breakpoints.down('sm')]: {
                fontSize: 16,
                fontWeight: 600,
                marginTop: -33,
            },
        },
        hHeader: {
            fontSize: 20,
            textAlign: 'center',
            lineHeight: '30px',
            [theme.breakpoints.down('sm')]: {
                fontSize: 16,
                textAlign: 'start',
            },
        },
        SCALEP: {
            fontSize: '16px',
            lineHeight: '28px',
            marginTop: 14,
            [theme.breakpoints.down('sm')]: {
                fontSize: '16px',
                lineHeight: '28px',
                marginTop: 14,
            },
        },
        FeaturesWrapper: {
            display: 'flex',
            padding: '20px 100px 0',
            '& div': {
                padding: 50
            },
            [theme.breakpoints.down('xs')]: {
                flexWrap: 'wrap',
                '& div': {
                    padding: 0,

                },
            },
            [theme.breakpoints.down('sm')]: {
                display: 'flex',
                padding: 0,
            }

        },
        FeaturesWrapper1: {
            display: 'flex',
            padding: '20px 100px 0',
            '& div': {
                padding: 50,

            },
            [theme.breakpoints.down('xs')]: {
                flexWrap: 'wrap',
                '& div': {
                    padding: 10,
                    paddingLeft: 0,
                    marginBottom: theme.spacing(1)
                },
            },
            [theme.breakpoints.down('sm')]: {
                display: 'flex',
                padding: 10,
                paddingLeft: 0,
                '& div': {
                    width: '100%',
                    padding: 13,

                },


            }
        },
        SYSDEFWRAPPER: {
            display: 'flex',
            alignItems: 'center',
            padding: '0 150px 0',
            [theme.breakpoints.down('sm')]: {
                padding: '0 50px 0',

            },
            [theme.breakpoints.down('xs')]: {
                display: 'flex',
                flexDirection: 'column',
                padding: '0 7px 0',
                alignItems: 'start'

            }
        },
        securitySvg: {
            width: 90,
            marginRight: theme.spacing(2)
        },
        SVGToken: {
            width: 142,
            height: 142
        },
        SVGNFTS: {
            width: 137,
            height: 140,
        },
        SVGNODE: {
            width: 138,
            height: 140,
        },
        SVGSDK: {
            width: 138,
            height: 140

        },
        Discover: {
            marginBottom: theme.spacing(4),
            marginTop: theme.spacing(4)
        },
        SyscoinHeading: {
            fontSize: '22px !important',
            fontWeight: 600,
            padding: '50px 0',
            [theme.breakpoints.down('xs')]: {
                fontSize: '18px !important',
                fontWeight: 600,

            },
            '& span': {
                color: '#f8c65c',
                fontWeight: 600,
            }
        }
    }));
    const classes = useStyles()
    return (
        <div className={classes.MainWrapper}>
            <div className={classes.MainWrapperChild}>
                <Typography varient='h1' component='h1' >Plateform</Typography>
                <p className={classes.PlateFormPara}>
                    We have everything you need to get up and running quickly on our scalable and low-cost network
                </p>
                <div className={classes.FeaturesWrapper}>
                    <div >
                        <Scale className={classes.SVGSTYLE} />
                        <Typography varient='h3' component='h3' className={classes.h3Header}>Scalability</Typography>
                        <p className={classes.SCALEP}>
                            Independently tested by Whiteblock to demonstrate a transaction rate of up to 60,000 TPS
                        </p>
                    </div>
                    {/* 2nd div */}
                    <div>
                        <Fee className={classes.SVGSTYLE1} />
                        <Typography varient='h3' component='h3' className={classes.h3Header1}>Low fees</Typography>
                        <p className={classes.SCALEP}>
                            Syscoin platform is designed to keep fees low, at a fraction of a penny per transaction
                        </p>
                    </div>
                    {/* 3rd div */}
                    <div >
                        <Compliance className={classes.SVGSTYLE2} />
                        <Typography varient='h3' component='h3' className={classes.h3Header}>Compliance</Typography>
                        <p className={classes.SCALEP}>
                            Our ground-breaking compliance rulesets allow you to comply with global and regional regulations
                        </p>
                    </div>
                </div>
                <div className={classes.SYSDEFWRAPPER}>
                    <div >
                        <Security className={classes.securitySvg} />
                    </div>
                    <div >
                        <p>
                            Syscoin is a proof-of-work blockchain with a hashrate second only to Bitcoin.
                            It is merge-mined with Bitcoin to offer unrivaled security,
                            with multi-quorum chainlocks for higher resistance to 51% attacks.
                        </p>
                    </div>
                </div>
                <Typography varient='h1' component='h1' className={classes.Discover} >
                    Discover
                </Typography>
                <div className={classes.FeaturesWrapper1}>
                    <div >
                        <Token className={classes.SVGToken} />
                        <Typography varient='h3' component='h3' className={classes.hHeader}>
                            Syscoin Platform Tokens (SPTs)
                        </Typography>
                    </div>
                    {/* 2nd div */}
                    <div >
                        <NFTS className={classes.SVGNFTS} />
                        <Typography varient='h3' component='h3' className={classes.hHeader}>
                            NFTs
                        </Typography>
                    </div>
                    {/* 3rd div */}
                    <div >
                        <Node className={classes.SVGNODE} />
                        <Typography varient='h3' component='h3' className={classes.hHeader}>
                            Masternodes
                        </Typography>
                    </div>
                    <div >
                        <SDK className={classes.SVGSDK} />
                        <Typography varient='h3' component='h3' className={classes.hHeader}>
                            Our SDK
                        </Typography>
                    </div>
                </div>
                <Typography varient='h1' component='h1' className={classes.SyscoinHeading} >
                    Start using Syscoin today for scalable {' '}
                    <Typical
                        steps={['Loyalty points', 1000, 'Physical asset-backed tokens', 500, 'Stablecoins', 1000, 'Compliant money', 500, 'Physical asset-backed tokens', 500, 'Stablecoins', 1000, 'NFTs', 500]}
                        loop={Infinity}
                        wrapper="span"
                    />
                </Typography>
            </div>
        </div>
    )
}
