import React from 'react'
import { AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import { WhiteAccordion } from "../../style";
import { ExpandMore } from "@mui/icons-material";
import { styles } from "./style";
import { SideCard } from "../../shared/SideCard";

function Rules({communityName="", rulesList=[]}) {
    const title = `r/${communityName} Rules`
  return (
    <SideCard title={title}>
        {rulesList.map((rule, index)=>(
                <WhiteAccordion 
                    key={index}
                    sx={styles.backgroundWhite}
                >
                    <AccordionSummary 
                        expandIcon={<ExpandMore />}
                        id={`panel-community-${index}`}
                        aria-controls={`panel-${index}-content`}
                    >
                        <Typography sx={{fontWeight:'bold'}}>{index+1}. {rule.nameRule}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{rule.descriptionRule}</Typography>
                    </AccordionDetails>
                </WhiteAccordion>
            ))}
    </SideCard>
  )
}

export {Rules}