import { ConditionGroup } from '../types';

export function evaluateConditionGroup(
    group: ConditionGroup
  ): { valid: boolean; reasons: string[] } {
    if ('when' in group) {
      // If the deactivation condition applies → Button should be deactivated
      return group.when
        ? { valid: false, reasons: [group.reason] }
        : { valid: true, reasons: [] };
    }
  
    const results = group.conditions.map(evaluateConditionGroup);
  
    if (group.type === 'and') {
      const allValid = results.every(r => r.valid);
      return {
        valid: allValid,
        reasons: allValid ? [] : results.flatMap(r => r.reasons),
      };
    }
  
    if (group.type === 'or') {
      const anyValid = results.some(r => r.valid);
      return {
        valid: anyValid,
        reasons: anyValid ? [] : results.flatMap(r => r.reasons),
      };
    }
  
    return { valid: true, reasons: [] };
  }  