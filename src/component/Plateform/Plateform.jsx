import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as DEVELOPTOOL } from '../../assets/developtool.svg'
import { ReactComponent as Paternup } from '../../assets/paternup.svg'
import { ReactComponent as Whitepaper } from '../../assets/whitepaper.svg'
import { ReactComponent as Github } from '../../assets/github.svg'
export const Plateform = () => {
    const useStyles = makeStyles(theme => ({
        mainWrapper: {
            padding: '100px 0',
            background: '#101d48',
            [theme.breakpoints.down('sm')]: {
                padding: '30px 0',
                background: '#101d48',
            }
        },
        wrapper: {
            maxWidth: '1180px',
            paddingLeft: '10px',
            paddingRight: '10px',
            margin: 'auto',
            [theme.breakpoints.down('sm')]: {
                maxWidth: '1180px',
                paddingLeft: '0px',
                paddingRight: '137px',
                margin: 'auto',
            }
        },
        FlexWrapper: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            '& p': {
                color: 'white',
                textAlign: 'center'
            },
            [theme.breakpoints.down('sm')]: {
                '& div': {
                    padding: 25,
                },
            }

        },
        GITHUBSVG: {
            width: 127,
            filter: 'invert(1) !important',
            height: 131,
            marginTop: 27,
        }
    }));
    const classes = useStyles()
    return (
        <div className={classes.mainWrapper}>
            <div className={classes.wrapper}>
                <div className={classes.FlexWrapper}>
                    <div >
                        <div >
                            <DEVELOPTOOL />
                        </div>
                        <p>
                            Start developing
                        </p>
                    </div>
                    <div >
                        <div >
                            <Paternup />
                        </div>
                        <p>
                            Partner up
                        </p>
                    </div>
                    <div >
                        <div >
                            <Whitepaper />
                        </div>
                        <p>
                            Whitepapers
                        </p>
                    </div>
                    <div >
                        <div >
                            <Github className={classes.GITHUBSVG} />
                        </div>
                        <p>
                            Github
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
