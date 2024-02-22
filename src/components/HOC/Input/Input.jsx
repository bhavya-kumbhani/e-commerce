const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

export default function Input({
  handleOnChange,
  value,
  label,
  pattern,
  title,
  id,
  name,
  type,
  isRequired,
  placeholder,
  iconRight,
  onRightIconClick,
  className
}) {
  return (
    <>
      <div className="relative">
        <label className="sr-only">{label}</label>
        <input
          onChange={handleOnChange}
          value={value}
          id={id}
          name={name}
          type={type || "text"}
          required={isRequired}
          className={className}
          placeholder={placeholder}
          title={title}
          pattern={pattern}

        />
        {iconRight && (
          <div className="absolute top-1/2 right-3 -translate-y-1/2 w-[16px] h-[16px] cursor-pointer">

            <img
              onClick={() => {
                onRightIconClick && onRightIconClick();
              }}
              src={iconRight}
              alt="iconRight"
              className="w-full h-full"
            />
          </div>
        )}
      </div>
    </>
  );
}
