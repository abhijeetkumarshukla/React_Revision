// import React, { useEffect, useState } from 'react';

// function ToggleComponent() {
//   const [show, setShow] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <ChildComponent />}
//     </div>
//   );
// }

// function ChildComponent() {
//   useEffect(() => {
//     return () => {
//       console.log("ChildComponent unmounted");
//     };
//   }, []);

//   return <h1>Child Component</h1>;
// }

// export default ToggleComponent;






// import React, { Suspense } from 'react';

// const LazyComponent = React.lazy(() => import('./LazyComponent'));

// function Apps() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyComponent />
//       </Suspense>
//     </div>
//   );
// }

// export default Apps;






// import React, { useEffect, useState } from 'react';

// function LifecycleComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Component mounted or updated");

//     return () => {
//       console.log("Component will unmount");
//     };
//   }, [count]);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default LifecycleComponent;








// import React, { useRef } from 'react';

// function ControlledVsUncontrolled() {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     alert(inputRef.current.value);
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Enter text" />
//       <button onClick={handleClick}>Show Input</button>
//     </div>
//   );
// }

// export default ControlledVsUncontrolled;








// import React, { useState } from 'react';

// function EventHandling() {
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     setClicked(!clicked);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//       {clicked && <h1>Button Clicked!</h1>}
//     </div>
//   );
// }

// export default EventHandling;




