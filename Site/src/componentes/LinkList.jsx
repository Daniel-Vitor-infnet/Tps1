import React, { useState, useEffect } from 'react';

function LinkList() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Verifica se o arquivo está acessível e o processa como texto
    fetch('/links.txt')
      .then((response) => response.text())
      .then((data) => {
        const parsedLinks = data.split('\n').map((line) => {
          const [label, url] = line.split(': '); // Divide o texto em "label" e "url"
          if (label && url) { // Certifica que ambos existem
            return { label, url: url.trim() };
          }
          return null; // Ignora linhas mal formatadas
        }).filter(link => link !== null); // Filtra os resultados válidos

        setLinks(parsedLinks); // Atualiza o estado com os links válidos
      })
      .catch((error) => console.error('Erro ao carregar o arquivo de links:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <div className="container">
        {links.length > 0 ? (
          links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))
        ) : (
          <p>Nenhum link disponível</p>
        )}
      </div>
    </div>
  );
}

export default LinkList;
