import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonLoading, useIonToast } from '@ionic/react';
import { useContext, useState } from 'react';
import { setTimeout } from 'timers';
import SupplyContext from '../data/supply-context';
import './Page.css';
import {nanoid} from 'nanoid'
import axios from 'axios';
import { productAdd } from '../data/Urls';

const Addproduct: React.FC = () => {
  const [owner, setOwner] = useState('')
  const [amount, setAmount] = useState(0)
  const [condition, setCondition] = useState('')
  const [location, setLocation] = useState('')
  const [name, setName] = useState('')
  const supplyContext = useContext(SupplyContext)

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

  const submitHandler = () => {
    if(name == ''){
      showToast("Please input the name of product","danger")
    }
    else if(amount == 0){
      showToast("Please input the weight of product","danger")
    }
    else if(owner == ""){
      showToast("Please input owner of product","danger")
    }
    else if(location == ""){
      showToast("Please input location of product","danger")
    }
    else if(condition == ""){
      showToast("Please input condition of product","danger")
    }
    else{
      showLoader({
        message: 'Loading...',
        spinner: 'circular',
      })
      console.info(name)
      console.info(amount)
      const id = nanoid()
      const newProd = {
        'id': id,
        'amount': amount,
        'condition': condition,
        'location': location,
        'name' : name,
        'owner': owner,
        'isConfirm': false,
      }

      axios(productAdd, {
          method: "post",
          data: newProd,
          auth: {
            username: 'admin',
            password: 'admin'
          }
        }
      ).then((res) => {
        console.info(res)
        hideLoader()
        showToast('Successfully added new product','success')
      }).catch((err) => {
        console.error(err)
        hideLoader()
        showToast('Failed while adding new product','danger')
      })

      supplyContext.addProduct(newProd)
    }
  }

return (
<IonPage>
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonTitle>Add - LacakSayur</IonTitle>
    </IonToolbar>
  </IonHeader>

  <IonContent fullscreen>
    <div className="header text-center mb-4">
      <h1 className="mb-3">Add product</h1>
    </div>
    <div className="d-flex justify-content-center">
      <div className="login-form">
        <form>
          <div className="form-group">
            <label>Owner</label>
            <IonInput required type="text" value={owner} onIonChange={(e) => setOwner(e.detail.value!)} className="form-control mb-1"/>
          </div>
          <div className="form-group">
            <label>Vegetable Name</label>
            <IonInput required type="text" value={name} onIonChange={(e) => setName(e.detail.value!)} className="form-control mb-1"/>
          </div>
          <div className="form-group">
            <label>Amount</label>
            <IonInput required type="number" value={amount} onIonChange={(e) => setAmount(e.detail.value! as unknown as number)} className="form-control mb-1"/>
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
              <IonButton onClick={submitHandler}>Add product</IonButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  </IonContent>
</IonPage>
);
};

export default Addproduct;