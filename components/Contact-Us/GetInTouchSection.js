import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function GetInTouchSection() {
  return (
    <section className="py-24 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide text-stone-800">
            Get in Touch
          </h2>
          <p className="text-lg text-stone-600">
            Use the form below to drop us an e-mail. Old fashioned phone calls work too.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
