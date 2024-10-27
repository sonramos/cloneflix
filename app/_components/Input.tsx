interface InputProps {
    id: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: any;
    value: string;
    label: string;
    type?: string;
}

function Input({
    id,
    onChange,
    value,
    label,
    type,
}: InputProps) {
    return (
        <div className="relative">
            <input
                id={id}
                value={value}
                onChange={onChange}
                type={type}
                className="
                    block
                    rounded-md
                    px-6
                    pt-6
                    pb-2
                    w-full
                    text-md
                    text-white
                    bg-neutral-700
                    appearance-none
                    focus:outline-none
                    focus:ring-0
                    peer
                "
                placeholder=" "
            />
            <label
                className="
                    absolute
                    left-6
                    origin-[0]
                    text-md
                    text-zinc-400
                    duration-150
                    transform
                    -translate-y-1
                    scale-75
                    top-1
                    z-10
                    ease-linear
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:-translate-y-1/2
                    peer-focus:top-1
                    peer-focus:scale-75
                    peer-focus:-translate-y-1
                    "
                htmlFor="email">
                {label}
            </label>
        </div>

    )
}

export default Input;