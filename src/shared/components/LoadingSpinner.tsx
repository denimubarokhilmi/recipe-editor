import { memo } from "react";

interface Lable {
  label: string;
}

const LoadingSpinner = memo(({ label }: Lable) => (
  <div className=" d-flex justify-content-center flex-column align-items-center">
    <div className="spinner-border text-primary mt-2"></div>
    <p>{label}</p>
  </div>
));

export default LoadingSpinner;
