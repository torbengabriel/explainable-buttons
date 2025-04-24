import React from 'react';
import styles from './ExplainableButton.module.scss';
import { ConditionGroup, ExplainableButtonProps, TooltipDirection } from './types';
import { evaluateConditionGroup } from './logic/evaluateConditionGroup';


export const ExplainableButton: React.FC<ExplainableButtonProps> = ({
  disabledConditions,
  mode = 'any',
  tooltipDirection = TooltipDirection.TOP,
  tooltipBackground = '#000',
  children,
  ...rest
}) => {
  console.log('disabledConditions', disabledConditions);
  console.log('tooltipBackground', tooltipBackground);
  
  
  let isDisabled = false;
  let reasons: string[] = [];

  // flat list
  if (Array.isArray(disabledConditions)) {
    console.log('disabledConditions is an array');
    console.log('conditions:', disabledConditions);
    console.log('mode:', mode);
    
    
    const active = disabledConditions.filter((c) => c.when);
    console.log('active', active);
    
    reasons = active.map((c) => c.reason);
    console.log('reasons', reasons);
    
    isDisabled = mode === 'all'
      ? disabledConditions.every(c => c.when)
      : disabledConditions.some(c => c.when);
    console.log('isDisabled', isDisabled);
    
    // nested logic tree
  } else if (disabledConditions) {
    console.log('disabledConditions is an object');
    const result = evaluateConditionGroup(disabledConditions);
    console.log('result', result);
    
    isDisabled = !result.valid;
    reasons = result.reasons;
  }

  return (

<div className={styles.tooltipWrapper}>
  <button
    {...rest}
    disabled={isDisabled}
    className={styles.button}
  >
    {children}
  </button>

  {isDisabled && reasons.length > 0 && (
    <span 
      className={`${styles.tooltipText} ${styles[tooltipDirection ?? 'top']}`}
      style={{
        backgroundColor: tooltipBackground ?? 'black',
        '--tooltip-bg': tooltipBackground ?? 'black',
      } as React.CSSProperties}
    >
      {reasons.join('\n')}
    </span>
  )}
</div>
  );
};
