import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    supplyType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.location || !formData.supplyType) {
      toast({
        title: "Σφάλμα",
        description: "Παρακαλώ συμπληρώστε όλα τα πεδία",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    toast({
      title: "Επιτυχής υποβολή!",
      description: "Θα σας καλέσουμε σύντομα για τη δωρεάν ανάλυση",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto bg-gradient-card shadow-orange">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-success mx-auto" />
            <h3 className="text-xl font-semibold text-foreground">Ευχαριστούμε!</h3>
            <p className="text-muted-foreground">
              Λάβαμε τα στοιχεία σας. Θα σας καλέσουμε εντός 24 ωρών για τη δωρεάν ανάλυση.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary">
              <Phone className="w-4 h-4" />
              <span className="font-medium">211.1985.861</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-card shadow-orange">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-foreground">
          Δωρεάν Ανάλυση Ρεύματος
        </CardTitle>
        <CardDescription>
          Συμπληρώστε τα στοιχεία σας και θα σας καλέσουμε για να βρούμε το καλύτερο πρόγραμμα
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Όνομα *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Το όνομά σας"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Τηλέφωνο *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="69xxxxxxxx"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Περιοχή *</Label>
            <Input
              id="location"
              type="text"
              placeholder="π.χ. Αθήνα, Θεσσαλονίκη"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="supplyType">Τύπος Παροχής *</Label>
            <Select onValueChange={(value) => handleInputChange('supplyType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Επιλέξτε τύπο παροχής" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Οικιακή</SelectItem>
                <SelectItem value="business">Επαγγελματική</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full shadow-orange">
            Λήψη Δωρεάν Ανάλυσης
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