import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';

const Products: React.FC = () => {
return (
<IonPage>
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonTitle>Products - LacakBarang</IonTitle>
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
              <th>Added</th>
              <th>Updated</th>
              <th>Updates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>7h15-45537-15-br173</td>
              <td>Lightbulb</td>
              <td>11/30/2021, 1:01:21 pm</td>
              <td>11/30/2021, 10:20:04 pm</td>
              <td>66</td>
            </tr>
            <tr>
              <td>7h15-45537-f1135</td>
              <td>Airliner</td>
              <td>11/30/2021, 1:01:21 pm</td>
              <td>11/30/2021, 10:20:04 pm</td>
              <td>70</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </IonContent>
</IonPage>
);
};

export default Products;