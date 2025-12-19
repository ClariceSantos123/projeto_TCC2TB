# 🧪 Tabela Periódica Interativa 

**Projeto de TCC - Sistemas de Informação**

Uma aplicação web educacional gamificada para aprender a tabela periódica através de DEDUÇÃO e DESCOBERTA, onde o jogador deve identificar elementos apenas por suas características.

---


## 🎮 COMO JOGAR :

### 1. **Escolha uma Família**
   - Visualize suas estatísticas globais
   - Escolha uma família química (✓ indica família completa)

### 2. **Sistema de Dedução**
   - Você verá elementos arrastáveis com **SÍMBOLO E NOME** (ex: "Na - Sódio", "O - Oxigênio", "Fe - Ferro")
   - **Clique nos quadros azuis** da tabela para ver as características do elemento (GRATUITO!)
   - Com base nas características, deduza qual elemento deve ir ali
   - Arraste o elemento correto para o espaço (+100 se certo, -10 se errado)

### 3. **Sistema de Pontuação**
   ```
   ✅ Acerto:        +100 pontos
   ❌ Erro:          -10 pontos  
   💡 Ver dica:      GRATUITO (sem custo em pontos!)
   ```

### 4. **Características Mostradas na Dica **
   Ao clicar em um espaço vazio, você verá **Dicas**:
   - 📊 Número Atômico e Massa
   - 📝 Descrição e aplicações
   - ⚗️ Propriedades físicas e químicas
   - 🔬 História da descoberta
   - Use essas informações para escolher o elemento correto!

### 5. **Progresso Contínuo**
   - Complete todas as 21 famílias
   - Veja a tabela periódica completa se formar
   - Acumule pontos através da dedução

### 6. **🏆 Conquista Final - Tabela Completa**
   Ao completar **TODAS as 21 famílias**:
   - 🎉 **Modal de parabéns** com sua pontuação total
   - 🔬 **Visualização da Tabela Completa** - Veja TODOS os 118 elementos organizados!
   - 🌈 **Cores por grupos** - Cada família química com cor diferente
   - 📊 **Estatísticas finais** - Total de pontos, elementos e famílias
   - ✨ **Animações especiais** - Celebração visual do seu sucesso!
   
   **Importante:** A tela de tabela completa só aparece quando você completar todas as 21 famílias, não apenas os 118 elementos!


## 📁 Estrutura do Projeto

