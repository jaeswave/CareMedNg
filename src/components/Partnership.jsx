import { partnerOptions } from "../data";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Partnership = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full xl:w-[60%] mx-auto">
      <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
      <p className="mb-6 font-semibold">
        We collaborate with healthcare providers and organizations to improve
        patient care.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {partnerOptions.map((option) => (
          <div key={option.id} className="bg-gray-50 p-4 rounded-lg border">
            <h3 className="font-bold text-lg mb-2">{option.title}</h3>
            <p>{option.description}</p>
          </div>
        ))}
      </div>
      <a
        href="https://wa.me/2349153847999?text=Hello%20Caremed%20Connec`t"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          title="Work With Us"
          type="button"
          className="bg-purple-600 hover:bg-purple-700"
        />
      </a>
    </div>
  );
};

export default Partnership;
