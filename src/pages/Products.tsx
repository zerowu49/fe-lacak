import { IonBadge, IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonLoading, useIonToast } from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import SupplyContext from '../data/supply-context';
import './Page.css';

import Product from '../data/Product.model';

import axios from 'axios';
import { productList } from '../data/Urls';

const Products: React.FC = () => {
  const [presentToast, dismissToast] = useIonToast();
  const [showLoader, hideLoader] = useIonLoading();
  const supplyContext = useContext(SupplyContext);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    showLoader();

    axios(
      productList,
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
          console.log(res.data[val].Record)
          supplyContext.addProduct(res.data[val].Record)
        }
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

  const clickHandler = () => {
    showLoader({
      message: 'Confirming...',
      spinner: "circular",
    })
    setTimeout(() => {
      hideLoader()
      showToast('Successfully confirm the transaction','success')
    }, 3000);
  }

  let layout
  if(supplyContext.products.length === 0){
    layout = <tr>
      <td colSpan={5} className="text-center">No products found</td>
    </tr>
  }else{
    layout = supplyContext.products.map(d => {
      return <tr key={d.ID}>
        <td>{d.ID}</td>
        <td>{d.Name}</td>
        <td>{d.Location}</td>
        <td>{d.Condition}</td>
        <td>
          {!d.isConfirm ? 
            <IonButton onClick={clickHandler}>Confirm</IonButton> :
            <IonBadge color="success">
              Confirmed
            </IonBadge>
          }
        </td>
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
              <th>Location</th>
              <th>Condition</th>
              <th>Confirm Section</th>
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

export default Products;