import './App.css';
import LinkList from './componentes/LinkList';

export default function App() {
  return (
    <main>
      <header>
        <h1>Fundamentos de React [24E3_2]</h1>
        <p>Aluno: <strong>Daniel Vitor Madeira Reis</strong></p>
        <p>Professor: <strong>Wesley Bruno</strong></p>
        <p id='obs'>Observações: Cada link abrirá uma nova aba com o repositório. Devido a alguns problemas com o "Replit", estou utilizando o "codesandbox.io", conforme sugerido no chat do grupo, e acredito que não haverá problemas. </p>
      </header>
      
      <section>
        <h2>Tarefas Práticas (TPs)</h2>
        <LinkList />
      </section>
    </main>
  );
}
