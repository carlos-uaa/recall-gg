import type { GuessFeedback, Hero } from '../types/game';
import { OVERWATCH_HEROES } from '../games/overwatch/heroes';

export function compareGuess(guessedHero: Hero, targetHero: Hero): GuessFeedback {
  const isCorrect = guessedHero.id === targetHero.id;

  // Affiliation comparison
  const sameAffiliation = guessedHero.affiliation === targetHero.affiliation;
  // Partial affiliation (e.g. Overwatch and Blackwatch, or Talon and Ex-Talon)
  const partialAffiliation = !sameAffiliation && (
    (guessedHero.affiliation.includes('Overwatch') && targetHero.affiliation.includes('Blackwatch')) ||
    (guessedHero.affiliation.includes('Blackwatch') && targetHero.affiliation.includes('Overwatch')) ||
    (guessedHero.affiliation.includes('Talon') && targetHero.affiliation.includes('Talon'))
  );

  return {
    hero: guessedHero,
    isCorrect,
    name: {
      matched: isCorrect,
      value: guessedHero.name,
    },
    role: {
      matched: guessedHero.role === targetHero.role,
      value: guessedHero.role === 'tank' ? 'Tanque' : guessedHero.role === 'damage' ? 'DPS' : 'Apoyo',
    },
    gender: {
      matched: guessedHero.gender === targetHero.gender,
      value: guessedHero.gender,
    },
    affiliation: {
      matched: sameAffiliation,
      partial: partialAffiliation,
      value: guessedHero.affiliation,
    },
    country: {
      matched: guessedHero.country === targetHero.country,
      value: guessedHero.country,
    },
    age: {
      matched: guessedHero.age === targetHero.age,
      value: guessedHero.age,
      direction: guessedHero.age < targetHero.age ? 'higher' : guessedHero.age > targetHero.age ? 'lower' : undefined,
    },
    releaseYear: {
      matched: guessedHero.releaseYear === targetHero.releaseYear,
      value: guessedHero.releaseYear,
      direction: guessedHero.releaseYear < targetHero.releaseYear ? 'higher' : guessedHero.releaseYear > targetHero.releaseYear ? 'lower' : undefined,
    },
    range: {
      matched: guessedHero.range === targetHero.range,
      value: guessedHero.range,
    },
  };
}

export function getDailyHero(): Hero {
  const today = new Date();
  const dateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  
  // Simple deterministic hash
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash << 5) - hash + dateStr.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % OVERWATCH_HEROES.length;
  return OVERWATCH_HEROES[index];
}

export function getRandomHero(): Hero {
  const index = Math.floor(Math.random() * OVERWATCH_HEROES.length);
  return OVERWATCH_HEROES[index];
}
