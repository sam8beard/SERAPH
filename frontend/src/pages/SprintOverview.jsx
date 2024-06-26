import "bootstrap/dist/css/bootstrap.css";
import './SprintOverview.css';
import graph from "../assets/SampleGraph.png";
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
            <h1 className="header-1-SO text-style-header-SO">
                Enterprise Collection Planner (ECP) 6/3/2024 - 6/7/2024
            </h1>

            <div className="progress-bar-container-SO">
                <div className="progress-bar-text-SO">{now}%</div>
                <ProgressBar striped variant="info" className="progress-bar-SO" now={now} />
            </div>

            <div className="flex-container-parent-SO">
                <div className="flex-container-child-left-SO">
                    <div className="text-style-normal-SO">
                        <div>Manual Testing 101 training session.</div>
                        <div>Onboarded to ODIN / Jira; will begin Jira usage next PI.</div>
                        <div>Refind automated testing for part 1 of scenario 0A of ECP v3.3.2n</div>
                        <div>Colorblind mode for status indicators (color change).</div>
                    </div>
                    <h2>
                        <div>In work:</div>
                    </h2>
                    <div className="text-style-normal-SO">
                        <div>Refining automated testing for part 2 of scenario 0A of ECP v3.3.2n.</div>
                        <div>Investigating potential UI improvement: accessibility / colorblind mode (toggle setting).</div>
                        <div>Closure testing for custom calculator undo button.</div>
                        <div>Closure testing for automated test part 1.</div>
                        <div>Stopwatch button: UI creation.</div>
                        <div>Team member acting as intern liasion.</div>
                    </div>
                </div>

                <div className="flex-container-child-right-SO">
                    <img src={graph} />
                </div>
            </div>
            
        </>
    );
}

export default Root;