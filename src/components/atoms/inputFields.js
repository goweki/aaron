export default function InputField({
  type = "text",
  name,
  autocomplete,
  placeholder,
  required,
}) {
  return (
    <div className="relative">
      <input
        autocomplete="off"
        id={name}
        name={name}
        type={type}
        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
        placeholder={placeholder}
      />
      <label
        htmlFor={name}
        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {placeholder}
      </label>
    </div>
  );
}
