export enum TooltipDirection {
    TOP = 'top',
    BOTTOM = 'bottom',
    LEFT = 'left',
    RIGHT = 'right',
  }
  
export type Condition = {
when: boolean;
reason: string;
};
  
export type ConditionGroup =
    | { type: 'and'; conditions: ConditionGroup[] }
    | { type: 'or'; conditions: ConditionGroup[] }
    | Condition;

export interface ExplainableButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    disabledConditions?: Condition[] | ConditionGroup;
    mode?: 'any' | 'all'; // only for flat arrays
    tooltipDirection?: TooltipDirection;
    tooltipBackground?: string;
}