import { StatusBar } from 'react-native'
import { Home } from './src/screens/home'

export default function App() {
  return (
    <>
      <StatusBar 
      barStyle='light-content' //Cor dos icones de notificações
      backgroundColor='#171717' //Cor de fundo
      translucent //Deixar true ou nao false a barra sobreposta da aplicação
      />
      <Home />
    </> 
  );
}
