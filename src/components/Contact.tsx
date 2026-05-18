
import React, { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle } from 'lucide-react';
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
      <h2 className="section-title">Let's build something<br />exceptional.</h2>
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            If you're looking for a quality engineering leader to help scale and sharpen your
            engineering org, let's talk. Happy to compare notes on what you're trying to build.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-elevated p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:ateymurazov@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      Email me
                    </span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/ateymurazov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                    <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      Connect on LinkedIn
                    </span>
                  </div>
                </a>
              </div>
              
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-elevated p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Send className="h-5 w-5 mr-2 text-primary" />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
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
                <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
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
                <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your engineering challenges and how I can help..."
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
                    <span>Send Message</span>
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
