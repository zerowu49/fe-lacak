import { IonBadge, IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonLoading, useIonToast } from '@ionic/react';
import { useState } from 'react';
import { data } from '../Footer';
import './Page.css';

const Products: React.FC = () => {
  const [clicked, setClicked] = useState(false)

  const [presentToast, dismissToast] = useIonToast();
  const [showLoader, hideLoader] = useIonLoading();

  const showToast = (msg: string, color: "danger" | "success") => {
    presentToast({
      buttons: [{ text: "Okay", handler: () => dismissToast() }],
      color: color,
      message: msg,
      duration: 2000,
    });
  };

  const clickHandler = () => {
    showLoader({
      message: 'Confirming...',
      spinner: "circular",
    })
    setTimeout(() => {
      hideLoader()
      setClicked(!clicked)
      showToast('Successfully confirm the transaction','success')
    }, 3000);
  }
return (
<IonPage>
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonTitle>Products - LacakSayur</IonTitle>
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
              <th>UID</th>
              <th>Product Name</th>
              <th>Holder</th>
              <th>Location</th>
              <th>Condition</th>
              <th>Confirm Section</th>
            </tr>
          </thead>
          <tbody>
            {data.map(d => {
              return <tr>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.holder}</td>
                <td>{d.Location}</td>
                <td>{d.condition}</td>
                <td>
                  {!d.isConfirm && !clicked ? 
                    <IonButton onClick={clickHandler}>Confirm</IonButton> :
                    <IonBadge color="success">
                      Confirmed
                    </IonBadge>
                  }
                </td>
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

export default Products;