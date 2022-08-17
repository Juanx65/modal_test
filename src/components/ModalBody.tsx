import { IonAvatar, IonContent, IonItem, IonLabel, IonModal, useIonModal } from "@ionic/react";
import { ReactChild, ReactFragment, ReactPortal } from "react";

interface ModalProps {
    data: any;
    dismiss: () => void;
}

const ModalBody: React.FC<ModalProps> = ({dismiss, data }) => {
    return (

        <IonContent>
            {data.map((data: { avatar: string | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; text: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
                <IonItem>
                    <IonAvatar slot="start">
                        <img src={data.avatar} alt="avatar" />
                    </IonAvatar>
                    <IonLabel>
                        <h2>{data.name}</h2>
                        <p>{data.text}</p>
                    </IonLabel>
                </IonItem>
            ))}
        </IonContent>
    );
}
export default ModalBody;