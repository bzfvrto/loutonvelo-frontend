import { auth } from "@/auth";

export default async function useAuth() {
    const session = await auth();
    if (!session?.user) {
        throw new Error("User must be authenticated");
    }
    return session.user;

}
