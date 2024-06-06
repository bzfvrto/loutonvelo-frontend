'use server';

const backendUrl = process.env.BACKEND_URL;

export async function createBike(formData: FormData) {
    // console.log('formData', formData);
    const rawFormData = Object.fromEntries(formData.entries());
    // console.log(rawFormData);
    fetch(`${backendUrl}/bikes`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(rawFormData)
    }).then(res => res.json())
        .then(newBikeResponse => {
            console.log('newBikeResponse', newBikeResponse);

    })
}
