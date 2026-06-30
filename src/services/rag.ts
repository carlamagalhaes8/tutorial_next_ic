const API_URL = "http://localhost:5000";

export async function perguntar(question: string) {

    const response = await fetch(`${API_URL}/ask`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            question
        })

    });

    return response.json();

}