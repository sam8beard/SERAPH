import React from "react";
import './ProjectArchive.css'; 

import seraph_logo from '../assets/seraph_logo-1.png';
import filter_icon from '../assets/filter_icon.png';
import search_icon from '../assets/search_icon.png';


function ProjectArchive() {
    return (
        <div class="projects-archived">
            <div class="overlap-wrapper">
                <div class="div-1">
                    <div class="text-wrapper-1">Welcome User</div>
                    <div class="p">S E R A P H</div>
                    <img class="image" alt="Image" src={seraph_logo}/>
                    <div class="text-wrapper-2">Home</div>
                    <div class="text-wrapper-3">Archived</div>
                </div>
                    
                <div class="div-2">
                    <div class="text-wrapper-4">Your Past Projects</div>
                    <img class="image2" alt="Image" src={seraph_logo}/>
                    <div class="rectangle-1">
                </div>
                
                <div class="export-pdf">Export Project PDF</div>
                <div class="search_bar"></div>
                <img class="search_icon" alt="Image" src={search_icon}/>
                <div class="search-text">Search</div>
                <div class="rectangle-2">
                </div>
                
                <div class="div-3">
                    <div class="text-wrapper-5">STATUS</div>
                    <div class="text-wrapper-6">TITLE</div>
                    <img class="filter-1" alt="Filter" src={filter_icon}/>
                    <div class="text-wrapper-7">DATE POSTED</div>
                    <img class="filter-2" alt="Filter" src={filter_icon}/>
                    <div class="line-1"></div>
                    <div class="line-2"></div>
                    
                    <div class="frame">
                        <div class="text-wrapper-8">Complete</div>
                        <div class="text-wrapper-9">MEDUSA</div>
                        <div class="text-wrapper-10">Jun 10, 2024</div>
                    </div>
                </div>
                        </div>
            </div>
        </div>
    );
}

export default ProjectArchive;
