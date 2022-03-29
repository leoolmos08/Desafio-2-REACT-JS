import { Box } from '@mui/system';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function NavBar() {
  return (
    <>
      <Box>
        <AppBar>
          <Toolbar>
            <Typography variant="h5" flexGrow={1}> BURGER20</Typography>
            <Box flexGrow={1}>
              <Button color='inherit'>Hamburguesas</Button>
              <Button color='inherit'>Papas y Extras</Button>
              <Button color='inherit'>Bebidas</Button>
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;
