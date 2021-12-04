import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRadio, IonRadioGroup, IonTitle, IonToolbar, useIonLoading, useIonToast } from '@ionic/react';
import { useState } from 'react';
import './Page.css';
import {nanoid} from 'nanoid'
import axios from 'axios';

const Register: React.FC = () => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [role, setRole] = useState<('supplier' | 'distributor' | 'consumer')>()

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

  const internal = true
  let baseurl : string
  if (internal) {
    baseurl = 'http://192.168.18.33:3000/api/register-user'
  } else {
    baseurl = 'http://localhost:3000/api/register-user'
  }

  const submitHandler = () => {
    if(user == ''){
      showToast("Please enter the username", "danger")
    }
    else if(pass == ''){
      showToast("Please enter the password", "danger")
    }
    else if(role == undefined) {
      showToast("Please select a role", "danger")
    }
    else{
      showLoader({
        message: 'Loading...',
        spinner: 'circular',
      })
      const id = nanoid()
      const newProd = {
        'userid': id,
        'password': pass,
        'name' : user,
        'usertype': role,
      }

      axios(baseurl, {
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
        showToast('Successfully registered','success')
      }).catch((err) => {
        console.error(err)
        hideLoader()
        showToast('Failed while registering the user','danger')
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
      <IonTitle>Add - LacakSayur</IonTitle>
    </IonToolbar>
  </IonHeader>

  <IonContent fullscreen>
    <div className="header text-center mb-4">
      <h1 className="mb-3">Registration</h1>
    </div>
    <div className="d-flex justify-content-center">
      <div className="login-form">
        <form>
          <div className="form-group">
            <label>Name</label>
            <IonInput required type="text" value={user} onIonChange={(e) => setUser(e.detail.value!)} className="form-control mb-1"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <IonInput required type="password" value={pass} onIonChange={(e) => setPass(e.detail.value!)} className="form-control mb-1"/>
          </div>
          <div className="form-group">
            <label>Role</label>
            <IonRadioGroup value={role} onIonChange={e => setRole(e.detail.value)}>
              <IonItem>
                <IonLabel>Supplier</IonLabel>
                <IonRadio slot="end" value="supplier" />
              </IonItem>
              <IonItem>
                <IonLabel>Distributor</IonLabel>
                <IonRadio slot="end" value="distributor" />
              </IonItem>
              <IonItem>
                <IonLabel>Consumer</IonLabel>
                <IonRadio slot="end" value="consumer" />
              </IonItem>
            </IonRadioGroup>
          </div>
          <div className="form-group mt-2">
            <div className="row justify-content-center">
              <IonButton onClick={submitHandler}>Register</IonButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  </IonContent>
</IonPage>
);
};

export default Register;