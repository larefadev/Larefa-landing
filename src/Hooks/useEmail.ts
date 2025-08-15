// src/hooks/useEmail.ts
import { useState } from "react";
import { EmailService } from "@/Services/Email.Service";

// Define explicit types for the form data to ensure type safety and improve readability.
type BuyerFormData = {
    name: string;
    email: string;
    phone: string;
    workshop: string;
    vehicle: string;
    piece: string;
};

type FranchiseeFormData = {
    name: string;
    email: string;
    phone: string;
    city: string;
};

// Define a generic type for the email service function.
// It takes a generic payload `T` and returns a Promise with a specific result shape.
type EmailServiceFunction<T> = (formData: T) => Promise<{ message: string }>;

export const useEmail = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    // The core `send` function is now generic and type-safe.
    // It ensures that the service function and the form data are compatible.
    const send = async <T>(serviceFn: EmailServiceFunction<T>, formData: T) => {
        setLoading(true);
        setError(null);
        setSuccess(null);
        try {
            const result = await serviceFn(formData);
            setSuccess(result.message || "Formulario enviado con éxito");
        } catch (err) {
            // Safer error handling.
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Ocurrió un error inesperado.");
            }
        } finally {
            setLoading(false);
        }
    };

    const sendBuyer = async (formData: BuyerFormData) => {
        await send(EmailService.sendBuyerRegister, formData);
    };

    const sendFranchisee = async (formData: FranchiseeFormData) => {
        await send(EmailService.sendFranchiseeRegister, formData);
    };

    return { sendBuyer, sendFranchisee, loading, error, success };
};
