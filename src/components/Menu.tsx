import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { addOutline, addSharp, peopleOutline, peopleSharp, pricetagOutline, pricetagSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Products',
    url: '/page/products',
    iosIcon: pricetagOutline,
    mdIcon: pricetagSharp
  },
  {
    title: 'Agents',
    url: '/page/agents',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: 'Add products',
    url: '/page/add',
    iosIcon: addOutline,
    mdIcon: addSharp
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" side="start">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>LacakSayur</IonListHeader>
          <IonNote>Track your product faster</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
