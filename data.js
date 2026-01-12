/**
 * =============================================
 * DADOS DOS ELEMENTOS QUÍMICOS - PARTE 1
 * Tabela Periódica Interativa - TCC
 * =============================================

 */

const FAMILIES_DATA = {
    'gases-nobres': {
        name: 'Gases Nobres',
        group: 18,
        icon: '⚛️',
        elements: [
            { number: 2, symbol: 'He', name: 'Hélio', mass: '4.003', period: 1, group: 18,
              description: 'Segundo elemento mais leve e abundante no universo. Usado em balões, dirigíveis e equipamentos criogênicos.',
              properties: 'Gás incolor, inodoro e insípido. Não reage com outros elementos em condições normais.',
              discovery: 'Descoberto em 1868 por Pierre Janssen e Norman Lockyer durante um eclipse solar.' },
            { number: 10, symbol: 'Ne', name: 'Neônio', mass: '20.180', period: 2, group: 18,
              description: 'Famoso pelo uso em letreiros luminosos. Produz luz vermelha-alaranjada quando eletrificado.',
              properties: 'Gás incolor em condições normais. É o segundo gás mais leve depois do hélio.',
              discovery: 'Descoberto em 1898 por William Ramsay e Morris Travers em Londres.' },
            { number: 18, symbol: 'Ar', name: 'Argônio', mass: '39.948', period: 3, group: 18,
              description: 'Terceiro gás mais abundante na atmosfera terrestre (0,93%). Usado em lâmpadas incandescentes e soldagem.',
              properties: 'Inerte, incolor e inodoro. Mais denso que o ar.',
              discovery: 'Descoberto em 1894 por Lord Rayleigh e William Ramsay.' },
            { number: 36, symbol: 'Kr', name: 'Criptônio', mass: '83.798', period: 4, group: 18,
              description: 'Usado em lâmpadas fluorescentes de alta eficiência e em lasers. Nome significa "escondido" em grego.',
              properties: 'Gás incolor com linhas espectrais características verde e laranja.',
              discovery: 'Descoberto em 1898 por William Ramsay e Morris Travers.' },
            { number: 54, symbol: 'Xe', name: 'Xenônio', mass: '131.293', period: 5, group: 18,
              description: 'Usado em lâmpadas de alta intensidade, lasers e propulsão espacial (motores iônicos).',
              properties: 'Pode formar compostos com flúor e oxigênio, diferente dos outros gases nobres mais leves.',
              discovery: 'Descoberto em 1898 por William Ramsay e Morris Travers.' },
            { number: 86, symbol: 'Rn', name: 'Radônio', mass: '222', period: 6, group: 18,
              description: 'Único gás nobre radioativo. Pode se acumular em porões e representa risco à saúde.',
              properties: 'Radioativo, incolor e inodoro. Todos os seus isótopos são radioativos.',
              discovery: 'Descoberto em 1899 por Ernest Rutherford e Robert B. Owens.' }
        ]
    },

    'metais-alcalinos': {
        name: 'Metais Alcalinos',
        group: 1,
        icon: '🔥',
        elements: [
            { number: 3, symbol: 'Li', name: 'Lítio', mass: '6.941', period: 2, group: 1,
              description: 'Metal mais leve. Usado em baterias recarregáveis, especialmente em dispositivos eletrônicos e veículos elétricos.',
              properties: 'Metal macio, prateado. Altamente reativo, especialmente com água. Flutua na água.',
              discovery: 'Descoberto em 1817 por Johan August Arfwedson na Suécia.' },
            { number: 11, symbol: 'Na', name: 'Sódio', mass: '22.990', period: 3, group: 1,
              description: 'Essencial para a vida. Usado na produção de sabão, vidro e como sal de cozinha (NaCl).',
              properties: 'Metal macio e prateado. Reage violentamente com água produzindo hidrogênio.',
              discovery: 'Isolado em 1807 por Humphry Davy através de eletrólise.' },
            { number: 19, symbol: 'K', name: 'Potássio', mass: '39.098', period: 4, group: 1,
              description: 'Essencial para funções nervosas e musculares. Usado em fertilizantes e em células vivas.',
              properties: 'Metal macio e prateado. Reage explosivamente com água. Oxida rapidamente no ar.',
              discovery: 'Isolado em 1807 por Humphry Davy, uma semana após descobrir o sódio.' },
            { number: 37, symbol: 'Rb', name: 'Rubídio', mass: '85.468', period: 5, group: 1,
              description: 'Usado em relógios atômicos de alta precisão e em células fotoelétricas.',
              properties: 'Metal prateado-branco muito macio. Inflama espontaneamente ao ar.',
              discovery: 'Descoberto em 1861 por Robert Bunsen e Gustav Kirchhoff usando espectroscopia.' },
            { number: 55, symbol: 'Cs', name: 'Césio', mass: '132.905', period: 6, group: 1,
              description: 'Usado no padrão de tempo (segundo) e em equipamentos de perfuração de petróleo.',
              properties: 'Metal dourado e macio. Um dos metais mais reativos. Derrete próximo à temperatura ambiente.',
              discovery: 'Descoberto em 1860 por Robert Bunsen e Gustav Kirchhoff.' },
            { number: 87, symbol: 'Fr', name: 'Frâncio', mass: '223', period: 7, group: 1,
              description: 'Elemento extremamente raro e radioativo. Menos de 30g existem na Terra a qualquer momento.',
              properties: 'Metal altamente radioativo. O segundo elemento mais raro depois do astato.',
              discovery: 'Descoberto em 1939 por Marguerite Perey na França.' }
        ]
    },

    'metais-alcalino-terrosos': {
        name: 'Metais Alcalino-Terrosos',
        group: 2,
        icon: '💎',
        elements: [
            { number: 4, symbol: 'Be', name: 'Berílio', mass: '9.012', period: 2, group: 2,
              description: 'Usado em ligas aeroespaciais, raios-X e componentes eletrônicos de alta performance.',
              properties: 'Metal leve, duro e quebradiço. Tem alta resistência e ponto de fusão elevado.',
              discovery: 'Descoberto em 1798 por Louis-Nicolas Vauquelin.' },
            { number: 12, symbol: 'Mg', name: 'Magnésio', mass: '24.305', period: 3, group: 2,
              description: 'Usado em ligas leves para aviação, fogos de artifício e suplementos nutricionais.',
              properties: 'Metal prateado, leve e relativamente forte. Queima com chama branca brilhante.',
              discovery: 'Isolado em 1808 por Humphry Davy.' },
            { number: 20, symbol: 'Ca', name: 'Cálcio', mass: '40.078', period: 4, group: 2,
              description: 'Essencial para ossos e dentes. Usado em cimento, gesso e como suplemento alimentar.',
              properties: 'Metal prateado, macio e moderadamente reativo. Essencial para a vida.',
              discovery: 'Isolado em 1808 por Humphry Davy.' },
            { number: 38, symbol: 'Sr', name: 'Estrôncio', mass: '87.62', period: 5, group: 2,
              description: 'Usado em fogos de artifício (cor vermelha), tubos de TV e estudos ósseos em medicina.',
              properties: 'Metal prateado-amarelado. Reage vigorosamente com água.',
              discovery: 'Descoberto em 1790 por Adair Crawford e William Cruickshank.' },
            { number: 56, symbol: 'Ba', name: 'Bário', mass: '137.327', period: 6, group: 2,
              description: 'Usado em exames de raio-X do sistema digestivo e em fogos de artifício (cor verde).',
              properties: 'Metal prateado-branco e macio. Muito reativo, especialmente com água.',
              discovery: 'Isolado em 1808 por Humphry Davy.' },
            { number: 88, symbol: 'Ra', name: 'Rádio', mass: '226', period: 7, group: 2,
              description: 'Elemento radioativo. Historicamente usado em tintas luminosas, hoje em radioterapia.',
              properties: 'Metal altamente radioativo. Brilha fracamente no escuro.',
              discovery: 'Descoberto em 1898 por Marie e Pierre Curie.' }
        ]
    },

    'halogenios': {
        name: 'Halogênios',
        group: 17,
        icon: '☢️',
        elements: [
            { number: 9, symbol: 'F', name: 'Flúor', mass: '18.998', period: 2, group: 17,
              description: 'Elemento mais eletronegativo. Usado em pasta de dente, teflon e urânio enriquecido.',
              properties: 'Gás amarelo-pálido extremamente reativo e tóxico.',
              discovery: 'Isolado em 1886 por Henri Moissan.' },
            { number: 17, symbol: 'Cl', name: 'Cloro', mass: '35.453', period: 3, group: 17,
              description: 'Usado na desinfecção de água, produção de PVC e alvejantes.',
              properties: 'Gás amarelo-esverdeado com odor forte e irritante. Muito tóxico.',
              discovery: 'Descoberto em 1774 por Carl Wilhelm Scheele.' },
            { number: 35, symbol: 'Br', name: 'Bromo', mass: '79.904', period: 4, group: 17,
              description: 'Usado em retardantes de chamas, medicamentos e fotografia.',
              properties: 'Líquido vermelho-acastanhado. Único não-metal líquido à temperatura ambiente.',
              discovery: 'Descoberto em 1826 por Antoine Jérôme Balard.' },
            { number: 53, symbol: 'I', name: 'Iodo', mass: '126.904', period: 5, group: 17,
              description: 'Essencial para a tireoide. Usado como antisséptico e em sal iodado.',
              properties: 'Sólido cinza-escuro que sublima formando vapor violeta.',
              discovery: 'Descoberto em 1811 por Bernard Courtois.' },
            { number: 85, symbol: 'At', name: 'Astato', mass: '210', period: 6, group: 17,
              description: 'Elemento mais raro na Terra. Radioativo e usado em pesquisas.',
              properties: 'Altamente radioativo. Propriedades pouco conhecidas.',
              discovery: 'Sintetizado em 1940 por Dale R. Corson e colaboradores.' }
        ]
    },

    'calcogenios': {
        name: 'Calcogênios',
        group: 16,
        icon: '🌍',
        elements: [
            { number: 8, symbol: 'O', name: 'Oxigênio', mass: '15.999', period: 2, group: 16,
              description: 'Essencial para a respiração e combustão. Elemento mais abundante na crosta terrestre.',
              properties: 'Gás incolor, inodoro e insípido. Forma 21% do ar.',
              discovery: 'Descoberto por Carl Wilhelm Scheele (1772) e Joseph Priestley (1774).' },
            { number: 16, symbol: 'S', name: 'Enxofre', mass: '32.065', period: 3, group: 16,
              description: 'Usado na produção de ácido sulfúrico, borracha vulcanizada e fertilizantes.',
              properties: 'Sólido amarelo não-metálico. Queima com chama azul.',
              discovery: 'Conhecido desde a antiguidade.' },
            { number: 34, symbol: 'Se', name: 'Selênio', mass: '78.96', period: 4, group: 16,
              description: 'Usado em células solares, fotocopiadoras e suplementos nutricionais.',
              properties: 'Semimetal cinza. Condutor quando exposto à luz.',
              discovery: 'Descoberto em 1817 por Jöns Jacob Berzelius.' },
            { number: 52, symbol: 'Te', name: 'Telúrio', mass: '127.60', period: 5, group: 16,
              description: 'Usado em ligas de aço e cobre, células solares e dispositivos termoelétricos.',
              properties: 'Semimetal prateado-branco, quebradiço.',
              discovery: 'Descoberto em 1782 por Franz-Joseph Müller von Reichenstein.' },
            { number: 84, symbol: 'Po', name: 'Polônio', mass: '209', period: 6, group: 16,
              description: 'Elemento altamente radioativo e tóxico.',
              properties: 'Metal radioativo prateado. Extremamente perigoso.',
              discovery: 'Descoberto em 1898 por Marie e Pierre Curie.' }
        ]
    }
};
