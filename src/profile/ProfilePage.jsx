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
    ThemeProvider,
    Chip
} from '@mui/material';


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import theme from '../theme/Theme'

const ProfilePage = () => {
    const experiences = [
        {
            company: 'Aruba networks, A Hewlett Packard Enterprise',
            icon: 'hpe.svg',
            roles: [
                {
                    title: 'Cloud Developer III',
                    date: 'Oct 2024 - Present',
                    description: 'Computer Networking',
                },
                {
                    title: 'Cloud Developer II',
                    date: 'Feb 2022 - Oct 2024',
                    description: 'Computer Networking',
                },
            ],
        },
        {
            company: 'Aptus Data Labs',
            icon: 'aptus.png',
            roles: [
                {
                    title: 'Software Developer',
                    date: 'Jan 2019 - Feb 2022',
                    description: 'Data analytics',
                },
            ],
        },
    ];

    const skills = ['Arangodb', 'channels', 'Go lang', 'Algorithm', 'CI/CD', 'Data Modeling', 'Data Structure', 'Database', 'Django', 'Docker', 'GCP', 'Goroutines', 'Javascript', 'Kafka', 'Kubernetes', 'React js', 'AWS', 'Shell script', 'kafka streams'];

    const booksRead = [
        {
            title: 'The ONE Thing', author: 'Gary W. Keller, Jay Papasan',
            cover: 'onething.jpg', // Replace with book cover URL
            date: 'Completed: Jan 2023',
        },
        {
            title: 'Steve Jobs', author: 'Walter Isaacson',
            cover: 'stevejob.jpg', // Replace with book cover URL
            date: 'Completed: Jan 2023',
        },
        {
            title: 'Start with Why', author: 'Simon Sinek',
            cover: 'startwithwhy.jpg', // Replace with book cover URL
            date: 'Completed: Jan 2023',
        },
        {
            title: 'Harry Potter All', author: 'J. K. Rowling',
            cover: 'harrypotter.jpg', // Replace with book cover URL
            date: 'Completed: Jan 2023',
        },
        {
            title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki and Sharon Lechter',
            cover: 'richdadpoor.jpg', // Replace with book cover URL
            date: 'Completed: Jan 2023',
        },
        {
            title: 'Zero to One', author: 'Peter Thiel',
            cover: 'zero1.jpg', // Replace with book cover URL
            date: 'Completed: Mar 2025',
        },
        {
            title: 'Range', author: 'David Epstein',
            cover: 'range.jpg', // Replace with book cover URL
            date: 'Currently Reading',
        },
    ];

    const projects = [
        {
            title: 'Arango Infra',
            date: 'Oct 2024 - Present',
            description: [
                'Onprem deployment to support the NMS on prem',
                'cloud deployement'
            ]
        },
        {
            title: 'Aruba AOS Switch',
            date: 'Jan 2023 - Present',
            description: [
                'Kafka streams pipeline to process device message (Proto)',
                'building multiple write pipeline solution'
            ]
        },
        {
            title: 'Aruba Scope Management',
            date: 'Feb 2022 - Jan 2023',
            description: [
                'Building the solution from the scratch',
                'maintaining the hierarchy of the different devices using graph database'
            ]
        },
        {
            title: 'Project 1',
            date: 'Aug 2020 - Feb 2021',
            description: [
                'client is an analytical company in US. Project was to keep track of working hours of a staff for projects. Which client will audit. CI/CD, Containers, kubernetes, github work flows, Django',
                'Windows IIS deployment in AWS ec2 instance',
                'Data modeling and used SQL Server as a database'
            ]
        },
    ];

    const certifications = [
        {
            title: 'Architecting with Google Kubernetes Engine Specialization',
            date: 'Feb 2021 - Jul 2021',
            link: 'https://coursera.org/share/d20d58440eb8bd7a5e3bd62a17099bc9'
        },
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
                                    Software Developer | Cloud Developer III
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ marginTop: 1, maxWidth: '800px', margin: '8px auto' }}>
                                    As a cloud microservices architect, I design scalable solutions, optimize performance, and manage data pipelines using Kafka Streams. Specializing in GraphQL with ArangoDB, I drive innovation in a collaborative environment, ensuring seamless project execution.
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
                                    <IconButton
                                        color="primary"
                                        href="https://stackoverflow.com/users/8650021/kiran-kumar"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src="stackoverflow.png" alt="Stack Overflow" style={{ width: 24, height: 24 }} />
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

                            {/* Education Section */}
                            <Box>
                                <Typography variant="h5" fontWeight="bold" mb={3}>
                                    EDUCATION
                                </Typography>

                                {/* Engineering */}
                                <Box mb={4}>
                                    <Typography variant="h6" fontWeight="bold">
                                        Engineering
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        National Institute of Science and Technology
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        04/2015 - 05/2019, Berhampur, Orissa
                                    </Typography>
                                    <Typography variant="body2" mt={1}>
                                        <strong>Courses:</strong> Information Technology, Computer Vision, IOT, Parallel Computing
                                    </Typography>
                                </Box>

                                {/* Intermediate */}
                                <Box>
                                    <Typography variant="h6" fontWeight="bold">
                                        Intermediate
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        Takshashila Residential School
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        04/2013 - 03/2015, Berhampur, Orissa
                                    </Typography>
                                    <Typography variant="body2" mt={1}>
                                        <strong>Courses:</strong> Maths, Physics, Chemistry, Information Technology
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item lg={6} md={12} sm={12}>
                            {/* Projects Section */}
                            <Box>
                                <Typography variant="h5" fontWeight="bold" mb={3}>
                                    PROJECTS
                                </Typography>

                                {projects.map((project, index) => (
                                    <Box key={index} mb={3} p={2} border={1} borderColor="grey.300" borderRadius={2}>
                                        <Typography variant="h6" fontWeight="bold">
                                            {project.title}
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" mb={1}>
                                            {project.date}
                                        </Typography>
                                        <List dense>
                                            {project.description.map((desc, descIndex) => (
                                                <ListItem key={descIndex} sx={{ py: 0.5, px: 0 }}>
                                                    <ListItemText 
                                                        primary={`• ${desc}`}
                                                        primaryTypographyProps={{ variant: 'body2' }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>

                        <Grid item lg={6} md={12} sm={12}>
                            {/* Skills Section */}
                            <Box>
                                <Typography variant="h5" fontWeight="bold" mb={3}>
                                    SKILLS
                                </Typography>

                                <Box display="flex" flexWrap="wrap" gap={1}>
                                    {skills.map((skill, index) => (
                                        <Chip 
                                            key={index} 
                                            label={skill} 
                                            color="primary" 
                                            variant="outlined"
                                            sx={{ 
                                                fontSize: '0.875rem',
                                                fontWeight: 500
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item lg={6} md={12} sm={12}>
                            {/* Certifications Section */}
                            <Box>
                                <Typography variant="h5" fontWeight="bold" mb={3}>
                                    CERTIFICATIONS
                                </Typography>

                                {certifications.map((cert, index) => (
                                    <Box key={index} mb={3} p={2} border={1} borderColor="grey.300" borderRadius={2}>
                                        <Typography variant="h6" fontWeight="bold">
                                            {cert.title}
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" mb={1}>
                                            {cert.date}
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            component="a" 
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ 
                                                color: 'primary.main',
                                                textDecoration: 'none',
                                                '&:hover': {
                                                    textDecoration: 'underline'
                                                }
                                            }}
                                        >
                                            View Certificate →
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>

                        <Grid item lg={12} md={12} sm={12}>
                            {/* Books Read Section */}
                            <Box>
                                {/* Books Header */}
                                <Typography variant="h5" fontWeight="bold" mb={3}>
                                    Books Read: {booksRead.length}
                                </Typography>

                                {/* Books List */}
                                <Grid container spacing={2}>
                                    {booksRead.map((book, index) => (
                                        <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                                            <Box
                                                display="flex"
                                                flexDirection="column"
                                                alignItems="center"
                                                mb={2}
                                                p={2}
                                                border={1}
                                                borderColor="grey.300"
                                                borderRadius={2}
                                                height="100%"
                                            >
                                                {/* Book Cover */}
                                                <Avatar
                                                    src={book.cover}
                                                    alt={book.title}
                                                    sx={{
                                                        width: 120, height: 150, mb: 2, borderRadius: 1, img: {
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                        }
                                                    }}
                                                />
                                                {/* Book Details */}
                                                <Box textAlign="center">
                                                    <Typography variant="h6" fontWeight="bold" fontSize="1rem">
                                                        {book.title}
                                                    </Typography>
                                                    <Typography variant="subtitle2" color="text.secondary">
                                                        {book.author}
                                                    </Typography>
                                                    <Typography variant="body2" mt={1}>
                                                        {book.date}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </ThemeProvider>
        </>

    );
};

export default ProfilePage;