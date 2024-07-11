"use client";
import { BasicDetailsAPI, IBasicDetails } from '@/utils/api/basic-details.api';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';


// Define the type for the product context
interface BasicInfoContextType {
    basicInfo: IBasicDetails | undefined;
    fetchBasicInfo: () => void;
    setBasicInfo: (arg: IBasicDetails) => void;
}

const BasicInfoContext = createContext<BasicInfoContextType | undefined>(undefined);

interface ProductProviderProps {
    children: ReactNode;
}

export const BasicInfoProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const [basicInfo, setBasicInfo] = useState<IBasicDetails>();

    const fetchBasicInfo = async () => {
        try {
            const res = await BasicDetailsAPI.getOne();
            if (res) {
                setBasicInfo(res.result || []);
            }
        } catch (error) {
            throw error;
        }
    };


    useEffect(() => {
        fetchBasicInfo();
    }, []);


    return (
        <BasicInfoContext.Provider value={{ basicInfo, fetchBasicInfo, setBasicInfo }}>
            {children}
        </BasicInfoContext.Provider>
    );
};

export const useBasicInfo = () => {
    const context = useContext(BasicInfoContext);
    if (!context) {
        throw new Error('useProductBasicInfo must be used within a BasicInfoProvider');
    }
    return context;
};