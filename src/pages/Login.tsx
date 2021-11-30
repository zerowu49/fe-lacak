import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonLoading, useIonToast } from '@ionic/react';
import { useState } from 'react';
import { setTimeout } from 'timers';
import './Page.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')

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

  const loginHandler = () => {
    if(username == ''){
      showToast("Please input your username","danger")
    }
    if(pass == ''){
      showToast("Please input your pass","danger")
    }
    showLoader({
      message: 'Loading...',
      spinner: 'circular',
    })
    console.info(username)
    console.info(pass)
    setTimeout(() => {
      hideLoader()
    }, 500);
  }

return (
<IonPage>
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonTitle>Login - LacakBarang</IonTitle>
    </IonToolbar>
  </IonHeader>

  <IonContent fullscreen>
    <div className="header text-center mb-4">
      <h1 className="mb-3">Login</h1>
    </div>
    <div className="d-flex justify-content-center">
      <div className="login-form">
        <form>
          <div className="form-group">
            <label>Username</label>
            <IonInput required type="text" value={username} onIonChange={(e) => setUsername(e.detail.value!)} className="form-control mb-1"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <IonInput required type="password" value={pass} onIonChange={(e) => setPass(e.detail.value!)} className="form-control mb-1"/>
          </div>
          <div className="container text-center">Or you can <a href="/signup">create a new Agent</a></div>
          <div className="form-group mt-2">
            <div className="row justify-content-center">
              <IonButton onClick={loginHandler}>Login</IonButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  </IonContent>
</IonPage>
);
};

export default Login;