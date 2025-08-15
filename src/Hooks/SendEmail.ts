// src/hooks/useEmail.ts
import { useState } from "react";
import { EmailService } from "@/Services/Email.Service";

interface EmailResult {
    message?: string;
}

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
        await send<typeof formData>(EmailService.sendBuyerRegister, formData);
    };

    const sendFranchisee = async (formData: {
        name: string;
        email: string;
        phone: string;
        city: string;
    }) => {
        await send<typeof formData>(EmailService.sendFranchiseeRegister, formData);
    };

    const send = async <T extends object>(
        serviceFn: (data: T) => Promise<EmailResult>,
        formData: T
    ) => {
        try {
            setLoading(true);
            setError(null);
            setSuccess(null);
            const result = await serviceFn(formData);
            setSuccess(result.message || "Formulario enviado con éxito");
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Error desconocido");
            }
        } finally {
            setLoading(false);
        }
    };

    return { sendBuyer, sendFranchisee, loading, error, success };
};
