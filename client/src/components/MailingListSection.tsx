import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MailingListSectionProps {
  isDark: boolean;
}

export default function MailingListSection({ isDark }: MailingListSectionProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Subscribed successfully!",
      description: "You'll receive updates about the Westview Math Tournament.",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section className={`py-16 px-4 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    }`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className={`h-8 w-8 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
            <h2 className={`text-3xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`} style={{ fontFamily: 'Playfair Display, serif' }}>
              Stay Updated
            </h2>
          </div>
          <p className={`text-lg ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Join our mailing list to receive important updates about the tournament
          </p>
        </div>

        <div className="flex justify-center">
          <Card className={`w-full max-w-md ${
            isDark 
              ? 'bg-black/50 border-emerald-500/30 backdrop-blur-sm' 
              : 'bg-white/80 border-emerald-200 backdrop-blur-sm'
          }`}>
            <CardHeader className="text-center">
              <CardTitle className={`text-xl ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                WVMT Mailing List
              </CardTitle>
              <CardDescription className={`${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                We'll send 2-3 emails per year with tournament updates and announcements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className={`text-sm font-medium ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`${
                      isDark 
                        ? 'bg-black/50 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !email.trim()}
                  className={`w-full ${
                    isDark 
                      ? 'bg-emerald-600 hover:bg-emerald-700' 
                      : 'bg-emerald-600 hover:bg-emerald-700'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Subscribe
                    </>
                  )}
                </Button>
              </form>
              <p className={`text-xs mt-4 text-center ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                To unsubscribe, contact us at{' '}
                <a 
                  href="mailto:organizers@wvmt.org" 
                  className={`${isDark ? 'text-emerald-400' : 'text-emerald-600'} hover:underline`}
                >
                  organizers@wvmt.org
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}