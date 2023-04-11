import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <Container maxWidth="lg">
      <Box
        py={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            sx={{
              bgcolor: '#0D6EFD',
              width: '40px',
              height: '40px',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              '& svg': {
                fontSize: '24px',
                color: '#8CB7F5',
              },
            }}
          >
            <LocalMallIcon />
          </Box>
          <Typography variant="h5" fontWeight={700} color="#8CB7F5">
            Brand
          </Typography>
        </Stack>
        <Box
          sx={{
            border: '2px solid #0D6EFD',
            borderRadius: '6px',
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <InputBase
            fullWidth
            type="text"
            placeholder="Search..."
            sx={{ px: 2 }}
          />
          <Button
            variant="contained"
            bgcolor="#0D6EFD"
            sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            Search
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 4,

            '& .MuiStack-root': {
              cursor: 'pointer',
              color: '#8B96A5',
            },
          }}
        >
          <Stack alignItems="center">
            <PersonIcon />
            <Typography variant="body2">Profile</Typography>
          </Stack>
          <Stack alignItems="center">
            <MessageIcon />
            <Typography variant="body2">Message</Typography>
          </Stack>
          <Stack alignItems="center">
            <FavoriteIcon />
            <Typography variant="body2">Orders</Typography>
          </Stack>
          <Stack alignItems="center">
            <ShoppingCartIcon />
            <Typography variant="body2">My Cart</Typography>
          </Stack>
        </Box>
      </Box>
      <Divider />
    </Container>
  );
};

export default Navbar;