```
tabela-periodica/
│
├── index.html          # HTML atualizado (sem referência ao quiz.js)
├── styles.css          # CSS com novos estilos para sistema de dicas
├── app.js              # JavaScript COMPLETAMENTE REESCRITO
├── data.js             # Dados das famílias (inalterado)
├── data2.js            # Dados das famílias parte 2 (inalterado)
├── data3.js            # Dados das famílias parte 3 (inalterado)
└── README.md           # Esta documentação


## 🎯 Diferenciais Pedagógicos

### Aprendizado por Dedução
1. **Pensamento Crítico** - Analisar características e deduzir elementos
2. **Retenção Melhorada** - Aprender fazendo conexões entre propriedades
3. **Engajamento Ativo** - O jogador precisa pensar, não apenas memorizar
4. **Custo-Benefício** - Equilibrar uso de dicas (-20pts) vs tentativa e erro (-10pts)
5. **Descoberta Progressiva** - Revelação gradual de informações

### Sistema de Pontuação Educacional
- **Encoraja a tentativa** - Penalidade baixa por erro (-10)
- **Valoriza o conhecimento** - Alto bônus por acerto (+100)
- **Custo estratégico de dicas** - Médio custo (-20) incentiva dedução

---

## 📊 Funcionalidades Completas

- [x] Interface gamificada
- [x] 21 famílias químicas
- [x] 118 elementos com informações completas
- [x] Sistema de drag and drop
- [x] **Sistema de dedução por características**
- [x] **Dicas clicáveis com custo em pontos**
- [x] **Pontuação simplificada e clara**
- [x] **Elementos apenas com símbolo**
- [x] Progresso persistente (localStorage)
- [x] Feedback visual de acerto/erro
- [x] Barra de progresso por família
- [x] Estatísticas globais
- [x] Design responsivo
- [x] Modais informativos
- [x] **Modal de vitória sem quiz**
- [x] **Modal especial ao completar 118 elementos**

---

## 💡 Exemplo de Uso

**Cenário:**
1. Você escolhe a família "Gases Nobres"
2. Vê elementos com símbolos e nomes: "He - Hélio", "Ne - Neônio", "Ar - Argônio", etc.
3. Clica em um quadro azul da tabela (GRATUITO!)
4. Vê: "Segundo elemento mais leve, usado em balões..." 
5. Analisa: Pelo número atômico 2 e as características, deduz que é o Hélio!
6. Arrasta "He - Hélio" para o espaço (+100 pontos)
7. **Total: +100 pontos!** (Acertou sem errar, consultou dicas gratuitamente)

**Se errasse:**
- Arrasta elemento errado: -10 pontos
- Mas pode tentar de novo quantas vezes precisar!
- As dicas são SEMPRE gratuitas para ajudar no aprendizado! 📚

---

## 🔧 Solução de Problemas

**Progresso não salva:**
- Verifique se o navegador permite localStorage
- Não use modo anônimo/privado

**Elementos não aparecem:**
- Atualize a página (F5)
- Limpe o cache do navegador

**Resetar tudo:**
- Use o botão "Resetar Tudo" na tela inicial
- Ou abra o Console (F12) e digite: `localStorage.clear()`

---

## 🎓 Objetivo Pedagógico

Esta versão transforma a tabela periódica de um exercício de **memorização** para um desafio de **dedução científica**, onde o aluno precisa:

1. 🔍 **Analisar** as características químicas
2. 🧠 **Conectar** propriedades aos elementos
3. 💡 **Deduzir** qual elemento possui aquelas características
4. ✅ **Validar** seu conhecimento através do feedback imediato

**Resultado:** Aprendizado mais profundo e duradouro!

---

## 👨‍💻 Autor: Clarice Aparecida dos Santos Fonseca

**Projeto de TCC - Sistemas de Informação**

---

## 🎉 Conclusão

A Tabela Periódica gamificada oferece uma experiência de aprendizado m **engajadora** e **educativa**, transformando o seu estudo um verdadeiro **desafio investigativo**!

**Boa sorte na sua jornada de descoberta química!** 🧪🔬✨

---

## 🏆 Visualização da Tabela Completa

Ao completar todos os 118 elementos químicos, você terá acesso a uma **tela especial** que mostra a tabela periódica inteira de forma visual e organizada!

### Características:
- 📊 **Layout Completo**: Todos os 118 elementos organizados em 10 linhas (7 períodos + lantanídeos + actinídeos)
- 🌈 **Cores por Grupos**: Cada família química tem uma cor diferente para fácil identificação
- 🔍 **Interativa**: Passe o mouse sobre qualquer elemento para destacá-lo
- ✨ **Animações**: Elementos aparecem com efeitos visuais elegantes
- 📱 **Responsiva**: Ajusta-se a diferentes tamanhos de tela

### Grupos de Cores:
- 🔴 **Metais Alcalinos** (Grupo 1) - Vermelho/Rosa
- 🟠 **Alcalino-Terrosos** (Grupo 2) - Laranja
- 🟡 **Metais de Transição** (Grupos 3-12) - Amarelo/Dourado
- 🔵 **Grupo 13-18** - Azul, Roxo, Rosa, Amarelo, Verde
- 🟣 **Lantanídeos** - Roxo claro
- 🔴 **Actinídeos** - Rosa

### Navegação:
- 🏠 **Voltar ao Menu** - Retorna à tela principal
- 🔄 **Começar Nova Jornada** - Reseta todo o progresso para jogar novamente

Esta visualização é uma **recompensa visual** pelo seu esforço em dominar toda a tabela periódica! 🎉

---

## 💪 Mensagens Motivacionais

Durante sua jornada, você receberá mensagens especiais ao completar famílias:

- **Faltando 5 ou menos famílias:** 💙 Mensagem azul de incentivo
- **Faltando 3 ou menos famílias:** 💜 Mensagem roxa destacando o progresso
- **Faltando apenas 1 família:** 🏆 **ALERTA DOURADO** - Você está a uma família de desbloquear a tabela completa!

Essas mensagens aparecem no modal de vitória após completar cada família, mantendo você motivado até o final! 🎯
