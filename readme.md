# 🧪 Tabela Periódica Interativa - VERSÃO ATUALIZADA

**Projeto de TCC - Sistemas de Informação**

Uma aplicação web educacional gamificada para aprender a tabela periódica através de DEDUÇÃO e DESCOBERTA, onde o jogador deve identificar elementos apenas por suas características.

---

## ✨ O QUE MUDOU NESTA VERSÃO?

### 🎯 NOVA MECÂNICA DE JOGO - SISTEMA DE DEDUÇÃO

**ANTES:**
- Elementos mostravam: Nome, Número Atômico e Massa
- Quiz ao final de cada família
- Sistema de estrelas e bônus de tempo

**AGORA:**
- **Elementos mostram APENAS o símbolo químico** (sem nome, número ou massa)
- **Sistema de dicas ao clicar nos espaços vazios** - Mostra características do elemento
- **Novo sistema de pontuação mais simples e direto**
- O jogador precisa DEDUZIR qual elemento é baseado nas propriedades

---

## 🎮 COMO JOGAR AGORA

### 1. **Escolha uma Família**
   - Visualize suas estatísticas globais
   - Escolha uma família química (✓ indica família completa)

### 2. **Sistema de Dedução**
   - Você verá elementos arrastáveis com **APENAS O SÍMBOLO** (ex: "Na", "O", "Fe")
   - **Clique nos quadros azuis** da tabela para ver as características do elemento
   - Com base nas características, deduza qual elemento deve ir ali
   - Arraste o elemento correto para o espaço

### 3. **Sistema de Pontuação**
   ```
   ✅ Acerto:        +100 pontos
   ❌ Erro:          -10 pontos  
   💡 Ver dica:      -20 pontos (ao clicar no espaço)
   ```

### 4. **Características Mostradas na Dica**
   Ao clicar em um espaço vazio, você verá:
   - 📊 Número Atômico e Massa
   - 📝 Descrição e aplicações
   - ⚗️ Propriedades físicas e químicas
   - 🔬 História da descoberta
   - **NÃO MOSTRA:** Nome do elemento (você precisa deduzir!)

### 5. **Progresso Contínuo**
   - Complete todas as 21 famílias
   - Veja a tabela periódica completa se formar
   - Acumule pontos através da dedução

---

## 🆕 PRINCIPAIS MUDANÇAS

### ❌ REMOVIDO
- ~~Sistema de Quiz~~
- ~~Estrelas baseadas em tempo~~
- ~~Bônus de velocidade~~
- ~~Nome, número e massa nos elementos arrastáveis~~
- ~~Arquivo quiz.js (não é mais necessário)~~

### ✅ ADICIONADO
- **Sistema de dicas clicáveis** (-20 pontos por dica)
- **Pontuação simplificada** (+100/-10/-20)
- **Modal de características** ao clicar nos espaços
- **Elementos apenas com símbolo** para desafio de dedução
- **Contador de dicas usadas** na interface
- **Modal de vitória reformulado** sem quiz
- **Modal especial** ao completar todos os 118 elementos

---

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

❌ quiz.js - REMOVIDO (não é mais necessário)
```

---

## 🚀 Como Executar

1. **Baixe todos os arquivos** (EXCETO quiz.js que foi removido)
2. Certifique-se de ter esses **6 arquivos** na mesma pasta:
   - index.html
   - styles.css
   - data.js
   - data2.js
   - data3.js
   - app.js
3. **Abra o arquivo** `index.html` em um navegador moderno
4. **Pronto!** Não requer servidor ou instalação

---

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
2. Vê elementos com apenas símbolos: "He", "Ne", "Ar", "Kr", "Xe", "Rn"
3. Clica em um quadro azul da tabela
4. Vê: "Segundo elemento mais leve, usado em balões..." (-20 pontos)
5. Deduz: É o Hélio!
6. Arrasta "He" para o espaço (+100 pontos)
7. **Total: +80 pontos** (100 de acerto - 20 da dica)

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

## 📈 Comparação: Antes vs Agora

| Aspecto | Versão Anterior | Nova Versão |
|---------|----------------|-------------|
| **Elemento Card** | Nome + Nº + Massa + Símbolo | Apenas Símbolo |
| **Dicas** | Botão geral (-10pts) | Clique no espaço (-20pts) |
| **Pontuação Acerto** | +10 pontos | +100 pontos |
| **Pontuação Erro** | Sem penalidade | -10 pontos |
| **Quiz** | Sim, ao finalizar | Não |
| **Estrelas** | 1-3 baseado em tempo | Removido |
| **Foco** | Velocidade | Dedução |
| **Desafio** | Memorização | Raciocínio |

---

## 🎓 Objetivo Pedagógico

Esta versão transforma a tabela periódica de um exercício de **memorização** para um desafio de **dedução científica**, onde o aluno precisa:

1. 🔍 **Analisar** as características químicas
2. 🧠 **Conectar** propriedades aos elementos
3. 💡 **Deduzir** qual elemento possui aquelas características
4. ✅ **Validar** seu conhecimento através do feedback imediato

**Resultado:** Aprendizado mais profundo e duradouro!

---

## 👨‍💻 Autor

**Projeto de TCC - Sistemas de Informação**
Versão 2.0 - Sistema de Dedução

---

## 📝 Notas de Versão

**v2.0 - Sistema de Dedução (Atual)**
- ✅ Removido sistema de quiz completo
- ✅ Elementos mostram apenas símbolo
- ✅ Sistema de dicas clicáveis implementado
- ✅ Nova pontuação: +100/-10/-20
- ✅ Modais atualizados
- ✅ Interface otimizada para dedução

**v1.0 - Sistema de Quiz (Anterior)**
- Sistema de quiz ao final
- Elementos com todas as informações
- Pontuação baseada em tempo
- Sistema de estrelas

---

## 🎉 Conclusão

Esta nova versão oferece uma experiência de aprendizado muito mais **engajadora** e **educativa**, transformando o estudo da tabela periódica em um verdadeiro **desafio investigativo**!

**Boa sorte na sua jornada de descoberta química!** 🧪🔬✨
