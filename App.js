/**
 * =============================================
 * TABELA PERIÓDICA INTERATIVA - APLICAÇÃO PRINCIPAL
 * TCC - Sistemas de Informação
 * VERSÃO MODIFICADA - Sistema de Dedução
 * =============================================
 */

// ============================================
// VARIÁVEIS GLOBAIS
// ============================================
let currentElements = [];
let currentFamily = null;
let placedElements = 0;
let draggedElement = null;

// Sistema de Pontuação
let currentScore = 0;
let startTime = null;
let timerInterval = null;
let hintsUsed = 0;

// Persistência de Dados
let completedElements = new Set(); // Elementos já completados permanentemente
let completedFamilies = new Set(); // Famílias 100% completas
let totalScore = 0;

// ============================================
// ELEMENTOS DO DOM
// ============================================
const DOM = {
    selectionScreen: document.getElementById('selectionScreen'),
    gameScreen: document.getElementById('gameScreen'),
    familyGrid: document.getElementById('familyGrid'),
    familyTitle: document.getElementById('familyTitle'),
    progressBar: document.getElementById('progressBar'),
    tableGrid: document.getElementById('tableGrid'),
    elementsPool: document.getElementById('elementsPool'),
    infoModal: document.getElementById('infoModal'),
    modalTitle: document.getElementById('modalTitle'),
    modalBody: document.getElementById('modalBody'),
    btnReset: document.getElementById('btnReset'),
    btnMenu: document.getElementById('btnMenu'),
    btnCloseModal: document.getElementById('btnCloseModal'),
    btnResetAll: document.getElementById('btnResetAll'),
    victoryModal: document.getElementById('victoryModal'),
    completeModal: document.getElementById('completeModal'),
    btnContinue: document.getElementById('btnContinue'),
    btnCompleteOk: document.getElementById('btnCompleteOk'),
    // Estatísticas
    totalScore: document.getElementById('totalScore'),
    totalElements: document.getElementById('totalElements'),
    totalFamilies: document.getElementById('totalFamilies'),
    currentScore: document.getElementById('currentScore'),
    hintsUsed: document.getElementById('hintsUsed'),
    timer: document.getElementById('timer')
};

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('🚀 Inicializando aplicação...');
    console.log('📦 FAMILIES_DATA:', typeof FAMILIES_DATA !== 'undefined' ? 'OK' : 'ERRO');
    console.log('📦 TABLE_STRUCTURE:', typeof TABLE_STRUCTURE !== 'undefined' ? 'OK' : 'ERRO');
    console.log('📦 HINTS_CONFIG:', typeof HINTS_CONFIG !== 'undefined' ? 'OK' : 'ERRO');
    
    loadProgress();
    renderFamilyCards();
    setupEventListeners();
    updateGlobalStats();
    
    // Verificação automática na inicialização
    const check = checkMissingElements();
    console.log(`Sistema carregado com ${check.total} elementos únicos`);
    if (check.missing.length > 0) {
        console.warn(`⚠️ Faltam ${check.missing.length} elementos:`, check.missing);
    } else {
        console.log('✅ Todos os 118 elementos estão cadastrados!');
    }
}

function setupEventListeners() {
    DOM.btnReset.addEventListener('click', resetGame);
    DOM.btnMenu.addEventListener('click', backToMenu);
    DOM.btnCloseModal.addEventListener('click', closeModal);
    DOM.btnResetAll.addEventListener('click', resetAllProgress);
    DOM.btnContinue.addEventListener('click', closeVictoryModal);
    DOM.btnCompleteOk.addEventListener('click', closeCompleteModal);
    DOM.infoModal.addEventListener('click', (e) => {
        if (e.target === DOM.infoModal) closeModal();
    });
    DOM.victoryModal.addEventListener('click', (e) => {
        if (e.target === DOM.victoryModal) closeVictoryModal();
    });
}

// ============================================
// PERSISTÊNCIA DE DADOS (LocalStorage)
// ============================================
function loadProgress() {
    const saved = localStorage.getItem('tabelaPeriodicaProgress');
    if (saved) {
        const data = JSON.parse(saved);
        completedElements = new Set(data.completedElements || []);
        completedFamilies = new Set(data.completedFamilies || []);
        totalScore = data.totalScore || 0;
    }
}

