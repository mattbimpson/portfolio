import { Project } from '../../types/Project';

const github = 'https://github.com/mattbimpson/';

export default [
  {
    title: 'Recipes App',
    description: 'A recipes catalog/sharing app, made in Vue JS',
    image: 'vue',
    url: 'https://recipes-d2zziqpv7-mattbimpson.vercel.app/login'
  },
  {
    title: 'Terraform Basics',
    description: 'How to deploy an application using AWS API Gateway, AWS Lambda and NodeJS using Terraform.',
    image: 'terraform',
    url: `${github}HelloWorldAWS`
  },
  {
    title: 'React forms validation',
    description: 'How to use React hooks to simplify forms validation.',
    image: 'react',
    url: `${github}forms-validation-react`
  },
  {
    title: 'Vue Todo',
    description: 'A simple todo app, made with VueJS using VueX state management and Tailwind CSS.',
    image: 'vue',
    url: `${github}todo-vue`
  },
  {
    title: 'ExpressJS',
    description: 'An ExpressJS API, using Typescript, Jest & Swagger.',
    image: 'node',
    url: `${github}expressjs`
  },
  {
    title: 'Ngrx Entity',
    description: 'A demonstration of state normalisation using the ngrx entity package.',
    image: 'angular',
    url: `${github}ngrx-entity`
  },
  {
    title: 'ASP.NET middleware',
    description: 'A dotnet core webapi with middleware to perform custom logic within the request pipeline.',
    image: 'csharp',
    url: `${github}asp.net-middleware`
  },
  {
    title: 'Connect4',
    description: 'A game of connect 4 written in C++.',
    image: 'cpp',
    url: `${github}connect4`
  },
  {
    title: 'NestJS Api',
    description: 'A REST API written in NestJS. Angular for the backend!',
    image: 'nest',
    url: `${github}nest-js`
  },
  {
    title: 'Kubernetes Tutorial',
    description: 'A tutorial on running local Kubernetes with MicroK8s',
    image: 'kube',
    url: `${github}kubernetes`
  },
  {
    title: 'MyWeather',
    description: 'A weather app written using Kotlin.',
    image: 'android',
    url: `${github}weather-kotlin`
  },
  {
    title: 'ChitChat',
    description: 'A NodeJS real-time chat application using Socket.IO',
    image: 'node',
    url: `${github}chitchat`
  },
  {
    title: 'This website',
    description: 'This site, powered by ReactJS :)',
    image: 'react',
    url: `${github}portfolio`
  }
] as Project[];