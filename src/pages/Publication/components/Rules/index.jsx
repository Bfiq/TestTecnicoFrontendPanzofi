import React, {useState, useEffect} from 'react'
import { AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import { WhiteAccordion, OrangeButton } from "../../style";
import { ExpandMore } from "@mui/icons-material";
import { styles } from "./style";
import { SideCard } from "../../shared/SideCard";
import { useTranslation } from 'react-i18next';

function Rules({communityName=""}) {
    const [communityRules, setCommunityRules] = useState([])
    const title = `r/${communityName} Rules`
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    useEffect(()=>{
        setCommunityRules([
          {nameRule: t('nameRule1'), descriptionRule: t('nameRule1')},
          {nameRule: t('nameRule2'), descriptionRule: t('nameRule2')},
          {nameRule: t('nameRule3'), descriptionRule: t('nameRule3')},
          {nameRule: t('nameRule4'), descriptionRule: t('nameRule4')},
          {nameRule: t('nameRule5'), descriptionRule: t('nameRule5')},
        ])
    
    },[i18n.language, t])

  return (
    <SideCard title={title}>
        <OrangeButton onClick={toggleLanguage}>
            {i18n.language === 'en' ? 'Español' : 'English'}
        </OrangeButton>
        {communityRules.map((rule, index)=>(
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