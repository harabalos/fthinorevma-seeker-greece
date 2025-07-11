import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, UserCheck, FileText, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Privacy = () => {
  useEffect(() => {
    document.title = 'Πολιτική Απορρήτου - Προστασία Προσωπικών Δεδομένων | Follow Up';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Πολιτική Απορρήτου της Follow Up. Μάθετε πώς προστατεύουμε και χειριζόμαστε τα προσωπικά σας δεδομένα σύμφωνα με τον GDPR.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 text-orange-200 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Πολιτική Απορρήτου
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Η προστασία των προσωπικών σας δεδομένων είναι προτεραιότητά μας. 
            Διαβάστε πώς χειριζόμαστε τις πληροφορίες σας.
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
                  Η Follow Up δεσμεύεται να προστατεύει και να σέβεται την ιδιωτικότητά σας. 
                  Αυτή η Πολιτική Απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε, αποκαλύπτουμε 
                  και προστατεύουμε τις πληροφορίες σας όταν χρησιμοποιείτε τις υπηρεσίες μας.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Η πολιτική αυτή συμμορφώνεται με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR) 
                  και την ελληνική νομοθεσία για την προστασία προσωπικών δεδομένων.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="bg-gradient-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <UserCheck className="w-6 h-6 text-primary mr-3" />
                  Πληροφορίες που Συλλέγουμε
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Προσωπικά Δεδομένα</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Όνομα και στοιχεία επικοινωνίας (τηλέφωνο, email)</li>
                  <li>Διεύθυνση κατοικίας ή επιχείρησης</li>
                  <li>Στοιχεία παροχής ρεύματος (τρέχων πάροχος, κατανάλωση)</li>
                  <li>Αριθμός Φορολογικού Μητρώου (ΑΦΜ) για τη σύναψη συμβολαίου</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mt-6">Τεχνικά Δεδομένα</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Διεύθυνση IP και στοιχεία περιήγησης</li>
                  <li>Cookies και παρόμοιες τεχνολογίες</li>
                  <li>Πληροφορίες συσκευής και προγράμματος περιήγησης</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="bg-gradient-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Eye className="w-6 h-6 text-primary mr-3" />
                  Πώς Χρησιμοποιούμε τα Δεδομένα
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Χρησιμοποιούμε τα προσωπικά σας δεδομένα για τους ακόλουθους σκοπούς:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Παροχή υπηρεσιών σύγκρισης και αλλαγής παρόχου ρεύματος</li>
                  <li>Επικοινωνία μαζί σας για τη διαδικασία αλλαγής</li>
                  <li>Ανάλυση της κατανάλωσής σας και παροχή εξατομικευμένων προτάσεων</li>
                  <li>Βελτίωση των υπηρεσιών μας</li>
                  <li>Συμμόρφωση με νομικές υποχρεώσεις</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="bg-gradient-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Lock className="w-6 h-6 text-primary mr-3" />
                  Κοινοποίηση Δεδομένων
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Κοινοποιούμε τα προσωπικά σας δεδομένα μόνο στις ακόλουθες περιπτώσεις:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Στον πάροχο ρεύματος που επιλέγετε για τη σύναψη συμβολαίου</li>
                  <li>Σε νομικά εξουσιοδοτημένους συνεργάτες που μας βοηθούν στην παροχή υπηρεσιών</li>
                  <li>Όταν απαιτείται από τον νόμο ή δικαστική απόφαση</li>
                  <li>Με τη ρητή συναίνεσή σας</li>
                </ul>
                <div className="bg-primary-light p-4 rounded-lg mt-4">
                  <p className="text-primary-dark font-medium">
                    Δεν πουλάμε ποτέ τα προσωπικά σας δεδομένα σε τρίτους για εμπορικούς σκοπούς.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="bg-gradient-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Shield className="w-6 h-6 text-primary mr-3" />
                  Ασφάλεια Δεδομένων
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Λαμβάνουμε κατάλληλα τεχνικά και οργανωτικά μέτρα για να προστατεύσουμε 
                  τα προσωπικά σας δεδομένα από:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Μη εξουσιοδοτημένη πρόσβαση</li>
                  <li>Αλλοίωση ή καταστροφή</li>
                  <li>Απώλεια ή κακή χρήση</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Χρησιμοποιούμε κρυπτογράφηση SSL, ασφαλείς servers και περιοδικές 
                  ελέγχους ασφαλείας για τη διασφάλιση των δεδομένων σας.
                </p>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="bg-gradient-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <UserCheck className="w-6 h-6 text-primary mr-3" />
                  Τα Δικαιώματά Σας
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Σύμφωνα με τον GDPR, έχετε τα ακόλουθα δικαιώματα:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Πρόσβαση:</strong> Δικαίωμα πληροφόρησης για τα δεδομένα που επεξεργαζόμαστε</li>
                  <li><strong>Διόρθωση:</strong> Δικαίωμα διόρθωσης ανακριβών δεδομένων</li>
                  <li><strong>Διαγραφή:</strong> Δικαίωμα διαγραφής των δεδομένων σας</li>
                  <li><strong>Περιορισμός:</strong> Δικαίωμα περιορισμού της επεξεργασίας</li>
                  <li><strong>Φορητότητα:</strong> Δικαίωμα μεταφοράς των δεδομένων σας</li>
                  <li><strong>Αντίρρηση:</strong> Δικαίωμα αντίρρησης στην επεξεργασία</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="bg-gradient-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Eye className="w-6 h-6 text-primary mr-3" />
                  Cookies και Παρακολούθηση
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Χρησιμοποιούμε cookies για:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Βελτίωση της εμπειρίας χρήσης</li>
                  <li>Ανάλυση της κίνησης στον ιστότοπο</li>
                  <li>Προσωποποίηση περιεχομένου</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Μπορείτε να διαχειριστείτε τις προτιμήσεις cookies από τις ρυθμίσεις 
                  του προγράμματος περιήγησής σας.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-gradient-card shadow-orange">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  Επικοινωνία για Θέματα Προστασίας Δεδομένων
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Για οποιαδήποτε ερώτηση σχετικά με την επεξεργασία των προσωπικών σας δεδομένων 
                  ή για να ασκήσετε τα δικαιώματά σας, επικοινωνήστε μαζί μας:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Τηλέφωνο:</strong> 211.1985.861</p>
                  <p><strong>Email:</strong> privacy@followup.gr</p>
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
                <CardTitle className="text-xl">Αλλαγές στην Πολιτική</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Διατηρούμε το δικαίωμα να τροποποιήσουμε αυτή την Πολιτική Απορρήτου. 
                  Οι αλλαγές θα δημοσιεύονται σε αυτή τη σελίδα και θα σας ενημερώνουμε 
                  για σημαντικές μεταβολές.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;