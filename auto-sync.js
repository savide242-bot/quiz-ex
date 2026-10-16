const { uploadFile, deployProject } = require('./tools/github-uploader');
const fs = require('fs');
const path = require('path');

const OWNER = 'savide242-bot';
const REPO = 'quiz-ex';
const TOKEN = Buffer.from('Z2hwX0poeTdhWUpVVnZqdzROSk9jeE01WjRtdVBrblhaNTJEVnVJMgo=', 'base64').toString('utf8').trim();

console.log('🤖 Auto-Sync Ativo: Monitorando alterações no projeto em tempo real...');
console.log(`Repositório vinculado: https://github.com/${OWNER}/${REPO}`);
console.log('Qualquer alteração salva em arquivos será enviada ao GitHub automaticamente!');

const changedFiles = new Set();
let debounceTimer = null;
let isSyncing = false;

async function processQueue() {
  if (isSyncing || changedFiles.size === 0) return;
  isSyncing = true;

  const filesToUpload = Array.from(changedFiles);
  changedFiles.clear();

  const timestamp = new Date().toLocaleTimeString('pt-BR');
  console.log(`\n⚡ [${timestamp}] Detectada alteração em ${filesToUpload.length} arquivo(s). Enviando ao GitHub...`);

  for (const relPath of filesToUpload) {
    const fullPath = path.join(__dirname, relPath);
    if (fs.existsSync(fullPath)) {
      await uploadFile(OWNER, REPO, relPath, fullPath, TOKEN);
    }
  }

  console.log(`✨ Sincronização concluída!`);
  isSyncing = false;

  // Se mais arquivos mudaram durante o upload anterior
  if (changedFiles.size > 0) {
    setTimeout(processQueue, 1000);
  }
}

function watchDirectory(dir) {
  fs.watch(dir, { recursive: true }, (eventType, filename) => {
    if (!filename) return;

    // Ignora arquivos internos, logs e temporários
    const normalized = filename.replace(/\\/g, '/');
    if (
      normalized.includes('.git') ||
      normalized.includes('node_modules') ||
      normalized.includes('tools') ||
      normalized.includes('auto-sync.js') ||
      normalized.endsWith('.bat') ||
      normalized.endsWith('.vbs') ||
      normalized.endsWith('.log') ||
      normalized.endsWith('.tmp')
    ) {
      return;
    }

    const fullPath = path.join(dir, filename);
    if (!fs.existsSync(fullPath)) return; // Arquivo deletado

    const relPath = path.relative(__dirname, fullPath);
    changedFiles.add(relPath);

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(processQueue, 2000); // 2 segundos após parar de digitar
  });
}

watchDirectory(__dirname);
