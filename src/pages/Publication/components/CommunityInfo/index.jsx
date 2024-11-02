import React from 'react'
import { Grid, Avatar, Typography, AccordionSummary, AccordionDetails, Divider} from "@mui/material";
import { Cake, Circle, ExpandMore } from "@mui/icons-material";
import { OrangeButton, WhiteAccordion } from "../../style.jsx";
import { theme } from '../../../../theme.js';
import { styles } from "./style.jsx";
import { SideCard } from "../../shared/SideCard";

function CommunityInfo({communityData={}}) {
  return (
    <SideCard>
        <Grid container direction="column">
        <Grid item paddingBottom={1}>
            <Grid container direction="row">
            <Grid item>
                <Avatar src={communityData.communityImage}/>
            </Grid>
            <Grid item alignContent='center' paddingLeft={1}>
                <Typography fontWeight='bold' >{communityData.communityName}</Typography>
            </Grid>
            </Grid>
        </Grid>

        <Grid item>
            <Typography>{communityData.communityDescription}</Typography>
        </Grid>

        
        <Grid item>
            <Grid container direction="row">
            <Grid item>
                <Cake />
            </Grid>
            <Grid item>
                <Typography >Created {communityData.communityCreatedDate}</Typography>
            </Grid>
            </Grid>
        </Grid>

        <Divider />

        <Grid item paddingY={2}>
            <Grid container direction="row" spacing={3}>
            <Grid item>
                <Grid container direction='column'>
                    <Grid item>
                        <Typography fontWeight='bold'>5.7m</Typography>
                    </Grid>
                    <Grid item>
                        <Typography color={theme.palette.silver.main}>Members</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid item>
                    <Grid item>
                        <Grid container direction="row" spacing={1}>
                            <Grid item>
                                <Circle sx={styles.circleOnline} />
                            </Grid>
                            <Grid item>
                                <Typography fontWeight='bold'>3.4k</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography color={theme.palette.silver.main}>Online</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction='column'>
                    <Grid item>
                        <Typography fontWeight='bold'>Top 1%</Typography>
                    </Grid>
                    <Grid item>
                        <Typography color={theme.palette.silver.main}>Ranked By Size</Typography>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Grid>

        <Divider />

        <Grid item paddingY={2}>
            <OrangeButton variant="contained">
                <Typography sx={styles.textButton} >Join</Typography>
            </OrangeButton>
        </Grid>

        <Grid item>
            <WhiteAccordion color={theme.palette.white} >
            <AccordionSummary 
                expandIcon={<ExpandMore />}
                id='panel-community'
                aria-controls='panel1-content'
            >
                <Typography fontWeight='bold'>COMMUNITY OPTIONS</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Community Options </Typography>
            </AccordionDetails>
            </WhiteAccordion>
        </Grid>

        </Grid>
    </SideCard>
  )
}

export {CommunityInfo}