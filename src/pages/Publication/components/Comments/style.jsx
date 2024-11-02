import { theme } from "../../../../theme";

export const styles = {
    spanUsername:{
        fontWeight: 'bold', 
        color: theme.palette.sinopia.main
    },
    boxNewComment:{
        borderColor: theme.palette.silver.main,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 1
    },
    inputCommentProps:{
        sx: {
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none"
        }
        }
    },
    buttonComment:{
        backgroundColor: theme.palette.sinopia.main, 
        borderRadius: 50, 
        margin: 1
    }
}