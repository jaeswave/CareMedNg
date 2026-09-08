import ContactForm from "../../components/ContactForm";
import ServiceList from "../../components/ServiceList";
import Partnership from "../../components/Partnership";
import { services } from "../../data";

export const Contact = () => {
  const handleFormSubmit = async (formData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    alert("Thank you for your message!");
  };

  const handleBookService = (serviceId) => {
    const service = services.find((s) => s.id === serviceId);
    alert(`Booking ${service.name}...`);
    // Redirect to booking page or show modal
  };

  return (
    <section className=" mt-16 mb-10 w-full min-h-screen px-5 py-10 bg-hero-bg bg-no-repeat bg-cover bg-center">
      <div className="space-y-10">
        <ContactForm id="contact" onSubmit={handleFormSubmit} />
      
        <Partnership id="partnership" />
      </div>
    </section>
  );
};

export default Contact;
