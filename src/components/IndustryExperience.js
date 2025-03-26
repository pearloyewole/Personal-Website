import React from 'react';
import './IndustryExperience.css';

function IndustryExperience() {
    return (
        <div className="experience-container">
            <div className="experience-item">
                <h2 className="company-name">Company Name</h2>
                <h3 className="job-title">Job Title</h3>
                <p className="date-range">Month Year - Month Year</p>
                <div className="responsibilities">
                    <ul>
                        <li>Key responsibility or achievement</li>
                        <li>Another key responsibility or achievement</li>
                        <li>One more key responsibility or achievement</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default IndustryExperience; 