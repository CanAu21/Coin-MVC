// import { useFormik } from "formik";
// import { schema } from "./schema";
// import InputField from "./views/InputField";
// import { inputs } from "./constant";

// const LoginPage = () => {
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       age: "",
//       password: "",
//       confirmPassword: "",
//     },

//     validationSchema: schema,

//     // Works when form is submitted
//     onSubmit: (values, actions) => {
//       actions.resetForm();
//     },
//   });

//   return (
//     <div className="login-page">
//       <div className="container py-4">
//         <h2 className="d-flex gap-3 justify-content-center align-items-center">
//           <img height={60} src="c-logo.png" />
//           <span>Coinmania</span>
//         </h2>

//         {/* FORM */}
//         <form onSubmit={formik.handleSubmit}>
//           {inputs.map((data) => (
//             <InputField formik={formik} data={data} />
//           ))}

//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
