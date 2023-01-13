import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  return loading ? <h2>Loading...</h2> : <h2>Rendered</h2>;
};

export default MultipleReturns;
