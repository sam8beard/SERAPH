import "bootstrap/dist/css/bootstrap.css";
import './SprintOverview.css'
import {
    Outlet,
    NavLink,
    useLoaderData,
    Form,
    redirect,
    Link,
} from "react-router-dom";

import ProgressBar from "react-bootstrap/ProgressBar";
import React from "react";

function Root() {
    const now = 60;

    return (
        <>
            <div>
                <div className="flex-container-navbar text-style-navbar">
                    <img src="../../images/SERAPH.png" className="logo" />
                    <div>S E R A P H</div>
                    <div>Home</div>
                    <div>Archived</div>
                    <div>Welcome User</div>
                </div>
            </div>

            <h1 className="text-style-header">
                Enterprise Collection Planner (ECP) 6/3/2024 - 6/7/2024
            </h1>

            <div className="progress-bar-container">
                <div className="progress-bar-text">{now}%</div>
                <ProgressBar striped variant="info" className="progress-bar" now={now} />
            </div>

            <div className="flex-container-parent">
                <div className="flex-container-child-left">
                    <div className="text-style-normal">
                        <div>Manual Testing 101 training session.</div>
                        <div>Onboarded to ODIN / Jira; will begin Jira usage next PI.</div>
                        <div>Refind automated testing for part 1 of scenario 0A of ECP v3.3.2n</div>
                        <div>Colorblind mode for status indicators (color change).</div>
                    </div>
                    <h2>
                        <div>In work:</div>
                    </h2>
                    <div className="text-style-normal">
                        <div>Refining automated testing for part 2 of scenario 0A of ECP v3.3.2n.</div>
                        <div>Investigating potential UI improvement: accessibility / colorblind mode (toggle setting).</div>
                        <div>Closure testing for custom calculator undo button.</div>
                        <div>Closure testing for automated test part 1.</div>
                        <div>Stopwatch button: UI creation.</div>
                        <div>Team member acting as intern liasion.</div>
                    </div>
                </div>

                <div className="flex-container-child-right">
                    <img src="../images/SampleGraph.png"></img>
                </div>
            </div>
            
        </>
    );
}

export default Root;