export default function ContactDetails() {
    return (
      <div className="bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-sm">
        <h3 className="text-2xl font-light mb-8 tracking-wide text-stone-800">
          Contact Details
        </h3>
        <div className="space-y-6 text-stone-600">
          <p className="flex items-start space-x-4">
            <span className="font-medium min-w-24">Email:</span>
            <a href="mailto:sales@adamsandbutler.com" className="hover:text-stone-900 transition-colors">
              sales@adamsandbutler.com
            </a>
          </p>
          <p className="flex items-start space-x-4">
            <span className="font-medium min-w-24">US Toll Free:</span>
            <a href="tel:1-800-894-5712" className="hover:text-stone-900 transition-colors">
              1-800-894-5712
            </a>
          </p>
          <p className="flex items-start space-x-4">
            <span className="font-medium min-w-24">Australia:</span>
            <a href="tel:1-800-764-042" className="hover:text-stone-900 transition-colors">
              1-800-764-042
            </a>
          </p>
          <p className="flex items-start space-x-4">
            <span className="font-medium min-w-24">Ireland:</span>
            <a href="tel:+353-1-288-9355" className="hover:text-stone-900 transition-colors">
              +353-1-288-9355
            </a>
          </p>
          <p className="flex items-start space-x-4">
            <span className="font-medium min-w-24">Address:</span>
            <span>
              106 Baggot Street Lower, Dublin 2, D02 DX80, Ireland
            </span>
          </p>
        </div>
      </div>
    );
  }
  