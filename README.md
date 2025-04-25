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

```tsx
<ExplainableButton
  disabledConditions={[
    { when: user.points < 10, reason: 'you need at least 10 points' },
  ]}
>
  Next Level
</ExplainableButton>
```


https://github.com/user-attachments/assets/eba192d8-e95e-4e24-b797-e4ce8aa2b845


