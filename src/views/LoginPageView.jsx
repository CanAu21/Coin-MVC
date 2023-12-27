import { inputs } from "../constant";
import InputFieldView from "./InputFieldView";

const LoginPageView = ({ formik }) => {
  return (
    <div className="login-page">
      <div className="container mt-4">
        <h2 className="d-flex gap-3 justify-content-center align-items-center">
          <img height={60} src="/c-logo.png" />
          <span>Coinmania</span>
        </h2>

        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data) => (
            <InputFieldView formik={formik} data={data} />
          ))}

          <button className="mb-5" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPageView;
