import { AppBar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

const Header = () => {

  return(
    <Box mb={3} >
      <AppBar position="static">
        <Box my={1} mx={2} sx={{display: "flex", flexDirection: "row", alignItems:"center"}}>
        <PlaylistAddCheckIcon fontSize="large"/>
        <Typography variant="h5" component="div" ml={1}>
          TODO
        </Typography>
        </Box>
      </AppBar>
    </Box>
  )
}

export default Header