"use client"

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import React, { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  return (
    <Box >
      <Stack  direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <Typography variant='h3'>
          Natalie's Calculator App 
        </Typography>

        <Box sx = {{backgroundColor: 'white'}}>
          <Stack direction = 'column'>
          <TextField value={input} onChange={(e) => setInput(e.target.value)}/>
          
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
          </ButtonGroup>

          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group" >
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
          </ButtonGroup>
          
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group" >
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
          </ButtonGroup>
   
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group" >
            <Button>0</Button>
            <Button>.</Button>
            <Button>=</Button>
          </ButtonGroup>

          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button> / </Button>
            <Button> x </Button>
            <Button> - </Button>
            <Button> + </Button>

          </ButtonGroup>
          </Stack>
        </Box>


      </Stack>

    </Box>
  )
}
