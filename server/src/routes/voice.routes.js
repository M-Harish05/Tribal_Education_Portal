import { Router } from 'express';
import Joi from 'joi';
import { requireAuth } from '../middleware/auth.js';

const router = Router();
router.use(requireAuth);

// Simple textual evaluation comparing expected phrase to user's transcript
router.post('/evaluate', async (req, res) => {
  const schema = Joi.object({ expected: Joi.string().required(), transcript: Joi.string().required() });
  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.message });

  const normalize = (s) => s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, '').trim();
  const expected = normalize(value.expected);
  const said = normalize(value.transcript);

  // Map synonyms for numbers (English ↔ Telugu)
  const numberSynonyms = new Map([
    ['1', ['1', 'one', 'okati', 'ఒకటి']],
    ['2', ['2', 'two', 'rendu', 'రెండు']],
    ['3', ['3', 'three', 'mūḍu', 'మూడు']],
    ['4', ['4', 'four', 'nālugu', 'నాలుగు']],
    ['5', ['5', 'five', 'aidu', 'ఐదు']],
    ['6', ['6', 'six', 'āru', 'ఆరు']],
    ['7', ['7', 'seven', 'ēḍu', 'ఏడు']],
    ['8', ['8', 'eight', 'enimidi', 'ఎనిమిది']],
    ['9', ['9', 'nine', 'tommidi', 'తొమ్మిది']],
    ['10', ['10', 'ten', 'padi', 'పది']]
  ]);

  // Map synonyms for colors (English ↔ Telugu)
  const colorSynonyms = new Map([
    ['red', ['red', 'ఎరుపు', 'erupu']],
    ['blue', ['blue', 'నీలం', 'neelam']],
    ['green', ['green', 'ఆకుపచ్చ', 'aakupacha', 'akupacha']],
  ]);

  const expandSynonyms = (phrase) => {
    const tokens = phrase.split(/\s+/);
    return tokens.flatMap(t => {
      for (const [_, syns] of numberSynonyms) if (syns.includes(t)) return syns;
      for (const [_, syns] of colorSynonyms) if (syns.includes(t)) return syns;
      return [t];
    });
  };

  const expectedTokens = new Set(expandSynonyms(expected));
  const saidTokens = new Set(expandSynonyms(said));

  // token overlap score using expanded synonym sets
  const intersection = [...expectedTokens].filter(t => saidTokens.has(t)).length;
  const precision = intersection / Math.max(1, saidTokens.size);
  const recall = intersection / Math.max(1, expectedTokens.size);
  const f1 = (precision + recall) ? (2 * precision * recall) / (precision + recall) : 0;

  res.json({ score: Math.round(f1 * 100), precision: Math.round(precision * 100), recall: Math.round(recall * 100) });
});

export default router;


