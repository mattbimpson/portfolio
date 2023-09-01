import React from 'react';
import { Container } from './ProjectsStyles';
import ProjectTile from './ProjectTile';
import Projects from './Projects';


const ProjectContainer: React.FC<any> = () => {

  return (
    <>
      <Container>
        {
          Projects.map((x, i) =>
            <ProjectTile
              key={i}
              description={x.description}
              image={x.image}
              title={x.title}
              url={x.url}
            >
            </ProjectTile>
          )
        }
      </Container>
    </>
  );
}

export default ProjectContainer;