function saveProgress() {
    const data = {
        completedElements: Array.from(completedElements),
        completedFamilies: Array.from(completedFamilies),
        totalScore: totalScore
    };
    localStorage.setItem('tabelaPeriodicaProgress', JSON.stringify(data));
}

function resetAllProgress() {
    if (confirm('Tem certeza? Todo o progresso será perdido!')) {
        localStorage.removeItem('tabelaPeriodicaProgress');
        completedElements.clear();
        completedFamilies.clear();
        totalScore = 0;
        updateGlobalStats();
        renderFamilyCards();
        alert('Progresso resetado com sucesso!');
    }
}

function updateGlobalStats() {
    DOM.totalScore.textContent = totalScore.toLocaleString();
    DOM.totalElements.textContent = `${completedElements.size}/118`;
    DOM.totalFamilies.textContent = `${completedFamilies.size}/21`;
}

// ============================================
// TIMER
// ============================================
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        DOM.timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function getElapsedTime() {
    if (!startTime) return 0;
    return Math.floor((Date.now() - startTime) / 1000);
}

function updateCurrentStats() {
    DOM.currentScore.textContent = currentScore;
    DOM.hintsUsed.textContent = hintsUsed;
}

function renderFamilyCards() {
    console.log('📋 Renderizando cards de famílias...');
    DOM.familyGrid.innerHTML = '';
    
    if (typeof FAMILIES_DATA === 'undefined') {
        console.error('❌ FAMILIES_DATA não está definido!');
        DOM.familyGrid.innerHTML = '<p style="color: red; text-align: center;">Erro: Dados não carregados. Verifique se data.js, data2.js e data3.js estão na mesma pasta.</p>';
        return;
    }
    
    let cardCount = 0;
    for (const [key, family] of Object.entries(FAMILIES_DATA)) {
        const card = document.createElement('button');
        card.className = 'family-card';
        
        // Verificar se a família está completa
        const familyElementNumbers = family.elements.map(el => el.number);
        const isComplete = familyElementNumbers.every(num => completedElements.has(num));
        
        if (isComplete) {
            card.classList.add('completed');
        }
        
        card.onclick = () => startGame(key);
        
        const elementsPreview = family.elements
            .map(el => el.symbol)
            .join(', ');
        
        let groupText = '';
        if (family.group === 'Ln') {
            groupText = 'Terras Raras';
        } else if (family.group === 'An') {
            groupText = 'Radioativos';
        } else if (family.group === 'H') {
            groupText = 'Elemento Único';
        } else if (family.group === 'P7') {
            groupText = 'Sintéticos';
        } else if (family.multiGroup) {
            groupText = 'Múltiplos Grupos';
        } else {
            groupText = `Grupo ${family.group}`;
        }
        
        const completeIcon = isComplete ? ' ✓' : '';
        
        card.innerHTML = `
            <h3>${family.icon} ${family.name}${completeIcon}</h3>
            <p>${groupText} - ${family.elements.length} elementos</p>
            <p class="elements-preview">${elementsPreview}</p>
        `;
        
        DOM.familyGrid.appendChild(card);
        cardCount++;
    }
    
    console.log(`✅ ${cardCount} famílias renderizadas`);
}

// ============================================
// CONTROLE DO JOGO
// ============================================
function startGame(familyKey) {
    if (!FAMILIES_DATA[familyKey]) return;
    
    currentFamily = FAMILIES_DATA[familyKey];
    currentElements = [...currentFamily.elements];
    
    // Definir título
    let titleText = currentFamily.name;
    if (currentFamily.group === 'Ln') {
        titleText += ' - Lantanídeos';
    } else if (currentFamily.group === 'An') {
        titleText += ' - Actinídeos';
    } else if (currentFamily.group === 'H') {
        titleText += ' - Elemento Único';
    } else if (currentFamily.group === 'P7') {
        titleText += ' - Sintéticos do Período 7';
    } else if (currentFamily.multiGroup) {
        titleText += ' - Múltiplos Grupos';
    } else {
        titleText += ` - Grupo ${currentFamily.group}`;
    }
    
    DOM.familyTitle.textContent = titleText;
    
    // Alternar telas
    DOM.selectionScreen.classList.remove('active');
    DOM.gameScreen.classList.add('active');
    
    initGame();
}

