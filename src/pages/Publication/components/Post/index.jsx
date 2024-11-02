import React from 'react'
import { Box, Grid, Avatar, Typography, IconButton, Link, AvatarGroup } from "@mui/material";
import { ForwardOutlined, Link as LinkIcon, NotificationsOutlined, OpenInNew, ChatBubbleOutline, Shortcut, BookmarkBorderOutlined, MoreHoriz } from "@mui/icons-material";
import { styles } from "./style";
import { theme } from '../../../../theme';
import { styles as stylePublication } from "../../style";

function Post({communityData={}}) {
  return (
    <Grid container direction="row" paddingBottom={5}>
        <Grid item xs={1} alignItems='center' display='flex' flexDirection='column'>
            <ForwardOutlined sx={stylePublication.icon270degrees} />
            <Typography textAlign='center' fontWeight='bold'>182</Typography>
            <ForwardOutlined sx={stylePublication.icon90degrees} />
        </Grid>
        <Grid item xs={8}>
        <Grid container spacing={1} direction="column">
            <Grid item>
                <Grid container spacing={1}>
                    <Grid item>
                        <Avatar src={communityData.communityImage}/>
                    </Grid>
                    <Grid item alignContent='center' paddingLeft={1}>
                        <Typography fontWeight='bold' >{`r/${communityData.communityName}`}</Typography>
                    </Grid>
                    <Grid item alignContent="center">
                        <Typography color={theme.palette.silver.main}>Posted by u/stronghp 14 hous ago</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Box height={150}>
                    <Typography fontSize={24} fontWeight='bold'>What AI won't replace in your programming</Typography>
                    <Link
                        href="https://www.infoworld.com/artificial-intelligence/"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="none"
                    >
                        <Typography fontWeight='bold' textOverflow='ellipsis' overflow='hidden' whiteSpace='nowrap' width={200} color={theme.palette.sinopia.main}>www.infoworld.com/artificial-intelligence/</Typography>
                    </Link>
                </Box>
            </Grid>
            <Grid item>
                <Grid container spacing={1}>
                    <Grid item>
                    <Grid container direction="row">
                        <Grid item>
                        <ChatBubbleOutline
                            sx={styles.iconsPost}
                        />
                        </Grid>
                        <Grid item>
                        <Typography color={theme.palette.silver.main}>109 Comments</Typography>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item>
                    <Grid container direction="row">
                        <Grid item>
                        <Shortcut
                            sx={styles.iconsPost}
                        />
                        </Grid>
                        <Grid item>
                        <Typography color={theme.palette.silver.main}>Share</Typography>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item>
                    <Grid container direction="row">
                        <Grid item>
                        <BookmarkBorderOutlined
                            sx={styles.iconsPost}
                        />
                        </Grid>
                        <Grid item>
                        <Typography color={theme.palette.silver.main}>Save</Typography>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item>
                    <MoreHoriz
                        sx={styles.iconsPost}
                    />
                    </Grid>  
                </Grid>                   
            </Grid>
        </Grid>
        </Grid>
        <Grid item xs={3} width="100%">
            <Grid container width="100%" direction='column'  spacing={1} alignItems='flex-end'>
                <Grid item width="100%" position='relative' height={40}>
                    <NotificationsOutlined 
                        sx={styles.notificationIcon} 
                    />
                </Grid>
                <Grid item width="100%" paddingBottom={1}>
                    <Box
                        sx={styles.boxLink}
                    >
                        <Box
                            sx={styles.centerBoxLink}
                        >                    
                            <LinkIcon sx={{ fontSize: 40 }} />
                            
                            <IconButton
                            sx={styles.smallBottomButtonLink}
                            >
                            <OpenInNew fontSize="small" />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item>
                    <Grid container direction='row'>
                        <Grid item>
                            <Typography textAlign="left" color={theme.palette.silver.main}>11 people here </Typography>
                        </Grid>
                        <Grid item>
                            <AvatarGroup spacing={12}>
                                <Avatar sx={styles.avatarDimensions}/>
                                <Avatar sx={styles.avatarDimensions}/>
                            </AvatarGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export {Post}