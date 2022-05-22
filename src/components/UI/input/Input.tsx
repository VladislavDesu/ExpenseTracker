import React, {FC} from "react";
import cl from "./Input.module.scss";

interface InputProps {
    [propName: string]: any
}

const Input: FC<InputProps> = ({...props}) => {
    return (
        <input {...props} className={cl.input}/>
    );
};

export default Input;