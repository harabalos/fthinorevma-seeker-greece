import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronLeft, ChevronRight, Upload, CheckCircle, Zap, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ThreeStepForm = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    currentProvider: '',
    monthlyConsumption: '',
    firstName: '',
    email: '',
    phone: '',
    agreeToTerms: false,
    billFile: null as File | null,
    tariffType: ''
  });

  const providers = [
    'ΔΕΗ',
    'ΕΛΙΝ',
    'ΖΕΝΙΘ',
    'ΗΡΩΝ',
    'ΦΥΣΙΚΟ ΑΕΡΙΟ ΕΛΛΑΔΟΣ',
    'ELPEDISON',
    'NRG',
    'PROTERGIA',
    'VOLTERRA',
    'VOLTON',
    'WATT & VOLT',
    'Άλλη εταιρεία'
  ];

  const consumptionRanges = [
    '0–200kWh',
    '201–375kWh',
    '376–500kWh',
    '>500kWh',
    'ΔΕΝ ΓΝΩΡΙΖΩ'
  ];

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.currentProvider || !formData.monthlyConsumption) {
        toast({
          title: "Συμπληρώστε τα πεδία",
          description: "Παρακαλώ επιλέξτε πάροχο και κατανάλωση",
          variant: "destructive"
        });
        return;
      }
    }
    
    if (currentStep === 2) {
      if (!formData.firstName || !formData.email || !formData.phone || !formData.agreeToTerms) {
        toast({
          title: "Συμπληρώστε τα πεδία",
          description: "Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία και αποδεχτείτε τους όρους",
          variant: "destructive"
        });
        return;
      }
    }
    
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    if (!formData.tariffType) {
      toast({
        title: "Επιλέξτε τύπο τιμολογίου",
        description: "Παρακαλώ επιλέξτε σταθερή ή κυμαινόμενη τιμή",
        variant: "destructive"
      });
      return;
    }

    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    toast({
      title: 'Επιτυχής Αποστολή!',
      description: 'Θα σας καλέσουμε εντός 24 ωρών για δωρεάν ανάλυση.',
    });
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-lg mx-auto bg-card border-border shadow-blue rounded-xl">
        <CardContent className="pt-8 pb-8">
          <div className="text-center space-y-6">
            <CheckCircle className="w-16 h-16 text-success mx-auto" />
            <h3 className="text-2xl font-bold text-foreground">Ευχαριστούμε!</h3>
            <p className="text-muted-foreground text-lg">
              Λάβαμε τα στοιχεία σας. Θα σας καλέσουμε εντός 24 ωρών για τη δωρεάν ανάλυση.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary text-xl font-semibold">
              <Phone className="w-6 h-6" />
              <span>210265051</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-lg mx-auto bg-card border-border shadow-blue rounded-xl overflow-hidden">
      <CardHeader className="bg-muted border-b border-border pb-6">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-foreground">Λάβε δωρεάν προσφορές</h3>
          <p className="text-muted-foreground">Συμπλήρωσε τα στοιχεία σου και θα σου στείλουμε τις καλύτερες προσφορές</p>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= step 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted-foreground/20 text-muted-foreground'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-8 h-0.5 ${
                    currentStep > step ? 'bg-primary' : 'bg-muted-foreground/20'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-2">Ρύθμιση Παροχής</h4>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label className="text-foreground font-medium block mb-2">
                  Σε ποιον πάροχο ανήκετε;
                </Label>
                <Select onValueChange={(value) => updateFormData('currentProvider', value)}>
                  <SelectTrigger className="h-12 border-input rounded-lg">
                    <SelectValue placeholder="Επιλέξτε πάροχο" />
                  </SelectTrigger>
                  <SelectContent>
                    {providers.map((provider) => (
                      <SelectItem key={provider} value={provider}>
                        {provider}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-foreground font-medium block mb-2">
                  Ποια είναι η μηνιαία κατανάλωσή σας;
                </Label>
                <Select onValueChange={(value) => updateFormData('monthlyConsumption', value)}>
                  <SelectTrigger className="h-12 border-input rounded-lg">
                    <SelectValue placeholder="Επιλέξτε κατανάλωση" />
                  </SelectTrigger>
                  <SelectContent>
                    {consumptionRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button 
              onClick={handleNext}
              className="w-full h-12 rounded-lg font-medium"
            >
              Επόμενο
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-2">Επικοινωνία</h4>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="firstName" className="text-foreground font-medium block mb-2">
                  Όνομα
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  placeholder="Το όνομά σας"
                  className="h-12 border-input rounded-lg"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground font-medium block mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="email@example.com"
                  className="h-12 border-input rounded-lg"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-foreground font-medium block mb-2">
                  Τηλέφωνο
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder="210 123 4567"
                  className="h-12 border-input rounded-lg"
                />
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => updateFormData('agreeToTerms', checked)}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                  Έχω διαβάσει και αποδέχομαι τους Όρους χρήσης και προστασίας προσωπικών δεδομένων
                </Label>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button 
                onClick={handlePrevious}
                variant="outline"
                className="flex-1 h-12 rounded-lg"
              >
                <ChevronLeft className="mr-2 w-4 h-4" />
                Προηγούμενο
              </Button>
              <Button 
                onClick={handleNext}
                className="flex-1 h-12 rounded-lg"
              >
                Επόμενο
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-2">Επιβεβαίωση</h4>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="billFile" className="text-foreground font-medium block mb-2">
                  Ανέβασε φωτογραφία του τελευταίου λογαριασμού (προαιρετικό)
                </Label>
                <Input
                  id="billFile"
                  type="file"
                  onChange={(e) => updateFormData('billFile', e.target.files?.[0] || null)}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="h-12 border-input rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground cursor-pointer"
                />
              </div>
              
              <div>
                <Label className="text-foreground font-medium block mb-2">
                  Τιμολόγιο
                </Label>
                <Select onValueChange={(value) => updateFormData('tariffType', value)}>
                  <SelectTrigger className="h-12 border-input rounded-lg">
                    <SelectValue placeholder="Επιλέξτε τύπο τιμολογίου" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fixed">Σταθερή Τιμή Κιλοβατώρας</SelectItem>
                    <SelectItem value="variable">Κυμαινόμενη</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button 
                onClick={handlePrevious}
                variant="outline"
                className="flex-1 h-12 rounded-lg"
              >
                <ChevronLeft className="mr-2 w-4 h-4" />
                Προηγούμενο
              </Button>
              <Button 
                onClick={handleSubmit}
                className="flex-1 h-12 rounded-lg font-medium"
              >
                Αποστολή
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ThreeStepForm;