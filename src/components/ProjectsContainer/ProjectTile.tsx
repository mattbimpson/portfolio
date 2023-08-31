import React, { useState } from 'react';
import { TileContainer, Image, ImageContainer, TitleText } from './ProjectsStyles';

import angular from '../../assets/images/angular.png';
import android from '../../assets/images/android.png';
import cpp from '../../assets/images/cpp.jpeg';
import csharp from '../../assets/images/csharp.jpeg';
import nest from '../../assets/images/nest.jpeg';
import node from '../../assets/images/node.png';
import python from '../../assets/images/python.jpeg';
import react from '../../assets/images/react.jpg';
import vue from '../../assets/images/vuejs.png';
import kube from '../../assets/images/kubernetes.png';
import terraform from '../../assets/images/terraform.png';

export interface ProjectItemProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const ProjectTile: React.FC<ProjectItemProps> = (props) => {

  const [opaque, setOpacity] = useState(false);

  const {title, description, image, url} = props;

  function goToProject(url: string): void {
    window.open(url, '_blank');
  }

  function getImageSrc(key: string) {
    switch (key) {
      case 'angular':
        return angular;
      case 'android':
        return android;
      case 'cpp':
        return cpp;
      case 'csharp':
        return csharp;
      case 'nest':
        return nest;
      case 'node':
        return node;
      case 'python':
        return python;
      case 'react':
        return react;
      case 'vue':
        return vue;
      case 'kube':
        return kube;
      case 'terraform':
        return terraform;
    }
  }

  return (
    <>
      <TileContainer
        onMouseEnter={() => setOpacity(true)}
        onMouseLeave={() => setOpacity(false)}
        opaque={opaque}
        onClick={() => goToProject(url)}
      >
        <div>
          <ImageContainer>
            <Image src={getImageSrc(image)} />
          </ImageContainer><br/>
          <TitleText>{title}</TitleText><br/>
          {description}
        </div>
      </TileContainer>
    </>
  );
}

export default ProjectTile;
