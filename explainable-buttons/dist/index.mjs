var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/ExplainableButton.module.scss
var require_ExplainableButton_module = __commonJS({
  "src/ExplainableButton.module.scss"() {
    "use strict";
  }
});

// src/ExplainableButton.tsx
var import_ExplainableButton_module = __toESM(require_ExplainableButton_module());

// src/types.ts
var TooltipDirection = /* @__PURE__ */ ((TooltipDirection2) => {
  TooltipDirection2["TOP"] = "top";
  TooltipDirection2["BOTTOM"] = "bottom";
  TooltipDirection2["LEFT"] = "left";
  TooltipDirection2["RIGHT"] = "right";
  return TooltipDirection2;
})(TooltipDirection || {});

// src/logic/evaluateConditionGroup.ts
function evaluateConditionGroup(group) {
  if ("when" in group) {
    return group.when ? { valid: false, reasons: [group.reason] } : { valid: true, reasons: [] };
  }
  const results = group.conditions.map(evaluateConditionGroup);
  if (group.type === "and") {
    const allValid = results.every((r) => r.valid);
    return {
      valid: allValid,
      reasons: allValid ? [] : results.flatMap((r) => r.reasons)
    };
  }
  if (group.type === "or") {
    const anyValid = results.some((r) => r.valid);
    return {
      valid: anyValid,
      reasons: anyValid ? [] : results.flatMap((r) => r.reasons)
    };
  }
  return { valid: true, reasons: [] };
}

// src/ExplainableButton.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var ExplainableButton = ({
  disabledConditions,
  mode = "any",
  tooltipDirection = "top" /* TOP */,
  tooltipBackground = "#000",
  children,
  ...rest
}) => {
  console.log("disabledConditions", disabledConditions);
  console.log("tooltipBackground", tooltipBackground);
  let isDisabled = false;
  let reasons = [];
  if (Array.isArray(disabledConditions)) {
    console.log("disabledConditions is an array");
    console.log("conditions:", disabledConditions);
    console.log("mode:", mode);
    const active = disabledConditions.filter((c) => c.when);
    console.log("active", active);
    reasons = active.map((c) => c.reason);
    console.log("reasons", reasons);
    isDisabled = mode === "all" ? disabledConditions.every((c) => c.when) : disabledConditions.some((c) => c.when);
    console.log("isDisabled", isDisabled);
  } else if (disabledConditions) {
    console.log("disabledConditions is an object");
    const result = evaluateConditionGroup(disabledConditions);
    console.log("result", result);
    isDisabled = !result.valid;
    reasons = result.reasons;
  }
  return /* @__PURE__ */ jsxs("div", { className: import_ExplainableButton_module.default.tooltipWrapper, children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        ...rest,
        disabled: isDisabled,
        className: import_ExplainableButton_module.default.button,
        children
      }
    ),
    isDisabled && reasons.length > 0 && /* @__PURE__ */ jsx(
      "span",
      {
        className: `${import_ExplainableButton_module.default.tooltipText} ${import_ExplainableButton_module.default[tooltipDirection ?? "top"]}`,
        style: {
          backgroundColor: tooltipBackground ?? "black",
          "--tooltip-bg": tooltipBackground ?? "black"
        },
        children: reasons.join("\n")
      }
    )
  ] });
};
export {
  ExplainableButton,
  TooltipDirection
};
