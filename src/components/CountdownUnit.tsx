interface CountdownUnitProps {
  value: number;
  label: string;
  showBorder?: boolean;
}

export function CountdownUnit({
  value,
  label,
  showBorder = true,
}: CountdownUnitProps) {
  return (
    <div className="flex flex-col h-full">
      <p
        className={`text-7xl font-black h-full flex items-center px-4 ${
          showBorder ? "border-r-2 border-gray-900" : ""
        }`}
      >
        {value.toString().padStart(2, "0")}
      </p>
      <p className="text-[22px] font-black text-gray-900 text-center px-4">
        {label}
      </p>
    </div>
  );
}
