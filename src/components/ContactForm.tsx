import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../config/emailjsConfig";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  topic: string;
  message: string;
  acceptTerms: boolean;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
    acceptTerms: false,
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    if (form) {
      emailjs
        .sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          form,
          EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setStatusMessage(t("contact.form.statusMessages.success"));
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              topic: "",
              message: "",
              acceptTerms: false,
            });
          },
          () => {
            setStatusMessage(t("contact.form.statusMessages.error"));
          }
        );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-full space-y-2 max-w-3xl mx-auto px-4 my-8 sm:px-6 lg:px-8  p-6 rounded-md "
    >
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">
          {t("contact.form.title")}
        </h2>
        <p className="mb-8 text-lg ">
          Puedes enviarme un mensaje a través de este formulario.
        </p>
      </div>

      {/* Línea 1: Nombre y Apellido */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder={t("contact.form.placeholders.firstName")}
          className="w-full p-4 border border-purple rounded-md focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder={t("contact.form.placeholders.lastName")}
          className="w-full p-4 border border-purple rounded-md focus:ring-2 focus:ring-purple-500"
          required
        />
      </div>
      {/* Línea 2: Email y Teléfono */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t("contact.form.placeholders.email")}
          className="w-full p-4 border border-purple rounded-md focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder={t("contact.form.placeholders.phoneNumber")}
          className="w-full p-4 border border-purple rounded-md focus:ring-2 focus:ring-purple-500"
          required
        />
      </div>
      {/* Línea 3: Selección de tema */}
      <div>
        <select
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          className="w-full p-4 border border-purple rounded-md focus:ring-2 focus:ring-purple-500"
          required
        >
          <option value="">{t("contact.form.placeholders.topic")}</option>
          <option value="general">{t("contact.form.topics.general")}</option>
          <option value="support">{t("contact.form.topics.support")}</option>
          <option value="feedback">{t("contact.form.topics.feedback")}</option>
        </select>
      </div>
      {/* Línea 4: Mensaje */}
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t("contact.form.placeholders.message")}
          className="w-full p-4 border border-purple rounded-md focus:ring-2 focus:ring-purple-500"
          rows={3}
          required
        />
      </div>
      {/* Línea 5: Checkbox de términos */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange}
          className="h-5 w-5 text-purple-600 focus:ring-2 focus:ring-purple-500"
          required
        />
        <label htmlFor="acceptTerms" className="text-sm">
          {t("contact.form.acceptTerms")}
        </label>
      </div>
      {/* Botón de envío */}
      <div>
        {/*  <button
    type="submit"
    className="w-full md:w-auto px-6 py-3 bg-purple rounded-lg */}

        <div className="w-full flex flex-col items-center">
          <button
            type="submit"
            className="w-full md:w-auto mt-3 px-10 py-3 bg-purple text-white rounded-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500"
          >
            {t("contact.form.buttons.submit")}
          </button>
        </div>
      </div>
      {statusMessage && (
        <p className="mt-4 text-center text-lg font-semibold text-green-600">
          {statusMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
