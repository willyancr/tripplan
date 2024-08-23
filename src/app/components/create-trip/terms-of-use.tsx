"use client";
import { useCreateTrip } from "@/app/context/create-trip-context";
import ModalTermsOfUse from "./modal-terms-of-use";
import ModalPrivacyPolicies from "./modal-privacy-policies";

export default function TermsOfUse() {
  const {
    handleModalTermsOfUseOpen,
    modalTermsOfUseOpen,
    handleModalPrivacyPoliciesOpen,
    modalPrivacyPoliciesOpen,
  } = useCreateTrip();
  return (
    <div className="flex flex-col">
      <button
        onClick={handleModalTermsOfUseOpen}
        className="text-greenish-yellow underline"
      >
        Termos de uso
      </button>{" "}
      <button
        onClick={handleModalPrivacyPoliciesOpen}
        className="text-greenish-yellow underline"
      >
        Politicas de privacidade.
      </button>{" "}
      {modalTermsOfUseOpen && <ModalTermsOfUse />}
      {modalPrivacyPoliciesOpen && <ModalPrivacyPolicies />}
    </div>
  );
}
