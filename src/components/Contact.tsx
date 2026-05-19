import React, { useState } from 'react';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
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
          templateData: {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
        },
      });
      if (error) throw error;
      toast({
        title: "Message sent",
        description: "Thanks for reaching out, I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
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
    <section id="contact" className="section-container">
      <div className="section-eyebrow">06 / Contact</div>
      <h2 className="section-title">Let's build something<br />exceptional.</h2>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            For engineering leadership conversations, advisory work, or M&amp;A integration discussions.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Direct channels */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Direct
              </p>
              <div className="space-y-5">
                <a
                  href="mailto:ateymurazov@gmail.com"
                  className="group flex items-center justify-between py-3 border-b border-border/60 hover:border-accent/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    <span className="text-sm text-foreground">ateymurazov@gmail.com</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </a>
                <a
                  href="https://linkedin.com/in/ateymurazov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3 border-b border-border/60 hover:border-accent/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    <span className="text-sm text-foreground">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </a>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground/80">
              Responses typically within two business days.
            </p>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Or send a note
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`h-11 bg-transparent border-0 border-b rounded-none px-0 text-base shadow-none focus-visible:ring-0 focus-visible:border-accent transition-colors ${
                    errors.name ? 'border-destructive' : 'border-border'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`h-11 bg-transparent border-0 border-b rounded-none px-0 text-base shadow-none focus-visible:ring-0 focus-visible:border-accent transition-colors ${
                    errors.email ? 'border-destructive' : 'border-border'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-transparent border-0 border-b rounded-none px-0 text-base shadow-none focus-visible:ring-0 focus-visible:border-accent transition-colors resize-none ${
                    errors.message ? 'border-destructive' : 'border-border'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="outline"
                  className="group bg-transparent border border-border hover:border-accent hover:bg-accent/5 text-foreground hover:text-foreground font-medium tracking-wide transition-all duration-300 px-8 h-11"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-3 h-3 border border-foreground/30 border-t-foreground rounded-full animate-spin" />
                      Sending
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send message
                      <ArrowUpRight className="h-4 w-4 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
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
