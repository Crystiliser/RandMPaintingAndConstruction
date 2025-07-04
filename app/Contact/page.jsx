import { Box, Typography, Button, Grid } from '@mui/material';

import FormField from 'components/FormField';


export default function Form() {
  return (
    <Box sx={{
      position: 'relative',
      backgroundImage: 'url("/images/background.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      '::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: 'rgba(0,0,0,0.4)',
        zIndex: 1,
      },
    }}>
      <Box sx={{ pt: 20, ml: 55, mr: 20, position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            mt: 19,
            mb: 4,
            whiteSpace: 'pre-line'
          }}
        >
          {`Contact us to \n`}
          {`build your future`}
        </Typography>

        <Box sx={{ width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <FormField label="Full Name" />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormField label="Email Address" />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormField label="Phone Number" />
            </Grid>
            <Grid item xs={12} md={12} sx={{ width: '100%' }}>
              <FormField label="Leave a comment" sx={{ width: '86%' }} />
            </Grid>
          </Grid>
        </Box>

        <Box textAlign="center" mt={4}>
          <Button variant="contained" size="large" sx={{ backgroundColor: '#747133', color: 'white' }}>
            SEND
          </Button>
        </Box>
      </Box>
    </Box>
  );
}