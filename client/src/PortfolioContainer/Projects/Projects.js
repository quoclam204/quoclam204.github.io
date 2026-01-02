import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import commerceImg from "../../assets/Projects/commerce.png";
import trendyframeImg from "../../assets/Projects/trendyframe.png";
import chattingAppImg from "../../assets/Projects/chatting-app.png";


export default function Projects(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
        loop: true,
        margin: 30,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    };

    const projectsData = [
        {
            id: 1,
            name: "E-Commerce Da Lat",
            image: commerceImg,
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            codeUrl: "https://github.com/quoclam204/DoAnCoSoMVC",
            liveUrl: "https://yourproject.com",
            description: "A full-stack e-commerce platform with shopping cart and payment integration"
        },
        {
            id: 2,
            name: "TrendyFrame",
            image: trendyframeImg,
            technologies: ["React", "Firebase", "Material-UI"],
            codeUrl: "https://github.com/quoclam204/do-an-chuyen-nganh",
            liveUrl: "https://taskapp.com",
            description: "A collaborative task management application with real-time updates"
        },
        {
            id: 3,
            name: "Chatting App",
            image: chattingAppImg,
            technologies: ["JavaScript", "API", "CSS3", "HTML5"],
            codeUrl: "https://github.com/quoclam204/Chatting-app",
            liveUrl: "https://weather-dashboard.com",
            description: "Real-time weather information with interactive maps and forecasts"
        },
        // {
        //     id: 4,
        //     name: "Social Media Clone",
        //     image: "https://via.placeholder.com/400x300/9B59B6/ffffff?text=Social+Media",
        //     technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
        //     codeUrl: "https://github.com/yourusername/social-clone",
        //     liveUrl: "https://social-clone.com",
        //     description: "A social media platform with posts, comments, and user profiles"
        // },
    ];

    return (
        <div>
            <ScreenHeading
                title={"Projects"}
                subHeading={"My Recent Works"}
            />
            <section className="projects-section fade-in" id={props.id || ""}>
                <div className="container">
                    <div className="row">
                        <OwlCarousel
                            className="owl-carousel"
                            id="projects-carousel"
                            {...options}
                        >
                            {projectsData.map((project) => (
                                <div className="col-lg-12" key={project.id}>
                                    <div className="project-item">
                                        <div className="project-image">
                                            <img src={project.image} alt={project.name} />
                                            <div className="project-overlay">
                                                <p className="project-description">{project.description}</p>
                                            </div>
                                        </div>
                                        <div className="project-info">
                                            <h3 className="project-name">{project.name}</h3>
                                            <div className="project-technologies">
                                                {project.technologies.map((tech, index) => (
                                                    <span key={index} className="tech-badge">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="project-buttons">
                                                <a
                                                    href={project.codeUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-code"
                                                >
                                                    <i className="fa fa-github"></i> View Code
                                                </a>
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-live"
                                                >
                                                    <i className="fa fa-external-link"></i> Live Demo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </div>
    );
}
