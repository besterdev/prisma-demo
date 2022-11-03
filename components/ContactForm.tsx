import { useForm } from "react-hook-form";
import { TextInput } from "./TextInput";

interface FormData {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

interface ContactFormProps {
  onSubmit: (data: FormData) => void;
}

const FormError = ({ errorMessage }: { errorMessage: string }) => {
  return <p className="mt-1 text-red-300">{errorMessage}</p>;
};

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: { firstName: "", lastName: "", email: "", avatar: "" },
  });
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="mb-4 text-4xl font-bold text-gray-800">Add Contact</h1>
      <TextInput
        placeholder="First Name"
        name="firstName"
        register={register}
        required
        error={errors.firstName?.message}
      />
      <TextInput
        placeholder="Last Name"
        name="lastName"
        register={register}
        required
        error={errors.lastName?.message}
      />
      <TextInput
        placeholder="Email"
        name="email"
        register={register}
        required
        error={errors.email?.message}
      />
      <TextInput
        placeholder="Avatar"
        name="avatar"
        register={register}
        required
        error={errors.avatar?.message}
      />
      <button
        className="p-4 text-lg font-bold text-white bg-blue-500 rounded-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
