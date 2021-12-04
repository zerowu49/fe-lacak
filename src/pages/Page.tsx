import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';

const Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>LacakSayur</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="header text-center mb-4">
          <h4>Welcome To</h4>
          <h1 className="mb-3">LacakSayur</h1>
          <h5><em>Powered by <strong>Hyperledger Fabric</strong></em></h5>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col-8 text-justify">
            <p><em>LacakSayur</em> a general purpose supply chain solution built using the power of Blockchain Technology
              which demonstrates with a simple web app. It maintains a distributed ledger that keep asset history with timestamped history
              detailing who handled the item. As ownership changes hands, distributed ledger will keep track the trace,
              providing an immutable auditable history.</p>
            <p>To use <em>LacakSayur</em>, create an account using the link in the navbar above. Once logged in, you will
              be able to add new assets to the blockchain and track them. You will be able to authorize other "agents" on the 
              blockchain to track this data as well, or even transfer ownership or possession of the asset entirely.</p>
          </div>
          <div className="col"></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
