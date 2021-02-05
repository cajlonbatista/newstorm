import React from 'react';

import { ErrorContainer } from './styles';

const ViewError = () => {
  return (
    <ErrorContainer>
      <svg viewBox="0 0 451.74 451.74">
        <defs />
        <path fill="#e24c4b" d="M446.324 367.381L262.857 41.692c-15.644-28.444-58.311-28.444-73.956 0L5.435 367.381c-15.644 28.444 4.267 64 36.978 64h365.511c34.133-1.422 54.044-35.556 38.4-64z" />
        <path fill="#313139" d="M225.879 63.025l183.467 325.689H42.413L225.879 63.025z" />
        <g fill="#e24c4b">
          <path d="M196.013 212.359l11.378 75.378c1.422 8.533 8.533 15.644 18.489 15.644 8.533 0 17.067-7.111 18.489-15.644l11.378-75.378c2.844-18.489-11.378-34.133-29.867-34.133-18.49-.001-31.29 15.644-29.867 34.133z" />
          <circle cx="225.879" cy="336.092" r="17.067" />
        </g>
      </svg>
      <h1>Couldn't load the news</h1>
    </ErrorContainer>
  );
};

export default ViewError;