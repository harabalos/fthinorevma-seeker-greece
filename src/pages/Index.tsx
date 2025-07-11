import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm from '@/components/ContactForm';
import StatsSection from '@/components/StatsSection';
import { 
  Zap, 
  Euro, 
  Clock, 
  Shield, 
  Search, 
  FileText, 
  CheckCircle,
  ArrowRight,
  TrendingDown,
  Users
} from 'lucide-react';
import heroImage from '@/assets/hero-electricity.jpg';

const Index = () => {
  useEffect(() => {
    document.title = 'Follow Up - Βρες Φθηνότερο Ρεύμα Εύκολα & Γρήγορα | Σύγκριση Παρόχων';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Σύγκριση παρόχων ρεύματος στην Ελλάδα. Βρες το φθηνότερο πρόγραμμα ρεύματος για το σπίτι ή την επιχείρησή σου. Δωρεάν ανάλυση και άμεση εξυπηρέτηση.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Βρες φθηνότερο ρεύμα 
                <span className="text-orange-200"> εύκολα & γρήγορα</span>
              </h1>
              <p className="text-xl text-orange-100 max-w-2xl">
                Σύγκριση 17+ παρόχων ρεύματος στην Ελλάδα. Εξοικονόμησε έως και 40% στον λογαριασμό σου 
                με τη δωρεάν ανάλυση μας.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="shadow-orange-lg transition-spring hover:scale-105"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Δωρεάν Ανάλυση <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Πώς Λειτουργεί
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src={heroImage} 
                alt="Εξοικονόμηση ρεύματος" 
                className="w-full h-auto rounded-2xl shadow-orange-lg"
              />
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce-soft">
                <TrendingDown className="w-8 h-8 text-success" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              Ξεκινήστε την Εξοικονόμηση Σήμερα
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Συμπληρώστε τα στοιχεία σας και θα σας καλέσουμε εντός 24 ωρών για δωρεάν ανάλυση
            </p>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              Γιατί να Επιλέξετε τη Follow Up;
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Η εμπειρία μας και οι συνεργασίες μας σας εγγυώνται τις καλύτερες τιμές
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gradient-card shadow-md hover:shadow-orange transition-all duration-300 animate-slide-in-left">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto shadow-orange">
                  <Euro className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Εξοικονόμηση Χρημάτων</h3>
                <p className="text-muted-foreground">
                  Βρίσκουμε το φθηνότερο πρόγραμμα που ταιριάζει στις ανάγκες σας. 
                  Εξοικονομήστε έως και 40% στον λογαριασμό σας.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-gradient-card shadow-md hover:shadow-orange transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto shadow-orange">
                  <Clock className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Ταχύτητα και Ευκολία</h3>
                <p className="text-muted-foreground">
                  Αναλαμβάνουμε εμείς όλη τη διαδικασία. Από την ανάλυση έως την αλλαγή παρόχου, 
                  χωρίς κόπο από εσάς.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-gradient-card shadow-md hover:shadow-orange transition-all duration-300 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto shadow-orange">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Αξιοπιστία & Συνεργασίες</h3>
                <p className="text-muted-foreground">
                  Συνεργαζόμαστε με όλους τους μεγάλους παρόχους και έχουμε εξυπηρετήσει 
                  χιλιάδες ικανοποιημένους πελάτες.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              Πώς Λειτουργεί;
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Απλά 3 βήματα για να βρείτε το καλύτερο πρόγραμμα ρεύματος
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-6 animate-slide-in-left">
              <div className="relative">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto shadow-orange">
                  <Search className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-primary font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Ανάλυση Αναγκών</h3>
              <p className="text-muted-foreground">
                Συλλέγουμε τα στοιχεία σας και αναλύουμε την τρέχουσα κατανάλωσή σας 
                για να βρούμε το ιδανικό πρόγραμμα.
              </p>
            </div>

            <div className="text-center space-y-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto shadow-orange">
                  <FileText className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-primary font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Σύγκριση Προσφορών</h3>
              <p className="text-muted-foreground">
                Συγκρίνουμε όλες τις διαθέσιμες προσφορές από 17+ παρόχους 
                και σας παρουσιάζουμε τις καλύτερες επιλογές.
              </p>
            </div>

            <div className="text-center space-y-6 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto shadow-orange">
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-primary font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Αλλαγή Παρόχου</h3>
              <p className="text-muted-foreground">
                Αναλαμβάνουμε εμείς όλη τη διαδικασία αλλαγής, χωρίς διακοπή ρεύματος 
                και χωρίς επιπλέον κόστος για εσάς.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white animate-fade-in-up">
              Έτοιμοι να Ξεκινήσετε την Εξοικονόμηση;
            </h2>
            <p className="text-xl text-orange-100 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Περισσότεροι από 2.150 Έλληνες έχουν εξοικονομήσει χρήματα με τη βοήθειά μας. 
              Είστε οι επόμενοι;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg" 
                variant="secondary"
                className="shadow-orange-lg transition-spring hover:scale-105"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ξεκινήστε Τώρα <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                asChild
              >
                <a href="tel:2111985861">
                  <Users className="mr-2 w-5 h-5" />
                  Καλέστε: 211.1985.861
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
