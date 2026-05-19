import React, { useState } from 'react';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return !Object.values(newErrors).some(e => e !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const idempotencyKey = `contact-${crypto.randomUUID()}`;
      const { error } = await supabase.functions.invoke('send-transactional-email', {
        body: {
          templateName: 'contact-notification',
          recipientEmail: 'ateymurazov@gmail.com',
          idempotencyKey,
          templateData: { name: formData.name, email: formData.email, message: formData.message },
        },
      });
      if (error) throw error;
      toast({ title: 'Message sent', description: "Thanks for reaching out, I'll get back to you soon." });
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    } catch {
      toast({ title: 'Error', description: 'Failed to send message. Please try again.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="relative section-container overflow-hidden">
      {/* Ambient depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-eyebrow">06 / Contact</div>
      <h2 className="section-title">
        Engineering transformation<br />starts with a conversation.
      </h2>

      <div className="max-w-3xl">
        <p className="text-lg leading-relaxed text-muted-foreground mb-20 max-w-2xl">
          For leaders rethinking delivery systems, scaling engineering organizations through
          inflection points, or modernizing platforms after acquisition. If that's the work
          on your desk, I'd like to hear about it.
        </p>
      </div>

      {/* Unified composed surface */}
      <div className="relative">
        <div className="absolute -inset-x-4 -inset-y-2 -z-10 rounded-3xl bg-gradient-to-br from-card via-card to-secondary/40 border border-border/60 shadow-[0_24px_80px_-32px_hsl(222_30%_8%/0.18)]" />

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-0">
          {/* Channels rail */}
          <div className="p-10 lg:p-12 lg:border-r border-border/60 flex flex-col justify-between gap-12">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-muted-foreground mb-8">
                Direct channels
              </p>

              <div className="space-y-1">
                <a
                  href="mailto:ateymurazov@gmail.com"
                  className="group flex items-center justify-between py-4 border-b border-border/60 hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-0.5">Email</p>
                      <p className="text-sm text-foreground truncate">ateymurazov@gmail.com</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-3" />
                </a>

                <a
                  href="https://linkedin.com/in/ateymurazov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-border/60 hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-0.5">LinkedIn</p>
                      <p className="text-sm text-foreground truncate">/in/ateymurazov</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-3" />
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  Currently available
                </p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground/90">
                Selective engagements with leadership teams navigating engineering scale,
                quality, and integration. Responses within two business days.
              </p>
            </div>
          </div>

          {/* Form panel */}
          <div className="p-10 lg:p-12 bg-gradient-to-br from-background/40 to-transparent">
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`h-12 bg-secondary/40 border rounded-lg px-4 text-sm shadow-none focus-visible:ring-0 focus-visible:border-accent/70 focus-visible:bg-secondary/60 transition-all ${
                      errors.name ? 'border-destructive' : 'border-border/60 hover:border-border'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`h-12 bg-secondary/40 border rounded-lg px-4 text-sm shadow-none focus-visible:ring-0 focus-visible:border-accent/70 focus-visible:bg-secondary/60 transition-all ${
                      errors.email ? 'border-destructive' : 'border-border/60 hover:border-border'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  Context
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-secondary/40 border rounded-lg px-4 py-3 text-sm shadow-none focus-visible:ring-0 focus-visible:border-accent/70 focus-visible:bg-secondary/60 transition-all resize-none ${
                    errors.message ? 'border-destructive' : 'border-border/60 hover:border-border'
                  }`}
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/60">
                <p className="text-xs text-muted-foreground/80 hidden sm:block">
                  Replies typically within two business days.
                </p>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group bg-foreground hover:bg-foreground/90 text-background font-medium tracking-wide transition-all duration-300 px-6 h-11 rounded-lg shadow-sm hover:shadow-md ml-auto"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-3 h-3 border border-background/40 border-t-background rounded-full animate-spin" />
                      Sending
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send message
                      <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
