import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Products from './pages/Products';
import Agents from './pages/Agents';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
          <Menu />
          <IonRouterOutlet id="main">
            <Route exact path="/login" component={Login}/>
            <Route path="/" exact={true}>
              <Page />
            </Route>
            <Route exact path="/page/products" component={Products}/>
            <Route exact path="/page/agents" component={Agents}/>
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
