import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, Card, CardContent, Grid, Button } from '@mui/material';

const ProfileLandingPage = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#f5f5f5', minHeight: '100vh', padding: 3 }}>
      {/* AppBar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Profile
          </Typography>
          <Button color="inherit">Log Out</Button>
        </Toolbar>
      </AppBar>

      {/* Profile Section */}
      <Box sx={{ textAlign: 'center', marginTop: 5 }}>
        <Avatar
          sx={{
            width: 100,
            height: 100,
            margin: '0 auto',
          }}
          src="https://via.placeholder.com/100"
          alt="Profile Avatar"
        />
        <Typography variant="h4" sx={{ marginTop: 2 }}>
          John Doe
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Software Engineer | React Enthusiast
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Edit Profile
        </Button>
      </Box>

      {/* About Section */}
      <Card sx={{ maxWidth: 800, margin: '20px auto', padding: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Hi, I'm John Doe, a passionate software engineer with expertise in building dynamic and
            responsive web applications using React, Node.js, and Material-UI. I love solving
            challenging problems and learning new technologies.
          </Typography>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card sx={{ maxWidth: 800, margin: '20px auto', padding: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Skills
          </Typography>
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            {['React', 'JavaScript', 'Node.js', 'Material-UI', 'Git'].map((skill) => (
              <Grid item xs={6} sm={4} md={3} key={skill}>
                <Box
                  sx={{
                    padding: 1,
                    textAlign: 'center',
                    backgroundColor: '#e0f7fa',
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="body1">{skill}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfileLandingPage;
