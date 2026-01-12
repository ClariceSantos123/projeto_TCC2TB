/**
 * =============================================
 * DADOS DOS ELEMENTOS QUÍMICOS - PARTE 2
 * Famílias 13-15 e Metais de Transição 3-7
 * =============================================
 
 */

// Adicionar ao objeto FAMILIES_DATA
Object.assign(FAMILIES_DATA, {

    'familia-carbono': {
        name: 'Família do Carbono',
        group: 14,
        icon: '💎',
        elements: [
            { number: 6, symbol: 'C', name: 'Carbono', mass: '12.011', period: 2, group: 14,
              description: 'Base de toda a vida na Terra. Forma mais compostos que qualquer outro elemento.',
              properties: 'Existe em várias formas: diamante, grafite, grafeno.',
              discovery: 'Conhecido desde a pré-história na forma de carvão.' },
            { number: 14, symbol: 'Si', name: 'Silício', mass: '28.086', period: 3, group: 14,
              description: 'Segundo elemento mais abundante na crosta terrestre. Base da indústria de semicondutores.',
              properties: 'Semimetal duro e quebradiço com brilho metálico azulado.',
              discovery: 'Isolado em 1824 por Jöns Jacob Berzelius.' },
            { number: 32, symbol: 'Ge', name: 'Germânio', mass: '72.64', period: 4, group: 14,
              description: 'Usado em fibras ópticas, detectores de infravermelho e células solares.',
              properties: 'Semimetal cinza-prateado, duro e quebradiço.',
              discovery: 'Descoberto em 1886 por Clemens Winkler.' },
            { number: 50, symbol: 'Sn', name: 'Estanho', mass: '118.710', period: 5, group: 14,
              description: 'Usado em soldas, revestimentos anticorrosivos e ligas (bronze).',
              properties: 'Metal prateado, macio e maleável.',
              discovery: 'Conhecido desde a antiguidade, antes de 3000 a.C.' },
            { number: 82, symbol: 'Pb', name: 'Chumbo', mass: '207.2', period: 6, group: 14,
              description: 'Usado em baterias, proteção contra radiação. Tóxico para humanos.',
              properties: 'Metal pesado, macio e maleável. Alta densidade.',
              discovery: 'Conhecido desde a antiguidade.' }
        ]
    },

    'familia-nitrogenio': {
        name: 'Família do Nitrogênio',
        group: 15,
        icon: '🧬',
        elements: [
            { number: 7, symbol: 'N', name: 'Nitrogênio', mass: '14.007', period: 2, group: 15,
              description: 'Forma 78% da atmosfera. Essencial para proteínas e DNA.',
              properties: 'Gás incolor, inodoro e relativamente inerte.',
              discovery: 'Descoberto em 1772 por Daniel Rutherford.' },
            { number: 15, symbol: 'P', name: 'Fósforo', mass: '30.974', period: 3, group: 15,
              description: 'Essencial para DNA, RNA e ATP. Usado em fertilizantes.',
              properties: 'Existe em várias formas: branco (tóxico) e vermelho (estável).',
              discovery: 'Descoberto em 1669 por Hennig Brand.' },
            { number: 33, symbol: 'As', name: 'Arsênio', mass: '74.922', period: 4, group: 15,
              description: 'Usado em semicondutores e pesticidas. Historicamente conhecido como veneno.',
              properties: 'Semimetal cinza metálico. Tóxico.',
              discovery: 'Conhecido desde a antiguidade.' },
            { number: 51, symbol: 'Sb', name: 'Antimônio', mass: '121.760', period: 5, group: 15,
              description: 'Usado em ligas (baterias), retardantes de chamas e semicondutores.',
              properties: 'Semimetal prateado-azulado, quebradiço.',
              discovery: 'Conhecido desde a antiguidade.' },
            { number: 83, symbol: 'Bi', name: 'Bismuto', mass: '208.980', period: 6, group: 15,
              description: 'Usado em cosméticos, medicamentos (Pepto-Bismol) e ligas.',
              properties: 'Metal pesado e quebradiço com tom rosado.',
              discovery: 'Identificado por Claude François Geoffroy em 1753.' }
        ]
    },

    'familia-boro': {
        name: 'Família do Boro',
        group: 13,
        icon: '⚡',
        elements: [
            { number: 5, symbol: 'B', name: 'Boro', mass: '10.811', period: 2, group: 13,
              description: 'Usado em fibras de vidro, detergentes e cosméticos.',
              properties: 'Semimetal duro e preto em forma cristalina.',
              discovery: 'Isolado em 1808 por Humphry Davy e outros.' },
            { number: 13, symbol: 'Al', name: 'Alumínio', mass: '26.982', period: 3, group: 13,
              description: 'Metal mais abundante na crosta terrestre. Usado em embalagens e construção.',
              properties: 'Metal leve, macio, maleável e resistente à corrosão.',
              discovery: 'Isolado em 1825 por Hans Christian Ørsted.' },
            { number: 31, symbol: 'Ga', name: 'Gálio', mass: '69.723', period: 4, group: 13,
              description: 'Usado em semicondutores, LEDs e células solares.',
              properties: 'Metal que derrete na mão (ponto de fusão 29,76°C).',
              discovery: 'Descoberto em 1875 por Paul-Émile Lecoq de Boisbaudran.' },
            { number: 49, symbol: 'In', name: 'Índio', mass: '114.818', period: 5, group: 13,
              description: 'Usado em telas touchscreen, LCDs e LEDs.',
              properties: 'Metal macio e maleável. Emite um som ao ser dobrado.',
              discovery: 'Descoberto em 1863 por Ferdinand Reich.' },
            { number: 81, symbol: 'Tl', name: 'Tálio', mass: '204.383', period: 6, group: 13,
              description: 'Usado em detectores de radiação. Altamente tóxico.',
              properties: 'Metal macio e maleável. Extremamente venenoso.',
              discovery: 'Descoberto em 1861 por William Crookes.' }
        ]
    },

    'grupo-escandio': {
        name: 'Grupo do Escândio',
        group: 3,
        icon: '🔬',
        elements: [
            { number: 21, symbol: 'Sc', name: 'Escândio', mass: '44.956', period: 4, group: 3,
              description: 'Usado em ligas de alumínio para aeronaves e equipamentos esportivos.',
              properties: 'Metal leve, prateado. Oxida ao ar.',
              discovery: 'Descoberto em 1879 por Lars Fredrik Nilson.' },
            { number: 39, symbol: 'Y', name: 'Ítrio', mass: '88.906', period: 5, group: 3,
              description: 'Usado em LEDs, lasers e supercondutores.',
              properties: 'Metal prateado, macio e altamente cristalino.',
              discovery: 'Descoberto em 1794 por Johan Gadolin.' }
        ]
    },

    'grupo-titanio': {
        name: 'Grupo do Titânio',
        group: 4,
        icon: '✈️',
        elements: [
            { number: 22, symbol: 'Ti', name: 'Titânio', mass: '47.867', period: 4, group: 4,
              description: 'Metal super resistente e leve. Usado em aeronaves e implantes médicos.',
              properties: 'Metal prateado, forte, leve e resistente à corrosão.',
              discovery: 'Descoberto em 1791 por William Gregor.' },
            { number: 40, symbol: 'Zr', name: 'Zircônio', mass: '91.224', period: 5, group: 4,
              description: 'Usado em reatores nucleares, cerâmicas e joias.',
              properties: 'Metal cinza-prateado, dúctil e resistente à corrosão.',
              discovery: 'Descoberto em 1789 por Martin Heinrich Klaproth.' },
            { number: 72, symbol: 'Hf', name: 'Háfnio', mass: '178.49', period: 6, group: 4,
              description: 'Usado em barras de controle de reatores nucleares.',
              properties: 'Metal prateado brilhante. Absorve nêutrons.',
              discovery: 'Descoberto em 1923 por Dirk Coster e George de Hevesy.' }
        ]
    },

    'grupo-vanadio': {
        name: 'Grupo do Vanádio',
        group: 5,
        icon: '⚙️',
        elements: [
            { number: 23, symbol: 'V', name: 'Vanádio', mass: '50.942', period: 4, group: 5,
              description: 'Usado em ligas de aço de alta resistência e ferramentas.',
              properties: 'Metal cinza-prateado, dúctil e maleável.',
              discovery: 'Descoberto em 1801 por Andrés Manuel del Río.' },
            { number: 41, symbol: 'Nb', name: 'Nióbio', mass: '92.906', period: 5, group: 5,
              description: 'Usado em supercondutores, ligas aeroespaciais e joias.',
              properties: 'Metal cinza, macio e dúctil. Supercondutor.',
              discovery: 'Descoberto em 1801 por Charles Hatchett.' },
            { number: 73, symbol: 'Ta', name: 'Tântalo', mass: '180.948', period: 6, group: 5,
              description: 'Usado em capacitores eletrônicos e implantes médicos.',
              properties: 'Metal cinza-azul, duro e resistente à corrosão.',
              discovery: 'Descoberto em 1802 por Anders Gustaf Ekeberg.' }
        ]
    },

    'grupo-cromo': {
        name: 'Grupo do Cromo',
        group: 6,
        icon: '✨',
        elements: [
            { number: 24, symbol: 'Cr', name: 'Cromo', mass: '51.996', period: 4, group: 6,
              description: 'Usado em cromagem, aço inoxidável e pigmentos.',
              properties: 'Metal cinza duro e brilhante. Resistente à corrosão.',
              discovery: 'Descoberto em 1797 por Louis Nicolas Vauquelin.' },
            { number: 42, symbol: 'Mo', name: 'Molibdênio', mass: '95.95', period: 5, group: 6,
              description: 'Usado em ligas de aço de alta resistência e catalisadores.',
              properties: 'Metal cinza prateado, duro. Alto ponto de fusão.',
              discovery: 'Descoberto em 1778 por Carl Wilhelm Scheele.' },
            { number: 74, symbol: 'W', name: 'Tungstênio', mass: '183.84', period: 6, group: 6,
              description: 'Maior ponto de fusão de todos os metais. Usado em filamentos de lâmpadas.',
              properties: 'Metal cinza-branco, extremamente duro. Ponto de fusão: 3422°C.',
              discovery: 'Isolado em 1783 por Juan José e Fausto Elhuyar.' }
        ]
    },

    'grupo-manganes': {
        name: 'Grupo do Manganês',
        group: 7,
        icon: '🔋',
        elements: [
            { number: 25, symbol: 'Mn', name: 'Manganês', mass: '54.938', period: 4, group: 7,
              description: 'Essencial para produção de aço e baterias alcalinas.',
              properties: 'Metal cinza-prateado, duro e quebradiço.',
              discovery: 'Isolado em 1774 por Johan Gottlieb Gahn.' },
            { number: 43, symbol: 'Tc', name: 'Tecnécio', mass: '98', period: 5, group: 7,
              description: 'Primeiro elemento artificial. Usado em medicina nuclear.',
              properties: 'Metal radioativo cinza prateado.',
              discovery: 'Sintetizado em 1937 por Carlo Perrier e Emilio Segrè.' },
            { number: 75, symbol: 'Re', name: 'Rênio', mass: '186.207', period: 6, group: 7,
              description: 'Um dos metais mais raros. Usado em turbinas e catalisadores.',
              properties: 'Metal prateado denso. Terceiro maior ponto de fusão.',
              discovery: 'Descoberto em 1925 por Walter Noddack e colaboradores.' }
        ]
    }
});
