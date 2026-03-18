import { useState } from "react";

export default function Contador () {
    const [contador, setContador] = useState(0)

  const aumentar = () => setContador(contador + 1)
  const diminuir = () => {
    if (contador > 0) setContador(contador - 1)
  }
  const zerar = () => setContador(0)

  return (
    <div className="contador">
      <h3>Contador de Cliks</h3>
      <p>Você clicou {contador} vezes</p>
      <button onClick={aumentar}>+1</button>
      <button onClick={diminuir}>-1</button>
      <button onClick={zerar}>Zerar</button>
    </div>
  )
}