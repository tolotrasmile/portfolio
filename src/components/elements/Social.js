import React, { Suspense, lazy, useState, useEffect } from 'react';

export default function Dynamic({ name }) {
  const [module, setModule] = useState(null);
  useEffect(() => {
    import(`../icons/${name}.svg`).then(
      module => console.log(module.default) && setModule(module.default)
    );
  });
  //const { module: Component } = this.state; // Assigning to new variable names @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  return (
    <div>
      <h1>Dynamic</h1>
    </div>
  );
}

function Social({ name }) {
  const Icon = lazy(() => import(`../icons/${name}.svg`));
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Icon />
    </Suspense>
  );
}
