import React, { useRef, useState } from 'react';
import {
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  useIonModal,
} from '@ionic/react';

import './Home.css';

import ModalBody from '../components/ModalBody';

const data = [

  {
    name: "alguna wea",
    text: "aahjajsahsajshajs",
    avatar: "../../public/assets/icon/icon.png"
  },
  {
    name: "alguna wea",
    text: "aahjajsahsajshajs",
    avatar: "../../public/assets/icon/icon.png"
  },
  {
    name: "alguna wea",
    text: "aahjajsahsajshajs",
    avatar: "../../public/assets/icon/icon.png"
  },
];



function Home() {

  const [present, dismiss] = useIonModal(ModalBody, {
    dismiss: () => dismiss(),
    data: data
  });
  const modalOptions = {
    onDidDismiss: () => dismiss(),
    breakpoints: [0,0.2,0.5,1],
    initialBreakpoint: 0.5,
    backdropBreakpoint:0.2
  };

  return (
    <IonPage>
      <IonContent>
        <IonButton onClick={() =>present(modalOptions)}> Open Sheet</IonButton>
      </IonContent>
    </IonPage>
  );
}

export default Home;