## 1) What is **JSX**, and why is it used?
- **JSX** refers to **JavaScript XML**. It allows to write HTML markup directly in JavaScript code.

---

## 2) What is the difference between **State** and **Props**?
- **Props** (properties) are **read-only** and are generally passed **from a parent component to a child component**. **State** is **data managed internally inside a component** and can change over time. Essentially, **props are passed from outside**, while **state is controlled within the component**.

---

## 3) What is the **useState** hook, and how does it work?
- **useState** hook lets you to store and track a state inside a function. It takes an **initial value** (e.g., `null`, empty array, string, number, etc.). The initial value can be changed using the setter function and it re-renders the component it is in.

---

## 4)	How can you share state between components in React?
- States in react can be shared through **state lift up** between components. Generally, parent passes the state to the child component. **Context API** is another option to share state across components.

---

## 5) How is event handling done in React?
-	You need to define a handler function and pass it to the event attribute **(onClick)** for event handling in react.

