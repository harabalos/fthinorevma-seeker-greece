import { useEffect } from "react";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  useEffect(() => {
    document.title = "Πολιτική Απορρήτου | Follow Up";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Η πολιτική απορρήτου της Follow Up - Πώς προστατεύουμε και διαχειριζόμαστε τα προσωπικά σας δεδομένα.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Πολιτική Απορρήτου</h1>
            <p className="text-xl opacity-90">
              Η προστασία των προσωπικών σας δεδομένων είναι πολύ σημαντική για εμάς. Στην Follow Up, δεσμευόμαστε να διαχειριζόμαστε υπεύθυνα και με σεβασμό τις πληροφορίες που μας παρέχετε.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Data Collection */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Ποια δεδομένα συλλέγουμε</h2>
              <div className="space-y-4 text-gray-700">
                <p>Μέσω της φόρμας επικοινωνίας που υπάρχει στον ιστότοπό μας, ενδέχεται να συλλέξουμε τα παρακάτω στοιχεία:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ονοματεπώνυμο (αν συμπληρωθεί)</li>
                  <li>Διεύθυνση email</li>
                  <li>Αριθμός τηλεφώνου (αν υπάρχει σχετικό πεδίο)</li>
                  <li>Ελεύθερο περιεχόμενο μηνύματος</li>
                </ul>
              </div>
            </Card>

            {/* Why We Collect */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Γιατί τα συλλέγουμε</h2>
              <div className="space-y-4 text-gray-700">
                <p>Τα δεδομένα που συλλέγονται χρησιμοποιούνται αποκλειστικά για:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Την απάντηση στο αίτημα ή την ερώτησή σας</li>
                  <li>Την παροχή των υπηρεσιών μας</li>
                  <li>Την επικοινωνία μαζί σας εφόσον απαιτείται</li>
                </ul>
                <p className="mt-4">
                  Δεν χρησιμοποιούμε τα προσωπικά σας δεδομένα για διαφημιστικούς σκοπούς ή εμπορικές προωθήσεις χωρίς τη ρητή σας συγκατάθεση.
                </p>
              </div>
            </Card>

            {/* How We Manage */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Πώς τα διαχειριζόμαστε</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Τα στοιχεία που υποβάλλονται μέσω της φόρμας αποστέλλονται και αποθηκεύονται με ασφάλεια μέσω της υπηρεσίας Formspree. Μπορείτε να δείτε την πολιτική απορρήτου του Formspree εδώ:
                </p>
                <p>
                  👉 <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://formspree.io/legal/privacy-policy
                  </a>
                </p>
              </div>
            </Card>

            {/* Data Retention */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Πόσο διατηρούμε τα δεδομένα σας</h2>
              <p className="text-gray-700 leading-relaxed">
                Τα δεδομένα διατηρούνται μόνο για όσο είναι απαραίτητο για την εξυπηρέτηση του σκοπού για τον οποίο συλλέχθηκαν ή σύμφωνα με τις υποχρεώσεις μας βάσει νόμου.
              </p>
            </Card>

            {/* Data Sharing */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Με ποιον τα μοιραζόμαστε</h2>
              <p className="text-gray-700 leading-relaxed">
                Δεν κοινοποιούμε τα προσωπικά σας δεδομένα σε τρίτους. Εξαίρεση αποτελεί η χρήση του Formspree για την υποβολή και αποθήκευση των αιτημάτων σας.
              </p>
            </Card>

            {/* Your Rights */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Τα δικαιώματά σας</h2>
              <div className="space-y-4 text-gray-700">
                <p>Έχετε δικαίωμα:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Πρόσβασης στα προσωπικά σας δεδομένα</li>
                  <li>Διόρθωσης ή διαγραφής αυτών</li>
                  <li>Περιορισμού ή εναντίωσης στην επεξεργασία</li>
                  <li>Φορητότητας των δεδομένων σας</li>
                </ul>
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Επικοινωνία</h2>
              <div className="space-y-4 text-gray-700">
                <p>Για οποιοδήποτε αίτημα σχετικά με τα προσωπικά σας δεδομένα, μπορείτε να επικοινωνήσετε μαζί μας στο:</p>
                <div className="space-y-2">
                  <p>📧 <strong>Email:</strong> info@followupnet.gr</p>
                  <p>📞 <strong>Τηλέφωνο:</strong> 210265051</p>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;