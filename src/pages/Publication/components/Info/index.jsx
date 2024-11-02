import React from 'react'
import { SideCard } from "../../shared/SideCard";
import { theme } from '../../../../theme';

function Info() {
    const textLink = {color: theme.palette.sinopia.main}
  return (
    <SideCard title='Info'>
        <li> Do you have a question? Check out <span style={textLink}>/r/learnprogramming</span>, <span style={textLink}>/r/cscareerquestions</span>.</li>
        <li> Do you have something funny to share with fellow programmers? Please take it to <span style={textLink}>/r/programmerHumor</span></li>
        <li> For posting job listings, please visit <span style={textLink}>/r/forhire</span> or <span style={textLink}>/r/jobbit</span> </li>
    </SideCard>
  )
}

export {Info}