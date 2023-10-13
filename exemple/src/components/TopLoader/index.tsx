import React, { useState } from "react";
import { Button, TopLoader } from "react-craftify-core";

const MyToploader = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fakeLoad = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000 + Math.random() * 1500);
  };

  return (
    <div>
      <Button
        type="primary"
        disabled={isLoading}
        loading={isLoading}
        onClick={fakeLoad}
      >
        Click to load
      </Button>
      <TopLoader loading={isLoading} />
    </div>
  );
};

export default MyToploader;
