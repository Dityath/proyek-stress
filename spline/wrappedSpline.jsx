import Spline from "@splinetool/react-spline";

const WrappedSpline = ({ splineRef, ...props }) => {
  return <Spline ref={splineRef} {...props} />;
};

export default WrappedSpline;
