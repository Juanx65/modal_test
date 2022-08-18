import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonRow, useIonModal } from "@ionic/react";
import { ReactChild, ReactFragment, ReactPortal } from "react";

import { closeCircleOutline, closeCircleSharp } from 'ionicons/icons';

import './ModalBody.css';

interface ModalProps {
    data: any;
    dismiss: () => void;
}

const ModalBody: React.FC<ModalProps> = ({ dismiss, data }) => {
    return (

        <IonContent>
            <div className="overlay">
                <div className="contenedorModal">
                    <IonItem class="itemModal">
                        <IonLabel>Edición Solicitud</IonLabel>
                        <IonIcon onClick={dismiss} slot="end" md={closeCircleSharp} ios={closeCircleSharp} />
                    </IonItem>
                    {data.map((data: { periodo: string | number | null | undefined; monto: string | number | null | undefined; }) => (
                        <IonItem lines="none">
                            <IonGrid>
                                <IonRow>
                                    <IonCol><IonLabel class="textModal"> Periodo </IonLabel></IonCol>
                                    <IonCol><IonInput class="inputModal" value={data.periodo}></IonInput></IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol><IonLabel class="textModal"> Monto </IonLabel></IonCol>
                                    <IonCol><IonInput class="inputModal" value={data.monto}></IonInput></IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonItem>
                    ))}
                    <IonGrid>
                        <IonRow>
                            <IonCol></IonCol>
                            <IonCol>
                                <IonButton expand="block" onClick={dismiss}> Confirmar </IonButton>
                            </IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </div>
        </IonContent >
    );
}
export default ModalBody;