import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';

export default createAppContainer(
    createSwitchNavigator({ //impede que o usuario volte pra tela anterior
        Login,
        Main,
    })
);