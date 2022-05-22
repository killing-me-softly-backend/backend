export type HebrewName = string;

export type FeelingCategory = 'sad' | 'insult';

export interface Feelings
  extends Partial<Record<FeelingCategory, HebrewName[]>> {}

export type PsychologicalCategory = 'self_doubt' | 'guilty';

export interface Psychological
  extends Partial<Record<PsychologicalCategory, HebrewName>> {}

export type OffensiveBehaviorCategory = 'violence' | 'scary' | 'risk_lives';

export interface OffensiveBehavior
  extends Partial<Record<OffensiveBehaviorCategory, HebrewName>> {}

const feelings: Feelings[] = [
  {
    insult: ['העליב', 'בושה'],
    sad: ['עצב'],
  },
];
