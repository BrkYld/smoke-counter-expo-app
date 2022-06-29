import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../components';


type ReportContextType  = {
    dailyReport: DailyReport,
    smokingReport: SmokingReport,
    setDailyReport: React.Dispatch<React.SetStateAction<DailyReport>>,
    setSmokingReport: React.Dispatch<React.SetStateAction<SmokingReport>>,
}

interface ReportContextProps{
    children : JSX.Element
}

const reportContext : ReportContextType= {
    dailyReport: { count: 0 , day:'', detail:[]},
    smokingReport : [],
    setDailyReport: () => null,
    setSmokingReport : ()=> null,
}

const ReportContext = React.createContext<ReportContextType>(reportContext);
const ReportConsumer = ReportContext.Consumer;

const ReportProvider = ({ children }: ReportContextProps) => {
    const [dailyReport, setDailyReport] = useState<DailyReport>(reportContext.dailyReport);
    const [smokingReport, setSmokingReport] = useState<SmokingReport>(reportContext.smokingReport);

    return (
        <ReportContext.Provider value={{
            setDailyReport,
            setSmokingReport,
            dailyReport,
            smokingReport,
        }}
        >
            {children}
        </ReportContext.Provider>
    );
};

ReportProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ReportContext, ReportConsumer, ReportProvider };
