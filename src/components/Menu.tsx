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
  IonRouterLink,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { addOutline, addSharp, peopleOutline, peopleSharp, personOutline, pricetagOutline, pricetagSharp } from 'ionicons/icons';
import './Menu.css';
import { useContext } from 'react';
import SupplyContext from '../data/supply-context';

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
  const supplyContext = useContext(SupplyContext);

  let layout
  if(supplyContext.user.username != undefined){
    console.info("ada")
    console.info(supplyContext.user.username)
    layout = <IonItem className={location.pathname === "/profile" ? 'selected' : ''} routerLink="/profile" routerDirection="none" lines="none" detail={false}>
      <IonIcon slot="start" icon={personOutline}/>
      <IonLabel>{supplyContext.user.username}</IonLabel>
    </IonItem>
  }else{
    console.info("tdk")
    layout = <IonItem className={location.pathname === "/profile" ? 'selected' : ''} routerLink="/profile" routerDirection="none" lines="none" detail={false}>
      <IonIcon slot="start" icon={personOutline}/>
      <IonLabel>Profile</IonLabel>
    </IonItem>
  }

  return (
    <IonMenu contentId="main" side="start">
      <IonContent>
        <IonList id="inbox-list">
          <IonRouterLink routerLink="/">
            <IonListHeader>LacakSayur</IonListHeader>
            <IonNote>Track your product faster</IonNote>
          </IonRouterLink>
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
          {layout}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
