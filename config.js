// ==============================================================================
// CONFIGURAÇÕES DA SUA PÁGINA DE VENDAS / QUIZ
// ==============================================================================
// Personalize aqui seus links e integrações.
// Todas as UTMs e links do criador antigo foram 100% removidos.

const APP_CONFIG = {
  // 1. LINK DE CHECKOUT:
  checkoutUrl: "https://pay.lojou.app/u7vCR",

  // 2. BACK REDIRECT (Opcional):
  // Se o usuário clicar no botão voltar do navegador, você pode redirecioná-lo para outra oferta
  backRedirectUrl: "", // Exemplo: "https://seusite.com/oferta-especial"

  // 3. META PIXEL / FACEBOOK PIXEL ID (Opcional):
  // Se desejar rastrear PageView e eventos via Meta Pixel
  pixelId: "", // Exemplo: "123456789012345"

  // 4. PRESERVAR PARÂMETROS UTM:
  // Se estiver ativado, todos os parâmetros da URL (utm_source, utm_campaign, fbclid, etc.)
  // serão repassados automaticamente para o link do checkout ao clicar no botão final!
  forwardUtmParams: true,

  // 5. CONFIGURAÇÕES VISUAIS & ÁUDIO:
  enableAudio: true,                   // Som de mensagem do WhatsApp
  minTypingDelayMs: 1600,              // Tempo mínimo de digitação
  doctorName: "Dr. Carlos M. Nhantumbo",// Nome do especialista
  doctorTitle: "Psicólogo & Especialista em Relacionamentos"
};
