import React from 'react';
import { Blackjack, Coding, ComingSoon, Ecomm, farmSite } from "../../assets/index";
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <a href='https://triosdevelopers.com/~J.Parent/webfundamentalsev2023joelparent/webfundamentalsev2023joelparent/'>
        <button>
        <ProjectsCard
          title="Farm Website" 
          des=" Simple web site built with html/css/bootstrap"
          src={farmSite}
          // icons={[<FaHtml5/>, <FaCss3/>, <FaBootstrap/>]}
        /></button>
        </a>
        <a href='https://github.com/joeltheparent'>
        <button>
        <ProjectsCard
          title="Calculator App"
          des="Simple calculator app built with Python."
          src={ComingSoon}
          // icons={<FaPython/>}
        /></button>
        </a>
         <a href='https://github.com/joeltheparent/MusicStoreMVCUIJoel'>
          <button>
        <ProjectsCard
          title="E-commerce web app"
          des=" E-commerce web app built with asp.net MVC and C#"
          src={Ecomm}
          // icons={<SiCsharp/>}
        /></button>
        </a>
        <a href='https://github.com/joeltheparent/ApiProjectMusicLessonSite'><button>
        <ProjectsCard
          title="Back end with Rest API"
          des=" Back end built with asp.net core"
          src={Coding}
          //  icons={<SiCsharp/>}
        /></button></a>
        <a href='https://github.com/joeltheparent'><button>
        <ProjectsCard
          title="Blackjack game"
          des=" Simple java blackjack game that plays in terminal (class group project)"
          src={Blackjack}
          //  icons={<FaJava/>}
        /></button></a>
        <a href='https://github.com/joeltheparent'><button>
        <ProjectsCard
          title="React app"
          des="This portfolio website was built with React as well as javascript and tailwinds css"
          src={Coding}
          // icons={<FaReact/>}
        /></button></a>
        <a href='https://github.com/joeltheparent'><button>
          <ProjectsCard
          title="SQL Project"
          des="Coming soon!"
          src={ComingSoon}
          // icons={<FaDatabase/>}
        /></button></a>
        <a href='https://github.com/joeltheparent'><button>
        <ProjectsCard
          title="PHP Project"
          des="Coming Soon"
          src={ComingSoon}
          // icons={<FaPhp/>}
        /></button></a>
        <a href='https://github.com/joeltheparent'><button>
        <ProjectsCard
          title="Wordpress project"
          des="Coming soon!"
          src={ComingSoon}
          // icons={<FaWordpress/>}
        /></button></a>
      </div>
    </section>
  );
}

export default Projects