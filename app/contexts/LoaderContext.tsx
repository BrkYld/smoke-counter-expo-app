import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../components';


type LoaderContexType  = {
    loader: boolean,
    isActive: boolean,
    showLoader: (() => void),
    hideLoader: (() => void),
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

interface LoaderContextProps{
    children : JSX.Element
}

const loaderContext : LoaderContexType= {
    loader:false,
    isActive: false,
    showLoader: ()=> null,
    hideLoader: ()=> null,
    setIsActive: ()=> null,
}

const LoaderContext = React.createContext<LoaderContexType>(loaderContext);
const LoaderConsumer = LoaderContext.Consumer;

const LoaderProvider = ({ children }: LoaderContextProps) => {
    const [loader, setLoader] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);

    const showLoader = () => {
        setLoader(true);
    };

    const hideLoader = () => {
        setLoader(false);
    };

    return (
        <LoaderContext.Provider value={{
            showLoader,
            hideLoader,
            loader,
            isActive,
            setIsActive,
        }}
        >
            <Loader show={loader} />
            {children}
        </LoaderContext.Provider>
    );
};

LoaderProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { LoaderContext, LoaderConsumer, LoaderProvider };
