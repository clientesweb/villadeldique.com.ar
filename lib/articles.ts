interface Article {
  id: number
  slug: string
  title: string
  description: string
  image: string
  fullContent: string
  category: string
  subtitle?: string
  importantFact?: string
}

export const ARTICLES_VARIOS: Article[] = [
  {
    id: 1,
    title: "El Parque Histórico de Villa del Dique",
    description:
      "Descubre la rica historia del Parque Histórico de Villa del Dique y los emocionantes proyectos que están surgiendo en sus alrededores.",
    image:
      "https://images.unsplash.com/photo-1566138686123-f8910b21e696?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    slug: "parque-historico-villa-del-dique",
    category: "turismo",
    subtitle: "Historia y Modernidad en el Corazón de Villa del Dique",
    importantFact: "El Parque Histórico recibe más de 50,000 visitantes al año.",
    fullContent: `
    Villa del Dique, una joya escondida en el corazón de Córdoba, es reconocida por su belleza natural y su rico patrimonio cultural. En el centro de esta hermosa localidad se encuentra el Parque Histórico, un testimonio vivo de la historia de la ciudad y un punto focal para el turismo y la cultura local.

    Historia del Parque Histórico:

    1. Orígenes:
    - El área fue originalmente un punto de encuentro para los habitantes locales
    - Posteriormente, se estableció como parque municipal

    2. Desarrollo:
    - En los años 50, se comenzó la planificación del parque actual
    - Se incorporaron elementos históricos y culturales significativos

    3. Evolución:
    - A lo largo de las décadas, el parque ha sido testigo del crecimiento de Villa del Dique
    - Los edificios históricos y monumentos rodean el parque, creando un mosaico histórico

    4. Preservación:
    - Se han llevado a cabo importantes trabajos de restauración y conservación
    - Se han implementado políticas para preservar la autenticidad histórica del área

    5. Actualidad:
    - El parque es ahora un centro cultural y turístico importante
    - Se realizan eventos y actividades culturales regularmente

    Importancia cultural y turística:

    1. Centro de actividades:
    - El parque es escenario de numerosos eventos culturales y festivales
    - Artistas y artesanos locales exponen sus obras

    2. Atracción turística:
    - Miles de turistas visitan el parque anualmente
    - Punto de partida para tours históricos y culturales

    3. Espacio comunitario:
    - Los habitantes consideran el parque como el corazón de su ciudad
    - Lugar de encuentro para familias y eventos comunitarios

    Conclusión:

    El Parque Histórico de Villa del Dique continúa siendo el corazón palpitante de esta hermosa ciudad. Su importancia histórica y cultural lo convierte en un destino imprescindible para visitantes y residentes por igual.
    `,
  },
]

