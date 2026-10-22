/* Music Rainbow 2.0.1 (460): regole pure dei 5 lavaggi, senza dipendenze da StoreKit. */
(function (root, factory) {
  'use strict';
  const rules = factory();
  if (root) root.MimoWashRules460 = rules;
  if (typeof module !== 'undefined' && module.exports) module.exports = rules;
})(typeof window !== 'undefined' ? window : null, function () {
  'use strict';
  const WASHES_PER_TOKEN = 5;
  const MAX_CLEAN = 8;
  const clampClean = n => Math.max(0, Math.min(MAX_CLEAN, Math.round((Number(n) || 0) * 100) / 100));
  const clampHappy = n => Math.max(0, Math.min(8, Math.round(Number(n) || 0)));

  function normalizeCycle(raw) {
    if (!raw || typeof raw !== 'object') return null;
    const completed = Math.floor(Number(raw.completed));
    const startClean = Number(raw.startClean);
    if (!Number.isFinite(completed) || completed < 1 || completed >= WASHES_PER_TOKEN || !Number.isFinite(startClean)) return null;
    return { completed, startClean: clampClean(startClean) };
  }

  // hasToken è una verifica, non una spesa. Il chiamante consuma il gettone
  // soltanto al primo risciacquo realmente completato e prima del salvataggio.
  function previewRinse(data) {
    const clean = clampClean(data.clean);
    const happy = clampHappy(data.happy);
    const prior = normalizeCycle(data.cycle);
    if (!prior && clean >= MAX_CLEAN) return { status: 'already-clean', spent: false, clean, happy, cycle: null };
    if (!prior && !data.hasToken) return { status: 'no-token', spent: false, clean, happy, cycle: null };

    const startClean = prior ? prior.startClean : clean;
    const completed = (prior ? prior.completed : 0) + 1;
    const targetClean = startClean + (MAX_CLEAN - startClean) * completed / WASHES_PER_TOKEN;
    const nextClean = completed === WASHES_PER_TOKEN ? MAX_CLEAN : Math.max(clean, targetClean);
    return {
      status: completed === WASHES_PER_TOKEN ? 'complete' : 'washed',
      spent: !prior,
      clean: clampClean(nextClean),
      happy: clampHappy(happy + (completed === WASHES_PER_TOKEN ? 2 : 1)),
      completed,
      cycle: completed === WASHES_PER_TOKEN ? null : { completed, startClean }
    };
  }
  return Object.freeze({ WASHES_PER_TOKEN, MAX_CLEAN, clampClean, normalizeCycle, previewRinse });
});
