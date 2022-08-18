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
    periodo: "01-10-2022",
    monto: "$350.000"
  }
];



function Home() {

  const [present, dismiss] = useIonModal(ModalBody, {
    dismiss: () => dismiss(),
    data: data,
    id:"example-modal"
  });
  const modalOptions = {
    onDidDismiss: () => dismiss(),
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