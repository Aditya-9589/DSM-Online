"use client";

import { ChevronDown, SquarePen } from "lucide-react";

interface SelectOption {
    label: string;
    value: string;
}

interface ProfileFormFieldProps {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: "text" | "email" | "tel" | "select";
    placeholder?: string;
    multiline?: boolean;
    options?: SelectOption[];
    showEditIcon?: boolean;
    className?: string;
}

const shellClassName =
    "relative rounded-[18px] border border-[#ea8a3f] bg-white transition focus-within:border-[#d76b21] focus-within:shadow-[0_0_0_4px_rgba(237,154,35,0.12)]";

const controlClassName =
    "w-full bg-transparent px-5 pb-4 pt-6 text-base text-heading outline-none placeholder:text-[#a5a5a5]";

export default function ProfileFormField({
    id,
    label,
    value,
    onChange,
    type = "text",
    placeholder,
    multiline = false,
    options = [],
    showEditIcon = false,
    className = "",
}: ProfileFormFieldProps) {
    return (
        <label className={`relative block ${className}`}>
            <span className="absolute left-4 top-0 z-10 -translate-y-1/2 bg-[var(--bg-card)] px-2 text-[15px] font-medium text-heading">
                {label}
            </span>
            <div className={shellClassName}>
                {multiline ? (
                    <textarea
                        id={id}
                        value={value}
                        onChange={(event) => onChange(event.target.value)}
                        placeholder={placeholder}
                        rows={4}
                        className={`${controlClassName} resize-none pr-5`}
                    />
                ) : type === "select" ? (
                    <div className="relative">
                        <select
                            id={id}
                            value={value}
                            onChange={(event) => onChange(event.target.value)}
                            className={`${controlClassName} appearance-none pr-14`}
                        >
                            <option value="" disabled>
                                {placeholder}
                            </option>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <ChevronDown
                            size={20}
                            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#8f8f8f]"
                        />
                    </div>
                ) : (
                    <div className="relative">
                        <input
                            id={id}
                            type={type}
                            value={value}
                            onChange={(event) => onChange(event.target.value)}
                            placeholder={placeholder}
                            className={`${controlClassName} ${showEditIcon ? "pr-14" : "pr-5"}`}
                        />
                        {showEditIcon ? (
                            <SquarePen
                                size={22}
                                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#a5a5a5]"
                            />
                        ) : null}
                    </div>
                )}
            </div>
        </label>
    );
}
