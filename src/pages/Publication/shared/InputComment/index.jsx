import React, {useState} from 'react'
import { Box, Typography, Divider, TextField, ToggleButton, Button } from "@mui/material";
import { Link, MoreHoriz, FormatBold, FormatItalic, StrikethroughS, TextIncrease, WarningAmber, FormatSize, FormatListBulleted, FormatListNumbered } from "@mui/icons-material";
import { StyledToggleButtonGroup } from "../../style";
import commentService from "../../../../services/comment";
import { styles } from "./style";
import { theme } from '../../../../theme';

function InputComent({level=0, commentId, refreshComments}) {
    const [commentInput, setCommnetInput] = useState("") //libreria de formularios para un solo campo?

    const createComment = async () => {
        const data = {
            username: "Wonderful-External22",
            comment: commentInput,
            level: level,
            parent_comment: commentId //puede llegar null
        }
        await commentService.createComment(data)
        setCommnetInput("")
        console.log("Refrescando....");
        refreshComments()
    }

  return (
    <Box sx={styles.boxNewComment}>
        <TextField 
            InputProps={styles.inputCommentProps}
            multiline 
            rows={5} 
            fullWidth 
            label="What are you thoughts"
            value={commentInput}
            onChange={(e) => setCommnetInput(e.target.value)}
        />
        <StyledToggleButtonGroup>                    
        <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
            <Link />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
            <StrikethroughS />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
            <TextIncrease />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
            <WarningAmber />
        </ToggleButton>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <ToggleButton value="underlined" aria-label="underlined">
            <FormatSize />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
            <FormatListBulleted />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
            <FormatListNumbered />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
            <MoreHoriz />
        </ToggleButton>
        <Button sx={{color: theme.palette.sinopia.main}}>
            <Typography textTransform='none' fontWeight='bold'>Mardown</Typography>
        </Button>
        <Button variant='contained' disabled={commentInput.length===0} sx={styles.buttonComment} onClick={createComment}>
            <Typography textTransform='none' fontWeight='bold'>Comment</Typography>
        </Button>
        </StyledToggleButtonGroup>
    </Box>
  )
}

export {InputComent}