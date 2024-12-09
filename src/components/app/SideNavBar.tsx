import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import { CssBaseline, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Dashboard, Feed, TableRows } from '@mui/icons-material'

type SideNavBarListItemProps = {
    text: string
    route: string
    icon: JSX.Element
}

export const SideNavBarListItem = ({ text, route, icon }: SideNavBarListItemProps) => {
    const navigate = useNavigate()
    const theme = useTheme()
    const classes = {
        selectedItem: {
          color: "#2b2b35",
          backgroundColor: theme.palette.primary.contrastText,
          pointerEvents: "none"
        },
        unSelectedItem: {
          color: theme.palette.primary.contrastText,
          backgroundColor: "#2b2b35"
        }
      }

      return (
        <ListItemButton key={text} onClick={() => { navigate(route) } }
            divider sx={location.pathname === route ? classes.selectedItem : classes.unSelectedItem}>
            <ListItemIcon sx={{width: '12px', minWidth: '30px', color: location.pathname === route ? '#2b2b35' : theme.palette.primary.contrastText}}>
                {icon}
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ fontSize: '16px' }} primary={text}/>
      </ListItemButton>        
    )
}

function SideNavBar() {
    const theme = useTheme()

    return (
    <div style={{display: "flex", backgroundColor: theme.palette.primary.main}}>

    <CssBaseline />
    <Drawer
        PaperProps={{
          sx: {
            
            backgroundColor: "#2b2b35",
            boxShadow: "1px 0 20px 0 #3f4d67"
          }
        }}
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 180,
            boxSizing: "border-box",
            whiteSpace: "nowrap",
            height: '100vh',
            position: 'relative'
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <List sx={{marginTop: '60px'}}>
        <SideNavBarListItem text={"Dashboard"} route={"/"} icon={<Dashboard/>}/>
        <SideNavBarListItem text={"FirstPage"} route={"/FirstPage"} icon={<Dashboard/>}/>
        <SideNavBarListItem text={"TwoPage"} route={"/TwoPage"} icon={<TableRows/>}/>
          <SideNavBarListItem text={"ThreePage"} route={"/ThreePage"} icon={<Feed/>}/>
        </List>
      </Drawer>

    </div>
  )
}

export default SideNavBar