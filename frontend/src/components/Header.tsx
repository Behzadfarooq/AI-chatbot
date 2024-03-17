import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import Logo from './shared/Logo'

const Header = () => {
  return (
    <AppBar sx={{bgcolor:"transparent ", position:"static", boxShadow:"none"}}>
      <Logo/>
      <Toolbar sx={{display:"flex"}}></Toolbar>
    </AppBar>
  )
}

export default Header