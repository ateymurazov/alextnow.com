
import React, { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle, ArrowUpRight } from 'lucide-react';
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
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

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
      <h2 className="section-title">Let's Build Better<br />Engineering Organizations.</h2>

      <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mb-10">
        Helping organizations modernize delivery, unify engineering teams, and operationalize AI at scale.
      </p>

      <div className="max-w-5xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-elevated p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                Get In Touch
              </h3>
              
              <div className="space-y-3">
                <a
                  href="mailto:ateymurazov@gmail.com"
                  className="group flex items-center justify-between px-4 py-3 rounded-md bg-background/40 border border-border/60 hover:border-primary/40 hover:bg-background/60 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-300 ease-out"
                >
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary/70 group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors">
                      Email
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <a
                  href="https://linkedin.com/in/ateymurazov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-3 rounded-md bg-background/40 border border-border/60 hover:border-primary/40 hover:bg-background/60 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-300 ease-out"
                >
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-4 w-4 text-primary/70 group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors">
                      LinkedIn
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="card-elevated p-6">
            <h3 className="text-xl font-semibold mb-5 flex items-center">
              <Send className="h-5 w-5 mr-2 text-primary" />
              Discuss an Initiative
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Your Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="How should I address you"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`transition-all duration-200 ${
                    errors.name 
                      ? 'border-destructive focus:border-destructive' 
                      : 'border-border focus:border-primary hover:border-primary/50'
                  }`}
                />
                {errors.name && (
                  <p className="text-sm text-destructive flex items-center">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Work Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`transition-all duration-200 ${
                    errors.email 
                      ? 'border-destructive focus:border-destructive' 
                      : 'border-border focus:border-primary hover:border-primary/50'
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-destructive flex items-center">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">What are you trying to improve? *</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your engineering, delivery, or organizational challenge."
                  value={formData.message}
                  onChange={handleChange}
                  className={`transition-all duration-200 resize-none ${
                    errors.message 
                      ? 'border-destructive focus:border-destructive' 
                      : 'border-border focus:border-primary hover:border-primary/50'
                  }`}
                />
                {errors.message && (
                  <p className="text-sm text-destructive flex items-center">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 transition-all duration-200"
                size="lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="h-4 w-4" />
                    <span>Start the Conversation</span>
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
