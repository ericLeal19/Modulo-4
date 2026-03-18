const BemVindo = ({ nomeUsuario, habits }) => {

  // Lógica antes do Return
  const nomeFormatado = nomeUsuario.toUpperCase();
  const mensagem = habits.length > 0
    ? `Você tem ${habits.length} hábito(s) cadastrado(s).`
    : "Nenhum hábito cadastrado ainda. Que tal começar?";

  return (
    <div>
      <h2>Olá, {nomeFormatado}!</h2>
      <p>{mensagem}</p>
      <p>Média diária: {(habits.length * 30).toFixed(0)} atividades por mês</p>
    </div>
  );
};
export default BemVindo