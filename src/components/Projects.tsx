import React from 'react';
import Heading from './Heading';
import Card from './Card';


const data = [
  {
    id: 0,
    title: "Static Interactive Resume",
    img: "/Screenshot_4-12-2024_5259_.jpeg",
    tags: ["HTML", "Node", "CSS", "TypeScript"],
  },
  {
    id: 1,
    title: "Figma Inspired page",
    img: "/Screenshot_15-11-2024_144759_localhost.jpeg",
    tags: ["Next.JS", "Node", "TailwindCSS", "React Icon"],
  },
  {
    id: 2,
    title: "Figma Inspired page",
    img: "/Assignment06.jpeg",
    tags: ["Next.JS", "Node", "TailwindCSS", "React Icon"],
  },
];

const Project = () => {
  return (
    <div id="Project"className="container pt-32">
      <Heading title="My Projects"/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>

      {data.map((el) => (<Card
      
      key={el.id}
      title={el.title}
      img={el.img}
      tags={el.tags}
      
      />))}
      </div>
        
          
          </div>
        
      
    
  );
};

export default Project;
