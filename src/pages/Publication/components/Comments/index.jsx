import React from 'react'
import { Box, Grid, Typography, Divider, TextField, ToggleButton, Button, Avatar } from "@mui/material";
import { Link, MoreHoriz, FormatBold, FormatItalic, StrikethroughS, TextIncrease, WarningAmber, FormatSize, FormatListBulleted, FormatListNumbered, ForwardOutlined, ChatBubbleOutline } from "@mui/icons-material";
import { StyledToggleButtonGroup } from "../../style";
import { theme } from '../../../../theme';
import { styles } from "./style";
import { styles as stylePublication } from "../../style";


function Comments({comments=[]}) {
  return (
    <>
        <Grid container direction="column">
            <Grid item height="20px" paddingBottom={3}>
            <Grid container>
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <Typography>Comment as  <span style={styles.spanUsername}>Wonderful-External22</span></Typography>
                </Grid>
            </Grid>
            </Grid>
            <Grid item>
            <Grid container direction="row">
                <Grid item xs={1} />
                <Grid item xs={9}>
                <Box sx={styles.boxNewComment}>
                    <TextField 
                        InputProps={styles.inputCommentProps}
                        multiline 
                        rows={5} 
                        fullWidth 
                        label="What are you thoughts"
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
                    <Button variant='contained' disabled sx={styles.buttonComment}>
                        <Typography textTransform='none' fontWeight='bold'>Comment</Typography>
                    </Button>
                    </StyledToggleButtonGroup>
                </Box>
                </Grid>
            </Grid>
            </Grid>
        </Grid>

        <Box>
            {comments.map((comment, index)=>(
            <Grid container key={index}>
                <Grid item xs={12}>
                <Grid container direction="row" paddingTop={2} paddingLeft={2}>
                    <Grid item>
                        <Avatar />
                    </Grid>
                    <Grid item alignContent="center" paddingLeft={1}>
                      <Typography fontWeight='bold'>{comment.username} <span style={{fontWeight: 'normal'}}>14 hr. ago</span> </Typography>
                    </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={1} />
                    <Grid item>
                    <Typography>{comment.comment}</Typography>
                    </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={1} />
                    <Grid item>
                    <ForwardOutlined sx={stylePublication.icon270degrees} />
                    </Grid>
                    <Grid item alignContent='center'>
                    <Typography align='center' fontWeight='bold'>58</Typography>
                    </Grid>
                    <Grid item>
                    <ForwardOutlined sx={stylePublication.icon90degrees} />                        
                    </Grid>
                    <Grid item>
                    <ChatBubbleOutline sx={{
                        color: "#C1C2C3",
                        fontSize: 36,
                    }} /> 
                    </Grid>
                    <Grid item>
                    <Button>
                        <Typography fontWeight='bold' textTransform='none' color={theme.palette.silver.main}>Reply</Typography>
                    </Button>
                    </Grid>
                    <Grid item>
                    <Button>
                        <Typography fontWeight='bold' textTransform='none' color={theme.palette.silver.main}>Share</Typography>
                    </Button>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            ))}
        </Box>
    </>
  )
}

export {Comments}