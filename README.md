# 🧠 explainable-buttons

A smart React button component that explains **why it's disabled** – perfect for step-by-step workflows, onboarding, and validation UX.

## 💡 What it does

Instead of just disabling a button with no context, this component:

- Disables the button until conditions are met ✅
- Shows an explanation (tooltip or text) when disabled ❓
- Makes your UI more understandable & user-friendly 🫶

## 📦 Installation

```bash
npm install explainable-buttons
```

```bash
yarn add explainable-buttons
```

## 📋 Examples

If a button should be disabled because the user has less than 10 points, you can do this as follows

```tsx
<ExplainableButton
  disabledConditions={[
    { when: user.points < 10, reason: 'you need at least 10 points' },
  ]}
>
  Next Level
</ExplainableButton>
```

![explainable-button-tooltip-bottom](https://github.com/user-attachments/assets/dffcc351-a24c-4c2a-9822-5d16edcf900a)


if the button should only be clickable if the user has 10 points and is logged in, it looks like this

```tsx
<ExplainableButton
  disabledConditions={[
    { when: user.points < 10, reason: 'you need at least 10 points' },
    { when: !user.isLoggedIn, reason: 'you must be logged in' }
  ]}
>
  Next Level
</ExplainableButton>
```

![explainable-button-tooltip-bottom-loggiedin-and-points](https://github.com/user-attachments/assets/fa0987f1-d4d7-4e43-8604-12ec435ad09d)


If you want to create a custom color for the tooltip, you can add it like this:

```tsx
<ExplainableButton
  disabledConditions={[
    { when: user.points < 10, reason: 'you need at least 10 points' },
    { when: !user.isLoggedIn, reason: 'you must be logged in' }
  ]}
tooltipBackground="#007bff"
>
  Next Level
</ExplainableButton>
```
<img width="536" alt="colored-button" src="https://github.com/user-attachments/assets/abbfb58e-3f30-4ef9-afee-5a0baecdc2e2" />

and if you want your tooltip to be on the right, you can import TooltipDirection and install it like this

```tsx
import { ExplainableButton, TooltipDirection } from 'explainable-buttons';

<ExplainableButton
  disabledConditions={[
    { when: user.points < 10, reason: 'you need at least 10 points' },
    { when: !user.isLoggedIn, reason: 'you must be logged in' }
  ]}
tooltipDirection={TooltipDirection.RIGHT}
tooltipBackground="#007bff"
>
  Next Level
</ExplainableButton>
```
<img width="536" alt="colored-button-right-direction" src="https://github.com/user-attachments/assets/9371880c-2245-4615-aaa7-db721cf67efa" />

And if you want to add more complex conditions, you can do that too.
For example, you can say that the user must be logged in AND must have ten points OR be an admin.

```tsx
  <ExplainableButton
      disabledConditions={{
        type: 'and',
        conditions: [
          { when: !user.isLoggedIn, reason: 'you must be logged in' },
          {
            type: 'or',
            conditions: [
              { when: user.points < 10, reason: 'you need at least 10 points' },
              { when: !user.isAdmin, reason: 'only for admins' },
            ],
          },
        ],
      }}
      tooltipDirection={TooltipDirection.BOTTOM}
      tooltipBackground="#007bff"
    >
      Save
  </ExplainableButton>
```