function initGame() {
    placedElements = 0;
    currentScore = 0;
    hintsUsed = 0;
    startTime = null;
    stopTimer();
    
    updateProgress();
    updateCurrentStats();
    createTable();
    createElementsPool();
    
    // Debug: verificar se elementos foram criados
    console.log('Elementos atuais:', currentElements.length);
    console.log('Elementos já completados:', completedElements.size);
    console.log('Elementos para colocar:', currentElements.filter(el => !completedElements.has(el.number)).length);
}

function resetGame() {
    if (confirm('Tem certeza que deseja reiniciar esta família?')) {
        initGame();
    }
}

function backToMenu() {
    stopTimer();
    DOM.gameScreen.classList.remove('active');
    DOM.selectionScreen.classList.add('active');
    updateGlobalStats();
    renderFamilyCards();
}

// ============================================
// CRIAÇÃO DA TABELA PERIÓDICA
// ============================================
function createTable() {
    DOM.tableGrid.innerHTML = '';
    DOM.tableGrid.style.cssText = `
        display: grid;
        grid-template-columns: 40px repeat(18, 55px);
        grid-template-rows: 30px repeat(7, 55px);
        gap: 2px;
    `;
    
    // Labels dos grupos
    createGroupLabels();
    
    // Labels dos períodos
    createPeriodLabels();
    
    // Slots da tabela
    createTableSlots();
}

function createGroupLabels() {
    const header = document.createElement('div');
    header.style.cssText = 'grid-column: 1; grid-row: 1;';
    DOM.tableGrid.appendChild(header);
    
    for (let group = 1; group <= 18; group++) {
        const label = document.createElement('div');
        label.style.cssText = `
            grid-column: ${group + 1};
            grid-row: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7em;
            font-weight: bold;
            color: var(--primary-color);
        `;
        label.textContent = group;
        DOM.tableGrid.appendChild(label);
    }
}

function createPeriodLabels() {
    for (let period = 1; period <= 7; period++) {
        const label = document.createElement('div');
        label.style.cssText = `
            grid-column: 1;
            grid-row: ${period + 1};
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7em;
            font-weight: bold;
            color: var(--primary-color);
        `;
        label.textContent = period;
        DOM.tableGrid.appendChild(label);
    }
}

function createTableSlots() {
    if (typeof TABLE_STRUCTURE === 'undefined') {
        console.error('❌ TABLE_STRUCTURE não está definido!');
        return;
    }
    
    TABLE_STRUCTURE.forEach((periodGroups, periodIndex) => {
        const period = periodIndex + 1;
        
        periodGroups.forEach((group, groupIndex) => {
            if (group === 0) return;
            
            const slot = document.createElement('div');
            slot.className = 'element-slot';
            slot.style.cssText = `
                grid-column: ${groupIndex + 2};
                grid-row: ${period + 1};
            `;
            
            // Verificar se é slot ativo OU se já foi completado anteriormente
            const element = currentElements.find(el => 
                el.period === period && el.group === group
            );
            
            // Procurar em TODAS as famílias se este elemento já foi completado
            let completedElement = null;
            for (const family of Object.values(FAMILIES_DATA)) {
                const found = family.elements.find(el => 
                    el.period === period && el.group === group && completedElements.has(el.number)
                );
                if (found) {
                    completedElement = found;
                    break;
                }
            }
            
            if (completedElement) {
                // Elemento já completado anteriormente - mostrar permanentemente
                slot.classList.add('filled', 'permanent');
                slot.innerHTML = `
                    <div class="element-display">
                        <div class="element-number">${completedElement.number}</div>
                        <div class="element-symbol">${completedElement.symbol}</div>
                        <div class="element-name">${completedElement.name}</div>
                    </div>
                `;
            } else if (element) {
                // Slot ativo para a família atual
                slot.classList.add('active');
                slot.dataset.number = element.number;
                slot.dataset.period = element.period;
                slot.dataset.group = element.group;
                
                // NOVO: Adicionar evento de clique para mostrar dica
                slot.addEventListener('click', () => showSlotHint(element));
                slot.style.cursor = 'help';
                slot.title = 'Clique para ver as características do elemento';
                
                slot.addEventListener('dragover', handleDragOver);
                slot.addEventListener('drop', handleDrop);
            } else {
                // Slot inativo
                slot.classList.add('inactive');
            }
            
            DOM.tableGrid.appendChild(slot);
        });
    });
    
    // Adicionar slots especiais para Lantanídeos e Actinídeos se for necessário
    if (currentFamily.group === 'Ln' || currentFamily.group === 'An' || currentFamily.group === 'P7') {
        createLanthanideActinideSlots();
    }
}

