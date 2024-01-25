import React from "react";

const Container = (props) => {
    return (
        <div
        className={`mx-auto p-4 py-4 lg:mt-8 sm:w-[576px] lg:w-[992px] xl:w-[1216px] 2xl:w-[1500px] ${
            props.className ? props.className : ""
        }`}
        >
        {props.children}
        </div>
    );
};

export default Container;
