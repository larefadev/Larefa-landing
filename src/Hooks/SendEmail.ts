// src/hooks/useEmail.ts
import { useState } from "react";
import {EmailService} from "@/Services/Email.Service";

export const useEmail = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const sendBuyer = async (formData: {
        name: string;
        email: string;
        phone: string;
        workshop: string;
        vehicle: string;
        piece: string;
    }) => {
        await send(EmailService.sendBuyerRegister, formData);
    };

    const sendFranchisee = async (formData: {
        name: string;
        email: string;
        phone: string;
        city: string;
    }) => {
        await send(EmailService.sendFranchiseeRegister, formData);
    };


    const send = async (serviceFn: Function, formData: any) => {
        try {
            setLoading(true);
            setError(null);
            setSuccess(null);
            const result = await serviceFn(formData);
            setSuccess(result.message || "Formulario enviado con éxito");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { sendBuyer, sendFranchisee, loading, error, success };
};