function createLanthanideActinideSlots() {
    const separator = document.createElement('div');
    separator.style.cssText = `
        grid-column: 1 / -1;
        height: 20px;
    `;
    DOM.tableGrid.appendChild(separator);
    
    const title = document.createElement('div');
    title.style.cssText = `
        grid-column: 1 / -1;
        padding: 10px;
        text-align: center;
        font-weight: bold;
        color: var(--primary-color);
        background: #f0f0ff;
        border-radius: 5px;
        margin: 10px 0;
        font-size: 1.2em;
    `;
    title.textContent = currentFamily.name + ' - Modo Jogo';
    DOM.tableGrid.appendChild(title);
    
    const specialGrid = document.createElement('div');
    specialGrid.style.cssText = `
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: repeat(15, 60px);
        gap: 5px;
        justify-content: center;
        padding: 10px;
    `;
    
    currentElements.forEach((element, index) => {
        const slot = document.createElement('div');
        slot.className = 'element-slot';
        slot.style.cssText = `width: 60px; height: 60px;`;
        
        const isCompleted = completedElements.has(element.number);
        
        if (isCompleted) {
            slot.classList.add('filled', 'permanent');
            slot.innerHTML = `
                <div class="element-display">
                    <div class="element-number">${element.number}</div>
                    <div class="element-symbol">${element.symbol}</div>
                    <div class="element-name">${element.name}</div>
                </div>
            `;
        } else {
            slot.classList.add('active');
            slot.dataset.number = element.number;
            slot.dataset.period = element.period;
            slot.dataset.group = element.group;
            
            // NOVO: Adicionar evento de clique para mostrar dica
            slot.addEventListener('click', () => showSlotHint(element));
            slot.style.cursor = 'help';
            slot.title = 'Clique para ver as características do elemento';
            
            slot.addEventListener('dragover', handleDragOver);
            slot.addEventListener('drop', handleDrop);
        }
        
        specialGrid.appendChild(slot);
    });
    
    DOM.tableGrid.appendChild(specialGrid);
}

// ============================================
// POOL DE ELEMENTOS
// ============================================
function createElementsPool() {
    if (!DOM.elementsPool) {
        console.error('elementsPool não encontrado!');
        return;
    }
    
    DOM.elementsPool.innerHTML = '';
    
    // Filtrar apenas elementos que ainda não foram completados
    const elementsToPlace = currentElements.filter(el => !completedElements.has(el.number));
    
    console.log('Criando pool com', elementsToPlace.length, 'elementos');
    
    if (elementsToPlace.length === 0) {
        // Todos os elementos desta família já foram completados
        DOM.elementsPool.innerHTML = `
            <p style="text-align: center; color: #4CAF50; font-weight: bold; width: 100%; padding: 20px;">
                ✓ Todos os elementos desta família já foram completados!
            </p>
        `;
        return;
    }
    
    // Embaralhar elementos
    const shuffled = shuffleArray([...elementsToPlace]);
    
    shuffled.forEach(element => {
        const card = createElementCard(element);
        DOM.elementsPool.appendChild(card);
    });
    
    console.log('Pool criado com sucesso!');
}

