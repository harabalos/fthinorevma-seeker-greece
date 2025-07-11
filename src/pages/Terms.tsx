import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Scale, AlertCircle, CheckCircle, Phone, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Terms = () => {
  useEffect(() => {
    document.title = 'Όροι Χρήσης - Νομικοί Όροι και Προϋποθέσεις | Follow Up';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Όροι Χρήσης της Follow Up. Διαβάστε τους νομικούς όρους και προϋποθέσεις για τη χρήση των υπηρεσιών μας σύγκρισης και αλλαγής παρόχου ρεύματος.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Scale className="w-16 h-16 text-orange-200 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Όροι Χρήσης
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Οι όροι και προϋποθέσεις που διέπουν τη χρήση των υπηρεσιών μας 
            και τη συνεργασία μας μαζί σας.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Last Updated */}
            <Card className="bg-gradient-card">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  <strong>Τελευταία ενημέρωση:</strong> Ιανουάριος 2024
                </p>
              </CardContent>
            </Card>

            {/* Introduction */}
            <Card className="bg-gradient-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <FileText className="w-6 h-6 text-primary mr-3" />
                  Εισαγωγή
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Καλώς ήρθατε στη Follow Up. Οι παρόντες Όροι Χρήσης διέπουν τη χρήση 
                  του ιστότοπού μας και των υπηρεσιών μας. Με την πρόσβαση ή τη χρήση 
                  των υπηρεσιών μας, συμφωνείτε να δεσμεύεστε από αυτούς τους όρους.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Εάν δεν συμφωνείτε με οποιονδήποτε από αυτούς τους όρους, 
                  παρακαλούμε μην χρησιμοποιείτε τις υπηρεσίες μας.
                </p>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="bg-gradient-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="w-6 h-6 text-primary mr-3" />
                  Περιγραφή Υπηρεσιών
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Η Follow Up παρέχει τις ακόλουθες υπηρεσίες:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Δωρεάν ανάλυση λογαριασμού ρεύματος</li>
                  <li>Σύγκριση προσφορών από παρόχους ρεύματος</li>
                  <li>Συμβουλευτικές υπηρεσίες για επιλογή παρόχου</li>
                  <li>Διαχείριση διαδικασίας αλλαγής παρόχου</li>
                  <li>Υποστήριξη πελατών κατά τη διάρκεια της μετάβασης</li>
                </ul>
                <div className="bg-primary-light p-4 rounded-lg">
                  <p className="text-primary-dark font-medium">
                    Οι υπηρεσίες μας είναι εντελώς δωρεάν για τους πελάτες. 
                    Κερδίζουμε προμήθεια από τους παρόχους ρεύματος.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* User Obligations */}
            <Card className="bg-gradient-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  Υποχρεώσεις Χρηστών
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Κατά τη χρήση των υπηρεσιών μας, συμφωνείτε να:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Παρέχετε ακριβείς και πλήρεις πληροφορίες</li>
                  <li>Ενημερώνετε άμεσα για οποιαδήποτε αλλαγή στα στοιχεία σας</li>
                  <li>Χρησιμοποιείτε τις υπηρεσίες μόνο για νόμιμους σκοπούς</li>
                  <li>Δεν παρεμβαίνετε στη λειτουργία του ιστότοπου ή των υπηρεσιών</li>
                  <li>Σέβεστε τα δικαιώματα πνευματικής ιδιοκτησίας</li>
                  <li>Συνεργάζεστε καλόπιστα κατά τη διαδικασία αλλαγής παρόχου</li>
                </ul>
              </CardContent>
            </Card>

            {/* Our Obligations */}
            <Card className="bg-gradient-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Scale className="w-6 h-6 text-primary mr-3" />
                  Οι Υποχρεώσεις Μας
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Η Follow Up δεσμεύεται να:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Παρέχει ακριβείς και ενημερωμένες πληροφορίες για τους παρόχους</li>
                  <li>Διαχειρίζεται τα προσωπικά σας δεδομένα με ασφάλεια</li>
                  <li>Ενημερώνει για την πρόοδο της διαδικασίας αλλαγής</li>
                  <li>Παρέχει υποστήριξη κατά τη διάρκεια της μετάβασης</li>
                  <li>Δεν χρεώνει κρυφά κόστη ή προμήθειες στους πελάτες</li>
                  <li>Ενεργεί στο καλύτερο συμφέρον των πελατών</li>
                </ul>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="bg-gradient-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <AlertCircle className="w-6 h-6 text-primary mr-3" />
                  Αποποίηση Ευθυνών
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Η Follow Up δεν φέρει ευθύνη για:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Καθυστερήσεις που οφείλονται σε τρίτους (παρόχους, ΔΕΔΔΗΕ)</li>
                  <li>Αλλαγές στις τιμές ή όρους των παρόχων μετά την υπογραφή συμβολαίου</li>
                  <li>Τεχνικά προβλήματα του δικτύου διανομής</li>
                  <li>Διακοπές ή προβλήματα που δεν σχετίζονται με την αλλαγή παρόχου</li>
                </ul>
                <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                  <p className="text-orange-800 font-medium">
                    Σημαντικό: Η αλλαγή παρόχου δεν εγγυάται αυτόματη εξοικονόμηση. 
                    Η εξοικονόμηση εξαρτάται από πολλούς παράγοντες όπως η κατανάλωση 
                    και οι συνήθειες χρήσης.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="bg-gradient-card shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Λήξη Συνεργασίας</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Μπορείτε να διακόψετε τη χρήση των υπηρεσιών μας οποιαδήποτε στιγμή. 
                  Εμείς διατηρούμε το δικαίωμα να διακόψουμε τις υπηρεσίες σε περίπτωση 
                  παραβίασης των όρων χρήσης.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Σε περίπτωση διακοπής, θα ολοκληρώσουμε τις εκκρεμείς διαδικασίες 
                  αλλαγής παρόχου εκτός αν ζητήσετε διαφορετικά.
                </p>
              </CardContent>
            </Card>

            {/* Applicable Law */}
            <Card className="bg-gradient-card shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Εφαρμοστέο Δίκαιο</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Οι παρόντες όροι διέπονται από το ελληνικό δίκαιο. 
                  Τυχόν διαφορές θα επιλύονται από τα αρμόδια δικαστήρια της Αθήνας.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Η Follow Up συμμορφώνεται με την ελληνική και ευρωπαϊκή νομοθεσία 
                  για την προστασία καταναλωτών και την ενεργειακή αγορά.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-gradient-card shadow-orange">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  Επικοινωνία για Νομικά Θέματα
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Για ερωτήσεις σχετικά με τους όρους χρήσης ή νομικά θέματα, 
                  επικοινωνήστε μαζί μας:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Τηλέφωνο:</strong> 211.1985.861</p>
                  <p><strong>Email:</strong> legal@followup.gr</p>
                  <p><strong>Διεύθυνση:</strong> Αθήνα, Ελλάδα</p>
                </div>
                <div className="pt-4">
                  <Button asChild>
                    <a href="/contact">Επικοινωνήστε Μαζί Μας</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Changes */}
            <Card className="bg-gradient-card shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Τροποποιήσεις Όρων</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Διατηρούμε το δικαίωμα να τροποποιήσουμε αυτούς τους όρους χρήσης. 
                  Οι αλλαγές θα δημοσιεύονται σε αυτή τη σελίδα και θα ισχύουν από 
                  την ημερομηνία δημοσίευσης. Σημαντικές αλλαγές θα σας κοινοποιούνται 
                  μέσω email ή τηλεφώνου.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;