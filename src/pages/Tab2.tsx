import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Yhteystiedot</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Yhteystiedot</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Yhteystiedot" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
