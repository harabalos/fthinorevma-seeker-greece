
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, ArrowRight, HelpCircle } from 'lucide-react';

const FAQ = () => {
  useEffect(() => {
    document.title = 'Συχνές Ερωτήσεις - Αλλαγή Παρόχου Ρεύματος | Follow Up';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Απαντήσεις σε όλες τις ερωτήσεις για την αλλαγή παρόχου ρεύματος. Μάθετε για τη διαδικασία, το κόστος, τους χρόνους και τα οφέλη της αλλαγής.');
    }
  }, []);

  const faqs = [
    {
      category: "Γενικές Ερωτήσεις",
      questions: [
        {
          question: "Τι είναι η Follow Up και τι υπηρεσίες προσφέρει;",
          answer: "Η Follow Up είναι εταιρεία που ειδικεύεται στη σύγκριση και αλλαγή παρόχων ρεύματος. Προσφέρουμε δωρεάν ανάλυση του λογαριασμού σας, σύγκριση όλων των διαθέσιμων παρόχων και αναλαμβάνουμε όλη τη διαδικασία αλλαγής χωρίς κόστος για εσάς."
        },
        {
          question: "Πόσο κοστίζει η υπηρεσία σας;",
          answer: "Η υπηρεσία μας είναι εντελώς δωρεάν για τους πελάτες. Δεν χρεώνουμε ούτε για την ανάλυση ούτε για τη διαδικασία αλλαγής παρόχου. Κερδίζουμε προμήθεια από τους παρόχους ρεύματος όταν ολοκληρώνεται η αλλαγή."
        },
        {
          question: "Πόσους παρόχους συγκρίνετε;",
          answer: "Συγκρίνουμε όλους τους μεγάλους παρόχους ρεύματος στην Ελλάδα (17+ εταιρείες) όπως η ΔΕΗ, Protergia, Watt+Volt, Elpedison, NRG, Volterra και πολλοί άλλοι. Έχουμε πρόσβαση σε όλες τις ενεργές προσφορές της αγοράς."
        }
      ]
    },
    {
      category: "Διαδικασία Αλλαγής",
      questions: [
        {
          question: "Πόσο διαρκεί η διαδικασία αλλαγής παρόχου;",
          answer: "Η διαδικασία ολοκληρώνεται συνήθως σε 15-30 ημέρες από την υποβολή της αίτησης. Ο χρόνος εξαρτάται από τον τρέχοντα και τον νέο πάροχο. Θα σας ενημερώνουμε για την πρόοδο σε κάθε στάδιο."
        },
        {
          question: "Θα έχω διακοπή ρεύματος κατά την αλλαγή;",
          answer: "Όχι, δεν θα έχετε καμία διακοπή ρεύματος. Η αλλαγή παρόχου γίνεται διαχειριστικά και το ρεύμα συνεχίζει να παρέχεται κανονικά σε όλη τη διάρκεια της μετάβασης."
        },
        {
          question: "Χρειάζεται να αλλάξω τον μετρητή μου;",
          answer: "Όχι, δεν χρειάζεται αλλαγή μετρητή. Ο υπάρχων μετρητής σας θα συνεχίσει να λειτουργεί κανονικά με τον νέο πάροχο. Μόνο αν επιθυμείτε να αναβαθμίσετε σε έξυπνο μετρητή (smart meter) μπορεί να χρειαστεί αλλαγή."
        },
        {
          question: "Τι στοιχεία χρειάζομαι για την αλλαγή;",
          answer: "Χρειάζεστε: 1) Έναν πρόσφατο λογαριασμό ρεύματος, 2) Ταυτότητα ή διαβατήριο, 3) ΑΦΜ, 4) Στοιχεία τραπεζικού λογαριασμού για τις χρεώσεις (IBAN). Εμείς αναλαμβάνουμε όλη την υπόλοιπη διαδικασία."
        }
      ]
    },
    {
      category: "Κόστος & Εξοικονόμηση",
      questions: [
        {
          question: "Πόσα χρήματα μπορώ να εξοικονομήσω;",
          answer: "Η εξοικονόμηση εξαρτάται από τον τρέχοντα πάροχο και την κατανάλωσή σας. Συνήθως οι πελάτες μας εξοικονομούν 15-40% στον μηνιαίο λογαριασμό τους. Θα σας δώσουμε ακριβή εκτίμηση μετά την ανάλυση του λογαριασμού σας."
        },
        {
          question: "Υπάρχουν κρυφά κόστη στην αλλαγή;",
          answer: "Όχι, δεν υπάρχουν κρυφά κόστη. Η αλλαγή παρόχου είναι δωρεάν. Το μόνο που πληρώνετε είναι τους λογαριασμούς ρεύματος στον νέο πάροχο σύμφωνα με το τιμολόγιο που θα επιλέξετε."
        },
        {
          question: "Αν δεν μείνω ικανοποιημένος, μπορώ να αλλάξω ξανά;",
          answer: "Ναι, μπορείτε να αλλάξετε ξανά πάροχο όποτε θελήσετε. Δεν υπάρχουν δεσμεύσεις ή ποινές διακοπής. Η αγορά ρεύματος είναι πλήρως ελευθεροποιημένη."
        }
      ]
    },
    {
      category: "Τεχνικές Ερωτήσεις",
      questions: [
        {
          question: "Τι συμβαίνει αν ο νέος πάροχος αντιμετωπίσει προβλήματα;",
          answer: "Σε περίπτωση προβλημάτων με τον νέο πάροχο, υπάρχει σύστημα προστασίας. Ο ΔΕΔΔΗΕ (Διαχειριστής Ελληνικού Δικτύου Διανομής Ηλεκτρικής Ενέργειας) εγγυάται τη συνεχή παροχή ρεύματος."
        },
        {
          question: "Τι είναι το τιμολόγιο σταθερής τιμής vs κυμαινόμενης;",
          answer: "Σταθερή τιμή: Η τιμή της kWh παραμένει η ίδια για όλη τη διάρκεια του συμβολαίου. Κυμαινόμενη τιμή: Η τιμή μεταβάλλεται ανάλογα με τις συνθήκες της αγοράς. Θα σας συμβουλεύσουμε ποια επιλογή ταιριάζει καλύτερα στις ανάγκες σας."
        },
        {
          question: "Τι είναι η χρέωση ισχύος;",
          answer: "Η χρέωση ισχύος είναι ένα μηνιαίο πάγιο κόστος που εξαρτάται από τη μέγιστη ισχύ που έχετε δηλώσει στη σύνδεσή σας (π.χ. 3kW, 5kW). Όσο μεγαλύτερη η δηλωμένη ισχύς, τόσο υψηλότερη η χρέωση."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="w-16 h-16 text-orange-200 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Συχνές Ερωτήσεις
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Βρείτε απαντήσεις σε όλες τις ερωτήσεις σας για την αλλαγή παρόχου ρεύματος. 
            Αν δεν βρείτε αυτό που ψάχνετε, καλέστε μας!
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <div className="w-2 h-8 bg-primary rounded mr-4"></div>
                  {section.category}
                </h2>
                
                <Card className="bg-gradient-card shadow-md">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {section.questions.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${sectionIndex}-${faqIndex}`} className="border-border">
                          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/50 transition-colors">
                            <span className="font-medium text-foreground pr-4">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-gradient-card shadow-orange">
            <CardContent className="p-8 text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Δεν Βρήκατε την Απάντησή σας;
              </h2>
              <p className="text-muted-foreground mb-6">
                Οι ειδικοί μας είναι εδώ για να απαντήσουν σε όλες τις ερωτήσεις σας 
                και να σας βοηθήσουν με τη δωρεάν ανάλυση.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="shadow-orange">
                  <a href="tel:210265051">
                    <Phone className="mr-2 w-5 h-5" />
                    Καλέστε: 210265051
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/contact">
                    Επικοινωνία <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Έτοιμοι να Ξεκινήσετε την Εξοικονόμηση;
            </h2>
            <p className="text-xl text-orange-100">
              Περισσότεροι από 2.150 Έλληνες έχουν εμπιστευτεί τη Follow Up. Γίνετε κι εσείς!
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="shadow-orange-lg transition-spring hover:scale-105"
              asChild
            >
              <a href="/contact">
                Δωρεάν Ανάλυση Τώρα <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
