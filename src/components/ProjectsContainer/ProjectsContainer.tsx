import React from 'react';
import { Container } from './ProjectsStyles';
import ProjectTile from './ProjectTile';
import { Project } from '../../types/Project';

const bitBucket = 'https://bitbucket.org/mbimpson/';

const items: Project[] = [
  {
    title: 'Recipes App',
    description: 'A recipes catalog/sharing app, made in Vue JS',
    image: 'vue',
    url: 'https://mattsrecipes.surge.sh'
  },
  {
    title: 'Terraform Basics',
    description: 'How to deploy an application using AWS API Gateway, AWS Lambda and NodeJS using Terraform.',
    image: 'terraform',
    url: 'https://github.com/mattbimpson/HelloWorldAWS'
  },
  {
    title: 'React forms validation',
    description: 'How to use React hooks to simplify forms validation.',
    image: 'react',
    url: `${bitBucket}forms-validation-in-react/src/master/`
  },
  {
    title: 'Vue Todo',
    description: 'A simple todo app, made with VueJS using VueX state management and Tailwind CSS.',
    image: 'vue',
    url: `${bitBucket}todo-vue/src/master/README.md`
  },
  {
    title: 'ExpressJS',
    description: 'An ExpressJS API, using Typescript, Jest & Swagger.',
    image: 'node',
    url: `${bitBucket}expressjs/src/master/README.md`
  },
  {
    title: 'Ngrx Entity',
    description: 'A demonstration of state normalisation using the ngrx entity package.',
    image: 'angular',
    url: `${bitBucket}ngrx-entity/src/master/ngrx-entity/README.md`
  },
  {
    title: 'ASP.NET middleware',
    description: 'A dotnet core webapi with middleware to perform custom logic within the request pipeline.',
    image: 'csharp',
    url: `${bitBucket}asp.net-middleware/src/master/README.md`
  },
  {
    title: 'Connect4',
    description: 'A game of connect 4 written in C++.',
    image: 'cpp',
    url: `${bitBucket}connect4/src/master/`
  },
  {
    title: 'NestJS Api',
    description: 'A REST API written in NestJS. Angular for the backend!',
    image: 'nest',
    url: `${bitBucket}nestjs-tutorial/src/master/README.md`
  },
  {
    title: 'Kubernetes Tutorial',
    description: 'A tutorial on running local Kubernetes with MicroK8s',
    image: 'kube',
    url: `${bitBucket}kubernetes-tutorial/src/master/creating-a-deployment.md`
  },
  {
    title: 'MyWeather',
    description: 'A weather app written using Kotlin.',
    image: 'android',
    url: `${bitBucket}myweather/src/master/`
  },
  {
    title: 'ChitChat',
    description: 'A NodeJS real-time chat application using Socket.IO',
    image: 'node',
    url: `${bitBucket}chitchat/src/master/`
  },
  {
    title: 'This website',
    description: 'This site, powered by ReactJS :)',
    image: 'react',
    url: `${bitBucket}mattbimpson/src/master/README.md`
  }
];

const ProjectContainer: React.FC<any> = () => {

  return (
    <>
      <Container>
        {
          items.map((x, i) =>
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
