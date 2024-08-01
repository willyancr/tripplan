'use client';
import { useCreateTrip } from '@/app/context/create-trip-context';
import { X } from 'lucide-react';

export default function ModalTermsOfUse() {
  const { handleModalTermsOfUseClose } = useCreateTrip();
  return (
    <div className="bg-black/50 fixed inset-0 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] h-[540px] overflow-y-auto rounded-lg py-5 px-6 text-left drop-shadow-2xl space-y-3">
        <div className="flex justify-between">
          <h1 className="text-lg font-medium text-zinc-300">Termos de uso</h1>
          <button onClick={handleModalTermsOfUseClose}>
            <X className="text-zinc-400" />
          </button>
        </div>
        <div className="text-sm text-zinc-400 space-y-2">
          <span>
            Bem-vindo ao Tripplan! Estes Termos de Uso regem o uso do nosso
            serviço de planejamento de viagens. Ao utilizar nosso serviço, você
            concorda com os Termos abaixo.
          </span>

          <h2 className="font-semibold">1. Aceitação dos Termos</h2>
          <span>
            Ao acessar ou utilizar o Tripplan, você concorda em cumprir estes
            Termos. Se você não concorda com estes Termos, não deve utilizar
            nosso serviço.
          </span>

          <h2 className="font-semibold">2. Serviços Oferecidos</h2>
          <span>
            O Tripplan oferece ferramentas para planejamento de viagens,
            incluindo a coleta de informações como destino, datas de viagem,
            nomes dos usuários, e-mails e atividades planejadas.
          </span>

          <h2 className="font-semibold">3. Uso Aceitável</h2>
          <span>
            Você concorda em utilizar o Tripplan apenas para fins legais e de
            acordo com estes Termos. Você não deve utilizar o serviço para
            qualquer atividade fraudulenta, ilegal ou prejudicial.
          </span>

          <h2 className="font-semibold">4. Cadastro e Segurança</h2>
          <span>
            Ao se cadastrar no Tripplan, você concorda em fornecer informações
            verdadeiras, precisas e completas. Você é responsável por manter a
            confidencialidade da sua conta e senha.
          </span>

          <h2 className="font-semibold">5. Privacidade</h2>
          <span>
            Ao utilizar o Tripplan, você também concorda com a nossa Política de
            Privacidade, que detalha como coletamos, utilizamos e protegemos as
            suas informações pessoais.
          </span>

          <h2 className="font-semibold">6. Limitação de Responsabilidade</h2>
          <span>
            O Tripplan não se responsabiliza por quaisquer danos diretos ou
            indiretos decorrentes do uso do serviço, incluindo, mas não se
            limitando, a perda de dados ou informações.
          </span>

          <h2 className="font-semibold">7. Alterações nos Termos</h2>
          <span>
            O Tripplan se reserva o direito de modificar estes Termos a qualquer
            momento. Quaisquer alterações serão notificadas e entrarão em vigor
            imediatamente após a publicação.
          </span>

          <h2 className="font-semibold">8. Contato</h2>
          <span>
            Se você tiver alguma dúvida sobre estes Termos, entre em contato
            conosco em willyancr@gmail.com.
          </span>
        </div>
      </div>
    </div>
  );
}
