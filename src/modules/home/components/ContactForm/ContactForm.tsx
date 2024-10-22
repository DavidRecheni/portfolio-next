import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

interface Inputs {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-2 flex flex-col items-center"
    >
      <div className="flex flex-col w-full">
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            placeholder="David"
            {...register("name", { required: true })}
            className="grow"
          />
        </label>
        <div className="label">
          {errors.name && (
            <span className="label-text-alt text-error">
              * This field is required
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label className="input input-bordered flex items-center gap-2 w-full">
          Email
          <input
            placeholder="davidrecheni@gmail.com"
            {...register("email", { required: true })}
            className="grow"
          />
        </label>
        <div className="label">
          {errors.email && (
            <span className="label-text-alt text-error">
              * This field is required
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col w-full">
        <textarea
          {...register("message", { required: true })}
          className="textarea textarea-bordered text-base textarea-md w-full"
          placeholder="Enter your message here"
        />
        <div className="label">
          {errors.message && (
            <span className="label-text-alt text-error">
              * This field is required
            </span>
          )}
        </div>
      </div>
      <input
        type="submit"
        className="bg-slate-900 text-white px-6 py-1 cursor-pointer rounded-sm"
      />
    </form>
  );
}
