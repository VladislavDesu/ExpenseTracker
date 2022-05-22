import React, {FC} from "react";
import cl from "./Title.module.scss";

interface TitleProps {
    title: string
}

const Title: FC<TitleProps> = ({title}) => {
    return (
        <h2 className={cl.title}>{title}</h2>
    );
};

export default Title;