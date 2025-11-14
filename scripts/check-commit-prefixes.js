#!/usr/bin/env node

const { execSync } = require('child_process');

const ALLOWED_PREFIXES = [
  'feat',      // нова функціональність
  'fix',       // виправлення помилок
  'refactor',  // рефакторинг
  'style',     // зміни стилів (форматування)
  'docs',      // документація
  'test',      // тести
  'chore',     // рутинні завдання
  'perf',      // покращення продуктивності
  'ci',        // зміни CI/CD
  'build',     // зміни системи збірки
  'revert',    // відкат змін
];

function getCommitMessages(remote, branch) {
  try {
    let range;
    
    try {
      execSync(`git rev-parse --verify ${remote}/${branch}`, { stdio: 'ignore' });
      range = `${remote}/${branch}..HEAD`;
    } catch (error) {
      const possibleBranches = ['main', 'master', 'develop'];
      let found = false;
      
      for (const baseBranch of possibleBranches) {
        try {
          execSync(`git rev-parse --verify ${remote}/${baseBranch}`, { stdio: 'ignore' });
          range = `${remote}/${baseBranch}..HEAD`;
          found = true;
          break;
        } catch (e) {
          continue;
        }
      }
      
      if (!found) {
        range = 'HEAD';
      }
    }
    
    const commits = execSync(
      `git log ${range} --pretty=format:"%s"`,
      { encoding: 'utf-8' }
    );
    return commits.trim().split('\n').filter(Boolean);
  } catch (error) {
    return [];
  }
}

function checkCommitPrefix(message) {
  const prefixPattern = /^([a-z]+)(\(.+\))?:/;
  const match = message.match(prefixPattern);
  
  if (!match) {
    return {
      valid: false,
      error: `Коміт "${message}" не має префіксу. Використовуйте формат: "feat: опис" або "fix(scope): опис"`
    };
  }
  
  const prefix = match[1];
  
  if (!ALLOWED_PREFIXES.includes(prefix)) {
    return {
      valid: false,
      error: `Коміт "${message}" має недопустимий префікс "${prefix}". Дозволені префікси: ${ALLOWED_PREFIXES.join(', ')}`
    };
  }
  
  return { valid: true };
}

function main() {
  const remote = process.argv[2] || 'origin';
  const branch = process.argv[3] || execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim();
  
  console.log(`Перевірка комітів для push на ${remote}/${branch}...\n`);
  
  const commitMessages = getCommitMessages(remote, branch);
  
  if (commitMessages.length === 0) {
    console.log('Немає нових комітів для перевірки.');
    process.exit(0);
  }
  
  const errors = [];
  
  for (const message of commitMessages) {
    const result = checkCommitPrefix(message);
    if (!result.valid) {
      errors.push(result.error);
    }
  }
  
  if (errors.length > 0) {
    console.error('❌ Знайдено помилки в префіксах комітів:\n');
    errors.forEach(error => console.error(`  • ${error}\n`));
    console.error(`Дозволені префікси: ${ALLOWED_PREFIXES.join(', ')}\n`);
    console.error('Приклади правильних комітів:');
    console.error('  • feat: додано нову функцію');
    console.error('  • fix(ui): виправлено помилку в інтерфейсі');
    console.error('  • refactor: оптимізовано код');
    process.exit(1);
  }
  
  console.log(`✅ Всі ${commitMessages.length} комітів мають правильні префікси.\n`);
  process.exit(0);
}

main();

