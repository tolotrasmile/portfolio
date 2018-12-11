import React, { useState, useEffect } from 'react'

export default function Dynamic({ name }) {
  const [module, setModule] = useState(null)
  useEffect(
    () => {
      import(`../../icons/${name}.svg`).then(module =>
        setModule(module.default),
      )
    },
    [module],
  )
  return (
    <div>
      <svg
        path={module}
        alt="icon"
        style={{ width: 30, height: 30, fill: 'red' }}
      />
    </div>
  )
}
