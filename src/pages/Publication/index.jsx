import React, {useEffect, useState} from 'react'
import { Box, Grid, Paper } from "@mui/material";
import { Rules } from "./components/Rules";
import { CommunityInfo } from "./components/CommunityInfo";
import { Post } from "./components/Post";
import { Comments } from "./components/Comments";
import { Info } from "./components/Info";
import { styles } from "./style.jsx";
import commentService from "../../services/comment.js";

function Publication() {
  const [communityData, setCommunityData] = useState({});
  const [comments, setComments] = useState([]);
  const [activeCommentId, setActiveCommentId] = useState(null); //Comentario "activo"

  const getComments = async () =>{
    const data = await commentService.allComments()
    setComments(data)
  }

  useEffect(()=>{
    setCommunityData({
      communityImage: "https://www.cepmaude.com/wp-content/uploads/2017/08/html_2.jpg",
      communityName: "Programming",
      communityDescription: "Computer Programming",
      communityCreatedDate: "feb 28, 2006",
      communityMember: 5700000,
      communityOnlineMembers: 3400,
      CommunityRankedBySize: 1
    })

    getComments()
  },[])

  const refreshComments = async () => {
    await getComments()
  }

  return (
    <Box
      sx={styles.principalBox}
    >
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Paper
            sx={styles.padding1}
          >
            <Post communityData={communityData} />
            <Comments comments={comments} listCommentChild={false} refreshComments={refreshComments} activeCommentId={activeCommentId} 
              setActiveCommentId={setActiveCommentId} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <CommunityInfo communityData={communityData}/>
            </Grid>
            <Grid item>
              <Rules communityName={communityData.communityName} />
            </Grid>
            <Grid item>
              <Info />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Publication