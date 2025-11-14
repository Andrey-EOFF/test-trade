#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

function runCommand(command, description) {
  console.log(`\n${description}...`);
  try {
    execSync(command, { stdio: 'inherit', cwd: process.cwd() });
    console.log(`✅ ${description} - успішно\n`);
    return true;
  } catch (error) {
    console.error(`❌ ${description} - помилка\n`);
    return false;
  }
}

function main() {
  const remote = process.argv[2] || 'origin';
  const branch = process.argv[3] || execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim();
  
  console.log('🚀 Запуск pre-push перевірок...\n');
  
  const checkPrefixesScript = path.join(__dirname, 'check-commit-prefixes.js');
  
  if (!runCommand(`node "${checkPrefixesScript}" "${remote}" "${branch}"`, 'Перевірка префіксів комітів')) {
    process.exit(1);
  }
  
  if (!runCommand('npm run build', 'Збірка проекту')) {
    console.error('❌ Збірка не вдалася. Виправте помилки перед push.\n');
    process.exit(1);
  }
  
  console.log('✅ Всі перевірки пройдено успішно. Push дозволено.\n');
  process.exit(0);
}

main();

