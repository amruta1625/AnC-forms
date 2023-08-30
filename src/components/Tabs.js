import React from 'react'
import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

const useStyles=makeStyles({
    root:{
        flexGrow:1,
    },
    tab:{
        fontSize:16,
        color:"#5f6368",
    textTransform:"capitalize",
    height:12,
    fontWeight:"600",
    fontFamily: 'Google Sans,Roboto,Arial,sans-serif',
    },
    tabs:{
      height:12
    }
})
function Centeredtabs() {
  const classes=useStyles();
  return (
    <Paper className={classes.root}>
       <Tabs 
       textColor="primary"
       indicatorColor='primary'
       centered>
        <Tab label="Questions" className={classes.tab}>

        </Tab>
        <Tab label="Responses" className={classes.tab}>

        </Tab>
       </Tabs>
    </Paper>
  )
}

export default Centeredtabs
