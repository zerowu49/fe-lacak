import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonLoading, useIonToast } from '@ionic/react';
import { useContext, useState } from 'react';
import { setTimeout } from 'timers';
import SupplyContext from '../data/supply-context';
import './Page.css';
import {nanoid} from 'nanoid'
import { useParams } from 'react-router';

const UpdateProduct: React.FC = () => {
  const [weight, setWeight] = useState(0)
  const [condition, setCondition] = useState('')
  const [location, setLocation] = useState('')
  const [name, setName] = useState('')
  const supplyContext = useContext(SupplyContext)

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
    if(name == ''){
      showToast("Please input the name of item","danger")
    }
    else if(weight == 0){
      showToast("Please input the weight of item","danger")
    }
    else{
      showLoader({
        message: 'Loading...',
        spinner: 'circular',
      })
      console.info(name)
      console.info(weight)
      const newProd = {
        'id': nanoid(),
        'amount': weight,
        'condition': condition,
        'location': location,
        'name' : name,
      }
      supplyContext.addProduct(newProd)
      setTimeout(() => {
        hideLoader()
        showToast('Successfully add new product','success')
      }, 500);
    }
  }

return (
<IonPage>
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonTitle>Update - LacakSayur</IonTitle>
    </IonToolbar>
  </IonHeader>

  <IonContent fullscreen>
    <div className="header text-center mb-4">
      <h1 className="mb-3">Update Product</h1>
    </div>
    <div className="d-flex justify-content-center">
      <div className="login-form">
        <form>
          <div className="form-group">
            <label>Name</label>
            <IonInput required type="text" value={name} onIonChange={(e) => setName(e.detail.value!)} className="form-control mb-1"/>
          </div>
          <div className="form-group">
            <label>Amount</label>
            <IonInput required type="text" value={weight} onIonChange={(e) => setWeight(e.detail.value! as unknown as number)} className="form-control mb-1"/>
          </div>
          <div className="form-group">
            <label>Location</label>
            <IonInput required type="text" value={location} onIonChange={(e) => setLocation(e.detail.value!)} className="form-control mb-1"/>
          </div>
          <div className="form-group">
            <label>Condition (Fresh/Not)</label>
            <IonInput required type="text" value={condition} onIonChange={(e) => setCondition(e.detail.value!)} className="form-control mb-1"/>
          </div>
          <div className="form-group mt-2">
            <div className="row justify-content-center">
              <IonButton onClick={submitHandler}>Add Item</IonButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  </IonContent>
</IonPage>
);
};

export default UpdateProduct;