function createElementCard(element) {
    const card = document.createElement('div');
    card.className = 'element-card';
    card.draggable = true;
    card.dataset.number = element.number;
    
    // MODIFICADO: Mostrar símbolo E nome (SEM número atômico e massa)
    card.innerHTML = `
        <div class="element-symbol-large">${element.symbol}</div>
        <div class="element-name-small">${element.name}</div>
    `;
    
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);
    
    return card;
}

// ============================================
// SISTEMA DE DICAS (NOVO)
// ============================================
function showSlotHint(element) {
    // MODIFICADO: Dicas agora são GRATUITAS para fins educativos
    hintsUsed++;
    updateCurrentStats();
    
    DOM.modalTitle.textContent = '🔍 Características do Elemento';
    DOM.modalBody.innerHTML = `
        <div class="hint-box">
            <p class="hint-info">💡 Use estas informações para descobrir qual elemento colocar aqui!</p>
            
            <div class="hint-section">
                <h4>📊 Informações Básicas</h4>
                <p><strong>Número Atômico:</strong> ${element.number}</p>
                <p><strong>Massa Atômica:</strong> ${element.mass} u</p>
                <p><strong>Período:</strong> ${element.period}</p>
                <p><strong>Grupo:</strong> ${element.group}</p>
            </div>
            
            <div class="hint-section">
                <h4>📝 Descrição</h4>
                <p>${element.description}</p>
            </div>
            
            <div class="hint-section">
                <h4>⚗️ Propriedades</h4>
                <p>${element.properties}</p>
            </div>
            
            <div class="hint-section">
                <h4>🔬 Descoberta</h4>
                <p>${element.discovery}</p>
            </div>
            
            <p class="hint-challenge">🎯 Analise as características acima e escolha o elemento correto!</p>
            <p style="margin-top: 10px; color: #4CAF50;"><strong>📚 Dicas consultadas: ${hintsUsed}</strong></p>
        </div>
    `;
    openModal();
}

