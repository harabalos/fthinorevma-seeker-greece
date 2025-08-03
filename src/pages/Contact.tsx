import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import ThreeStepForm from '@/components/ThreeStepForm';

const Contact = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Επικοινωνία - Καλέστε για Δωρεάν Ανάλυση Ρεύματος | Follow Up';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Επικοινωνήστε με τη Follow Up για δωρεάν ανάλυση του λογαριασμού ρεύματος. Τηλέφωνο: 210265051. Εξυπηρέτηση Δευτέρα-Παρασκευή 09:00-17:00.');
    }
  }, []);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Add pop-up animation
      formRef.current.style.transform = 'scale(0.95)';
      formRef.current.style.transition = 'transform 0.3s ease';
      
      setTimeout(() => {
        if (formRef.current) {
          formRef.current.style.transform = 'scale(1.02)';
          setTimeout(() => {
            if (formRef.current) {
              formRef.current.style.transform = 'scale(1)';
            }
          }, 150);
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Επικοινωνήστε Μαζί Μας
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
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
                <Card className="bg-gradient-card shadow-md hover:shadow-blue transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-blue">
                        <Phone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Τηλέφωνο</h3>
                        <a 
                          href="tel:210265051" 
                          className="text-primary hover:text-primary-dark transition-colors text-lg font-medium"
                        >
                          210265051
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-md hover:shadow-blue transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-blue">
                        <Mail className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <a 
                          href="mailto:info@followupnet.gr" 
                          className="text-primary hover:text-primary-dark transition-colors"
                        >
                          info@followupnet.gr
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-md hover:shadow-blue transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-blue">
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

                <Card className="bg-gradient-card shadow-md hover:shadow-blue transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-blue">
                        <Clock className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Ώρες Εξυπηρέτησης</h3>
                        <div className="text-muted-foreground">
                          <p>Δευτέρα - Παρασκευή, 09:00 – 17:00</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div ref={formRef} className="transition-transform duration-300">
              <ThreeStepForm />
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
            <Card className="bg-gradient-card shadow-md hover:shadow-blue transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Κλήση για Άμεση Εξυπηρέτηση
                </h3>
                <p className="text-muted-foreground mb-6">
                  Καλέστε τώρα και μιλήστε απευθείας με έναν ειδικό μας
                </p>
                <Button size="lg" asChild className="shadow-blue">
                  <a href="tel:210265051">
                    <Phone className="mr-2 w-5 h-5" />
                    210265051
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-md hover:shadow-blue transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <Send className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Δωρεάν Ανάλυση Online
                </h3>
                <p className="text-muted-foreground mb-6">
                  Συμπληρώστε τη φόρμα και θα σας καλέσουμε εμείς
                </p>
                <Button size="lg" variant="outline" onClick={scrollToForm}>
                  Συμπληρώστε τη φόρμα
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