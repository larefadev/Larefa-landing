// src/services/EmailService.ts
export class EmailService {
    static async sendBuyerRegister(data: {
        name: string;
        email: string;
        phone: string;
        workshop: string;
        vehicle: string;
        piece: string;
    }) {
        const response = await fetch("https://la-refa-email-service.onrender.com/api/emailservice/send/buyer-register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error enviando datos");
        }

        return response.json();
    }

    static async sendFranchiseeRegister(data: {
        name: string;
        email: string;
        phone: string;
        city: string;
    }) {
        const response = await fetch("https://la-refa-email-service.onrender.com/api/emailservice/send/franchisee-register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error enviando datos");
        }

        return response.json();
    }
}
