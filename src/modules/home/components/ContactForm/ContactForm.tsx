import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface Inputs {
  name: string;
  email: string;
  message: string;
}

const inputSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string(),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(inputSchema),
  });

  const closeModal = () => {
    (
      document.getElementById("contact_modal") as HTMLDialogElement | null
    )?.close();
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch("/api/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          toast.error("Something went wrong");
          return;
        }
        toast.success("Message sent successfully!");
        closeModal();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send message. Please try again later.");
      });
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center"
    >
      <div className="flex flex-col w-full">
        <label className="input  flex items-center gap-2">
          Name
          <input
            placeholder="David"
            {...register("name", { required: true })}
            className="grow border-b border-black font-semibold"
          />
        </label>
        <div className="label">
          {errors.name && (
            <span className="label-text-alt text-error">
              This field is required
            </span>
          )}
        </div>
        <label className="input flex items-center gap-2 w-full ">
          Email
          <input
            placeholder="your@email.com"
            {...register("email", { required: true })}
            className="grow border-b border-black font-semibold"
          />
        </label>
        <div className="label">
          {errors.email && (
            <span className="label-text-alt text-error">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col w-full">
        <textarea
          {...register("message", { required: true })}
          className="textarea textarea-bordered text-base border-black textarea-md w-full font-semibold"
          rows={5}
          placeholder="Enter your message here"
        />
        <div className="label">
          {errors.message && (
            <span className="label-text-alt text-error">
              This field is required
            </span>
          )}
        </div>
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-slate-900 text-white px-6 py-1  cursor-pointer rounded-sm"
      >
        Send message
      </motion.button>
    </form>
  );
}
