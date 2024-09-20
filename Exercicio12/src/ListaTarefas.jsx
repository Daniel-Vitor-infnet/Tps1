function ListaTarefas() {

  const tarefas = [ "Comprar café", "Estudar React", "Fazer exercícios" ];

  return (
      <ol>
          {
              tarefas.map(tarefa => (
                  <li>{tarefa}</li>
              ))
          }
      </ol>
  )
}

export default ListaTarefas;

