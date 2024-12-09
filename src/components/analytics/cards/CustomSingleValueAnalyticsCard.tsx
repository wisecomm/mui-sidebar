import { CompassCalibration, CompassCalibrationRounded, LocationSearching, LocationSearchingOutlined, LocationSearchingRounded } from "@mui/icons-material"
import { Avatar, Box, Card, Paper, Typography } from "@mui/material"
import React from "react"

type CustomSingleValueAnalyticsCardProps = {
  maxWidth?: number
  height?: string
  Icon?: React.ElementType
  value: number | string
  metric: CustomSingleValueAnalyticsCardMetric
}

type CustomSingleValueAnalyticsCardMetric = {
  name: string
  color?: string
}

export const CustomSingleValueAnalyticsCard = ({
  maxWidth,
  height,
  Icon,
  value,
  metric
}: CustomSingleValueAnalyticsCardProps) => {
  return (
    <Card
      sx={{
        padding: "15px",
        maxWidth: maxWidth || '100%',
        height: height || 100,
        textAlign: "center",
        backgroundColor: "#171823",
        borderRadius: "6px"
      }}
    >
      <Typography sx={{ fontSize: "28px" }}>
        {value}
      </Typography>
      <Typography
        sx={{ color: metric?.color || "black", fontSize: "18px", verticalAlign: "middle", display: "inline-flex" }}
      >
        <Box sx={{marginTop: "2px", marginRight: "6px"}} >
          {Icon && <Icon sx={{fontSize:"16px"}}/>}
        </Box>
        {metric?.name}
      </Typography>
    </Card>
  )
}
