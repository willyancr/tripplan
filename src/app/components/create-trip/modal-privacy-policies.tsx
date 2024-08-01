'use client';
import { useCreateTrip } from '@/app/context/create-trip-context';
import { X } from 'lucide-react';

export default function ModalTermsOfUse() {
  const { handleModalPrivacyPoliciesClose } = useCreateTrip();
  return (
    <div className="bg-black/50 fixed inset-0 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] h-[540px] overflow-y-auto rounded-lg py-5 px-6 text-left drop-shadow-2xl space-y-3">
        <div className="flex justify-between">
          <h1 className="text-lg font-medium text-zinc-300">
            Política de Privacidade
          </h1>
          <button onClick={handleModalPrivacyPoliciesClose}>
            <X className="text-zinc-400" />
          </button>
        </div>
        <div className="text-sm text-zinc-400 space-y-2">
          <p>
            A sua privacidade é importante para nós. Esta Política de
            Privacidade explica como coletamos, utilizamos e protegemos as
            informações que você fornece ao utilizar o Tripplan.
          </p>

          <h2 className="font-semibold">1. Informações que Coletamos</h2>
          <ul>
            <li>
              <strong>Informações Pessoais:</strong> Nome, e-mail, e outros
              dados pessoais que você fornece ao utilizar o serviço.
            </li>
            <li>
              <strong>Informações de Viagem:</strong> Destino, datas de viagem,
              atividades planejadas e links associados às atividades.
            </li>
          </ul>

          <h2 className="font-semibold">2. Como Utilizamos as Informações</h2>
          <ul>
            <li>
              <strong>Para fornecer e melhorar o serviço:</strong> Usamos suas
              informações para personalizar a experiência e melhorar a
              funcionalidade do Tripplan.
            </li>
            <li>
              <strong>Para comunicação:</strong> Podemos utilizar seu e-mail
              para enviar notificações importantes sobre o serviço, como
              atualizações ou alterações nos Termos de Uso.
            </li>
          </ul>

          <h2 className="font-semibold">3. Compartilhamento de Informações</h2>
          <p>
            Nós não compartilhamos suas informações pessoais com terceiros,
            exceto quando exigido por lei ou quando necessário para prestar o
            serviço.
          </p>

          <h2 className="font-semibold">4. Segurança das Informações</h2>
          <p>
            Implementamos medidas de segurança para proteger suas informações
            contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>

          <h2 className="font-semibold">5. Seus Direitos</h2>
          <p>
            Você tem o direito de acessar, corrigir ou excluir suas informações
            pessoais a qualquer momento. Para exercer esses direitos, entre em
            contato conosco em willyancr@gmail.com.
          </p>

          <h2 className="font-semibold">
            6. Alterações nesta Política de Privacidade
          </h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente.
            Quaisquer alterações serão notificadas e publicadas em nosso site.
          </p>

          <h2 className="font-semibold">7. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre esta Política de Privacidade,
            entre em contato conosco em willyancr@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
}
