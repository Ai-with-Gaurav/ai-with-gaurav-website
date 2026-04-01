import { createClient, SupabaseClient } from "@supabase/supabase-js";

let publicClient: SupabaseClient | null = null;
let serviceClient: SupabaseClient | null = null;

export function getSupabase() {
  if (publicClient) return publicClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  publicClient = createClient(url, key);
  return publicClient;
}

export function createServiceClient() {
  if (serviceClient) return serviceClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) return null;

  serviceClient = createClient(url, key);
  return serviceClient;
}
