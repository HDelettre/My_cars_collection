import React from 'react';
import { useParams } from 'react-router-dom';

const ModelcarsContainer = () => {
  const modelId = useParams();
  console.log(modelId)

  return (
    <div>
      MODEL CARD CONTAINER {modelId.id}
    </div>
  );
}

export default ModelcarsContainer;
