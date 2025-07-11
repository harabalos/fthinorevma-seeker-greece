import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, User, Upload, CheckCircle, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentProvider: '',
    monthlyConsumption: '',
    billFile: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.currentProvider || !formData.monthlyConsumption) {
      toast({
        title: "Σφάλμα",
        description: "Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία",
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      billFile: file
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const providers = [
    'ΔΕΗ',
    'ΕΛΙΝ',
    'ZENΙΘ',
    'ΗΡΩΝ',
    'ΦΥΣΙΚΟ ΑΕΡΙΟ ΕΛΛΑΔΟΣ',
    'ELPEDISON',
    'NRG',
    'PROTERGIA',
    'VOLTERRA',
    'VOLTON',
    'WATT & VOLT',
    'Άλλη εταιρία'
  ];

  const consumptionRanges = [
    '0–200kWh',
    '201–375kWh',
    '376–500kWh',
    '>500kWh',
    'ΔΕΝ ΓΝΩΡΙΖΩ'
  ];

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-lg mx-auto bg-white border-2 border-green-200 shadow-lg">
        <CardContent className="pt-8">
          <div className="text-center space-y-4">
            <CheckCircle className="w-20 h-20 text-success mx-auto" />
            <h3 className="text-2xl font-bold text-foreground">Ευχαριστούμε!</h3>
            <p className="text-muted-foreground text-lg">
              Λάβαμε τα στοιχεία σας. Θα σας καλέσουμε εντός 24 ωρών για τη δωρεάν ανάλυση.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary text-xl font-semibold">
              <Phone className="w-6 h-6" />
              <span>211.1985.861</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-lg mx-auto bg-white border-2 border-orange-100 shadow-orange-lg transition-all duration-300 hover:shadow-orange hover:scale-[1.02] rounded-xl">
      <CardHeader className="text-center pb-6 bg-gradient-to-br from-orange-50 to-white rounded-t-xl">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-orange">
          <Zap className="w-8 h-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">
          Λάβε Προσφορές Δωρεάν
        </CardTitle>
        <p className="text-muted-foreground">
          Συμπλήρωσε τα στοιχεία σου και βρες το καλύτερο πρόγραμμα
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="flex items-center gap-2 text-foreground font-medium">
                <User className="w-4 h-4 text-primary" />
                Όνομα *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Όνομα"
                required
                className="border-2 border-orange-200 focus:border-primary focus:ring-primary rounded-lg h-11"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-foreground font-medium">
                Επίθετο *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Επίθετο"
                required
                className="border-2 border-orange-200 focus:border-primary focus:ring-primary rounded-lg h-11"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2 text-foreground font-medium">
              <Mail className="w-4 h-4 text-primary" />
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="email@example.com"
              required
              className="border-2 border-orange-200 focus:border-primary focus:ring-primary rounded-lg h-11"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2 text-foreground font-medium">
              <Phone className="w-4 h-4 text-primary" />
              Τηλέφωνο *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="210 123 4567"
              required
              className="border-2 border-orange-200 focus:border-primary focus:ring-primary rounded-lg h-11"
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-foreground font-medium">
              Σε ποιον πάροχο ανήκετε; *
            </Label>
            <Select onValueChange={(value) => handleSelectChange('currentProvider', value)}>
              <SelectTrigger className="border-2 border-orange-200 focus:border-primary focus:ring-primary rounded-lg h-11">
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
          
          <div className="space-y-2">
            <Label className="text-foreground font-medium">
              Ποια είναι η μηνιαία κατανάλωσή σας; *
            </Label>
            <Select onValueChange={(value) => handleSelectChange('monthlyConsumption', value)}>
              <SelectTrigger className="border-2 border-orange-200 focus:border-primary focus:ring-primary rounded-lg h-11">
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
          
          <div className="space-y-2">
            <Label htmlFor="billFile" className="flex items-center gap-2 text-foreground font-medium">
              <Upload className="w-4 h-4 text-primary" />
              Ανέβασε τον τελευταίο σου λογαριασμό (προαιρετικό)
            </Label>
            <Input
              id="billFile"
              name="billFile"
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png"
              className="border-2 border-orange-200 focus:border-primary focus:ring-primary rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary-dark cursor-pointer"
            />
            <p className="text-xs text-muted-foreground">
              Υποστηρίζονται αρχεία PDF, JPG, PNG (μέγιστο 5MB)
            </p>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-orange transition-spring hover:scale-105 py-4 text-lg font-semibold rounded-lg"
          >
            Λάβε Προσφορές Δωρεάν
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            Δεν χρεώνουμε καμία υπηρεσία. Είμαστε εδώ για να σας βοηθήσουμε!
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;