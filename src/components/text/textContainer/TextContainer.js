import React from 'react';

import './textContainerStyle.css';

const texts = [
    {
        title: '1. O UNIVERSO TANGENTE',
        content: 'O Universo Primário tem tendência a grandes perigos. Guerra, praga, fome e desastres naturais são comuns. A morte chega para todos nós. A Quarta Dimensão do Tempo é uma construção estável, mas não impenetrável. Acidentes quando o tecido da quarta dimensão é corroído são incrivelmente raros. Se um Universo Tangente ocorrer, ele será altamente instável, não se sustentando por mais que algumas semanas. Eventualmente ele entrará em colapso, formando, dentro do Universo Primário, um buraco negro capaz de destruir toda a existência.'
    },
    {
        title: '2. ÁGUA E METAL',
        content: 'Água e Metal são elementos-chave da Viagem no Tempo. Água é o elemento usado como barreira nas construções de Portais do Tempo, usados como portões entre Universos no Vórtice Tangente. Metal é o elemento transicional para a construção dos Artefatos.'
    },
    {
        title: '3. OS ARTEFATOS E OS SERES VIVOS',
        content: 'Quando um Universo Tangente ocorre, os seres vivos mais próximos ao Vórtice vão se encontrar no epicentro de um mundo novo e perigoso. Artefatos fornecem o primeiro sinal de que um Universo Tangente ocorreu. Se um Artefato ocorre, os Seres Vivos vão recebê-lo com grande interesse e curiosidade. Artefatos são formados de metal, assim como flechas de uma antiga civilização Maia, ou uma espada de metal da Europa Medieval. Artefatos que retornam ao Universo Primário são normalmente ligados à iconografia religiosa, uma vez que sua aparição na Terra aparentemente desafia a lógica. Intervenção divina é considerada a única conclusão lógica para a aparição do Artefato.'
    },
    {
        title: '4. O RECEPTOR VIVO',
        content: 'O Receptor Vivo é escolhido para guiar o Artefato em questão por sua jornada de volta ao Universo Primário. Ninguém sabe como ou por que um Receptor é escolhido. O Receptor Vivo é normalmente abençoado com poderes da Quarta Dimensão. Estes incluem força, telecinese, controle mental e a habilidade de conjurar água e fogo. O Receptor Vivo é normalmente atormentado por sonhos terríveis, visões e alucinações auditivas durante o tempo dentro do Universo Tangente. Aqueles que cercam o Receptor Vivo, conhecidos como Manipulados, vão temê-lo e tentar destruí-lo.',
    },
    {
        title: '5. OS MANIPULADOS VIVOS',
        content: 'Os Manipulados Vivos são, normalmente, amigos próximos e vizinhos do Receptor Vivo.Eles estão inclinados a um comportamento irracional, bizarro e, às vezes, violento.É este o infeliz resultado de sua missão, que é ajudar o Receptor Vivo a retornar o Artefato ao Universo Primário. Os Manipulados Vivos farão qualquer coisa para se salvar do Esquecimento.',
    },
    {
        title: '6. OS MANIPULADOS MORTOS',
        content: 'Os Manipulados Mortos são mais poderosos que o Receptor Vivo.Se a pessoa morre dentro da Dimensão Tangente, eles podem contatar o Receptor Vivo através do Constructo da Quarta Dimensão.Este Constructo é feito de Água. Os Manipulados Mortos vão manipular o Receptor Vivo usando o Constructo da Quarta Dimensão(ver os Apêndices A e B).Os Manipulados Mortos vão, às vezes, definir uma Armadilha de Segurança para o Receptor Vivo, assim eles se assegurarão que o Artefato retornará em segurança ao Universo Primário. Se a Armadilha de Segurança for bem sucedida, o Receptor Vivo é deixado sem escolhas, a não ser usar seus poderes da Quarta Dimensão para enviar o Artefato de volta no tempo até o Universo Primário antes que o Buraco Negro chegue.',
    },
    {
        title: '7. SONHOS',
        content: 'Quando os Manipulados acordam de sua Jornada no Universo Tangente, eles são, muitas vezes, assombrados por sua experiência em seus sonhos.Muitos deles nem se lembram. Aqueles que conseguem se lembrar da Viagem são, geralmente, assaltados por um profundo remorso recorrente do arrependimento de suas ações enterradas em seus Sonhos, a única evidência física enterrada no próprio Artefato.Tudo o que resta do mundo perdido. Mitos antigos nos contam de um guerreiro Maia que foi morto por uma flecha saída de um penhasco onde não havia nenhum exército ou inimigo para ser encontrado.Ouvimos falar também do cavaleiro medieval que foi misteriosamente empalado pela espada que não havia forjado.O que nos dizem é que essas coisas ocorrem por uma razão.',
    }
];

export default function TextContainer() {
    return (
        <main>
            {texts.map((text) => (
                <section key={text.title}>
                    <h2>{text.title}</h2>
                    <p>{text.content}</p>
                </section>
            ))}
        </main>
    )
}
