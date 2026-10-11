// Motor Interativo do Quiz - Clonagem Perfeita e Autônoma
document.addEventListener('DOMContentLoaded', () => {
  const chatScrollArea = document.getElementById('chat-scroll-area');
  const optionsPanel = document.getElementById('options-panel');
  const statusElement = document.getElementById('wa-contact-status');
  const notificationAudio = document.getElementById('wa-notification-audio');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  let currentStepIndex = 0;
  let selectedGender = 'homem';
  let isAudioUnlocked = false;

  function getCurrentSteps() {
    if (typeof getQuizSteps === 'function') {
      return getQuizSteps(selectedGender);
    }
    return QUIZ_STEPS;
  }

  // Tentar tocar som com segurança
  function playNotificationSound() {
    if (!APP_CONFIG.enableAudio || !notificationAudio) return;
    try {
      notificationAudio.currentTime = 0;
      const playPromise = notificationAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay restrito pelo navegador antes da primeira interação
        });
      }
    } catch (e) {}
  }

  // Desbloqueia áudio no primeiro clique do usuário
  document.body.addEventListener('click', () => {
    if (!isAudioUnlocked && notificationAudio) {
      notificationAudio.play().then(() => {
        notificationAudio.pause();
        notificationAudio.currentTime = 0;
        isAudioUnlocked = true;
      }).catch(() => {});
    }
  }, { once: true });

  // Formatar hora atual HH:MM
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  // Rolar suavemente para o final da conversa
  function scrollToBottom() {
    setTimeout(() => {
      chatScrollArea.scrollTop = chatScrollArea.scrollHeight;
    }, 50);
  }

  // Exibir balão de "digitando..."
  function showTypingIndicator() {
    statusElement.textContent = 'digitando...';
    statusElement.classList.add('typing');

    const typingRow = document.createElement('div');
    typingRow.className = 'message-row host';
    typingRow.id = 'active-typing-indicator';
    typingRow.innerHTML = `
      <div class="typing-bubble">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    chatScrollArea.appendChild(typingRow);
    scrollToBottom();
  }

  // Remover indicador de digitação
  function hideTypingIndicator() {
    statusElement.textContent = APP_CONFIG.doctorTitle;
    statusElement.classList.remove('typing');
    const indicator = document.getElementById('active-typing-indicator');
    if (indicator) indicator.remove();
  }

  // Adicionar mensagem do Dr. Carlos ao chat
  function appendHostMessage(msg) {
    const row = document.createElement('div');
    row.className = 'message-row host';

    let contentHtml = '';
    if (msg.type === 'text') {
      contentHtml = `<div class="bubble-content">${msg.content}</div>`;
    } else if (msg.type === 'image') {
      contentHtml = `
        <div class="bubble-image-wrapper" onclick="window.openLightbox('${msg.url}')">
          <img src="${msg.url}" alt="Imagem do Plano" loading="lazy" />
        </div>
      `;
    }

    row.innerHTML = `
      <div class="bubble">
        ${contentHtml}
        <div class="bubble-meta">
          <span class="bubble-time">${getCurrentTime()}</span>
        </div>
      </div>
    `;

    chatScrollArea.appendChild(row);
    playNotificationSound();
    scrollToBottom();
  }

  // Adicionar mensagem do Usuário
  function appendUserMessage(text) {
    const row = document.createElement('div');
    row.className = 'message-row user';
    row.innerHTML = `
      <div class="bubble">
        <div class="bubble-content">${text}</div>
        <div class="bubble-meta">
          <span class="bubble-time">${getCurrentTime()}</span>
          <span class="bubble-checks">
            <svg viewBox="0 0 16 11" width="16" height="11" fill="currentColor">
              <path d="M11.5 0.5L6.2 5.8L4.5 4.1L3.5 5.1L6.2 7.8L12.5 1.5L11.5 0.5ZM15.5 0.5L8.2 7.8L7.2 6.8L6.2 7.8L8.2 9.8L16.5 1.5L15.5 0.5ZM3.2 7.8L0.5 5.1L1.5 4.1L4.2 6.8L3.2 7.8Z" />
            </svg>
          </span>
        </div>
      </div>
    `;
    chatScrollArea.appendChild(row);
    scrollToBottom();
  }

  // Renderizar opções de resposta
  function renderOptions(options) {
    optionsPanel.innerHTML = '';
    if (!options || options.length === 0) return;

    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      if (opt.isCheckout) {
        btn.classList.add('checkout-cta');
      }
      btn.innerHTML = opt.text;

      btn.addEventListener('click', () => {
        handleOptionClick(opt);
      });

      optionsPanel.appendChild(btn);
    });
    scrollToBottom();
  }

  // Cálculo dinâmico e humanizado do tempo de digitação (simulando uma pessoa real)
  function calculateHumanTypingDelay(text) {
    if (!text) return 2000;
    const cleanLength = text.replace(/<[^>]*>/g, '').length;
    // Varia de 1.8s (mensagens curtas) até 3.8s (mensagens mais longas de acolhimento)
    return Math.min(Math.max(cleanLength * 22, 1800), 3800);
  }

  // Lógica ao clicar em uma opção
  async function handleOptionClick(option) {
    // 1. Limpa o painel de botões para evitar duplo clique
    optionsPanel.innerHTML = '';

    // 2. Se for o botão de checkout final
    if (option.isCheckout) {
      appendUserMessage(option.text);
      executeCheckoutRedirect();
      return;
    }

    // 3. Adiciona a resposta do usuário no chat
    appendUserMessage(option.text);

    // Se houver escolha de gênero, atualiza a árvore de conteúdo imediatamente
    if (option.genderChoice) {
      selectedGender = option.genderChoice;
    }

    // Pequena pausa reflexiva inicial antes do especialista responder (como uma pessoa lendo)
    await new Promise(r => setTimeout(r, 700));

    // 4. Se essa opção tiver uma reação personalizada do Dr. Carlos
    if (option.reaction && option.reaction.length > 0) {
      for (const reactionText of option.reaction) {
        showTypingIndicator();
        const typingTime = calculateHumanTypingDelay(reactionText);
        await new Promise(r => setTimeout(r, typingTime));
        hideTypingIndicator();
        appendHostMessage({ type: 'text', content: reactionText });
        // Pausa confortável para a pessoa ler a explicação antes de prosseguir
        await new Promise(r => setTimeout(r, 1400));
      }
    }

    // 5. Avança para o próximo passo
    currentStepIndex++;
    const steps = getCurrentSteps();
    if (currentStepIndex < steps.length) {
      loadStep(steps[currentStepIndex]);
    }
  }

  // Carregar um passo do Quiz
  async function loadStep(step) {
    // Se houver mensagens do Dr. Carlos para enviar
    if (step.messages && step.messages.length > 0) {
      for (const msg of step.messages) {
        showTypingIndicator();
        const typingTime = msg.type === 'text' ? calculateHumanTypingDelay(msg.content) : 2200;
        await new Promise(r => setTimeout(r, typingTime));
        hideTypingIndicator();
        appendHostMessage(msg);
        // Pausa de leitura natural
        await new Promise(r => setTimeout(r, 1200));
      }
    }

    // Renderizar as opções de escolha desse passo
    renderOptions(step.options);
  }

  // Redirecionamento de Checkout inteligente
  function executeCheckoutRedirect() {
    let targetUrl = APP_CONFIG.checkoutUrl.trim();

    if (!targetUrl) {
      alert("Aviso: Configure o seu link de checkout no arquivo 'config.js' para finalizar a compra.");
      return;
    }

    // Preservar UTMs e parâmetros se habilitado
    if (APP_CONFIG.forwardUtmParams && window.location.search) {
      const sep = targetUrl.includes('?') ? '&' : '?';
      targetUrl = targetUrl + sep + window.location.search.replace(/^\?/, '');
    }

    window.open(targetUrl, '_blank');
  }

  // Lightbox Modal para ampliar imagens
  window.openLightbox = function(url) {
    if (lightboxModal && lightboxImg) {
      lightboxImg.src = url;
      lightboxModal.classList.add('active');
    }
  };

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
      }
    });
  }

  // Back-redirect inteligente
  if (APP_CONFIG.backRedirectUrl) {
    history.pushState({}, '', location.href);
    history.pushState({}, '', location.href);
    window.addEventListener('popstate', () => {
      let backUrl = APP_CONFIG.backRedirectUrl.trim();
      if (APP_CONFIG.forwardUtmParams && window.location.search) {
        const sep = backUrl.includes('?') ? '&' : '?';
        backUrl = backUrl + sep + window.location.search.replace(/^\?/, '');
      }
      window.location.href = backUrl;
    });
  }

  // Inicializar o primeiro passo
  const initialSteps = getCurrentSteps();
  if (initialSteps.length > 0) {
    loadStep(initialSteps[0]);
  }
});
