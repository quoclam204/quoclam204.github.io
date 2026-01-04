import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Skills.css";

export default function Skills(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C", icon: "devicon-c-plain colored" },
        { name: "C#", icon: "devicon-csharp-plain colored" },
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "Python", icon: "devicon-python-plain colored" },
      ],
    },
    {
      title: "Frameworks & Platforms",
      skills: [
        { name: ".NET", icon: "devicon-dotnetcore-plain colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Express", icon: "devicon-express-original" },
      ],
    },
    {
      title: "Web & Database",
      skills: [
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      ],
    },
  ];

  return (
    <div>
      <ScreenHeading title={"Skills"} subHeading={"My Technical Skills"} />
      <section className="skills-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="skills-wrapper">
            {skillCategories.map((category, catIndex) => (
              <div className="skill-category" key={catIndex}>
                <h2 className="category-title">{category.title}</h2>
                <div className="category-skills">
                  {category.skills.map((skill, skillIndex) => (
                    <div className="skill-box" key={skillIndex}>
                      <div className="skill-icon">
                        <i className={skill.icon}></i>
                      </div>
                      <p className="skill-name">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
