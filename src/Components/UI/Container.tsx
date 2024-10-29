import { ReactNode } from "react";

//Interface
interface Props {
    children?: ReactNode;
    className?: string;
}

const Container = ({ children, className }: Props) => {
    return (
        <div className={`3xl:container 3xl:mx-auto px-6 sm:px-6 xxs:px-3.5 ${className}`}>
            {children}
        </div>
    );
};

export default Container;