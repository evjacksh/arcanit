import { useState } from 'react';
import Header from './components/header';

function App() {

  const [addresses, setAddresses] = useState([
    'ул. Петровско-Разумовская 17',
    'ул. Сибирский проезд 10, к.2',
    'ул. Перервинский бульвар 27, к.1'
  ])

  const catalogOptions = [
    'Все',
    'Суши',
    'Пицца',
    'Бургеры',
    'Фастфуд',
    'Шашлыки',
    'Азиатская',
    'Десерты',
    'Здоровая еда',
    'Еще'
  ]

  const [clickTarget,setClickTarget] = useState(null)
  
  return (
    <div className="App" onClick={e => setClickTarget(e.target)}>
      <Header 
        catalogOptions={catalogOptions}
        addresses={addresses}
        setAddresses={e => setAddresses(e)}
        clickTarget={clickTarget}
      />
    </div>
  );
}

export default App;
