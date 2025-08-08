
import React, { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

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
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
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
    <section id="contact" className="section-container bg-muted/30">
      <h2 className="section-title">Let's Connect</h2>
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            If you are looking for a quality engineering leader to scale and elevate your engineering 
            organization, let's talk! I'm always interested in discussing how we can build exceptional 
            software together.
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
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a 
                      href="mailto:ateymurazov@gmail.com" 
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      ateymurazov@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/ateymurazov" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/ateymurazov
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/10 rounded-lg border border-primary/20">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-2">Open to Opportunities</p>
                    <p className="text-sm text-muted-foreground">
                      Currently exploring leadership roles in quality engineering, DevOps, and engineering management.
                    </p>
                  </div>
                </div>
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
