import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type State = 'loading' | 'valid' | 'already' | 'invalid' | 'done' | 'error';

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get('token');
  const [state, setState] = useState<State>('loading');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) {
      setState('invalid');
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_KEY } },
        );
        const data = await res.json();
        if (data.valid) setState('valid');
        else if (data.reason === 'already_unsubscribed') setState('already');
        else setState('invalid');
      } catch {
        setState('error');
      }
    })();
  }, [token]);

  const handleConfirm = async () => {
    if (!token) return;
    setSubmitting(true);
    const { data, error } = await supabase.functions.invoke('handle-email-unsubscribe', {
      body: { token },
    });
    setSubmitting(false);
    if (error) setState('error');
    else if (data?.success) setState('done');
    else if (data?.reason === 'already_unsubscribed') setState('already');
    else setState('error');
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight">Email preferences</h1>
        {state === 'loading' && <p className="text-muted-foreground">Checking your link…</p>}
        {state === 'valid' && (
          <>
            <p className="text-muted-foreground">
              Click below to unsubscribe from emails sent via alextnow.com.
            </p>
            <Button onClick={handleConfirm} disabled={submitting} size="lg" className="rounded-full">
              {submitting ? 'Processing…' : 'Confirm unsubscribe'}
            </Button>
          </>
        )}
        {state === 'already' && <p className="text-muted-foreground">You're already unsubscribed.</p>}
        {state === 'done' && (
          <p className="text-muted-foreground">You've been unsubscribed. Thanks!</p>
        )}
        {state === 'invalid' && (
          <p className="text-muted-foreground">This unsubscribe link is invalid or expired.</p>
        )}
        {state === 'error' && (
          <p className="text-muted-foreground">Something went wrong. Please try again later.</p>
        )}
      </div>
    </main>
  );
};

export default Unsubscribe;
