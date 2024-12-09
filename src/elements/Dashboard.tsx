import { useTheme } from '@emotion/react';
import { Paper, styled } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react'
import { CustomSingleValueAnalyticsCard } from '../components/analytics/cards/CustomSingleValueAnalyticsCard';
import { HomeWorkRounded } from '@mui/icons-material';
import { blue } from '@mui/material/colors';

function Dashboard() {
    const theme = useTheme()
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
          backgroundColor: '#1A2027',
        }),
      }));
    

      return (
        <>
    <Grid container spacing={2}>
      <Grid size={{xs: 12, md: 6, lg: 3}}>
      <CustomSingleValueAnalyticsCard
          value={"1,000"}
          metric={{
            name: "Condos",
            color: blue[500]
          }}
          Icon={HomeWorkRounded}
        />
    </Grid>

{/*
      </Grid>
         <Grid size={8}>
            <Item>size=8</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
*/}
    </Grid>
    </>
  )
}

export default Dashboard