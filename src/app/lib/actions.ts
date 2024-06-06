'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Brand, UpsertBikeApiResponse } from './definitions';

const backendUrl = process.env.BACKEND_URL;

/* formatDate src: https://kentcdodds.com/blog/using-fetch-with-type-script */
const formatDate = (date: Date) =>
	`${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')} ${String(
		date.getSeconds(),
	).padStart(2, '0')}.${String(date.getMilliseconds()).padStart(3, '0')}`

export async function fetchBike() {
    const response = await fetch(`${backendUrl}/bikes`);
    // console.log(response);

    const brands = response.json();

    return brands;
}
export async function createBike(formData: FormData) {
    console.log('formData', formData);
    const rawFormData = Object.fromEntries(formData.entries());
    // console.log(rawFormData);
    const response = await fetch(`${backendUrl}/bikes`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(rawFormData)
    });
    const { data, errors }: UpsertBikeApiResponse = await response.json();
    if (response.ok) {
        const bike = data?.bike;
        console.log(data);

        if (bike && data.result) {
            Object.assign(bike, formatDate(new Date()))
            // return bike;
            revalidatePath('/dashboard/bikes');
            redirect('/dashboard/bikes');
        } else {
            return Promise.reject(new Error(`An error as occured`))
        }
    } else {
        const error = new Error(errors?.map(e => e.message).join('\n') ?? 'unknown')
		return Promise.reject(error)
    }
}

export async function fetchBrand() {
    const response = await fetch(`${backendUrl}/brands`);
    // console.log(response);

    const brands = response.json();
    // console.log('brands', brands);

    return brands;
}

export async function createBrand(formData: FormData) {
    // console.log('formData', formData);
    const rawFormData = Object.fromEntries(formData.entries());
    // console.log(rawFormData);
    const response = await fetch(`${backendUrl}/brands`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(rawFormData)
    });
    const result = await response.json()
    revalidatePath('/dashboard/brands');
    redirect('/dashboard/brands');
}
