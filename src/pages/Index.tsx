
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ThreeStepForm from '@/components/ThreeStepForm';
import StatsSection from '@/components/StatsSection';
import { Zap, Euro, Clock, Shield, Search, FileText, CheckCircle, ArrowRight, TrendingDown, Users } from 'lucide-react';
const Index = () => {
  useEffect(() => {
    document.title = 'Follow Up - Βρες Φθηνότερο Ρεύμα Εύκολα & Γρήγορα | Σύγκριση Παρόχων';

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Σύγκριση παρόχων ρεύματος στην Ελλάδα. Βρες το φθηνότερο πρόγραμμα ρεύματος για το σπίτι ή την επιχείρησή σου. Δωρεάν ανάλυση και άμεση εξυπηρέτηση.');
    }
  }, []);
  return <div className="min-h-screen bg-background">
      {/* Hero Section with Form */}
      <section className="relative py-16 lg:py-24 bg-background overflow-hidden">
        {/* 3D Spline Background */}
        <div 
          className="absolute inset-0 z-0"
          dangerouslySetInnerHTML={{
            __html: `
              <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.26/build/spline-viewer.js"></script>
              <spline-viewer url="https://prod.spline.design/MJVI3-8NHJIyFJmu/scene.splinecode" style="width: 100%; height: 100%;"></spline-viewer>
            `
          }}
        />
        
        {/* Content overlay */}
        <div className="relative z-10 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left side - Text content */}
              <div className="space-y-8 animate-fade-in-up-slow lg:pt-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Βρες φθηνότερο 
                  <span className="text-primary"> ρεύμα</span> εύκολα & γρήγορα
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Συγκρίνουμε όλους τους παρόχους ενέργειας και βρίσκουμε την καλύτερη προσφορά για εσένα. Εξοικονόμησε χρήματα χωρίς κόπο!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-lg font-medium shadow-blue transition-all hover:scale-105 animate-smooth" asChild>
                    <a href="/contact">
                      Ξεκίνα Τώρα
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-lg font-medium animate-smooth" asChild>
                    
                  </Button>
                </div>
                
                {/* Benefits Icons */}
                <div className="flex items-center gap-8 pt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">Δωρεάν σύγκριση</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">Γρήγορη διαδικασία</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">Έμπειρη υποστήριξη</span>
                  </div>
                </div>
              </div>
              
              {/* Right side - 3-Step Form */}
              <div className="relative animate-fade-in-up-slow" style={{
              animationDelay: '0.3s'
            }}>
                <ThreeStepForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Benefits and About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up-slow">
              Γιατί να επιλέξεις το <span className="text-primary">Follow Up</span>;
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up-slow" style={{
            animationDelay: '0.2s'
          }}>
              Χιλιάδες πελάτες μας έχουν ήδη εξοικονομήσει χρήματα. Δες γιατί μας εμπιστεύονται.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 bg-card border shadow-lg hover:shadow-blue-lg transition-all duration-500 animate-slide-in-left-slow rounded-xl">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Euro className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Εξοικονόμηση Χρημάτων</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Βρίσκουμε τις καλύτερες τιμές στην αγορά και σε βοηθάμε να μειώσεις σημαντικά το κόστος του ρεύματός σου.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card border shadow-lg hover:shadow-blue-lg transition-all duration-500 animate-scale-in-slow rounded-xl" style={{
            animationDelay: '0.3s'
          }}>
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Γρήγορη Διαδικασία</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Η αλλαγή παρόχου γίνεται σε λίγα λεπτά. Εμείς αναλαμβάνουμε όλες τις διαδικασίες για εσένα.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card border shadow-lg hover:shadow-blue-lg transition-all duration-500 animate-slide-in-right-slow rounded-xl" style={{
            animationDelay: '0.6s'
          }}>
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Αξιόπιστη Συμβουλή</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Έμπειρη ομάδα συμβούλων που γνωρίζει την αγορά ενέργειας και σε καθοδηγεί στην καλύτερη επιλογή.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* About Follow Up content directly below */}
          <div className="max-w-4xl mx-auto">
            <Card className="border shadow-lg rounded-xl overflow-hidden animate-fade-in-up-slow" style={{
            animationDelay: '0.9s'
          }}>
              <CardContent className="p-12">
                <div className="space-y-8">
                  <p className="text-xl text-foreground leading-relaxed font-medium text-center">
                    <strong>Η Follow Up είναι ο προσωπικός σου σύμβουλος στην ενέργεια</strong> — ένας αξιόπιστος συνεργάτης που φροντίζει να πληρώνεις μόνο ό,τι πραγματικά χρειάζεσαι για ρεύμα ή φυσικό αέριο.
                  </p>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground text-center mb-8">Με τη βοήθειά μας:</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <TrendingDown className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-muted-foreground leading-relaxed">
                            <strong>Μειώνεις άμεσα τον λογαριασμό σου</strong>, χωρίς κόπο.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Zap className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-muted-foreground leading-relaxed">
                            <strong>Έχεις διαρκή ενημέρωση</strong> για κάθε νέα προσφορά ή αλλαγή στην αγορά.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-muted-foreground leading-relaxed">
                            <strong>Έχεις προσωπικό ενεργειακό σύμβουλο</strong> που σε καθοδηγεί βήμα-βήμα, χωρίς πίεση ή ψιλά γράμματα.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Shield className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-muted-foreground leading-relaxed">
                            <strong>Χτίζεις μια σχέση εμπιστοσύνης</strong>, όχι μια απλή συναλλαγή.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center pt-6 border-t border-border">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Και το σημαντικότερο; <strong className="text-primary">Όλα αυτά γίνονται δωρεάν</strong>, γιατί πιστεύουμε ότι η εξοικονόμηση ενέργειας είναι <strong className="text-primary">δικαίωμα, όχι προνόμιο</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-16 bg-gradient-section animate-section-slide">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up-slow">
              Πώς <span className="text-primary">λειτουργεί</span>;
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up-slow" style={{
            animationDelay: '0.2s'
          }}>
              Απλά 3 βήματα για να αρχίσεις να εξοικονομείς χρήματα από το ρεύμα σου
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6 animate-slide-in-left-slow">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-4 border-background shadow-blue transition-all duration-500 hover:scale-110">
                  <Search className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Συγκρίνουμε Προσφορές</h3>
              <p className="text-muted-foreground leading-relaxed">
                Αναλύουμε όλες τις διαθέσιμες προσφορές των παρόχων ενέργειας για να βρούμε την καλύτερη για εσένα.
              </p>
            </div>

            <div className="text-center space-y-6 animate-scale-in-slow" style={{
            animationDelay: '0.3s'
          }}>
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-4 border-background shadow-blue transition-all duration-500 hover:scale-110">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Επιλέγεις την Καλύτερη</h3>
              <p className="text-muted-foreground leading-relaxed">
                Σου παρουσιάζουμε τις top προσφορές με σαφή ανάλυση κόστους και οφελών. Εσύ επιλέγεις.
              </p>
            </div>

            <div className="text-center space-y-6 animate-slide-in-right-slow" style={{
            animationDelay: '0.6s'
          }}>
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-4 border-background shadow-blue transition-all duration-500 hover:scale-110">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Αναλαμβάνουμε την Αλλαγή</h3>
              <p className="text-muted-foreground leading-relaxed">
                Κάνουμε όλες τις διαδικασίες για εσένα. Δεν διακόπτεται το ρεύμα και δεν χρειάζεται κανένας κόπος από εσένα.
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-lg font-medium shadow-blue transition-all duration-500 hover:scale-105 animate-smooth" asChild>
              <a href="/how-it-works">
                Μάθε Περισσότερα
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Additional Form Section */}
      <section className="py-16 bg-background animate-section-slide">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up-slow">
              Ξεκίνα να <span className="text-primary">εξοικονομείς</span> σήμερα
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up-slow" style={{
            animationDelay: '0.2s'
          }}>
              Συμπλήρωσε τη φόρμα και άρχισε άμεσα τη διαδικασία εξοικονόμησης
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto animate-fade-in-up-slow" style={{
          animationDelay: '0.4s'
        }}>
            <ThreeStepForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Συχνές <span className="text-primary">Ερωτήσεις</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Βρες απαντήσεις στις πιο συχνές ερωτήσεις που μας κάνουν οι πελάτες μας
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="border-b border-border pb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <ArrowRight className="w-5 h-5 text-primary mr-2" />
                      Είναι δωρεάν η υπηρεσία σας;
                    </h3>
                    <p className="text-muted-foreground leading-relaxed pl-7">
                      Ναι, η υπηρεσία μας είναι εντελώς δωρεάν για τους καταναλωτές. Αμειβόμαστε από τους παρόχους ενέργειας όταν βρίσκουμε τον κατάλληλο πελάτη.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                      <a href="/faq">Δες όλες τις ερωτήσεις</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;
