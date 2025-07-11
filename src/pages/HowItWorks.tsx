import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  FileText, 
  CheckCircle, 
  Phone, 
  Euro, 
  Clock,
  ArrowRight,
  Users,
  Shield
} from 'lucide-react';

const HowItWorks = () => {
  useEffect(() => {
    document.title = 'Πώς Λειτουργεί η Αλλαγή Παρόχου Ρεύματος | Follow Up';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Μάθετε πώς λειτουργεί η διαδικασία αλλαγής παρόχου ρεύματος. Απλά 3 βήματα για να εξοικονομήσετε στον λογαριασμό σας χωρίς διακοπή ρεύματος.');
    }
  }, []);

  const steps = [
    {
      icon: <Search className="w-10 h-10 text-primary-foreground" />,
      title: "1. Ανάλυση Αναγκών",
      description: "Συλλέγουμε τα στοιχεία σας και αναλύουμε την τρέχουσα κατανάλωσή σας",
      details: [
        "Εξέταση του τελευταίου λογαριασμού σας",
        "Ανάλυση των συνηθειών κατανάλωσης",
        "Αξιολόγηση των ειδικών αναγκών σας",
        "Δωρεάν συμβουλές εξοικονόμησης"
      ]
    },
    {
      icon: <FileText className="w-10 h-10 text-primary-foreground" />,
      title: "2. Σύγκριση Προσφορών",
      description: "Συγκρίνουμε όλες τις διαθέσιμες προσφορές από 17+ παρόχους",
      details: [
        "Σύγκριση τιμών από όλους τους παρόχους",
        "Ανάλυση όρων και προϋποθέσεων",
        "Έλεγχος ειδικών προσφορών και εκπτώσεων",
        "Παρουσίαση των 3 καλύτερων επιλογών"
      ]
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-primary-foreground" />,
      title: "3. Αλλαγή Παρόχου",
      description: "Αναλαμβάνουμε εμείς όλη τη διαδικασία αλλαγής",
      details: [
        "Υποβολή αίτησης αλλαγής παρόχου",
        "Επικοινωνία με τον νέο πάροχο",
        "Παρακολούθηση της διαδικασίας",
        "Ενημέρωση για την ολοκλήρωση"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Euro className="w-8 h-8 text-primary-foreground" />,
      title: "Εξοικονόμηση έως 40%",
      description: "Στον μηνιαίο λογαριασμό ρεύματος"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-foreground" />,
      title: "Χωρίς διακοπή ρεύματος",
      description: "Η αλλαγή γίνεται αυτόματα"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-foreground" />,
      title: "Δωρεάν υπηρεσία",
      description: "Χωρίς κρυφά κόστη ή χρεώσεις"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Πώς Λειτουργεί η Follow Up;
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Η διαδικασία αλλαγής παρόχου ρεύματος είναι πιο απλή από όσο νομίζετε. 
            Αναλαμβάνουμε εμείς όλη τη δουλειά για εσάς.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Απλά 3 Βήματα
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Η ολόκληρη διαδικασία ολοκληρώνεται σε λιγότερο από 15 λεπτά
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-orange">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Card className={`bg-gradient-card shadow-lg ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <CardContent className="p-8">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto shadow-orange">
                        {step.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-foreground">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Γιατί να Αλλάξετε Πάροχο;
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Τα οφέλη της αλλαγής είναι άμεσα και μακροπρόθεσμα
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 bg-gradient-card shadow-md hover:shadow-orange transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto shadow-orange">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Συχνές Ερωτήσεις για την Αλλαγή
            </h2>
            
            <div className="space-y-6">
              <Card className="bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Πόσο διαρκεί η διαδικασία αλλαγής;
                  </h3>
                  <p className="text-muted-foreground">
                    Η διαδικασία ολοκληρώνεται συνήθως σε 15-30 ημέρες από την υποβολή της αίτησης. 
                    Δεν χρειάζεται να κάνετε τίποτα εσείς - αναλαμβάνουμε όλες τις διαδικασίες.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Θα έχω διακοπή ρεύματος;
                  </h3>
                  <p className="text-muted-foreground">
                    Όχι! Η αλλαγή παρόχου γίνεται χωρίς καμία διακοπή ρεύματος. 
                    Θα συνεχίσετε να έχετε κανονικά ρεύμα σε όλη τη διάρκεια της μετάβασης.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Υπάρχει κόστος για την αλλαγή;
                  </h3>
                  <p className="text-muted-foreground">
                    Η υπηρεσία μας είναι εντελώς δωρεάν. Δεν χρεώνουμε ούτε για την ανάλυση 
                    ούτε για τη διαδικασία αλλαγής. Κερδίζουμε προμήθεια από τους παρόχους.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Πώς λειτουργεί η διαδικασία;
            </h2>
            
            <Card className="border border-gray-100 shadow-lg rounded-xl">
              <CardContent className="p-12">
                <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
                  Η διαδικασία με την Follow Up είναι απλή, ξεκάθαρη και απόλυτα ανθρώπινη:
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Επικοινωνείς μαζί μας τηλεφωνικά ή μέσω της φόρμας ενδιαφέροντος.
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Μπορείς να μας καλέσεις οποιαδήποτε στιγμή ή να συμπληρώσεις τη φόρμα στον ιστότοπό μας για να ξεκινήσεις τη διαδικασία.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Ένας εξειδικευμένος σύμβουλος αναλύει τη σημερινή σου σύμβαση και τις ανάγκες σου.
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Ο σύμβουλός μας θα εξετάσει τον τρέχοντα λογαριασμό σου και θα κατανοήσει τις συνήθειες κατανάλωσής σου για να βρει την καλύτερη λύση.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Γίνεται σύγκριση όλων των ενεργών παρόχων και επιλέγεται η βέλτιστη λύση για σένα.
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Συγκρίνουμε όλες τις διαθέσιμες προσφορές από τους 17+ παρόχους και σου παρουσιάζουμε τις καλύτερες επιλογές με σαφή ανάλυση κόστους.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Σε καθοδηγούμε στη διαδικασία αλλαγής ή βελτίωσης της σύμβασής σου, χωρίς να χρειαστεί να κάνεις τίποτα.
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Αναλαμβάνουμε όλες τις διαδικασίες για εσένα - από την υποβολή αιτήσεων μέχρι την επικοινωνία με τους παρόχους. Εσύ απλά περιμένεις να δεις τη μείωση στον επόμενο λογαριασμό σου.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Έτοιμοι να Ξεκινήσετε;
            </h2>
            <p className="text-xl text-orange-100">
              Καλέστε τώρα και ξεκινήστε την εξοικονόμηση σήμερα!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="shadow-orange-lg transition-spring hover:scale-105"
                asChild
              >
                <a href="/#contact-form">
                  Δωρεάν Ανάλυση <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                asChild
              >
                <a href="tel:2111985861">
                  <Phone className="mr-2 w-5 h-5" />
                  211.1985.861
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;