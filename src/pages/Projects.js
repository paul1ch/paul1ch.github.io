import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import project1Img from '../assets/projects-media/project1.jpg';
import project2Img from '../assets/project2.jpg';
import project3Img from '../assets/project3.jpg';
import project1Img1 from '../assets/projects-media/project1_1.jpg';
import project1Img2 from '../assets/projects-media/project1_2.jpg';

import {DialogTitle, DialogContent, Grid} from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';


const projects = [
    {
        img: project1Img1,
        translationKey: 'project1',
        gallery: [project1Img1, project1Img2],
    },
    {
        img: project2Img,
        translationKey: 'project2',
        gallery: [project2Img, project1Img, project3Img],
    },
    {
        img: project3Img,
        translationKey: 'project3',
        gallery: [project3Img, project1Img, project2Img],
    },
];

const Projects = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleClickOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    return (
        <div className="projects-container">
            <h1 className="title">{t('projects.title')}</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.img} alt={t(`projects.${project.translationKey}.title`)}
                             className="project-img"/>
                        <div className="project-details">
                            <h2 className="project-title">{t(`projects.${project.translationKey}.title`)}</h2>
                            <p className="project-date">{t(`projects.${project.translationKey}.date`)}</p>
                            <p className="project-skills">{t(`projects.${project.translationKey}.skills`)}</p>
                            <p
                                className="project-description"
                                dangerouslySetInnerHTML={{__html: t(`projects.${project.translationKey}.description`)}}
                            />
                            <a onClick={() => handleClickOpen(project)}
                                    className="button">
                                {t('projects.learnMore')}
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                PaperProps={{
                    style: {
                        backgroundColor: '#121416',
                        color: '#fff',
                    },
                }}
            >
                <AppBar sx={{position: 'relative', backgroundColor: '#282c34'}}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{flex: 1}}>
                            {selectedProject ? t(`projects.${selectedProject.translationKey}.title`) : ''}
                        </Typography>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <DialogContent>
                    <Grid container spacing={2}>
                        {selectedProject && selectedProject.gallery.map((image, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <img src={image} alt={`Gallery ${index}`} className="gallery-img"/>
                            </Grid>
                        ))}
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Projects;
