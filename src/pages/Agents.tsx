import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';

const Agents: React.FC = () => {
return (
<IonPage>
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonTitle>Agents - LacakSayur</IonTitle>
    </IonToolbar>
  </IonHeader>

  <IonContent fullscreen>
    <div className="header text-center mb-4">
      <h1 className="mb-3">List of Products</h1>
    </div>
    <div className="d-flex justify-content-center">
      <div className="col">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Key</th>
              <th>Owns</th>
              <th>Custodian</th>
              <th>Reports</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="#!/agents/02a39ebca172e654459ccc5cb87be82926a803221d1adc2a14477fc22033bc8ec5">Supply Chain
                  Admin</a></td>
              <td>02a39ebca172e654459ccc5cb87be...</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td><a href="#!/agents/03a06901f2c2ba089936cd402e9bb8b74d1b74b1bb81a55dcd480954f1914eedc8">Supply Chain
                  Admin</a></td>
              <td>03a06901f2c2ba089936cd402e9bb...</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </IonContent>
</IonPage>
);
};

export default Agents;