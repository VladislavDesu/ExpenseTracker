import React, {FC} from "react";
import cl from "./Button.module.scss";

interface ButtonProps {
    children: React.ReactNode,
    [propName: string]: any
}

const Button: FC<ButtonProps> = ({children, ...props}) => {
    return (
        <button {...props} className={cl.button}>{children}</button>
    );
};

export default Button;