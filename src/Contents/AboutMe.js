import React, { Component } from 'react';

const roundStyle =
{
  width:'50px',
  border:'5px solid red'
}

class AboutMe extends Component {
  
  render() {
    return (
      <div className="w3-container">
        <h1 className="w3-xxxlarge w3-text-red"><b>About Me</b></h1>
        <hr style={roundStyle} className="w3-round"/>
        <p>"Just Do It! Anyway." </p>
        <p>
          My name is <b>Youngmin Kim</b>, and I am currently in fifth semester at Seneca College in the Computer Programming and analysis program.
          I have learnt <b>C/C++/C#, Unity, MFC, Java, NodeJS, React, Angular, HTML/CSS, Oracle, MySQL, Algorithm, System Analysis, Network, Linux, and IBM Computing</b>.<br/>
          I am eager to learn new computer technique, so I have studied <b>Unity, React, Angular</b> by myself.
        </p>
        <p>
          I worked for 9 months in a web company in South Korea. I was responsible for maintaining web application and developing a company utility program. I used JSP to maintain web application, and MFC to develop company utilities. I decided to come to Canada to learn English because all new computer technique is released with documents written in English.
        </p>
        <p>
          I am currently looking for a co-op.
        </p>
      </div>
    );
  }
}

export default AboutMe;
