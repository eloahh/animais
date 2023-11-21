import React, { useState } from "react";

function Cadastro({ addAnimal }) {
  const [foto, setFoto] = useState("");
  const [raca, setRaca] = useState("");
  const [local, setLocal] = useState("");
  const [status, setStatus] = useState("");

  const enviarDados = (e) => {
    e.preventDefault();

    if (!raca || !local || !foto) {
      // Adicione uma validação para garantir que todos os campos sejam preenchidos
      alert("Preencha todos os campos (Raça, Local e Foto)!");
      return;
    }

    addAnimal({ foto, raca, local, status });

    // Limpe os campos após o envio
    setFoto("");
    setRaca("");
    setLocal("");
    setStatus("");
  };

  return (
    <div className="cadastrar">
      <form onSubmit={enviarDados}>
        <input
          type="text"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
          placeholder="URL da Foto"
          required
        />
        <input
          type="text"
          value={raca}
          onChange={(e) => setRaca(e.target.value)}
          placeholder="Raça"
          required
        />
        <input
          type="text"
          value={local}
          onChange={(e) => setLocal(e.target.value)}
          placeholder="Local (encontrado/perdido)"
          required
        />
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Status (resgatado/encontrado)"
        />
        <button type="submit" className="botaoCadastrar">
          Cadastrar Animal
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
