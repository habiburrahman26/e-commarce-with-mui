import {
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <Box>
      <Divider />
      <Container maxWidth="lg">
        <Stack
          py={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" gap={3}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <MenuIcon />
              <Link variant="body2" href="#" underline="none" color="#000">
                All Category
              </Link>
            </Box>
            <Link variant="body2" href="#" underline="none" color="#000">
              Hot offers
            </Link>
            <Link variant="body2" href="#" underline="none" color="#000">
              Gift boxes
            </Link>
            <Link variant="body2" href="#" underline="none" color="#000">
              Projects
            </Link>
            <Link variant="body2" href="#" underline="none" color="#000">
              Menu item
            </Link>
            <Box>
              <Typography variant="body2">Help</Typography>
            </Box>
          </Stack>
          <Stack component="div" direction="row" alignItems="center" gap={3}>
            <Stack direction="row" alignItems="center">
              <Typography variant="body2">English, </Typography>
              <Stack direction="row" alignItems="center">
                <Typography variant="body2" textTransform="uppercase">
                  USD{' '}
                </Typography>
                <IconButton
                  size="small"
                  sx={{
                    '& svg': {
                      color: '#8B96A5',
                    },
                  }}
                >
                  <KeyboardArrowDownIcon />
                </IconButton>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Typography variant="body2">Ship to </Typography>
              <Stack direction="row" alignItems="center">
                <img
                  src="https://www.giz.de/static/en/media/Bangladesh_flag.png"
                  alt="bd image"
                  style={{ height: '25px' }}
                />
                <IconButton
                  size="small"
                  sx={{
                    '& svg': {
                      color: '#8B96A5',
                    },
                  }}
                >
                  <KeyboardArrowDownIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Divider />
    </Box>
  );
};

export default Navbar;
