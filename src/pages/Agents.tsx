import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { agent } from '../Footer';
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
              <th>Location</th>
              <th>Item Hold</th>
            </tr>
          </thead>
          <tbody>
            {agent.map(a => {
              return <tr>
                <td>{a.name}</td>
                <td>{a.Location}</td>
                <td>{a.item}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  </IonContent>
</IonPage>
);
};

export default Agents;