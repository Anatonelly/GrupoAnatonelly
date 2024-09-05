import React from 'react';

const page = () => {
  return (
    <div className='w-full h-auto flex '>
      <div className='w-[25%]'>
        <div className='fixed w-[24.9%] flex items-center justify-center flex-col'>
          <a
            href='/PrivacyPolicy'
            className='w-full  flex h-[35px] items-center justify-center text-black'
          >
            Política de Privacidade
          </a>
          <hr />
          <a
            href='/Terms'
            className='w-full h-[35px] flex bg-slate-400 font-bold items-center justify-center text-black'
          >
            Termos e Condições
          </a>
        </div>
      </div>
      <div className='h- w-[2px]  bg-black/30 '></div>
      <div className='w-[75%] p-2'>
      <div className='flex flex-col gap-5'>
            <h1>1. Termos</h1>
            <p className='w-full h-auto'>
              Ao acessar ao site Grupo Anatonelly, concorda em cumprir estes
              termos de serviço, todas as leis e regulamentos aplicáveis ​​e
              concorda que é responsável pelo cumprimento de todas as leis
              locais aplicáveis. Se você não concordar com algum desses termos,
              está proibido de usar ou acessar este site. Os materiais contidos
              neste site são protegidos pelas leis de direitos autorais e marcas
              comerciais aplicáveis.
            </p>
            <h1>2. Uso de Licença</h1>
            <p className='w-full h-auto'>
              É concedida permissão para baixar temporariamente uma cópia dos
              materiais (informações ou software) no site Grupo Anatonelly ,
              apenas para visualização transitória pessoal e não comercial. Esta
              é a concessão de uma licença, não uma transferência de título e,
              sob esta licença, você não pode:
            </p>
            <div className='pl-5'>
              <li>modificar ou copiar os materiais;</li>{' '}
              <li>
                usar os materiais para qualquer finalidade comercial ou para
                exibição pública (comercial ou não comercial);
              </li>{' '}
              <li>
                {' '}
                tentar descompilar ou fazer engenharia reversa de qualquer
                software contido no site Grupo Anatonelly;
              </li>{' '}
              <li>
                remover quaisquer direitos autorais ou outras notações de
                propriedade dos materiais;
              </li>{' '}
              <li>
                transferir os materiais para outra pessoa ou espelhe os
                materiais em qualquer outro servidor.
              </li>{' '}
            </div>
            <p className='w-full h-auto'>
              Esta licença será automaticamente rescindida se você violar alguma
              dessas restrições e poderá ser rescindida por Grupo Anatonelly a
              qualquer momento. Ao encerrar a visualização desses materiais ou
              após o término desta licença, você deve apagar todos os materiais
              baixados em sua posse, seja em formato eletrónico ou impresso.{' '}
            </p>
            <h1>3. Isenção de responsabilidade</h1>
            <div className='pl-5'>
              <li>
                Os materiais no site da Grupo Anatonelly são fornecidos como
                estão. Grupo Anatonelly não oferece garantias, expressas ou
                implícitas, e, por este meio, isenta e nega todas as outras
                garantias, incluindo, sem limitação, garantias implícitas ou
                condições de comercialização, adequação a um fim específico ou
                não violação de propriedade intelectual ou outra violação de
                direitos.
              </li>{' '}
              <li>
                Além disso, o Grupo Anatonelly não garante ou faz qualquer
                representação relativa à precisão, aos resultados prováveis ou
                à confiabilidade do uso dos materiais em seu site ou de outra
                forma relacionado a esses materiais ou em sites vinculados a
                este site.
              </li>{' '}
            </div>
            <h1>4. Limitações</h1>
            <p className='w-full h-auto'>
              Em nenhum caso o Grupo Anatonelly ou seus fornecedores serão
              responsáveis por quaisquer danos (incluindo, sem limitação,
              danos por perda de dados ou lucro ou devido a interrupção dos
              negócios) decorrentes do uso ou da incapacidade de usar os
              materiais em Grupo Anatonelly, mesmo que Grupo Anatonelly ou um
              representante autorizado da Grupo Anatonelly tenha sido notificado
              oralmente ou por escrito da possibilidade de tais danos. Como
              algumas jurisdições não permitem limitações em garantias
              implícitas, ou limitações de responsabilidade por danos
              conseqüentes ou incidentais, essas limitações podem não se aplicar
              a você.{' '}
            </p>{' '}
            <h1>5. Precisão dos materiais</h1>
            <p className='w-full h-auto'>
              Os materiais exibidos no site da Grupo Anatonelly podem incluir
              erros técnicos, tipográficos ou fotográficos. Grupo Anatonelly não
              garante que qualquer material em seu site seja preciso, completo
              ou atual. Grupo Anatonelly pode fazer alterações nos materiais
              contidos em seu site a qualquer momento, sem aviso prévio. No
              entanto, Grupo Anatonelly não se compromete a atualizar os
              materiais.
            </p>{' '}
            <h1>6. Links</h1>
            <p className='w-full h-auto'>
              {' '}
              O Grupo Anatonelly não analisou todos os sites vinculados ao seu
              site e não é responsável pelo conteúdo de nenhum site vinculado. A
              inclusão de qualquer link não implica endosso por Grupo Anatonelly
              do site. O uso de qualquer site vinculado é por conta e risco do
              usuário.
            </p>{' '}
            <p className='w-full h-auto'> Modificações</p>{' '}
            <p className='w-full h-auto'>
              O Grupo Anatonelly pode revisar estes termos de serviço do site a
              qualquer momento, sem aviso prévio. Ao usar este site, você
              concorda em ficar vinculado à versão atual desses termos de
              serviço.
            </p>{' '}
        </div>
      </div>
    </div>
  );
};

export default page;
