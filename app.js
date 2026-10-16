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

  // Formatar texto e garantir que negrito (tags ou asteriscos) seja renderizado com perfeição no celular
  function formatMessageText(text) {
    if (!text) return '';
    return text
      .replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^\*])\*([^\*]+)\*([^\*]|$)/g, '$1<strong>$2</strong>$3');
  }

  // Adicionar mensagem do Dr. Carlos ao chat
  function appendHostMessage(msg) {
    const row = document.createElement('div');
    row.className = 'message-row host';

    let contentHtml = '';
    if (msg.type === 'text') {
      contentHtml = `<div class="bubble-content">${formatMessageText(msg.content)}</div>`;
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
        btn.id = 'btn-initiate-checkout';
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

    // Disparar evento InitiateCheckout para o Meta Pixel
    try {
      if (typeof fbq === 'function') {
        fbq('track', 'InitiateCheckout', {
          content_name: 'Plano Reconquista Absoluta',
          value: 197,
          currency: 'MZN'
        });
      }
    } catch (e) {}

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

  // =========================================================
  // SISTEMA DE CHAMADA WHATSAPP REALISTA & ÁUDIO DE TOQUE
  // =========================================================
  const callScreen = document.getElementById('wa-call-screen');
  const callStatusText = document.getElementById('call-status-text');
  const callBtnEnd = document.getElementById('call-btn-end');
  const callBtnMute = document.getElementById('call-btn-mute');
  const callBtnSpeaker = document.getElementById('call-btn-speaker');
  const btnVoiceCall = document.getElementById('btn-voice-call');
  const btnVideoCall = document.getElementById('btn-video-call');
  const vietnamNoticeModal = document.getElementById('vietnam-notice-modal');
  const btnCloseVietnamNotice = document.getElementById('btn-close-vietnam-notice');

  // Gerador de Som de Chamada WhatsApp (Web Audio API)
  let audioCtx = null;
  let ringInterval = null;
  let callTimeout = null;
  let isMuted = false;
  let isSpeaker = false;

  function playRingtoneBeep() {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(425, audioCtx.currentTime); // Frequência padrão de chamada telefônica

      gain.gain.setValueAtTime(0, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime + 1.2);
      gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1.3);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 1.3);
    } catch (e) {}
  }

  function startCall(isVideo = false) {
    if (callScreen) {
      callScreen.classList.add('active');
      callStatusText.textContent = isVideo ? 'Chamada de vídeo... Chamando' : 'Chamando...';
    }

    // Tocar primeiro ring e iniciar repetição realista
    playRingtoneBeep();
    ringInterval = setInterval(playRingtoneBeep, 3500);

    // Após 12 segundos chamando sem atender, encerra e exibe a mensagem de ausência
    clearTimeout(callTimeout);
    callTimeout = setTimeout(() => {
      endCallAndShowNotice();
    }, 12000);
  }

  function endCallAndShowNotice() {
    if (ringInterval) {
      clearInterval(ringInterval);
      ringInterval = null;
    }
    clearTimeout(callTimeout);

    if (callScreen) {
      callScreen.classList.remove('active');
    }

    // Exibir o aviso oficial da viagem ao Vietnã com o e-mail
    if (vietnamNoticeModal) {
      vietnamNoticeModal.classList.add('active');
    }
  }

  if (btnVoiceCall) {
    btnVoiceCall.addEventListener('click', (e) => {
      e.stopPropagation();
      startCall(false);
    });
  }

  if (btnVideoCall) {
    btnVideoCall.addEventListener('click', (e) => {
      e.stopPropagation();
      startCall(true);
    });
  }

  if (callBtnEnd) {
    callBtnEnd.addEventListener('click', () => {
      endCallAndShowNotice();
    });
  }

  if (callBtnMute) {
    callBtnMute.addEventListener('click', () => {
      isMuted = !isMuted;
      callBtnMute.style.backgroundColor = isMuted ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.14)';
    });
  }

  if (callBtnSpeaker) {
    callBtnSpeaker.addEventListener('click', () => {
      isSpeaker = !isSpeaker;
      callBtnSpeaker.style.backgroundColor = isSpeaker ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.14)';
    });
  }

  if (btnCloseVietnamNotice) {
    btnCloseVietnamNotice.addEventListener('click', () => {
      vietnamNoticeModal.classList.remove('active');
    });
  }

  if (vietnamNoticeModal) {
    vietnamNoticeModal.addEventListener('click', (e) => {
      if (e.target === vietnamNoticeModal) {
        vietnamNoticeModal.classList.remove('active');
      }
    });
  }

  // =========================================================
  // GAVETA DE PERFIL DO DR. CARLOS
  // =========================================================
  const profileDrawer = document.getElementById('profile-drawer');
  const profileTrigger = document.getElementById('wa-header-profile-trigger');
  const profileBackBtn = document.getElementById('profile-back-btn');
  const profileBtnChat = document.getElementById('profile-btn-chat');
  const profileBtnAudio = document.getElementById('profile-btn-audio');
  const profileBtnVideo = document.getElementById('profile-btn-video');

  function openProfile() {
    if (profileDrawer) profileDrawer.classList.add('active');
  }

  function closeProfile() {
    if (profileDrawer) profileDrawer.classList.remove('active');
  }

  if (profileTrigger) {
    profileTrigger.addEventListener('click', (e) => {
      // Não aciona se o clique for na seta de voltar
      if (e.target.closest('#wa-back-btn')) return;
      openProfile();
    });
  }

  if (profileBackBtn) {
    profileBackBtn.addEventListener('click', closeProfile);
  }

  if (profileBtnChat) {
    profileBtnChat.addEventListener('click', closeProfile);
  }

  if (profileBtnAudio) {
    profileBtnAudio.addEventListener('click', () => {
      closeProfile();
      startCall(false);
    });
  }

  if (profileBtnVideo) {
    profileBtnVideo.addEventListener('click', () => {
      closeProfile();
      startCall(true);
    });
  }

  // =========================================================
  // MENU DROPDOWN DOS 3 PONTINHOS
  // =========================================================
  const btnMenuDots = document.getElementById('btn-menu-dots');
  const dropdownMenu = document.getElementById('wa-dropdown-menu');
  const menuViewContact = document.getElementById('menu-view-contact');
  const menuVoiceCall = document.getElementById('menu-voice-call');
  const menuVideoCall = document.getElementById('menu-video-call');
  const menuSendEmail = document.getElementById('menu-send-email');
  const menuMute = document.getElementById('menu-mute');

  if (btnMenuDots && dropdownMenu) {
    btnMenuDots.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!dropdownMenu.contains(e.target) && e.target !== btnMenuDots) {
        dropdownMenu.classList.remove('active');
      }
    });
  }

  if (menuViewContact) {
    menuViewContact.addEventListener('click', () => {
      dropdownMenu.classList.remove('active');
      openProfile();
    });
  }

  if (menuVoiceCall) {
    menuVoiceCall.addEventListener('click', () => {
      dropdownMenu.classList.remove('active');
      startCall(false);
    });
  }

  if (menuVideoCall) {
    menuVideoCall.addEventListener('click', () => {
      dropdownMenu.classList.remove('active');
      startCall(true);
    });
  }

  if (menuSendEmail) {
    menuSendEmail.addEventListener('click', () => {
      dropdownMenu.classList.remove('active');
      window.location.href = 'mailto:lovmoia126@gmail.com?subject=Contacto%20Dr.%20Carlos';
    });
  }

  if (menuMute) {
    menuMute.addEventListener('click', () => {
      dropdownMenu.classList.remove('active');
      APP_CONFIG.enableAudio = !APP_CONFIG.enableAudio;
      alert(APP_CONFIG.enableAudio ? 'Notificações de som ativadas.' : 'Notificações de som silenciadas.');
    });
  }

  // Seções da Página Única (VSL e Chat integrados)
  const vslSection = document.getElementById('vsl-section');
  const chatSection = document.getElementById('chat-section');
  const btnContinueChat = document.getElementById('btn-continue-chat');
  let quizStarted = false;

  function startQuizInSamePage() {
    if (quizStarted) return;
    quizStarted = true;

    // 1. Oculta VSL e exibe o Chat WhatsApp na mesma página
    if (vslSection) {
      vslSection.style.display = 'none';
      const ytFrame = document.getElementById('yt-video-frame');
      if (ytFrame) {
        // Pausa/reseta vídeo para não continuar tocando áudio em segundo plano
        ytFrame.src = ytFrame.src;
      }
    }

    document.body.classList.remove('vsl-mode');
    document.body.classList.add('chat-active');

    if (chatSection) {
      chatSection.style.display = 'block';
    }

    // Rola para o topo do WhatsApp
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Desbloqueia áudio de notificação com a interação do clique
    if (notificationAudio) {
      notificationAudio.play().then(() => {
        notificationAudio.pause();
        notificationAudio.currentTime = 0;
        isAudioUnlocked = true;
      }).catch(() => {});
    }

    // 2. Inicia o primeiro passo do Quiz
    const initialSteps = getCurrentSteps();
    if (initialSteps.length > 0) {
      loadStep(initialSteps[0]);
    }
  }

  // Clique no botão CONTINUAR da VSL
  if (btnContinueChat) {
    btnContinueChat.addEventListener('click', (e) => {
      e.preventDefault();
      startQuizInSamePage();
    });
  } else {
    // Se a página não tiver seção VSL (abertura direta)
    const initialSteps = getCurrentSteps();
    if (initialSteps.length > 0) {
      loadStep(initialSteps[0]);
    }
  }

  // Botão Voltar da barra superior
  const waBackBtn = document.getElementById('wa-back-btn');
  if (waBackBtn) {
    waBackBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('Deseja realmente voltar para a página inicial?')) {
        if (vslSection && chatSection) {
          chatSection.style.display = 'none';
          vslSection.style.display = 'block';
          document.body.classList.remove('chat-active');
          document.body.classList.add('vsl-mode');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.location.reload();
        }
      }
    });
  }
});
