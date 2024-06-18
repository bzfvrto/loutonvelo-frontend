'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Brand, LoginUserApiResponse, Shop, ShopApiResponse, UpsertBikeApiResponse, UpsertBookingApiResponse, UpsertShopApiResponse } from './definitions';
import { auth, signIn } from '@/auth';
import { AuthError } from 'next-auth';

const backendUrl = process.env.BACKEND_URL;
const openRouteApiKey = process.env.OPEN_ROUTE_API_KEY

/* formatDate src: https://kentcdodds.com/blog/using-fetch-with-type-script */
const formatDate = (date: Date) =>
	`${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')} ${String(
		date.getSeconds(),
	).padStart(2, '0')}.${String(date.getMilliseconds()).padStart(3, '0')}`

export async function fetchBike() {
    const response = await fetch(`${backendUrl}/bikes`);

    const bikes = await response.json();
    console.log('bikes fetched', bikes.data.bikes);

    return bikes;
}

export async function fetchBikeAvailable(from: string, to: string, city: string) {
    // if (from && to) {

    // }
    console.log(from, to);

    const response = await fetch(`${backendUrl}/bikes/available?from=${from}&to=${to}&city=${city}`);
    // console.log('response', response);
    // revalidatePath('/dashboard/bikes/available');

    const bikes = await response.json();
    // console.log('bikes fetched', bikes.data.bikes);

    return bikes;
}

export async function createBike(formData: FormData) {
    console.log('formData', formData);
    // console.log(rawFormData);
    const response = await fetch(`${backendUrl}/bikes`, {
        method: "POST",
        body: formData
    });
    const { data, errors }: UpsertBikeApiResponse = await response.json();
    if (response.ok) {
        const bike = data?.bike;
        console.log(data);

        if (bike && data.result) {
            Object.assign(bike, {fetchedAt: formatDate(new Date())})
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

export async function fetchBooking() {
    const response = await fetch(`${backendUrl}/bookings`);
    // console.log(response);

    const bookings = await response.json();
    // console.log('bookings', bookings);

    return bookings;
}

export async function createBooking(formData: FormData) {
    console.log('formData', formData);
    const session = await auth()
    console.log(session);

    if (!session || !session.user) {
        return Promise.reject(new Error(`You must be authenticated in order to book a bike`))
    }

    formData.append('user', session?.user._id)
    const rawFormData = Object.fromEntries(formData.entries());
    const response = await fetch(`${backendUrl}/bookings`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(rawFormData)
    });
    const { data, errors }: UpsertBookingApiResponse = await response.json();
    if (response.ok) {
        const booking = data?.booking;
        console.log(data);

        if (booking && data.result) {
            Object.assign(booking, {fetchedAt: formatDate(new Date())})
            // return bike;
            revalidatePath('/dashboard/bookings');
            redirect('/dashboard/bookings');
        } else {
            return Promise.reject(new Error(`An error as occured`))
        }
    } else {
        const error = new Error(errors?.map(e => e.message).join('\n') ?? 'unknown')
		return Promise.reject(error)
    }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
    try {
      console.log('formData in signiIn', formData);

    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function loginUser({ email, password}: {email: string, password: string}) {
    console.log('formData', email, password, JSON.stringify({email, password}));

    const response = await fetch(`${backendUrl}/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password})
    });
    const { data, errors }: LoginUserApiResponse = await response.json();
    if (response.ok) {
        const user = data?.user;
        console.log('data from action', data, user);

        if (user && data.result) {
            Object.assign(user, {loggedAt: formatDate(new Date())})
            // return bike;
            return user;
        } else {
            return Promise.reject(new Error(`An error as occured`))
        }
    } else {
        const error = new Error(errors?.map(e => e.message).join('\n') ?? 'unknown')
		return Promise.reject(error)
    }
}

export async function register(prevState: string | undefined, formData: FormData) { // { firstName, lastName, email, password }: { firstName: string, lastName: string, email: string, password: string },
    // console.log(firstName, lastName, email, password);
    console.log('formData register', formData);
    const rawFormData = Object.fromEntries(formData.entries());

    const response = await fetch(`${backendUrl}/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(rawFormData)
    });
    // const { data, errors }: LoginUserApiResponse = await response.json();
    return await response.json()
    // if (response.ok) {
    //     const user = data?.user;
    //     console.log('data from action', data, user);

    //     if (user && data.result) {
    //         Object.assign(user, { loggedAt: formatDate(new Date()) })
    //         // let fd = new FormData();
    //         // fd.append("email", email);
    //         // fd.append("password", password);
    //         // await signIn("credentials", {
    //         //     email,
    //         //     password
    //         // });
    //         return user;
    //     } else {
    //         return Promise.reject(new Error(`An error as occured registering user`))
    //     }
    // } else {
    //     const error = new Error(errors?.map(e => e.message).join('\n') ?? 'unknown')
	// 	return Promise.reject(error)
    // }
}

export async function activateResellerAccount() {
    const session = await auth()
    console.log('session', session);

    if (!session || !session.user) {
        return Promise.reject(new Error(`You must be authenticated in order to book a bike`))
    }

    const response = await fetch(`${backendUrl}/users/update-account`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId: session.user._id})
    });

    const user = await response.json();
    return user;
}

export async function fetchOwnerShop(userId: string): Promise<Shop | null> {
    const response = await fetch(`${backendUrl}/shops/for-owner`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: userId })
    });
    const shopsResponse = await response.json();
    console.log(shopsResponse);
    if (shopsResponse.result === false) {
        return Promise.reject(shopsResponse.errors[0])
    }
    console.log(shopsResponse.data.shops);

    return shopsResponse.data.shops.length > 0 ? shopsResponse.data.shops[0] : null;
}

export async function fetchShopsInCity(city: string) {
    const response = await fetch(`${backendUrl}/shops/city/${city}`);
    const shopsResponse = await response.json();
    // console.log('shopsResponse', shopsResponse);
    // if (shopsResponse.result === false) {
    //     return Promise.reject(shopsResponse.errors)
    // }
    // console.log(shopsResponse.data.shops);

    return shopsResponse;
}

export async function createShop(formData: FormData) {
    const session = await auth()

    if (!session || !session.user) {
        return Promise.reject(new Error(`You must be authenticated in order to create a shop`))
    }

    formData.append('user', session?.user._id)
    console.log('formData', formData);
    const rawFormData = Object.fromEntries(formData.entries());
    const response = await fetch(`${backendUrl}/shops`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(rawFormData)
    });
    const { data, errors }: UpsertShopApiResponse = await response.json();
    if (response.ok) {
        const shop = data?.shop;
        console.log(data);

        if (shop && data.result) {
            Object.assign(shop, {fetchedAt: formatDate(new Date())})
            // return bike;
            revalidatePath('/dashboard');
            redirect('/dashboard');
        } else {
            return Promise.reject(new Error(`An error as occured`))
        }
    } else {
        const error = new Error(errors?.map(e => e.message).join('\n') ?? 'unknown')
        return Promise.reject(error)
    }
}

export async function searchAddress(query: string) {
    console.log('query', query);

    const response = await fetch(`https://api.openrouteservice.org/geocode/autocomplete?api_key=${openRouteApiKey}&text=${query}`);
    const result = await response.json();
    console.log(result);

}
