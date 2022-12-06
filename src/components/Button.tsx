import { ReactNode } from "react";

interface Prototype {
    children?: ReactNode | string;
    onClick?: () => void;
}

export const Button = ({ children, onClick }: Prototype) => {
    return <button onClick={onClick}>{children}</button>;
};
