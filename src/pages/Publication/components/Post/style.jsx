import { theme } from "../../../../theme"

export const styles = {
    iconsPost: {
        color: theme.palette.silver.main,
        fontSize: 30
    },
    notificationIcon:{
        color: "#C1C2C3",
        fontSize: 40,
        right: 0,
        top: 5,
        position: 'absolute'
    },
    boxLink:{
        display: 'flex',
        justifyContent: 'flex-end',
    },
    centerBoxLink: {
        position: 'relative',
        width: "70%",
        aspectRatio: '1 / 1',
        border: '1px solid #D66A38',
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#D66A38'
    },
    smallBottomButtonLink: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#D66A38',
        color: '#FFFFFF',
        borderRadius: 1,
        padding: '4px',
        '&:hover': {
        backgroundColor: '#B5562E'
        }
    },
    avatarDimensions: {
        width: 20, 
        height: 20
    }
}