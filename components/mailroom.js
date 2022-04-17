import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import classes from "../pages/util-css.module.css";

export default function Mailroom() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  async function handleOnSubmit(e) {
    console.log(e);

    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(e),
    });

    router.push("/thanks");
  }

  return (
    <>
      <form className="mx-5" onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="form-group">
          <label>Name / Company</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="form-control"
          />
          {errors.name && (
            <small className="text-danger">This field is required</small>
          )}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="form-control"
          />
          {errors.email && (
            <small className="text-danger">This field is required</small>
          )}
        </div>
        <div className="form-group">
          <label>Title / Topic</label>
          <input
            {...register("topic", { required: true })}
            type="text"
            className="form-control"
          />
          {errors.topic && (
            <small className="text-danger">This field is required</small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea
            {...register("message", { required: true })}
            type="text"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          />
          {errors.message && (
            <small className="text-danger">This field is required</small>
          )}
        </div>

        <button
          type="submit"
          className={`btn btn-dark mt-2 ${classes.bluebackground}`}
        >
          Send Message
        </button>
      </form>
    </>
  );
}
