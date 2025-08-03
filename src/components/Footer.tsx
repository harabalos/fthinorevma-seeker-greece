import { Link } from 'react-router-dom';
import { Zap, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/5262cfb7-4205-416c-8379-554d64c12492.png" 
                alt="Follow Up" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-foreground">
                Follow Up
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Η πιο αξιόπιστη υπηρεσία σύγκρισης και αλλαγής παρόχου ρεύματος στην Ελλάδα. 
              Βρες το φθηνότερο πρόγραμμα ρεύματος για το σπίτι ή την επιχείρησή σου.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>210265051</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@followupnet.gr</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Αθήνα, Ελλάδα</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Γρήγοροι Σύνδεσμοι</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Αρχική
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  Πώς Λειτουργεί
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Συχνές Ερωτήσεις
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Επικοινωνία
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Νομικά</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Πολιτική Απορρήτου
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex justify-between items-center">
          <p className="text-muted-foreground">&copy; 2024 Follow Up. Όλα τα δικαιώματα διατηρούνται.</p>
          <p className="text-muted-foreground text-sm">
            Powered by{" "}
            <a 
              href="https://amox.gr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              amox.gr
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;