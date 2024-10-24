// What is Event Bubbling?
// When an event occurs on an element (like a click on a button), it first runs the event handler on that element. If the event handler does not call stopPropagation(), the event then bubbles up to the parent elements, triggering their event handlers in turn, all the way up to the root of the document.

// How it Works
// 1. Trigger Event: An event occurs on a specific element (e.g., clicking a button).
// 2. Run Handler on Target: The browser runs the event handler for that specific element.
// 3. Bubbles Up: The event then moves to the parent element, executing any handlers attached to that parent for the same event.
// 4. Continue Upward: This process continues until it reaches the root of the document (often the <html> element).
document.getElementById('parent').addEventListener('click', () => {
    alert('Parent clicked!');
},);

document.getElementById('child').addEventListener('click', () => {
    alert('Child clicked!')
},)






//  In the context of event bubbling in JavaScript, the terms true and false can refer to the third parameter of the addEventListener() method, which controls the event propagation behavior:

// When you attach an event listener using addEventListener(), you can specify an options object or a boolean value as the third argument. This argument determines whether the event listener is executed in the *capturing phase* or the *bubbling phase*.

// true (Capturing Phase): If you set this to true, the event listener will be invoked in the capturing phase, which means the event will be handled as it travels down from the root to the target element.
// The event travels downward from the root of the DOM to the target element.
// The listener executes before the event reaches the target.

// example: element.addEventListener('click', function, true);

// false (Bubbling Phase): If you set this to false (or omit it, since false is the default), the event listener will be invoked in the bubbling phase, meaning it will be triggered after the event has been handled by the target element, as it bubbles up to the root.

// The event travels upward from the target element back to the root of the DOM.
// The listener executes after the event has been handled by the target.


// example: element.addEventListener('click', function, false);


// Visualizing the Phases
// Capturing: Root → Parent → Target (event handlers trigger from root down to the target).
// Bubbling: Target → Parent → Root (event handlers trigger from the target back up to the root).

document.getElementById('parent2').addEventListener('click', () => {
    alert('Parent clicked!');
},true);

document.getElementById('child2').addEventListener('click', (e) => {
    e.stopPropagation()
    alert('Child clicked!')
},true)

// If you have an event listener on the parent element in the capturing phase and one on the child in the bubbling phase:
// Clicking the child will trigger the parent's capturing listener first. If stopPropagation() is called there, it will prevent the child’s bubbling listener from executing.
// Conversely, if you call stopPropagation() in the child’s event handler:
// The child’s alert will show, but it won’t prevent the parent’s capturing handler from executing because that happens first.
