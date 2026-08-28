import type { TensionSet, TensionStatus } from './logic';

export interface SetEvaluation {
  status: TensionStatus;
  dominant: string;
  isUneven: boolean;
}

export function evaluateSet(result: TensionSet): SetEvaluation {
  const isUneven = result.spreadPounds > 8;
  if (result.status === 'high') return { status: 'high', dominant: 'high', isUneven };
  if (result.status === 'low') return { status: 'low', dominant: 'low', isUneven };
  return { status: 'balanced', dominant: 'balanced', isUneven };
}
