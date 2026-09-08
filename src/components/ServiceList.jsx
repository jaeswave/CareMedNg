import { useState } from "react";
import Button from "../components/Button"
const ServiceList = (props) => {
  const { services, onBookService,id } = props;
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="bg-white/65 p-6 rounded-lg shadow-lg w-full xl:w-[60%] mx-auto">
      <h2 className="text-3xl font-bold mb-6">Book a Service</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedService(service.id)}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedService === service.id
                ? "bg-blue-50 border-blue-500"
                : "hover:bg-gray-200"
            }`}
          >
            <h3 className="font-semibold">{service.name}</h3>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-4">
            Selected:{" "}
            <span className="font-semibold text-blue-600">
              {services.find((s) => s.id === selectedService).name}
            </span>
          </p>
          <Button
            title="Book Now"
            type="button"
            onClick={() => onBookService(selectedService)}
            className="w-full bg-green-600 hover:bg-green-700"
          />
        </div>
      )}
    </section>
  );
};

export default ServiceList;
