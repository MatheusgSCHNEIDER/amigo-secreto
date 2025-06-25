<h1>Projeto feito no curso de Lógica de programação 2 com JavaScript da Alura</h1>
<p>O HTML e CSS do projeto foram disponibilizados no curso, eu apenas adicionei o botão "Remover nome" e fiz pequenos ajustes de espaçamentos.</p> 

<h1>Tecnologias utilizadas:</h1>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
</ul>

<h2>💡 Sobre o Projeto</h2>

<p>A lógica deste sorteador de nomes para amigo secreto foi desenvolvida por mim.</p>

<p>O projeto consiste nas seguintes funcionalidades:</p>

<ul>
  <li>
    <strong>Inserção de nomes</strong> em uma lista (array), com:
    <ul>
      <li>Validação para evitar nomes duplicados.</li>
      <li>Verificação se um valor foi realmente inserido antes de adicioná-lo.</li>
    </ul>
  </li>
  <li>
    <strong>Sorteio dos nomes</strong> utilizando o algoritmo de <strong>Fisher-Yates</strong>, garantindo um embaralhamento justo e aleatório.
  </li>
  <li>
    O sorteio só é realizado se:
    <ul>
      <li>A quantidade de nomes for <strong>superior a 4</strong>.</li>
      <li>O número total de nomes for <strong>par</strong> (para que todos tenham pares).</li>
    </ul>
  </li>
  <li>
    <strong>Remoção de nomes</strong> da lista com:
    <ul>
      <li>Um botão "Remover nome" que permite excluir um nome da lista com base na <strong>posição/index informada pelo usuário</strong>.</li>
      <li>Validações que garantem que a posição informada existe dentro dos limites da lista. Também considero o fato de a lista iniciar em 0, por isso subtraio 1 do valor informado pelo usuário</li>
      <li>Após a remoção, a lista é exibida novamente com os nomes atualizados.</li>
    </ul>
  </li>
</ul>