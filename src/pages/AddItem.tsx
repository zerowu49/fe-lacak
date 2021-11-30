import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonLoading, useIonToast } from '@ionic/react';
import { useState } from 'react';
import { setTimeout } from 'timers';
import './Page.css';

const AddItem: React.FC = () => {
  const [color, setColor] = useState('')
  const [weight, setWeight] = useState(0)
  const [condition, setCondition] = useState('')

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
    if(color == ''){
      showToast("Please input the color of item","danger")
    }
    else if(weight == 0){
      showToast("Please input the weight of item","danger")
    }
    else{
      showLoader({
        message: 'Loading...',
        spinner: 'circular',
      })
      console.info(color)
      console.info(weight)
      setTimeout(() => {
        hideLoader()
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
      <IonTitle>Add - LacakSayur</IonTitle>
    </IonToolbar>
  </IonHeader>

  <IonContent fullscreen>
    <div className="header text-center mb-4">
      <h1 className="mb-3">Add Item</h1>
    </div>
    <div className="d-flex justify-content-center">
      <div className="login-form">
        <form>
          <div className="form-group">
            <label>Color</label>
            <IonInput required type="text" value={color} onIonChange={(e) => setColor(e.detail.value!)} className="form-control mb-1"/>
          </div>
          <div className="form-group">
            <label>Weight</label>
            <IonInput required type="text" value={weight} onIonChange={(e) => setWeight(e.detail.value! as unknown as number)} className="form-control mb-1"/>
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

export default AddItem;