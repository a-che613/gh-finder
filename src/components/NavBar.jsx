import { Box, Typography, Button } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';

const NavBar = () => (
  <>
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography>devfinder</Typography>
      <Button display="flex" alignItems="center" endIcon={<LightModeIcon />}>LIGHT</Button>
    </Box>
  </>
);

export default NavBar;
