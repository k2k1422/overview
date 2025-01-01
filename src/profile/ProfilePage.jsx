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
            title: 'Cloud Develpoer III',
            company: 'Aruba Networks, a Hewlett Packard Enterprise',
            duration: 'Feb 2022 - Present',
            description:
                'Developed and maintained scalable web applications using Java, kafka',
        },
        {
            title: 'Senior Software Engineer',
            company: 'Aptus Data Labs',
            duration: 'Jan 2019 - Feb 2022',
            description:
                'Created responsive UI components and implemented best practices for accessibility and performance. Collaborated closely with backend teams to integrate APIs.',
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
                        {/* Experiences Section */}
                        <Card sx={{ maxWidth: 800, margin: '20px auto', padding: 3 }}>
                            <Typography variant="h5" gutterBottom>
                                Professional Experiences
                            </Typography>
                            <Divider sx={{ marginBottom: 2 }} />
                            {experiences.map((experience, index) => (
                                <Box key={index} sx={{ marginBottom: 3 }}>
                                    <Typography variant="h6">{experience.title}</Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {experience.company} | {experience.duration}
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginTop: 1 }}>
                                        {experience.description}
                                    </Typography>
                                </Box>
                            ))}
                        </Card>
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