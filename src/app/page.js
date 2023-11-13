"use client"

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import React, { useState } from "react";
import {create,all} from "mathjs";
export default function Home() {
  const [input, setInput] = useState("");
  const [answer,setAnswer] = useState("");
  const math = create(all);

  const handleClick = () => {
    setAnswer(math.evaluate(input))
  };

  return (
    <Box>
      <Stack  direction="column" justifyContent="cenetr" alignItems="center" spacing={2}>
        <Typography variant='h5'>
          Natalie's Calculator App 
        </Typography>

        <Box sx =  {{backgroundColor: 'white'}}>
          <Stack direction = 'column'>
          {answer}
          <TextField value={input} onChange={(e) => setInput(e.target.value)}/>
          
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button onClick = {() => setInput(input + "7")}> 7 </Button>
            <Button onClick = {() => setInput(input + "8")} >8</Button>
            <Button onClick = {() => setInput(input + "9")} >9</Button>
          </ButtonGroup>

          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group" >
            <Button onClick = {() => setInput(input + "4")}> 4 </Button>
            <Button onClick = {() => setInput(input + "5")}> 5 </Button> 
            <Button onClick = {() => setInput(input + "6")}> 6</Button>
          </ButtonGroup>
          
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group" >
            <Button onClick = {() => setInput(input + "1")}>1</Button>
            <Button onClick = {() => setInput(input + "2")}>2</Button>
            <Button onClick = {() => setInput(input + "3")}>3</Button>
          </ButtonGroup>
   
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group" >
            <Button onClick = {() => setInput(input + "0")}>0</Button>
            <Button onClick = {() => setInput(input + ".")}>.</Button>
            <Button onClick = {() => setInput(input + "=")}>=</Button>
          </ButtonGroup>

          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button onClick = {() => setInput(input + "/")}> / </Button>
            <Button onClick = {() => setInput(input + "x")}> x </Button>
            <Button onClick = {() => setInput(input + "-")}> - </Button>
            <Button onClick = {() => setInput(input + "+")}> + </Button>

          </ButtonGroup>
          <Button onClick = {handleClick}> Solve </Button>

   
          </Stack>
        </Box>


      </Stack>

    </Box>
  )
}
