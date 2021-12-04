import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Agent from '../data/Agent.model';
import './Page.css';

const Agents: React.FC = () => {

  const [showLoader, hideLoader] = useIonLoading();
  const [fetched, setFetched] = useState(false);
  const [users, setUsers] = useState<Array<Agent>>([]);

  const internal = true
  let baseurl : string
  if (internal) {
    baseurl = 'http://192.168.18.33:3000/api/users'
  } else {
    baseurl = 'http://localhost:3000/api/users'
  }

  useEffect(() => {
    showLoader();

    axios(
      baseurl,
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
        for (const val in res.data) {
          console.log(res.data[val])
        }
        setUsers(res.data);
        setFetched(true);
      }
      hideLoader();
    })
    .catch((err) => {
      console.log(err);
      hideLoader();
    });
  }, [])

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
      <h1 className="mb-3">List of Agents</h1>
    </div>
    <div className="d-flex justify-content-center">
      <div className="col">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Item Hold</th>
            </tr>
          </thead>
          <tbody>
            {users.map(a => {
              return <tr>
                <td>{a.id}</td>
                <td>{a.usertype}</td>
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