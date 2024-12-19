import { Suspense } from "react";

/** 
 * I should change some components and hooks in order for this to work
 * I'll see if I get time to improve it later on
 */

const LoadingWithSuspense = (Component) => (props) => {
  return (
    <Suspense fallback={<div className="text-center text-xl">Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default LoadingWithSuspense;
