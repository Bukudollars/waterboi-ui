import { Box, CssBaseline, List, ListItemButton, ListItemAvatar, Avatar, ListItemText, 
    Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';


export default function FixedBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef<HTMLDivElement>(null);
    // const [messages, setMessages] = React.useState(() => refreshMessages());
  
    // React.useEffect(() => {
    //   (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
    //   setMessages(refreshMessages());
    // }, [value, setMessages]);
  
    return (
      <Box sx={{ pb: 7 }} ref={ref}>
        <CssBaseline />
        {/* <List>
          {messages.map(({ primary, secondary, person }, index) => (
            <ListItemButton key={index + person}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={person} />
              </ListItemAvatar>
              <ListItemText primary={primary} secondary={secondary} />
            </ListItemButton>
          ))}
        </List> */}
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    );
  }