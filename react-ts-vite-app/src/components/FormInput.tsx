import type { ChangeEvent } from "react";

interface FormInputProps {
  label: string;
  id: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  isTextArea?: boolean;
}

const FormInput = ({
  label,
  id,
  type = "text",
  onChange,
  placeholder,
  isTextArea = false,
}: FormInputProps) => {
  return (
    <div className={isTextArea ? "col-span-full" : "sm:col-span-3"}>
      <label htmlFor={id} className="block text-sm font-medium text-white">
        {label}
      </label>
      <div className="mt-2">
        {isTextArea ? (
          <textarea
            id={id}
            name={id}
            rows={3}
            onChange={onChange}
            placeholder={placeholder}
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white  placeholder:text-white/50 outline-1 -outline-offset-1 outline-white focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm border border-white"
            required
          />
        ) : (
          <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary">
            <input
              id={id}
              name={id}
              type={type}
              onChange={onChange}
              placeholder={placeholder}
              className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-white/50 focus:outline-none sm:text-sm"
              required
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FormInput;
