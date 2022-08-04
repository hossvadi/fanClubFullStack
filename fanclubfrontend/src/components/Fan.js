import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    // width: '25ch',
    },
  },
}));

export default function FanTextFields() {
    const paperStyle = {padding: '50px 20px', with:600, margin:"20px auto"}
    const [name, setName]=useState('')
    const [address, setAddress]=useState('')
    const [fan, setFan]=useState([])

    const classes = useStyles();

    const handleClick=(e)=>{
        e.preventDefault()
        const fan={name,address}
        console.log(fan)
        fetch("http://localhost:8080/fan/add", {
            method : "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(fan)
        }).then(()=>{
            console.log("New fan Added... ")
        })
    }

    useEffect(()=>{
      fetch("http://localhost:8080/fan/getAll")
      .then(res=>res.json())
      .then((result)=>{
        setFan(result);
      }
    )
    },[])


  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color: "blue"}}><u>Add Fan</u></h1>
            <form className={classes.root} noValidate autoComplete="off">
            {/* <TextField id="standard-basic" label="Standard" />
            <TextField id="filled-basic" label="Filled" variant="filled" /> */}

            <TextField id="outlined-basic" label="Fan Name" variant="outlined"
             value={name}
              onChange={(e)=> setName(e.target.value)} />

            <TextField id="outlined-basic" label="Fan Address" variant="outlined"
             value={address}
              onChange={(e)=> setAddress(e.target.value)} />

            <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
            </Button>

            </form>
        </Paper>

        <h1>Fans</h1>
        <Paper elevation={3} style={paperStyle}>
          {fan.map(fan=>(
            <Paper elevation={6} style={{margin:"10px", padding: "15px", textAlign: "left"}} key={fan.id}>
              ID: {fan.id}<br/>
              Name: {fan.name}<br/>
              Address: {fan.address}<br/>
            </Paper>
          ))}
        </Paper>
    </Container>
  );
}


