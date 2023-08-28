import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yupSchema from "../validation";

const Form = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(yupSchema),
  });

  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form>
          <input type="text" name="firstName" placeholder="First name..." />
          <input type="text" name="lastName" placeholder="Last name..." />
          <input type="text" name="email" placeholder="Email..." />
          <input type="text" name="age" placeholder="Age..." />
          <input type="text" name="password" placeholder="Password..." />
          <input
            type="text"
            name="confirmPassword"
            placeholder="Confirm password..."
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
