'use client'
import React, { useState } from 'react'
import CustomModal from '../Common/Model'
import { MdEmail } from 'react-icons/md';
import { FaPhone, FaUserAstronaut } from 'react-icons/fa';

interface EnrollNewProps {
    isOpen: boolean;
    toggleModal: () => void;
}
interface EnrollState {
    email: string;
    name: string;
    phone: string;
    otherError?: string;

}
const EnrollNew: React.FC<EnrollNewProps> = ({ isOpen, toggleModal }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [state, setState] = useState<EnrollState>({
        email: "",
        name: "",
        phone: "",
    })
    const [errors, setErrors] = useState<Record<keyof EnrollState, string>>({
        email: "",
        name: "",
        phone: "",
        otherError: "",
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setErrors({ ...errors, [name]: '' });
        setState({ ...state, [name]: value });
    };

    const validateForm = (): boolean => {
        const newErrors: Record<keyof EnrollState, string> = { ...errors };

        const { name, email, phone } = state;

        if (!name.trim()) {
            newErrors.name = "Name is required";
        } else {
            newErrors.name = "";
        }

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!isValidEmail(email)) {
            newErrors.email = "Please enter a valid email address";
        } else {
            newErrors.email = "";
        }

        if (!phone.trim()) {
            newErrors.phone = "Phone is required";
        } else if (!isValidPhone(phone)) {
            newErrors.phone = "Please enter a valid phone number";
        } else {
            newErrors.phone = "";
        }

        setErrors(newErrors);
        return Object.values(newErrors).some(error => error.length);
    };

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhone = (phone: string): boolean => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    };

    const handleEnrollNew = async (e: any) => {
        setIsLoading(true);
        e.preventDefault();
    
        const hasErrors = validateForm();
        if (hasErrors) {
            setIsLoading(false);
            return;
        }
    
        try {
            const { name, email, phone } = state;
            const formData = new FormData(e.target);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone', phone);
    
            const response = await fetch('/api/contact', {
                method: 'post',
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
    
            const responseData = await response.json();
    
        } catch (error) {
            alert('Failed to send message. Please try again later.');
        } finally {
            toggleModal();
            setIsLoading(false);
        }
    };
    
    return (
        <div>
            <CustomModal isOpen={isOpen} toggleModal={toggleModal} heading='Enroll'>
                <form action="#" className="mb-0 mt-6 space-y-6 p-4 text-gray-800  sm:p-6 lg:p-8" onSubmit={handleEnrollNew}>
                    <p className="text-lg font-medium">Fill the form for Enroll the Subject</p>

                    <div>
                        <label htmlFor="email" className="">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border p-4 pe-12 text-sm shadow-sm bg-gray-100 text-gray-950"
                                placeholder="Enter email"
                                name='email'
                                onChange={handleInputChange}
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <MdEmail />
                            </span>
                        </div>
                        {errors?.email && <div className="text-red-500 text-sm">{errors.email}</div>}

                    </div>

                    <div>
                        <label htmlFor="name" className="">Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border p-4 pe-12 text-sm shadow-sm bg-gray-100 text-gray-950"
                                placeholder="Enter name"
                                name='name'
                                onChange={handleInputChange}
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer">
                                <FaUserAstronaut />
                            </span>
                        </div>
                        {errors?.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                    </div>

                    <div>
                        <label htmlFor="phone" className="">Phone</label>
                        <div className="relative">
                            <input
                                type="tel"
                                className="w-full rounded-lg border p-4 pe-12 text-sm shadow-sm bg-gray-100 text-gray-950"
                                placeholder="Enter phone"
                                name='phone'
                                onChange={handleInputChange}
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer">
                                <FaPhone />
                            </span>
                        </div>
                        {errors?.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
                    </div>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        {isLoading ? 'Submitting ....': 'Submit'}
                    </button>
                </form>
            </CustomModal>
        </div>
    )
}

export default EnrollNew