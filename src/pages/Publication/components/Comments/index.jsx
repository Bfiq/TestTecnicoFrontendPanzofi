import React, {useState, useMemo, useCallback} from 'react'
import { Box, Grid, Typography, Button, Avatar, IconButton } from "@mui/material";
import { ForwardOutlined, ChatBubbleOutline, MoreHoriz } from "@mui/icons-material";
import { theme } from '../../../../theme';
import { styles } from "./style";
import { styles as stylePublication } from "../../style";
import { InputComent } from "../../shared/InputComment";
import commentService from "../../../../services/comment";

function Comments({comments=[], listCommentChild=true}) {
    const [activeCommentId, setActiveCommentId] = useState(null);
    const [commentsChildList, setCommentsChildList] = useState([]);
    const [expandedCommentId, setExpandedCommentId] = useState(null);
    console.log(comments);
    

    const handleToggleInput = useCallback((id) => {        
        setActiveCommentId(activeCommentId === id ? null : id);
    },[activeCommentId])

    const commentsChild = async (id) => {
        const result = await commentService.commentsByParentComment(id)
        setCommentsChildList(result)
        setExpandedCommentId(id);
    }

    const processedComments = useMemo(() => {
        return comments.map((comment, index)=>(
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
                        <Button onClick={() => commentsChild(comment.comment_id)}>
                            <ChatBubbleOutline sx={{
                                color: "#C1C2C3",
                                fontSize: 36,
                            }} /> 
                        </Button>
                    </Grid>
                    <Grid item alignContent='center'>
                    <Button onClick={() => handleToggleInput(comment.comment_id)}>
                        <Typography fontWeight='bold' textTransform='none' color={theme.palette.silver.main}>Reply</Typography>
                    </Button>
                    </Grid>
                    <Grid item alignContent='center'>
                    <Button>
                        <Typography fontWeight='bold' textTransform='none' color={theme.palette.silver.main}>Share</Typography>
                    </Button>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <MoreHoriz sx={stylePublication.icon} />
                        </IconButton>
                    </Grid>
                </Grid>
                </Grid>
                {activeCommentId === comment.comment_id && (
                    <Grid item xs={12}>
                        <Grid container direction='row'>
                            <Grid item xs={1} />
                            <Grid item xs={9}>
                                <InputComent commentId={comment.comment_id} level={comment.level + 1} />
                            </Grid>
                        </Grid>
                    </Grid>
                )}
                {expandedCommentId === comment.comment_id && (
                    <Grid item xs={12} paddingLeft={4}>
                        <Comments comments={commentsChildList} />
                    </Grid>
                )}
            </Grid>
        ))
    },[comments, activeCommentId, expandedCommentId, commentsChildList, handleToggleInput])

  return (
    <>
        {!listCommentChild ?
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
                        <InputComent />
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
        :null
        }

        <Box>
            {processedComments}
        </Box>
    </>
  )
}

export {Comments}