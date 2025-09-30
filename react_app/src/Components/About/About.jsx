import React, { useState } from 'react';
import './About.css';

const About = () => {
  // Step 1: Track the currently active tab
  const [activeTab, setActiveTab] = useState('skills');

  // Step 2: Function to change tabs
  const opentab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="about">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="about-col-1">
            <img src="#" alt="user img" />
          </div>

          {/* Right Column */}
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, et?
              Repudiandae consequatur repellendus ipsam possimus id perferendis officia!
            </p>

            {/* ---- Tab Titles ---- */}
            <div className="tab-titles">
              <p
                className={`tap-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                onClick={() => opentab('skills')}
              >
                Skills
              </p>
              <p
                className={`tap-links ${activeTab === 'education' ? 'active-link' : ''}`}
                onClick={() => opentab('education')}
              >
                Education
              </p>
              <p
                className={`tap-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                onClick={() => opentab('experience')}
              >
                Experience
              </p>
            </div>

            {/* ---- Tab Contents ---- */}
            <div className="tab-contents">
              {activeTab === 'skills' && (
                <ul>
                  <li><span>UI/UX</span><br />Designing web/app interfaces</li>
                  <li><span>Web App</span><br />Developing modern web applications</li>
                  <li><span>App Development</span><br />Building Android/iOS apps</li>
                  <li><span>Web Development</span><br />Full-stack development</li>
                  <li><span>Web Development</span><br />Full-stack development</li>
                  <li><span>Web Development</span><br />Full-stack development</li>
                  <li><span>Web Development</span><br />Full-stack development</li>
                </ul>
              )}

              {activeTab === 'education' && (
                <ul>
                  <li><span>B.Tech CSE</span><br />Mailam Engineering College</li>
                  <li><span>12th Grade</span><br />State Board</li>
                  <li><span>Certifications</span><br />SkillRack, GeeksforGeeks, Coursera</li>
                </ul>
              )}

              {activeTab === 'experience' && (
                <ul>
                  <li><span>Novitech Internship</span><br />Full Stack & AI Development</li>
                  <li><span>Personal Projects</span><br />Deep Q-Learning Ration System</li>
                  <li><span>Web Development Projects</span><br />Portfolio & BRJITGP System</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
