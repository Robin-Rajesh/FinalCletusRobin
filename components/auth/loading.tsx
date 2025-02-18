
import Image from "next/image"

export const Loading = () => {
    return (
        <div
            className="h-full w-full flex flex-col  justify-center items-center">
            <Image
                src="/logo.svg"
                alt="logo"
                width={80}
                height={80}
                className="animate-spin duration-400" />
        </div>
    )
}