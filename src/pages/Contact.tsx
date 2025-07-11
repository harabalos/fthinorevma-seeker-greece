import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = 'Επικοινωνία - Καλέστε για Δωρεάν Ανάλυση Ρεύματος | Follow Up';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Επικοινωνήστε με τη Follow Up για δωρεάν ανάλυση του λογαριασμού ρεύματος. Τηλέφωνο: 211.1985.861. Εξυπηρέτηση Δευτέρα-Παρασκευή 9:00-18:00.');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Σφάλμα",
        description: "Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    toast({
      title: "Επιτυχής αποστολή!",
      description: "Θα σας απαντήσουμε το συντομότερο δυνατό",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Επικοινωνήστε Μαζί Μας
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Είμαστε εδώ για να σας βοηθήσουμε να βρείτε το καλύτερο πρόγραμμα ρεύματος. 
            Καλέστε τώρα για δωρεάν ανάλυση!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Στοιχεία Επικοινωνίας
                </h2>
                <p className="text-muted-foreground text-lg">
                  Επικοινωνήστε μαζί μας για δωρεάν συμβουλή και ανάλυση του λογαριασμού σας
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-card shadow-md hover:shadow-orange transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-orange">
                        <Phone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Τηλέφωνο</h3>
                        <a 
                          href="tel:2111985861" 
                          className="text-primary hover:text-primary-dark transition-colors text-lg font-medium"
                        >
                          211.1985.861
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-md hover:shadow-orange transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-orange">
                        <Mail className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <a 
                          href="mailto:info@followup.gr" 
                          className="text-primary hover:text-primary-dark transition-colors"
                        >
                          info@followup.gr
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-md hover:shadow-orange transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-orange">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Διεύθυνση</h3>
                        <p className="text-muted-foreground">
                          Αθήνα, Ελλάδα
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-md hover:shadow-orange transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-orange">
                        <Clock className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Ώρες Εξυπηρέτησης</h3>
                        <div className="text-muted-foreground">
                          <p>Δευτέρα - Παρασκευή: 9:00 - 18:00</p>
                          <p>Σάββατο: 10:00 - 15:00</p>
                          <p>Κυριακή: Κλειστά</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <Card className="bg-gradient-card shadow-orange">
                  <CardContent className="p-8">
                    <div className="text-center space-y-4">
                      <CheckCircle className="w-16 h-16 text-success mx-auto" />
                      <h3 className="text-2xl font-semibold text-foreground">Ευχαριστούμε!</h3>
                      <p className="text-muted-foreground text-lg">
                        Λάβαμε το μήνυμά σας και θα σας απαντήσουμε το συντομότερο δυνατό.
                      </p>
                      <div className="pt-4">
                        <Button 
                          onClick={() => setIsSubmitted(false)}
                          variant="outline"
                        >
                          Αποστολή Νέου Μηνύματος
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-gradient-card shadow-orange">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      Στείλτε μας Μήνυμα
                    </CardTitle>
                    <CardDescription>
                      Συμπληρώστε τη φόρμα και θα σας απαντήσουμε εντός 24 ωρών
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Όνομα *</Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Το όνομά σας"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Τηλέφωνο *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="69xxxxxxxx"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Θέμα</Label>
                        <Input
                          id="subject"
                          type="text"
                          placeholder="Θέμα του μηνύματος"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Μήνυμα *</Label>
                        <Textarea
                          id="message"
                          placeholder="Γράψτε το μήνυμά σας εδώ..."
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full shadow-orange">
                        <Send className="mr-2 w-4 h-4" />
                        Αποστολή Μηνύματος
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        * Υποχρεωτικά πεδία
                      </p>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Γρήγορες Ενέργειες
            </h2>
            <p className="text-muted-foreground text-lg">
              Επιλέξτε τον τρόπο που προτιμάτε για να ξεκινήσετε
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-card shadow-md hover:shadow-orange transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Κλήση για Άμεση Εξυπηρέτηση
                </h3>
                <p className="text-muted-foreground mb-6">
                  Καλέστε τώρα και μιλήστε απευθείας με έναν ειδικό μας
                </p>
                <Button size="lg" asChild className="shadow-orange">
                  <a href="tel:2111985861">
                    <Phone className="mr-2 w-5 h-5" />
                    211.1985.861
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-md hover:shadow-orange transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Send className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Δωρεάν Ανάλυση Online
                </h3>
                <p className="text-muted-foreground mb-6">
                  Συμπληρώστε τη φόρμα και θα σας καλέσουμε εμείς
                </p>
                <Button size="lg" variant="outline" asChild>
                  <a href="/#contact-form">
                    Συμπληρώστε Φόρμα
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;