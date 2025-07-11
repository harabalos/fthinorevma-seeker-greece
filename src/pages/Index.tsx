import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ThreeStepForm from '@/components/ThreeStepForm';
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Form */}
      <section className="relative py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Text content */}
            <div className="space-y-8 animate-fade-in-up lg:pt-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Βρες φθηνότερο 
                <span className="text-orange-500"> ρεύμα</span> εύκολα & γρήγορα
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Συγκρίνουμε όλους τους παρόχους ενέργειας και βρίσκουμε την καλύτερη προσφορά για εσένα. Εξοικονόμησε χρήματα χωρίς κόπο!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg transition-all hover:scale-105"
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ξεκίνα Τώρα
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-lg font-medium"
                  asChild
                >
                  <a href="tel:2111985861">
                    Μάθε Περισσότερα
                  </a>
                </Button>
              </div>
              
              {/* Benefits Icons */}
              <div className="flex items-center gap-8 pt-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-orange-500" />
                  </div>
                  <span className="text-sm text-gray-600">Δωρεάν σύγκριση</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-orange-500" />
                  </div>
                  <span className="text-sm text-gray-600">Γρήγορη διαδικασία</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-orange-500" />
                  </div>
                  <span className="text-sm text-gray-600">Έμπειρη υποστήριξη</span>
                </div>
              </div>
            </div>
            
            {/* Right side - 3-Step Form */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <ThreeStepForm />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Γιατί να επιλέξεις το <span className="text-orange-500">Follow Up</span>;
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Χιλιάδες πελάτες μας έχουν ήδη εξοικονομήσει χρήματα. Δες γιατί μας εμπιστεύονται.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-left rounded-xl">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Euro className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Εξοικονόμηση Χρημάτων</h3>
                <p className="text-gray-600 leading-relaxed">
                  Βρίσκουμε τις καλύτερες τιμές στην αγορά και σε βοηθάμε να μειώσεις σημαντικά το κόστος του ρεύματός σου.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in rounded-xl" style={{ animationDelay: '0.2s' }}>
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Γρήγορη Διαδικασία</h3>
                <p className="text-gray-600 leading-relaxed">
                  Η αλλαγή παρόχου γίνεται σε λίγα λεπτά. Εμείς αναλαμβάνουμε όλες τις διαδικασίες για εσένα.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-right rounded-xl" style={{ animationDelay: '0.4s' }}>
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Αξιόπιστη Συμβουλή</h3>
                <p className="text-gray-600 leading-relaxed">
                  Έμπειρη ομάδα συμβούλων που γνωρίζει την αγορά ενέργειας και σε καθοδηγεί στην καλύτερη επιλογή.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Follow Up Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border border-gray-100 shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-12">
                <div className="space-y-8">
                  <p className="text-xl text-gray-700 leading-relaxed font-medium text-center">
                    <strong>Η Follow Up είναι ο προσωπικός σου σύμβουλος στην ενέργεια</strong> — ένας αξιόπιστος συνεργάτης που φροντίζει να πληρώνεις μόνο ό,τι πραγματικά χρειάζεσαι για ρεύμα ή φυσικό αέριο.
                  </p>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Με τη βοήθειά μας:</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <TrendingDown className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <p className="text-gray-700 leading-relaxed">
                            <strong>Μειώνεις άμεσα τον λογαριασμό σου</strong>, χωρίς κόπο.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Zap className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <p className="text-gray-700 leading-relaxed">
                            <strong>Έχεις διαρκή ενημέρωση</strong> για κάθε νέα προσφορά ή αλλαγή στην αγορά.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Users className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <p className="text-gray-700 leading-relaxed">
                            <strong>Έχεις προσωπικό ενεργειακό σύμβουλο</strong> που σε καθοδηγεί βήμα-βήμα, χωρίς πίεση ή ψιλά γράμματα.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Shield className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <p className="text-gray-700 leading-relaxed">
                            <strong>Χτίζεις μια σχέση εμπιστοσύνης</strong>, όχι μια απλή συναλλαγή.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center pt-6 border-t border-gray-200">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Και το σημαντικότερο; <strong className="text-orange-600">Όλα αυτά γίνονται δωρεάν</strong>, γιατί πιστεύουμε ότι η εξοικονόμηση ενέργειας είναι <strong className="text-orange-600">δικαίωμα, όχι προνόμιο</strong>.
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
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Πώς <span className="text-orange-500">λειτουργεί</span>;
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Απλά 3 βήματα για να αρχίσεις να εξοικονομείς χρήματα από το ρεύμα σου
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6 animate-slide-in-left">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-lg">
                  <Search className="w-10 h-10 text-orange-500" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-white">
                  01
                </div>
                {/* Connecting line */}
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-orange-200" style={{ transform: 'translateX(-50%)' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Συγκρίνουμε Προσφορές</h3>
              <p className="text-gray-600 leading-relaxed">
                Αναλύουμε όλες τις διαθέσιμες προσφορές των παρόχων ενέργειας για να βρούμε την καλύτερη για εσένα.
              </p>
            </div>

            <div className="text-center space-y-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-lg">
                  <CheckCircle className="w-10 h-10 text-orange-500" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-white">
                  02
                </div>
                {/* Connecting line */}
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-orange-200" style={{ transform: 'translateX(-50%)' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Επιλέγεις την Καλύτερη</h3>
              <p className="text-gray-600 leading-relaxed">
                Σου παρουσιάζουμε τις top προσφορές με σαφή ανάλυση κόστους και οφελών. Εσύ επιλέγεις.
              </p>
            </div>

            <div className="text-center space-y-6 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-lg">
                  <Zap className="w-10 h-10 text-orange-500" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-white">
                  03
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Αναλαμβάνουμε την Αλλαγή</h3>
              <p className="text-gray-600 leading-relaxed">
                Κάνουμε όλες τις διαδικασίες για εσένα. Δεν διακόπτεται το ρεύμα και δεν χρειάζεται κανένας κόπος από εσένα.
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg transition-all hover:scale-105"
              asChild
            >
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Συχνές <span className="text-orange-500">Ερωτήσεις</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Βρες απαντήσεις στις πιο συχνές ερωτήσεις που μας κάνουν οι πελάτες μας
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border border-gray-100 shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="border-b border-gray-100 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <ArrowRight className="w-5 h-5 text-orange-500 mr-2" />
                      Είναι δωρεάν η υπηρεσία σας;
                    </h3>
                    <p className="text-gray-600 leading-relaxed pl-7">
                      Ναι, η υπηρεσία μας είναι εντελώς δωρεάν για τους καταναλωτές. Αμειβόμαστε από τους παρόχους ενέργειας όταν βρίσκουμε τον κατάλληλο πελάτη.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      variant="outline"
                      className="border-orange-500 text-orange-500 hover:bg-orange-50"
                      asChild
                    >
                      <a href="/faq">Δες όλες τις ερωτήσεις</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
