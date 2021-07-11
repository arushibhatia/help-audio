import React from 'react';
import '../App.css'
import { makeStyles } from '@material-ui/core/styles'; 
import List from '@material-ui/core/List'; 
import ListItem from '@material-ui/core/ListItem'; 
import ListItemIcon from '@material-ui/core/ListItemIcon'; 
import ListItemText from '@material-ui/core/ListItemText'; 
import Divider from '@material-ui/core/Divider'; 
import DraftsIcon from '@material-ui/icons/Drafts'; 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "../css/contacts.css";


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 7000,
      backgroundColor: theme.palette.background.paper,
      justifyContent:'center', 
      alignItems:'center',
    },
  }));
  
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

export default function Contacts() {
    const classes = useStyles();
    return (
      
        <div className={classes.root}>
   
      <List component="nav" aria-label="main mailbox folders">
      
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Sona" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Vinitha" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Malika" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Sonya" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Jackie" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Jane" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Erik" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Kevin" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Amy" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Create New Contact" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Delete Contact" />
        </ListItemLink>
      </List>
    </div>
    
    );
}

//export default Contacts;