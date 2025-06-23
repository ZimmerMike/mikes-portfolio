export interface InfoCardProps {
  title: string;                   // Título principal (nombre del proyecto, puesto, etc.)
  subtitle?: string;              // Subtítulo opcional (empresa, institución, plataforma)
  period?: string;                // Periodo o fecha ("2022 - Actualidad", "Ene 2023")
  description?: string;           // Texto descriptivo o resumen
  tags?: string[];                // Etiquetas o tecnologías usadas
  link?: string;                  // URL para proyecto, certificado, etc.
  repoLink?: string;                  // URL para proyecto, certificado, etc.
  icon?: React.ReactNode;         // Ícono o imagen decorativa opcional
  variant?: 'default' | 'small';  // Tamaño o estilo si lo quieres modificar por sección
}