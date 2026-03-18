import HabitCard from './HabitCard'
import { useState, useEffect, useRef } from 'react'
////////////////////////////////////////////////////////


function HabitList() {

  // Declaração de constantes
  const [novoNome, setNovoNome] = useState('')
  const [novaDescricao, setNovaDescricao] = useState('')
  const [novaCategoria, setNovaCategoria] = useState('')
  const nomeInputRef = useRef(null)
  const [erroNome, setErroNome] = useState('')



  // função que busca e atualiza os dados armazenados no navegador
  const [habits, setHabits] = useState(() => {

    // Busca dados armazenados no navegador e atribui a "stored"
    const stored = localStorage.getItem('my-daily-habits') 

    // Se não há nada salvo — usa o array inicial (uso do OU pois retornava uma string "[]" e não "false")
    if (!stored || stored === "[]") return [ 
      { id: 1, nome: 'Exercício', descricao: 'Treino de força', meta: 5, ativo: true, diasFeitos: 5 },
      { id: 2, nome: 'Leitura', descricao: 'Livro ou artigo', meta: 7, ativo: true, diasFeitos: 3 },
      { id: 3, nome: 'Meditação', descricao: 'Respiração e foco', meta: 7, ativo: false, diasFeitos: 0 },
      { id: 4, nome: 'Hidratação', descricao: 'Beber 2L de água', meta: 7, ativo: true, diasFeitos: 6 },
    ]

    // Se há dados salvos — tenta fazer o parse
    try {
      return JSON.parse(stored)
    } catch {
      // Se o JSON estiver corrompido — volta pro array inicial
      return []
    }
  })



  // Função que salva o array "habits"
  useEffect(() => {
      localStorage.setItem('my-daily-habits', JSON.stringify(habits))
    }, [habits])


  // Função Adicionar Hábito
  const adicionarHabit = (event) => {
    
    event.preventDefault()

    if (!novoNome.trim()) {
      alert('Informe um nome para o hábito.')
      return
    }

    // Bloqueia se há erro de validação
    if (erroNome) {
      nomeInputRef.current?.focus()
      return
    }

    const novoHabit = {
      id: Date.now(),
      nome: novoNome,
      descricao: novaDescricao,
      meta: 7,              // padrão
      ativo: true,          // padrão
      diasFeitos: 0,        // padrão
      categoria: novaCategoria || 'Geral',
    }

    setHabits(prev => [...prev, novoHabit])

    // Limpar os campos após adicionar
    setNovoNome('')
    setNovaDescricao('')
    setNovaCategoria('')

    // Devolve o foco para o campo nome — useRef em ação
    nomeInputRef.current?.focus()

  }

  const handleChange = (e) => {
    const { name, value } = e.target
    // [name] é uma chave dinâmica — usa o valor de name como nome da propriedade
    if (name === 'novoNome') {
    setNovoNome(value)
      // Valida comprimento mínimo em tempo real
      if (value.length > 0 && value.length < 3) {
        setErroNome('O nome deve ter pelo menos 3 caracteres.')
      } else {
        setErroNome('')
      }
    }

    if (name === 'novaDescricao') setNovaDescricao(value)
    if (name === 'novaCategoria') setNovaCategoria(value)
  }

  const removerHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id))
  }

  const limparHistorico = () => {
    localStorage.removeItem('my-daily-habits')
    setHabits([
      { id: 1, nome: 'Exercício', descricao: 'Treino de força', meta: 5, ativo: true, diasFeitos: 5 },
      // ... hábitos iniciais
    ])
  }


  return (

    <section>
      <form onSubmit={adicionarHabit} className="habit-form">
        <div>
          <label>
            Nome do hábito *
            <input
              type="text"
              name="novoNome"
              value={novoNome}
              onChange={handleChange}
              ref={nomeInputRef}
            />
          </label>
          {erroNome && <p style={{ color: 'red', fontSize: '0.8rem' }}>{erroNome}</p>}
        </div>
        <div>
          <label>
            Descrição
            <input
              type="text"
              name="novaDescricao"
              value={novaDescricao}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Categoria
            <input
              type="text"
              name="novaCategoria"
              value={novaCategoria}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Adicionar hábito</button>
      </form>

      <ul>
        {habits.length !== 0
          ? <p>Você tem {habits.length} hábito(s) cadastrado(s).</p>
          : <p>Nenhum hábito cadastrado ainda. Que tal começar?</p>}
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            nome={habit.nome}
            descricao={habit.descricao}
            meta={habit.meta}
            ativo={habit.ativo}
            diasFeitos={habit.diasFeitos}
            onRemover={() => removerHabit(habit.id)}
          />
        ))}
      </ul>
      <button onClick={limparHistorico}>Limpar histórico</button>
    </section>
  )
}

export default HabitList