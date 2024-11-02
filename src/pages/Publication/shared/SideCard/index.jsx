import React from 'react'
import { Card, CardHeader, CardContent } from "@mui/material";
import { styles as stylePublication } from "../../style";

function SideCard({children, title=""}) {
  return (
    <Card>
        <CardHeader
            sx={stylePublication.cardHeader}
            title={title}
            titleTypographyProps={stylePublication.titleCardHeader}
        />
        <CardContent
            sx={stylePublication.cardContent}
        >
            {children}
        </CardContent>
    </Card>
  )
}

export {SideCard}