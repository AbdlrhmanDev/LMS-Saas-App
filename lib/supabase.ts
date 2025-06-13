import { createClient } from "@supabase/supabase-js";
import { auth } from "@clerk/nextjs/server";

export const createSupabaseClient = async () => {
    const { userId } = await auth();
    const client = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            async accessToken() {
                return (await auth()).getToken();
            },
            global: {
                headers: {
                    'X-User-Id': userId || '',
                },
            },
        }
    );

    // Set the current user ID for RLS policies
    if (userId) {
        await client.rpc('set_user_id', { user_id: userId });
    }

    return client;
};
