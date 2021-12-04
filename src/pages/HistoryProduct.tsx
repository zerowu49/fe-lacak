import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonLoading, useIonToast } from '@ionic/react';
import { useEffect, useState } from 'react';
import './Page.css';

import axios from 'axios';
import { productHistory } from '../data/Urls';
import { useParams } from 'react-router';
import History from '../data/History.model';


const HistoryProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [presentToast, dismissToast] = useIonToast();
  const [showLoader, hideLoader] = useIonLoading();
  const [fetched, setFetched] = useState(false);
  const [track, setTrack] = useState<[]>([])

  useEffect(() => {
    showLoader();

    axios(
      productHistory+id,
      {
        method: "get",
        auth: {
          username: 'admin',
          password: 'admin'
        }
      }
    ).then((res) => {
      console.log(res.data);
      if(!fetched){
        setTrack(res.data)
        setFetched(true)
      }
      hideLoader();
    })
    .catch((err) => {
      console.log(err);
      hideLoader();
    });
  }, [])

  const showToast = (msg: string, color: "danger" | "success") => {
    presentToast({
      buttons: [{ text: "Okay", handler: () => dismissToast() }],
      color: color,
      message: msg,
      duration: 2000,
    });
  };

  let layout
  if(track.length === 0){
    layout = <tr>
      <td colSpan={6} className="text-center">No history found</td>
    </tr>
  }else{
    layout = track.map((d:History) => {
      return <tr key={d.TxId}>
        <td>{d.Value?.Name}</td>
        <td>{d.Value?.Location}</td>
        <td>{d.Value?.Condition}</td>
        <td>{d.Value?.Owner}</td>
        <td>{d.timestamp}</td>
        <td>{d.IsDelete}</td>
      </tr>
    })
  }

return (
<IonPage>
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonTitle>History Products - LacakSayur</IonTitle>
    </IonToolbar>
  </IonHeader>

  <IonContent fullscreen>
    <div className="header text-center mb-4">
      <h1 className="mb-3">{id} History</h1>
    </div>
    <div className="d-flex justify-content-center">
      <div className="col">
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Location</th>
              <th>Condition</th>
              <th>Owner</th>
              <th>Time</th>
              <th>Deleted</th>
            </tr>
          </thead>
          <tbody>
            {layout}
          </tbody>
        </table>
      </div>
    </div>
  </IonContent>
</IonPage>
);
};

export default HistoryProduct;