import React from "react";
import Select from "react-select";

const customStyles = {
    option: (provided) => ({
        ...provided,
        textAlign:"left"
    }),
    control: (base, state) => ({
        ...base,
        border: state.isFocused ? "2px solid #1C4980" : "1px solid #DADCE0",
        "&:hover": {
            boxShadow: "none",
            outline: " none",
        },
        boxShadow: "none",
        borderRadius: "8px",
        outline: " none",
        padding: "5px",
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";

        return { ...provided, opacity, transition, textAlign:'left' };
    },
    placeholder: (defaultStyles) => ({
        ...defaultStyles,
        textAlign:"left",
        color: "#1C4980",
        fontFamily: 'Inter',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#1C4980',
    }),
    
    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',
    }),
    
};

const Selectable = ({
    options,
    className,
    selectedOptions,
    setSelectedOptions,
    isSearchable=false,
}) => {

    return (
        <div style={{ width: "100%" }} className={className}>
            <Select
                value={selectedOptions}
                onChange={setSelectedOptions}
                options={options}
                styles={customStyles}
                isSearchable={isSearchable}
                placeholder="Select"
            />
        </div>
    );
};

export default Selectable;