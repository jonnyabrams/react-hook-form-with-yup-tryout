import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yupSchema from "../validation";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupSchema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="text"
            name="firstName"
            placeholder="First name..."
            {...register("firstName")}
          />
          <p>{errors.firstName?.message}</p>
          <input
            type="text"
            name="lastName"
            placeholder="Last name..."
            {...register("lastName")}
          />
          <p>{errors.lastName?.message}</p>
          <input
            type="text"
            name="email"
            placeholder="Email..."
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <input
            type="number"
            min={0}
            name="age"
            placeholder="Age..."
            {...register("age")}
          />
          <p>{errors.age?.message}</p>
          <input
            type="text"
            name="password"
            placeholder="Password..."
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <input
            type="text"
            name="confirmPassword"
            placeholder="Confirm password..."
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword && "Passwords do not match"}</p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
