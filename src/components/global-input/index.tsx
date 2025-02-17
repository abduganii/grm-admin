interface IGloabalInput {
  className?: string;
  label: string;
  typeValue: string;
  placeholder: string;
}
export default function GloabalInput({
  className,
  label,
  typeValue,
  placeholder,
}: IGloabalInput) {
  return (
    <label className={` w-full inline-block ${className && className}`}>
      <p className="mb-2 text-[12px] leading-[14px]">{label}</p>
      {typeValue == "input" ? (
        <input
          className="inline-block w-full py-[8px] px-[9px] text-[14px] leading-[16px] border border-[#C3C3BB]"
          placeholder={placeholder}
        />
      ) : typeValue == "textarea" ? (
        <textarea
          rows={3}
          className="inline-block outline-none w-full py-[8px] px-[9px] text-[14px] leading-[16px] border border-[#C3C3BB]"
          placeholder={placeholder}
        />
      ) : (
        <select className="inline-block w-full py-[8px] px-[9px] text-[14px] leading-[16px] border border-[#C3C3BB]">
          <option>value</option>
          <option>value</option>
          <option>value</option>
        </select>
      )}
    </label>
  );
}
