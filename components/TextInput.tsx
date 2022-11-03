interface InputProps {
  placeholder: string;
  name: string;
  register: any;
  required: boolean;
  className?: string;
  error?: string;
}

export const TextInput = ({
  name,
  placeholder,
  register,
  required,
  className,
  error,
}: InputProps) => {
  return (
    <div className={className}>
      <input
        className="w-full p-4 text-xl border rounded"
        name={name}
        placeholder={placeholder}
        {...register(name, { required })}
      />
      <p className={`text-xs  ${error ? "text-red-500" : "text-transparent"}`}>
        {error ? error : "-"}
      </p>
    </div>
  );
};
