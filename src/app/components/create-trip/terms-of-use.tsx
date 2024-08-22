'use client';
import { useCreateTrip } from '@/app/context/create-trip-context';
import ModalTermsOfUse from './modal-terms-of-use';
import ModalPrivacyPolicies from './modal-privacy-policies';

export default function TermsOfUse() {
  const {
    handleModalTermsOfUseOpen,
    modalTermsOfUseOpen,
    handleModalPrivacyPoliciesOpen,
    modalPrivacyPoliciesOpen,
  } = useCreateTrip();
  return (
    <div className='mb-10'>
      <p className="text-gray-400 text-sm">
        Ao planejar sua viagem pela Tripplan você automaticamente concorda{' '}
        <br />
        com nossos{' '}
        <button
          onClick={handleModalTermsOfUseOpen}
          className="text-greenish-yellow underline"
        >
          termos de uso
        </button>{' '}
        e{' '}
        <button
          onClick={handleModalPrivacyPoliciesOpen}
          className="text-greenish-yellow underline"
        >
          politicas de privacidade.
        </button>{' '}
      </p>
      {modalTermsOfUseOpen && <ModalTermsOfUse />}
      {modalPrivacyPoliciesOpen && <ModalPrivacyPolicies />}
    </div>
  );
}
