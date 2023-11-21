import React from 'react';

function AnimalPerdido({ animal, onConcluir, onRemover }) {
  const { id, foto, raca, local, status } = animal;

  const handleConcluir = () => {
    onConcluir(id);
  };

  const handleRemover = () => {
    onRemover(id);
  };

  return (
    <div className={`animal ${status === 'Resgatado' ? 'concluido' : ''}`} key={id}>
      {/* Exibindo a imagem diretamente do link da internet */}
      {foto && (
        <img
          src={foto}
          alt={`Foto do animal ${raca}`}
          className="foto-animal"
          style={{ maxWidth: '100%', maxHeight: '150px' }} // Ajuste as dimensões conforme necessário
        />
      )}

      <div className="descricao">
        <span>Raça: {raca}</span>
        <span>Local: {local}</span>
        <span>Status: {status}</span>
      </div>

      <div className='acoes'>
        {status !== 'Resgatado' && (
          <button className='botaoConcluir' onClick={handleConcluir}>
            Concluir
          </button>
        )}
        <button className='botaoRemover' onClick={handleRemover}>
          Remover
        </button>
      </div>
    </div>
  );
}

export default AnimalPerdido;


