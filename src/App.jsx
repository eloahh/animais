import { useState } from 'react';
import './App.css';
import Cadastro from './components/cadastro';
import AnimalPerdido from './components/tarefa';

function App() {
  const [listaAnimais, setListaAnimais] = useState([
    { id: 1, foto: 'https://static.todamateria.com.br/upload/ba/le/baleiaazul2-cke.jpg', raca: 'Cachorro', local: 'Rua Principal', status: 'Perdido' },
    { id: 2, foto: 'https://www.petz.com.br/blog/wp-content/uploads/2023/08/como-saber-quantos-meses-o-gato-tem2-1280x720.jpg', raca: 'Gato', local: 'Avenida Secundária', status: 'Perdido' },
    // Adicione mais animais conforme necessário
  ]);

  const addAnimal = (foto, raca, local, status) => {
    const newAnimal = {
      id: Math.floor(Math.random() * 1000000),
      foto,
      raca,
      local,
      status,
    };

    setListaAnimais([...listaAnimais, newAnimal]);
  };

  const concluirAnimal = (id) => {
    const updatedAnimais = listaAnimais.map((animal) =>
      animal.id === id ? { ...animal, status: 'Resgatado' } : animal
    );

    setListaAnimais(updatedAnimais);
  };

  const removerAnimal = (id) => {
    const updatedAnimais = listaAnimais.filter((animal) => animal.id !== id);
    setListaAnimais(updatedAnimais);
  };

  return (
    <div className="app">
      <h1>Lista de Animais Perdidos</h1>
      <Cadastro addAnimal={addAnimal} />
      <div className='listaAnimais'>
        {listaAnimais.map((animal) => (
          <AnimalPerdido
            key={animal.id}
            animal={animal}
            onConcluir={concluirAnimal}
            onRemover={removerAnimal}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
