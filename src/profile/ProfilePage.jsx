import React from 'react';
import {
    Box,
    Avatar,
    Card,
    CardContent,
    Grid,
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
    IconButton,
    ThemeProvider
} from '@mui/material';


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import theme from '../theme/Theme'

const ProfilePage = () => {
    const experiences = [
        {
          company: 'Aruba, a Hewlett Packard Enterprise',
          icon: 'hpe.svg',
          roles: [
            {
              title: 'Cloud Developer III',
              date: 'Oct 2024 - Present',
              description: 'Networking, Switching, Linux',
            },
            {
              title: 'Cloud Developer II',
              date: 'Jul 2022 - Oct 2024',
              description: 'Networking, Switching, Linux',
            },
            {
              title: 'Software Desiner II',
              date: 'Feb 2022 - Jul 2022',
              description: 'Java, Arango, , Kubernetes',
            },
          ],
        },
        {
          company: 'Aptus Data Labs',
          icon: 'aptus.png',
          roles: [
            {
                title: 'Senior Software Developer',
                date: 'Jun 2021 - Feb 2022',
                description: 'Docker, Kubernetes, Presto, Django',
              },
            {
              title: 'Data Analyst',
              date: 'July 2019 - Jun 2021',
              description: 'Django, Go lang',
            },
            {
              title: 'Jr Data Analyst',
              date: 'Jan 2019 - June 2019',
              description: 'React JS, Android SDK',
            },
          ],
        },
      ];

    const skills = ['Kafka', 'Docker', 'Kubernetes'];

    const booksRead = [
        { title: 'The ONE Thing', author: 'Gary W. Keller, Jay Papasan' },
        { title: 'Steve Jobs', author: 'Walter Isaacson' },
        { title: 'Start with Why', author: 'Simon Sinek' },
        { title: 'Harry Potter All', author: 'J. K. Rowling' },
        { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki and Sharon Lechter' },
    ];

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: 3 }}>
                    {/* Profile Section */}
                    <Grid container spacing={2}>
                        <Grid item lg={12} md={12} sm={12}>
                            <Box sx={{ textAlign: 'center', padding: 3 }}>
                                <Avatar
                                    sx={{
                                        width: 120,
                                        height: 120,
                                        margin: '0 auto',
                                    }}
                                    src="profilepic.jpeg"
                                    alt="Profile Avatar"
                                />
                                <Typography variant="h4" sx={{ marginTop: 2 }}>
                                    T Kiran Kumar
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    Software Engineer | Cloud Develper III
                                </Typography>
                                {/* Social Links */}
                                <Box sx={{ marginTop: 2 }}>
                                    <IconButton
                                        color="primary"
                                        href="https://www.linkedin.com/in/t-kiran-kumar-49a611149/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <LinkedInIcon />
                                    </IconButton>
                                    <IconButton
                                        color="primary"
                                        href="https://github.com/k2k1422"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <GitHubIcon />
                                    </IconButton>
                                    <IconButton
                                        color="primary"
                                        href="mailto:kiran4kiranpro@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <EmailIcon />
                                    </IconButton>
                                    <IconButton
                                        color="primary"
                                        href="tel:+919114334955"
                                    >
                                        <PhoneIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={12} sm={12}>
                        <Box>
      {/* Total Experience */}

      {experiences.map((experience, companyIndex) => (
        <Box key={companyIndex} mb={4}>
          {/* Company Header with Icon */}
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar src={experience.icon} alt={experience.company} sx={{ width: 40, height: 40, mr: 2 }} />
            <Typography variant="h5" fontWeight="bold">
              {experience.company}
            </Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />

          {/* Roles */}
          {experience.roles.map((role, roleIndex) => (
            <Box key={roleIndex} mb={3} pl={2} position="relative">
              {/* Timeline Dot */}
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  backgroundColor: 'primary.main',
                  borderRadius: '50%',
                  position: 'absolute',
                  left: 0,
                  top: '10px',
                }}
              />
              {/* Timeline Line */}
              {roleIndex < experience.roles.length - 1 && (
                <Box
                  sx={{
                    position: 'absolute',
                    left: 5,
                    top: '25px',
                    width: 2,
                    height: 'calc(100% - 25px)',
                    backgroundColor: 'primary.main',
                  }}
                />
              )}
              {/* Role Details */}
              <Box ml={3}>
                <Typography variant="h6" fontWeight="bold">
                  {role.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {role.date}
                </Typography>
                <Typography variant="body2" mt={1}>
                  {role.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
                        </Grid>
                        <Grid item lg={6} md={12} sm={12}>
                            {/* Skills Section */}
                            <Card sx={{ maxWidth: 800, margin: '20px auto', padding: 3 }}>
                                <Typography variant="h5" gutterBottom>
                                    Skills
                                </Typography>
                                <Divider sx={{ marginBottom: 2 }} />
                                <List>
                                    {skills.map((skill, index) => (
                                        <ListItem key={index}>
                                            <ListItemText primary={skill} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Card>
                        </Grid>
                        <Grid item lg={6} md={12} sm={12}>

                            {/* Books Read Section */}
                            <Card sx={{ maxWidth: 800, margin: '20px auto', padding: 3 }}>
                                <Typography variant="h5" gutterBottom>
                                    Books Read
                                </Typography>
                                <Divider sx={{ marginBottom: 2 }} />
                                <List>
                                    {booksRead.map((book, index) => (
                                        <ListItem key={index}>
                                            <ListItemText
                                                primary={book.title}
                                                secondary={`by ${book.author}`}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </>

    );
};

export default ProfilePage;