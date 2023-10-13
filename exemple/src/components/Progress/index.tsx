
import { DefaultProgress, RadialProgress } from 'react-craftify-core';
 
const ProgressComponent = () => {
  return (
    <>
      <h1>RadialProgress</h1>
      <RadialProgress
        prcnt={Math.round(Math.random() * 100)}
        size={"130px"}
      />

      <h1>Progress</h1>
      <div style={{ width: "250px" }}>
        <DefaultProgress
          prcnt={Math.round(Math.random() * 100)}
        />
      </div>
    </>
  );
};


export default ProgressComponent;
