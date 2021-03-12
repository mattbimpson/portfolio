import React from 'react';
import { Container } from '../../shared/styles/Styles';
import { Text, HeaderText } from '../../shared/styles/Styles';
import Carousel from '../../components/carousel/Carousel';

const HomePage: React.FC<any> = () => {

  const bitBucket = 'https://bitbucket.org/mbimpson/';

  const items = [
    {
      title: 'Ngrx Entity',
      description: 'A demonstration of state normalisation using the ngrx entity package.',
      image: 'angular',
      url: `${bitBucket}ngrx-entity/src/master/ngrx-entity/README.md` },
    {
      title: 'React forms validation',
      description: 'How to use React hooks to simplify forms validation.',
      image: 'react',
      url: `${bitBucket}forms-validation-in-react/src/master/`
    },
    {
      title: 'Vue Todo',
      description: 'A simple todo app, in VueJS using VueX state management.',
      image: 'vue',
      url: `${bitBucket}todo-vue/src/master/README.md`
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
      title: 'Python API',
      description: 'My first Python API using Flask.',
      image: 'python',
      url: `${bitBucket}python-api/src/master/README.md`
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

  return (
    <>
      <Container>
        <HeaderText>matt bimpson</HeaderText>
        <Text>
          Hello, my name is Matt and I'm a Colombia based software developer from the UK. 
          I have worked in development for around 10 years now, staying 'full stack' where I can. 
          My core skills lie in Javascript frameworks such as Angular and React, and with C#.
        </Text>
      </Container>
      <Carousel title="some projects" items={items} />
    </>
  )
}

export default HomePage;
