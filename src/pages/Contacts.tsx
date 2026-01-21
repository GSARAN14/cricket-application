import AppLayout from "@/components/layout/AppLayout";
import ContactCard from "@/components/common/ContactCard";
import { Phone } from "lucide-react";

const organizingCommittee = [
  {
    name: "Dr. K. Rangasamy",
    role: "Tournament Director",
    phone: "+91 98765 00001",
    email: "director@ksrct.ac.in",
  },
  {
    name: "Prof. M. Sakthivel",
    role: "Sports Officer",
    phone: "+91 98765 00002",
    email: "sports@ksrct.ac.in",
  },
  {
    name: "Dr. P. Nirmala",
    role: "Accommodation In-charge",
    phone: "+91 98765 00003",
    email: "accommodation@ksrct.ac.in",
  },
  {
    name: "Mr. R. Senthil",
    role: "Transport In-charge",
    phone: "+91 98765 00004",
  },
  {
    name: "Mrs. S. Lakshmi",
    role: "Food In-charge",
    phone: "+91 98765 00005",
  },
];

const supportServices = [
  {
    name: "Dr. K. Anitha",
    role: "Medical Officer",
    phone: "+91 98765 00010",
  },
  {
    name: "Campus Ambulance",
    role: "24/7 Emergency",
    phone: "+91 98765 00011",
  },
  {
    name: "Campus Security",
    role: "Security Desk",
    phone: "+91 98765 00012",
  },
  {
    name: "Help Desk",
    role: "General Enquiries",
    phone: "+91 98765 00013",
  },
];

const Contacts = () => {
  return (
    <AppLayout>
      <div className="p-4 space-y-6">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Phone className="h-6 w-6 text-primary" />
          Contact Directory
        </h1>

        <div>
          <h2 className="text-lg font-bold text-foreground mb-4 font-serif">Organizing Committee</h2>
          <div className="space-y-3">
            {organizingCommittee.map((contact) => (
              <div key={contact.phone} className="glass-card p-4 hover:border-primary/40 transition-colors">
                <ContactCard contact={contact} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-foreground mb-4 font-serif">Support Services</h2>
          <div className="space-y-3">
            {supportServices.map((contact) => (
              <div key={contact.phone} className="glass-card p-4 hover:border-secondary/40 transition-colors">
                <ContactCard contact={contact} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Contacts;
