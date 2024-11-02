import { Accordion, Button, styled, ToggleButtonGroup, toggleButtonGroupClasses } from "@mui/material";

export const OrangeButton = styled(Button)(({ theme }) => ({
    color: "#FFF",
    width: "100%",
    backgroundColor: "#CB4B16",
    borderRadius: 50,
    '&:hover': {
      backgroundColor: "#CB4B16",
    },
}));

export const WhiteAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    boxShadow: 'none',
    '&:before': {
        display: 'none',
    },
}));

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    width: "100%",
    backgroundColor: theme.palette.grey[100],
    [`& .${toggleButtonGroupClasses.grouped}`]: {
      margin: theme.spacing(0.5),
      border: 0,
      borderRadius: theme.shape.borderRadius,
      [`&.${toggleButtonGroupClasses.disabled}`]: {
        border: 0,
      },
    },
    [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
      {
        marginLeft: -1,
        borderLeft: '1px solid transparent',
      },
}));

const icon= {
    color: "#C1C2C3",
    fontSize: 40
}

export const styles = {
    principalBox: {
        backgroundColor: '#083642',
        height: '100wh',
        padding: 2
    },
    padding1: {
        padding: 1
    },
    cardHeader: {
        backgroundColor: "#002B36",
        borderColor: "#fff",
        borderWidth: 1,
        borderStyle: 'solid',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        color: "#fff",
    },
    titleCardHeader: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    cardContent: {
        padding: 1,
        "&:last-child": {
            paddingBottom: 1,
        },
    },
    icon270degrees:{
        ...icon,
        transform: 'rotate(270deg)',
    },
    icon90degrees:{
        ...icon,
        transform: 'rotate(90deg)',
    },
}