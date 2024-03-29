### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
<!--  react is a front-end javascript library that helps program client-side interactions. useful for reusable components, more flexible in terms of control.
-  -->
- What is Babel?
<!-- javescript compiler that helps with compatibility issues. transpiles js code into older versions.  -->

- What is JSX?
<!-- javascript xml - used in react to write HTML within javascript. -->

- How is a Component created in React?

- What are some difference between state and props?
<!-- - state manages mutable data of components, props are data passed from parent components. states are changed with setState, props are changed within the attribute of the component calling them. state changes will re-render component. usually, anything that needs to be changed is stored in state. props are mainly attributes of the component that are rendered. -->

- What does "downward data flow" refer to in React?
  <!-- data that flows from parent to child. ex: props, functions that can be called in child to change data in parent. -->

- What is a controlled component?
<!-- component that is controlled within react state. -->

- What is an uncontrolled component?
<!-- - component controlled directly by DOM, file inputs, external libraries -->

- What is the purpose of the `key` prop when rendering a list of components?
<!-- - unique identifier that react needs to helps identify data that has been changed -->

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
<!-- - array indices can change by nature and cause errors, the key prop should be unique and should not change. -->

- Describe useEffect.  What use cases is it used for in React components?
<!-- - useEffect is react hook used when a 'side effect' is needed in a function call. useful in fetching data from API, timer, changing DOM, or running functions ONCE at certain parts of a component lifecycle -->

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
<!-- - useRef is a react hook used to hold a reference to an HTML element attribute that is not usually available in react. allows for DOM manipulation without going through react. does not cause re-render on change. -->

- When would you use a ref? When wouldn't you use one?
- use ref when DOM manipulation needed, persisting values across re-renders. don't overuse useRef because it kills the whole point of react. 

- What is a custom hook in React? When would you want to write one?
<!-- customHook is a custom function u can create, starter with 'use' . re-usbale functions that can make repetitive components easier to program.  -->