import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Graph from '../assets/SampleGraph.png';

function Root() {
    const now = 60;

    const styles = {
        header1SO: {
            display: 'flex',
            margin: 'auto',
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '100px',
            paddingBottom: '30px',
            color: '#000000',
            fontFamily: 'Lexend',
            fontWeight: 400,
            fontStyle: 'normal',
        },
        progressBarContainerSO: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            marginBottom: '40px',
            position: 'relative',
        },
        progressBarTextSO: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            color: '#000000',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '24px',
            fontFamily: 'Lexend',
            fontWeight: 400,
            fontStyle: 'normal',
        },
        progressBarSO: {
            display: 'flex',
            width: '80%',
            borderRadius: '40px !important',
            flexDirection: 'row !important',
            justifyContent: 'left !important',
            backgroundColor: '#8E8E8E !important',
            height: '50px !important',
        },
        flexContainerParentSO: {
            display: 'flex',
            backgroundColor: '#D9D9D9',
            margin: 'auto',
            padding: '40px',
            width: '80%',
            borderRadius: '10px',
        },
        flexContainerChildLeftSO: {
            display: 'flex',
            flexDirection: 'column',
            flex: 4,
            textAlign: 'left',
        },
        flexContainerChildLeftSODiv: {
            backgroundColor: '#8E8E8E',
            borderRadius: '10px',
            padding: '10px',
            flex: 1,
            color: '#000000',
            fontFamily: 'Lexend',
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: '45px',
            alignItems: 'left',
            fontSize: '25px',
            paddingLeft: '20px',
        },
        flexContainerChildRightSO: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            marginLeft: '30px',
        },
        imgSO: {
            height: '100%',
        },
    };

    return (
        <>
            <h1 style={styles.header1SO}>
                Enterprise Collection Planner (ECP) 6/3/2024 - 6/7/2024
            </h1>

            <div style={styles.progressBarContainerSO}>
                <div style={styles.progressBarTextSO}>{now}%</div>
                <ProgressBar striped variant="info" style={styles.progressBarSO} now={now} />
            </div>

            <div style={styles.flexContainerParentSO}>
                <div style={styles.flexContainerChildLeftSO}>
                    <div style={styles.flexContainerChildLeftSODiv}>
                        <div>Manual Testing 101 training session.</div>
                        <div>Onboarded to ODIN / Jira; will begin Jira usage next PI.</div>
                        <div>Refind automated testing for part 1 of scenario 0A of ECP v3.3.2n</div>
                        <div>Colorblind mode for status indicators (color change).</div>
                    </div>
                    <h2>
                        <div>In work:</div>
                    </h2>
                    <div style={styles.flexContainerChildLeftSODiv}>
                        <div>Refining automated testing for part 2 of scenario 0A of ECP v3.3.2n.</div>
                        <div>Investigating potential UI improvement: accessibility / colorblind mode (toggle setting).</div>
                        <div>Closure testing for custom calculator undo button.</div>
                        <div>Closure testing for automated test part 1.</div>
                        <div>Stopwatch button: UI creation.</div>
                        <div>Team member acting as intern liaison.</div>
                    </div>
                </div>

                <div style={styles.flexContainerChildRightSO}>
                    <img src={Graph} style={styles.imgSO} alt="Graph" />
                </div>
            </div>

        </>
    );
}

export default Root;