// ============================================
// DRAG AND DROP
// ============================================
function handleDragStart(e) {
    draggedElement = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDrop(e) {
    e.stopPropagation();
    
    const slot = e.currentTarget;
    const droppedNumber = parseInt(draggedElement.dataset.number);
    const slotNumber = parseInt(slot.dataset.number);
    
    if (droppedNumber === slotNumber && !slot.classList.contains('filled')) {
        // Iniciar timer no primeiro acerto
        if (!startTime) {
            startTimer();
        }
        
        // Acerto
        const element = currentElements.find(el => el.number == droppedNumber);
        slot.innerHTML = `
            <div class="element-display">
                <div class="element-number">${element.number}</div>
                <div class="element-symbol">${element.symbol}</div>
                <div class="element-name">${element.name}</div>
            </div>
        `;
        slot.classList.add('filled');
        slot.classList.remove('active');
        slot.style.cursor = 'default';
        slot.title = '';
        draggedElement.remove();
        
        // Adicionar aos elementos completados e salvar imediatamente
        completedElements.add(droppedNumber);
        saveProgress(); // Salvar após cada elemento colocado
        
        placedElements++;
        currentScore += 100; // MODIFICADO: +100 pontos por acerto
        
        updateProgress();
        updateCurrentStats();
        
        console.log('Elemento', droppedNumber, 'salvo. Colocados:', placedElements, '/', currentElements.length);
        
        // Mostrar informações
        showElementInfo(element);
        
        // Verificar conclusão - TODOS os elementos da família atual devem estar colocados
        if (placedElements === currentElements.length) {
            stopTimer();
            setTimeout(showCompletionMessage, 500);
        }
    } else {
        // MODIFICADO: Erro - penalidade de -10 pontos e feedback visual
        currentScore = Math.max(0, currentScore - 10); // -10 pontos por erro
        updateCurrentStats();
        
        slot.style.background = '#ffebee';
        setTimeout(() => {
            slot.style.background = slot.classList.contains('filled') ? '#e8f5e9' : '#f0f0ff';
        }, 300);
    }
}

// ============================================
// PROGRESSO E FEEDBACK
// ============================================
function updateProgress() {
    const percentage = (placedElements / currentElements.length) * 100;
    DOM.progressBar.style.width = `${percentage}%`;
    DOM.progressBar.textContent = `${placedElements} / ${currentElements.length}`;
}

// ============================================
// MODAIS E MENSAGENS
// ============================================
function showElementInfo(element) {
    DOM.modalTitle.textContent = `${element.symbol} - ${element.name}`;
    DOM.modalBody.innerHTML = `
        <div class="element-info-correct">
            <p class="correct-badge">✅ Correto! +100 pontos</p>
            <p><strong>Número Atômico:</strong> ${element.number}</p>
            <p><strong>Massa Atômica:</strong> ${element.mass} u</p>
            <p><strong>Período:</strong> ${element.period}</p>
            <p><strong>Grupo:</strong> ${element.group}</p>
            <hr style="margin: 15px 0; border: none; border-top: 1px solid #eee;">
            <p><strong>Descrição:</strong> ${element.description}</p>
            <p><strong>Propriedades:</strong> ${element.properties}</p>
            <p><strong>Descoberta:</strong> ${element.discovery}</p>
        </div>
    `;
    openModal();
}

function showCompletionMessage() {
    const timeElapsed = getElapsedTime();
    
    // Atualizar pontuação global
    totalScore += currentScore;
    
    // Verificar se a família foi 100% completada
    const familyElementNumbers = currentFamily.elements.map(el => el.number);
    const isFamilyComplete = familyElementNumbers.every(num => completedElements.has(num));
    
    if (isFamilyComplete && !completedFamilies.has(currentFamily.name)) {
        completedFamilies.add(currentFamily.name);
    }
    
    // Salvar progresso
    saveProgress();
    
    // VERIFICAR SE COMPLETOU TODA A TABELA (118 elementos)
    if (completedElements.size === 118) {
        showFullTableCompletionMessage();
        return;
    }
    
    // Atualizar modal de vitória
    document.getElementById('finalScore').textContent = currentScore;
    document.getElementById('finalTime').textContent = formatTime(timeElapsed);
    document.getElementById('finalHints').textContent = hintsUsed;
    
    // Abrir modal de vitória
    DOM.victoryModal.classList.add('active');
}

function showFullTableCompletionMessage() {
    document.getElementById('completeTotalScore').textContent = totalScore.toLocaleString();
    DOM.completeModal.classList.add('active');
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function openModal() {
    DOM.infoModal.classList.add('active');
}

function closeModal() {
    DOM.infoModal.classList.remove('active');
}

function closeVictoryModal() {
    DOM.victoryModal.classList.remove('active');
    backToMenu();
}

function closeCompleteModal() {
    DOM.completeModal.classList.remove('active');
    backToMenu();
}

// ============================================
// UTILITÁRIOS
// ============================================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para verificar elementos faltantes
function checkMissingElements() {
    const allElements = new Set();
    for (const family of Object.values(FAMILIES_DATA)) {
        family.elements.forEach(el => allElements.add(el.number));
    }
    
    const elementsArray = Array.from(allElements).sort((a, b) => a - b);
    
    const missing = [];
    for (let i = 1; i <= 118; i++) {
        if (!allElements.has(i)) {
            missing.push(i);
        }
    }
    
    console.log('═══════════════════════════════════════');
    console.log('📊 VERIFICAÇÃO DA TABELA PERIÓDICA');
    console.log('═══════════════════════════════════════');
    console.log('Total de elementos únicos:', allElements.size);
    console.log('Elementos cadastrados:', elementsArray);
    
    if (missing.length > 0) {
        console.warn('⚠️ ELEMENTOS FALTANDO:', missing);
        console.log('Faltam', missing.length, 'elementos para completar os 118');
    } else {
        console.log('✅ Todos os 118 elementos estão cadastrados!');
    }
    console.log('═══════════════════════════════════════');
    
    return {
        total: allElements.size,
        elements: elementsArray,
        missing: missing
    };
}
