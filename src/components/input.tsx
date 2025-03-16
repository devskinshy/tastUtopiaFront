import { InputHTMLAttributes } from 'react';

interface InputProps {
  name: string;
  errors?: string[];
}

export default function Input({
  name,
  errors = [],
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="bg-transparent rounded-md w-full px-4 py-3 focus:outline-none ring-1 focus:ring-1 ring-[var(--color-grey-30)] focus:ring-[var(--color-primary-main)] border-none placeholder:text-[var(--color-grey-60)] font-pretendard font-normal text-sm text-[var(--color-grey-160)]"
        {...rest}
      />
      {errors.map((error, index) => {
        return (
          <span key={index} className="text-red-500 font-medium">
            {error}
          </span>
        );
      })}
    </div>
  );
}
