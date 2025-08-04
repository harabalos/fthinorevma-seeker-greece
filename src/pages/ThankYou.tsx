import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  useEffect(() => {
    document.title = 'Ευχαριστούμε - Follow Up Energy';
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md mx-auto bg-card border-border shadow-blue rounded-xl">
        <CardContent className="pt-8 pb-8">
          <div className="text-center space-y-6">
            <CheckCircle className="w-16 h-16 text-success mx-auto" />
            <h1 className="text-2xl font-bold text-foreground">
              Η αποστολή ολοκληρώθηκε με επιτυχία!
            </h1>
            <p className="text-muted-foreground text-lg">
              Θα σας καλέσουμε εντός 24 ωρών για τη δωρεάν ανάλυση.
            </p>
            <Button asChild className="w-full h-12 rounded-lg font-medium">
              <Link to="/">
                Επιστροφή στην αρχική
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYou;