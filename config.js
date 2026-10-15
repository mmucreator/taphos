// ============================================================
//  CONFIGURAÇÃO DAS IMAGENS DO TAPHOS
//  Coloque os arquivos nas pastas e ajuste os nomes abaixo.
//  Imagem que não existir: o espaço fica vazio (ou com texto).
// ============================================================
window.ASSETS = {
  // true = os casos de cada fase aparecem em ordem diferente a cada partida (as fases seguem na ordem).
  // false = sempre a mesma ordem do casos.js.
  embaralharCasos: true,

  // Fonte do título "Taphos". Escreva o nome exato de uma fonte do fonts.google.com.
  // Sugestões: 'Rubik Dirt', 'Bagel Fat One', 'Chango', 'Lilita One', 'Caprasimo', 'Modak', 'Rubik Wet Paint'
  fonteTitulo: 'Rubik Dirt',

  // Se true, usa emojis enquanto você não colocar as imagens (bom para testar).
  emojiReserva: false,

  // Fundo feito no Canva (JPG ou PNG, 1920x1080, idealmente < 500 KB).
  fundo: 'assets/fundo.png',
  // true = cada ambiente vira o fundo durante a partida.
  fundoPorAmbiente: false,
  // Clareamento do fundo para o texto ficar legível: 0 a 1.
  veu: 0.5,

  // Fósseis reais que representam cada organismo (proporção 4:3).
  organismos: {
    peixe: 'assets/organismos/peixe.jpg',
    anfibio: 'assets/organismos/anfibio.jpg',
    reptil: 'assets/organismos/reptil.jpg',
    inseto: 'assets/organismos/inseto.jpg',
    folha: 'assets/organismos/folha.jpg',
    molusco: 'assets/organismos/molusco.jpg'
  },

  // Ambientes (proporção 4:3).
  ambientes: {
    lago: 'assets/ambientes/lago.jpg',
    rio: 'assets/ambientes/rio.jpg',
    mar: 'assets/ambientes/mar.jpg',
    planicie: 'assets/ambientes/planicie.jpg',
    deserto: 'assets/ambientes/deserto.jpg',
    floresta: 'assets/ambientes/floresta.jpg'
  },

  // Ícones dos elementos do esqueleto (quadrados, PNG com fundo transparente, ~256x256).
  // A mesma imagem vale para todos os organismos que têm aquele elemento.
  // Para uma imagem só de um organismo, use a chave 'organismo/elemento',
  // por exemplo 'peixe/cranio': 'assets/partes/cranio-peixe.png'.
  partes: {
    'cranio': 'assets/partes/cranio.png',
    'vertebras': 'assets/partes/vertebras.png',
    'escamas': 'assets/partes/escamas.png',
    'nadadeiras': 'assets/partes/nadadeiras.png',
    'dentes': 'assets/partes/dentes.png',
    'membros': 'assets/partes/membros.png',
    'osteodermas': 'assets/partes/osteodermas.png',
    'impressao-de-tecido-mole': 'assets/partes/impressao-tecido-mole.png',
    'impressao-de-pele': 'assets/partes/impressao-pele.png',
    'asas': 'assets/partes/asas.png',
    'exoesqueleto': 'assets/partes/exoesqueleto.png',
    'pernas': 'assets/partes/pernas.png',
    'antenas': 'assets/partes/antenas.png',
    'lamina': 'assets/partes/lamina.png',
    'nervuras': 'assets/partes/nervuras.png',
    'peciolo': 'assets/partes/peciolo.png',
    'cuticula': 'assets/partes/cuticula.png',
    'concha': 'assets/partes/concha.png',
    'molde-interno': 'assets/partes/molde-interno.png',
    'impressao-de-manto': 'assets/partes/impressao-manto.png'
  },

  // Ícones dos eventos (quadrados, ~256x256).
  eventos: {
    drown: 'assets/eventos/afogamento.png',
    pred: 'assets/eventos/predacao.png',
    mass: 'assets/eventos/mortandade.png',
    anox: 'assets/eventos/agua-anoxica.png',
    scav: 'assets/eventos/necrofagos.png',
    sun: 'assets/eventos/exposicao-sol.png',
    bact: 'assets/eventos/decomposicao.png',
    flood: 'assets/eventos/enchente.png',
    weak: 'assets/eventos/correnteza-fraca.png',
    none: 'assets/eventos/sem-transporte.png',
    fast: 'assets/eventos/soterramento-rapido.png',
    slow: 'assets/eventos/soterramento-lento.png',
    burrow: 'assets/eventos/bioturbacao.png',
    perm: 'assets/eventos/permineralizacao.png',
    comp: 'assets/eventos/compactacao.png',
    diss: 'assets/eventos/dissolucao.png',
    eros: 'assets/eventos/erosao.png',
    dig: 'assets/eventos/escavacao.png',
    weath: 'assets/eventos/intemperismo.png'
  },

  // Legendas e créditos (opcional), com a chave do organismo ou ambiente.
  legendas: {
    // peixe: 'Dastilbe sp., Formação Crato. Foto: Nome / Museu',
  }
};
