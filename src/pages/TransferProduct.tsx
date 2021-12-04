import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonLoading, useIonToast } from '@ionic/react';
import { useContext, useState } from 'react';
import { setTimeout } from 'timers';
import SupplyContext from '../data/supply-context';
import './Page.css';
import {nanoid} from 'nanoid'
import { useParams } from 'react-router';
import { productTransfer } from '../data/Urls';
import axios from 'axios';

const TransferProduct: React.FC = () => {
  const [owner, setOwner] = useState('')

  const [presentToast, dismissToast] = useIonToast();
  const [showLoader, hideLoader] = useIonLoading();

  const { id } = useParams<{id: string}>()

  const showToast = (msg: string, color: "danger" | "success") => {
    presentToast({
      buttons: [{ text: "Okay", handler: () => dismissToast() }],
      color: color,
      message: msg,
      duration: 2000,
    });
  };

  const submitHandler = () => {
    if(owner == ''){
      showToast("Please input the new owner of product","danger")
    }
    else{
      showLoader({
        message: 'Loading...',
        spinner: 'circular',
      })
      console.info(owner)
      const newProd = {
        id:id,
        owner: owner
      }

      axios(productTransfer, {
        method: "put",
        data: newProd,
        auth: {
          username: 'admin',
          password: 'admin'
        }
      }).then((res) => {
        console.info(res)
        hideLoader()
        showToast('Successfully transferred to new owner','success')
      }).catch((err) => {
        console.error(err)
        hideLoader()
        showToast('Failed while transfering to new owner','danger')
      })
    }
  }

return (
<IonPage>
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonTitle>Transfer Product - LacakSayur</IonTitle>
    </IonToolbar>
  </IonHeader>

  <IonContent fullscreen>
    <div className="header text-center mb-4">
      <h1 className="mb-3">Transfer Product</h1>
    </div>
    <div className="d-flex justify-content-center">
      <div className="login-form">
        <form>
          <div className="form-group">
            <label>New Owner</label>
            <IonInput required type="text" value={owner} onIonChange={(e) => setOwner(e.detail.value!)} className="form-control mb-1"/>
          </div>
          <div className="form-group mt-2">
            <div className="row justify-content-center">
              <IonButton onClick={submitHandler}>Transfer Owner</IonButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  </IonContent>
</IonPage>
);
};

export default TransferProduct;