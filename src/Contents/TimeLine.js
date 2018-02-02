import React, { Component } from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline';

const roundStyle =
{
  width:'50px',
  border:'5px solid red'
}

class TimeLine extends Component {

  render() {
    return (
      <div className="w3-container">
        <h1 className="w3-xxxlarge w3-text-red"><b>TimeLine</b></h1>
        <hr style={roundStyle} className="w3-round"/>
        <Timeline>
            <TimelineEvent title="Entered Induk University in South Korea"
                             createdAt="Mar - 2009"
                             icon={<i className="fa fa-book"></i>}
              >
                  I studied computer programming.
              </TimelineEvent>
              <TimelineEvent
                  title="Joined the army"
                  createdAt="Jun - 2010"
                  icon={<i className="glyphicon glyphicon-flag"></i>}
              >
                  Military service is mandatory.
              </TimelineEvent>
              <TimelineEvent
                  title="Discharged from the army"
                  createdAt="Apr - 2012"
                  icon={<i className="glyphicon glyphicon-flag"></i>}
              >
                  Military service is mandatory.
              </TimelineEvent>
              <TimelineEvent
                  title="Worked as Web developer"
                  createdAt="Oct - 2013"
                  icon={<i className="fa fa-desktop"></i>}
              >
                  I was responsible for maintaining web application, developing company's utilities.
              </TimelineEvent>
              <TimelineEvent
                  title="Graduated from the University"
                  createdAt="Feb - 2014"
                  icon={<i className="fa fa-graduation-cap"></i>}
              >
                  I graduated from the University with 3.6/4.5.
              </TimelineEvent>
              <TimelineEvent
                  title="Quited my job"
                  createdAt="Aug - 2014"
                  icon={<i className="fa fa-desktop"></i>}
              >
                  I quited my job to study in Canada
              </TimelineEvent>
              <TimelineEvent
                  title="Studied English"
                  createdAt="Oct - 2014"
                  icon={<i className="fa fa-book"></i>}
              >
                  I learnt English to enter college in Canada
              </TimelineEvent>
              <TimelineEvent
                  title="Prepared to enter seneca college"
                  createdAt="Sep - 2015"
                  icon={<i className="fa fa-book"></i>}
              >
                  I prepared to enter seneca college
              </TimelineEvent>
              <TimelineEvent
                  title="Entered seneca college"
                  createdAt="Oct - 2015"
                  icon={<i className="fa fa-book"></i>}
              >
                  I have studied computer programming and analysis.
              </TimelineEvent>
              <TimelineEvent
                  title="Looking for a co-op"
                  createdAt="present"
                  icon={<i className="fa fa-battery-full"></i>}
              >
                  I am currently looking for a co-op. My current GPA is 3.9/4.0
              </TimelineEvent>
        </Timeline>
      </div>
    );
  }
}

export default TimeLine;
