import React$1 from 'react';

declare enum TooltipDirection {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right"
}
type Condition = {
    when: boolean;
    reason: string;
};
type ConditionGroup = {
    type: 'and';
    conditions: ConditionGroup[];
} | {
    type: 'or';
    conditions: ConditionGroup[];
} | Condition;
interface ExplainableButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    disabledConditions?: Condition[] | ConditionGroup;
    mode?: 'any' | 'all';
    tooltipDirection?: TooltipDirection;
    tooltipBackground?: string;
}

declare const ExplainableButton: React$1.FC<ExplainableButtonProps>;

export { ExplainableButton, TooltipDirection };
