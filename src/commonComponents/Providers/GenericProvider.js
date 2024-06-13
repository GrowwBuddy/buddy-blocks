import { createContext, useContext, useState } from '@wordpress/element';

const GenericContext = createContext();

export const useGenericContext = () => useContext(GenericContext);

export const GenericProvider = ({ children, initialData, setAttributes, dataKey }) => {
    const [data, setData] = useState(initialData);

    const updateData = (newData) => {
        setData((prevData) => ({
            ...prevData,
            ...newData[dataKey],
        }));

        setAttributes({ [dataKey]: { ...data, ...newData[dataKey] } });
    };

    const getData = () => {
        return data;
    };

    return (
        <GenericContext.Provider value={{ data, updateData, getData }}>
            {children}
        </GenericContext.Provider>
    );
};
