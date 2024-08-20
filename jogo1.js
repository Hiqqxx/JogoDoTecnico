var inventário = []
var Confiança = 1
var chance = 0

 
alert("Você se chama Mahboubeh Barbari Zharfi, uma menina nascida no irã em 28 de dezembro de 1991")
alert("Você tem seu inventário, o qual pode ser preenchido com os ensinamentos que você terá ao longo de sua vida")
alert("Tambem tem seu Nível de Confiança, a qual não pode chegar a zero, senão você irá falhar como filha e atleta")
alert("Enfim, vamos começar o jogo A História de Mahboubeh!")
alert("Bem vinda ao mundo Mahboubeh, a partir desse momento, você vai começaar sua jornada como atleta olimpica, se tudo der certo claro")
alert("Sua mãe desde muito pequena já percebeu sua paixão pelos esportes e que você tem talento de chegar muito longe")

var escolha1 = prompt("Assim que você faz 15 anos, sua mãe conseguiu reunir dinheiro para te colocar em uma escola de judô, você vai aceitar? S/N")

while(escolha1 != "S")
switch (escolha1) {
    case "N":
        alert("Sua mãe está triste, mas irá te apoiar de qualquer jeito.\nSua carreira como atleta olimpica acaba por aqui, tente novamente.")
        var escolha1 = prompt("Assim que você faz 15 anos, sua mãe conseguiu reunir dinheiro para te colocar em uma escola de judô, você vai aceitar? S/N")
 break;
         
    default:
        break;

    }

alert("Perfeito! Sua mãe está muito feliz com sua decisão, ela te diz que sempre irá te apoiar, independente de tudo que acontecer ela acredita no seu potencial")
alert("* Você desbloqueou: DETERMINAÇÃO *") 
inventário.push("DETERMINAÇÃO")
alert("inventário:" +inventário)

alert("Foi nesse momento que sua determinação nasceu, você quer representar o seu país Irã e participar da seleção de Judô")
alert("Você começou a praticar judô incansavelmente, você está muito determinada a alcançar seus obejtivos, você treina e treina, até que foi chamada para representar sua escola em um torneio regional no dia de amanhã")
var escolha0 = prompt("Sua mãe te pergunta se você deseja participar. S/N")
switch (escolha0) {
    case "S":
        alert("Sua mãe fica muito feliz com essa resposta, vocês pulam e comemoram de felicidade, é um grande passo na sua carreira como atleta")
        break;
    case "N":
        alert("Sua mãe respeita sua decisão, e sabe que talvez realmente não seja a hora certa para um torneio tão grande como o regional")
        alert("Vocês ficam felizes pelo simples fato de você ter sido convidada, e decidem comemorar sua evolução como atleta indo comer uma pizza no dia seguinte")

        break;
}

alert("Porem, foi no meio de toda essa felicidade, que sua casa foi invadida por ladrões")
alert("Já estava acontecendo uma briga na rua como sempre, bandidos, facções e suas guerras, porem sua familia foi a vitima de mais um dos roubos")
var escolha2 = prompt("Sua mãe com muito medo pediu para você se esconder no armario, esperando que os bandidos não te peguem, você vai se esconder? S/N")

switch (escolha2){
    case "S":
    alert("Você não quis nem mesmo questionar sua mãe, e já correu para o armario para se esconder")
    alert("Escondida dentro do armario você escuta os bandidos gritando com sua mãe e entra em desespero, você sabe que precisa ajudar sua mãe, mas não consegue") 
    alert("* Você desbloqueou: MEDO *")
    inventário.push("MEDO")
    alert("inventário:" +inventário)

    alert("Acaba que você somente espera sua mãe dizer que está tudo bem para sair")
    alert("você espera 5, 10, 15, 20 minutos")
    alert("O tempo passa, os gritos param, e você mesmo assim não sai")
    alert("Passam 30, 40 e quando chega a 50 minutos, você sai do armario")    
    
    break;
      
      case "N":
        alert("Você sabe que sua mãe não vai conseguir se defender sozinha, mas ao mesmo tempo você só é uma garota de 15 anos que inicio no Judô a 1 mês") 
        alert("Mas você não pode deixar ela sozinha ")
        alert("Os bandidos invadem sua casa são três deles, sua mãe implora pra que eles deixem vocês em paz, ela fala que somos uma familia humilde, e que não vão achar nada de valor")
        alert("Porem os bandidos querem você, o crime onde vocês moram é tão grande, que qualquer coisa que tenha o minimo valor é aceita pelos bandidos")
        alert("E você, pode ser de muito valor para eles")
        alert("Sua mãe tenta impedir os bandidos e jogar eles para longe, porem eles são muito mais fortes e estão em três")
        alert("Sua mãe grita, e pede para que você se esconda no lugar que combinaram")
        alert("Você não quer deixar sua mãe sozinha, mas se esconde igual")
        alert("* Você desbloqueou: INSUFICIENCIA *")
        inventário.push("INSUFICIENCIA")
        alert("inventário:" +inventário)

        alert("você espera 5, 10, 15, 20 minutos")
        alert("O tempo passa, os gritos param, e você mesmo assim não sai")
        alert("Você está com medo, está assustada, e continua escondida por mais 30 minutos, até que decide sair")
        
        break;
    }

    alert("Quando você sai do seu esconderijo, você vê sua mãe desacordada no chão, você liga para os serviços de emergencia e eles levam sua mãe até o hospital")
    alert("Depois de um tempo sua mãe acorda, ela foi ferida pelos bandidos, porem ela não parece estar gravemente ferida")
    switch (escolha2) {
        case "S":
            alert("Nessa situação, todo aquele *MEDO* que você sentiu quando teve que ficar escondida no armario volta")
        alert("você tem *MEDO* de tudo dar errado, e seu sonho de ser atleta olimpica chegar ao fim")
        alert("Você chora do lado de sua mãe")
            break;
        case "N":
            alert("Nesse momento, toda aquela *INSUFICIENCIA* que você sentiu quando teve que deixar sua mãe sozinha com os bandidos volta")
        alert("Você se sente insuficiente, e sente que seu sonho de ser atleta olimpica nunca vai ir para frente")
        alert("Você começa a chorar do lado de sua mãe")
            break;
    }
        
        alert("Porem sua mãe acorda, e pergunta o porque de você está chorando")
        alert("Você explica pra sua mãe como você está se sentindo, e ela te diz")
        alert("'Tá tudo bem filha, sua jornada como atleta vai continuar, você vai ser uma grande atleta, eu acredito em você'")
        alert("Nivel de confiança: " +Confiança)
        alert("'Mas não se esqueça Mahboubeh, se coloque no lugar dos outros, pense nos outros como se fosse você, lute naquele torneio, mostre que você é uma boa atleta, mas mostre mais ainda que você é uma boa pessoa'")
        alert("Você deslboqueou: * EMPATIA *")
        inventário.push("EMPATIA")
        alert("Nesse momento você se enche de *DETERMINAÇÃO* e se sente pronta para o grande torneio de amanhã, pois você tem uma pessoa que acredita em você, e você não pode decepcionar ela.")
        alert("Agora o torneio que não era tão essencial, se torna mais uma fonte de força para você e sua mãe")
        
        alert("No outro dia...")
        alert("Você está preparada para o torneio, você chega lá juntamente com seu tecnico, ele te guia e você vence o seu primeiro duelo")
        alert("Passa para as oitavas, para as quartas, e chega na semi final")
        alert("O juiz anuncia a luta, Mahboubeh contra Elaleh, é uma batalha dificil e você sabe que pode tanto ganhar quanto perder")
        alert("Porem seu tecnico não confia tanto nessa vitória, seu tecnico diz para você aplicar um golpe sujo na sua adversária, um golpe que pode ferir ela até demais, correndo risco de acabar com a carreira dela")
        alert("A luta se inicia milhares de pessoas estão assistindo, sua mãe está entre elas, você tem a oportunidade de desferir o golpe que seu tecnico instruiu")
        
        alert("Escolha um dos ensinamentos aprendidos para ser seu modo de agir nessa luta")
    while(escolhaLuta != "3"){
        switch (escolha2) {
            case "S":
                var escolhaLuta = prompt("Inventário: 1- DETERMINAÇÃO 2- MEDO 3- EMPATIA")
                switch (escolhaLuta) {
                    case "1":
                        alert("Você está determinada a ganhar e sabe que pode fazer isso, você precisa se tornar uma atleta olimpica custe oque custar, você desfere o golpe sujo que seu tecnico instruiu, é o certo a se fazer para ganhar essa luta")
                        alert("Você arma para fazer o golpe, e...")
                        alert("...")
                        alert("Você acerta! Porem... por algum motivo ninguem comemora, nem mesmo sua mãe.")
                        alert("Você olha para sua adversária e você quebrou a perna dela, ela está com muita dor e foi levada o mais rápido possivel para o hospital mais proximo")
                        alert("O ginásio fica um silencio, você se sente muito mal pelo oque fez e começa a chora")
                        alert("O juiz se aproxima e te desqualifica do torneio, acabou por aqui seu sonho, ninguem quer uma atleta tão anti-patica como você representando a seleção")
                        Confiança = "0"
                        alert("Nivel de confiança: "+Confiança)
                        alert("Final: Decepção...")
                        alert("Tente novamente")
                    break;
                    case "2":
                        alert("Quando você da o seu primeiro passo para o começo da partida, você fica com muito medo de perder, você fica com medo de deixar sua mãe triste, medo de decepcionar seu treinador, medo de errar o golpe")
                        alert("Todo esse medo de que você sente se revela na partida, sua adversária vê esse medo e assim que consegue a chance, ela te desfere um golpe e termina com a luta em segundos, você estava paralisada de medo")
                        alert("Você perdeu uma chance de ouro na sua carreira como atleta, as pessoas perderam a confiança em você")
                        Confiança = "0"
                        alert("Nivel de confiança: "+Confiança)
                        alert("Final: Sem confiança...")
                        alert("Tente novamente")
                    break;
                    case "3": 
                        alert("Você se lembra dos ensinamentos da sua mãe, a empatia é a solução correta, você cumprimenta sua adversária antes da partida e deseja que a melhor vença.")
                        alert("A luta começa, sua adversária começa desferindo um golpe contra você, você cai no chão, olha pro seu tecnico e ele simboliza para você usar o golpe sujo que planejaram, mas você sabe que isso não é certo.")
                        alert("Você perdeu o primeiro round, seu tecnico está irritado com você, mas você olha para torcida e vê sua mãe.")
                        alert("Ela e muitas outras pessoas estão confiando em você.")
                        alert("Você luta de maneira leal com sua oponente e ganha os outros dois rounds sem usar o golpe sujo instruido pelo seu tecnico.")
                        alert("Você ganhou essa luta de maneira justa, você comemora, cumprimenta sua oponente e avança para a fase final, dessa vez você fez a escolha certa na sua carreira, lutou de maneira leal, sua mãe está muito orgulhosa de você.")

                        break;
                }
                }

                switch(escolha2){
                case "N":
                var escolhaLuta = prompt("Inventário: 1- DETERMINAÇÃO 2- INSUFICIENCIA 3- EMPATIA")
                switch (escolhaLuta) {
                    case "1":
                        alert("Você está determinada a ganhar e sabe que pode fazer isso, você precisa se tornar uma atleta olimpica custe oque custar, você desfere o golpe sujo que seu tecnico instruiu, é o certo a se fazer para ganhar essa luta")
                        alert("Você arma para fazer o golpe, e...")
                        alert("...")
                        alert("Você acerta! Porem... por algum motivo ninguem comemora, nem mesmo sua mãe.")
                        alert("Você olha para sua adversária e você quebrou a perna dela, ela está com muita dor e foi levada o mais rápido possivel para o hospital mais proximo")
                        alert("O ginásio fica um silencio, você se sente muito mal pelo oque fez e começa a chora")
                        alert("O juiz se aproxima e te desqualifica do torneio, acabou por aqui seu sonho, ninguem quer uma atleta tão anti-patica como você representando a seleção")
                        Confiança = "0"
                        alert("Nivel de confiança: "+ Confiança)
                        alert("Final: Decepção...")
                        alert("Tente novamente")
                    break;
                    case "2":
                        alert("Quando você da o seu primeiro passo para o começo da partida, você se sente muito insuficiente e começa a achar que vai perder, você acha que vai deixar sua mãe triste, acha que vai decepcionar seu treinador, acha que vai errar o golpe")
                        alert("Todo esse medo de que você sente se revela na partida, sua adversária vê você perdida nos seus pensamentos e assim que consegue a chance, ela te desfere um golpe e termina com a luta em segundos, você estava paralisada, sem conseguir reagir, seus pensamentos tomaram conta e seu corpo não pode regir")
                        alert("Você perdeu uma chance de ouro na sua carreira como atleta, as pessoas perderam a confiança em você")
                        Confiança = "0"
                        alert("Nivel de confiança: "+ Confiança)
                        alert("Final: Sem confiança...")
                        alert("Tente novamente")
                    break;
                    case "3":
                        alert("Você se lembra dos ensinamentos da sua mãe, a empatia é a solução correta, você cumprimenta sua adversária antes da partida e deseja que a melhor vença.")
                        alert("A luta começa, sua adversária começa desferindo um golpe contra você, você cai no chão, olha pro seu tecnico e ele simboliza para você usar o golpe sujo que planejaram, mas você sabe que isso não é certo.")
                        alert("Você perdeu o primeiro round, seu tecnico está irritado com você, mas você olha para torcida e vê sua mãe.")
                        alert("Ela e muitas outras pessoas estão confiando em você.")
                        Confiança = "100"
                        alert("Nivel de confiança: "+ Confiança)
                        alert("Você luta de maneira leal com sua oponente e ganha os outros dois rounds sem usar o golpe sujo instruido pelo seu tecnico.")
                        alert("Você ganhou essa luta de maneira justa, você comemora, cumprimenta sua oponente e avança para a fase final, dessa vez você fez a escolha certa na sua carreira, lutou de maneira leal, sua mãe está muito orgulhosa de você.")
                    
                        break;
                }
            }
        }

    alert("Você está na final agora, seu tecnico por mais que não tenha usado o golpe, está muito orgulhoso de você.")
    alert("Você dá o passo para enfrentar sua adversária final, Ishtar, ela é muito boa, mas com a empatia e o apoio da torcida você sabe que pode ganhar.")
    alert("Seu Nível de Confiança está extremamente alto, a partida começa.")
    alert("Você golpea sua adversária com todo seu talento e mostra que mesmo tendo começado a pouco tempo no judô você é capaz de ser uma grande atleta.")
    alert("Você luta muito bem, ganha os rounds, e...")
    alert("... Você é a campeã!!")
    alert("Você comemora com a torcida, e sua mãe ta entre eles, sua mãe que ontem estava tão mal agora tem um sorriso no rosto, seu tecnico está super satisfeito com seu desempenho.")
    alert("O tempo passa...")
    alert("Nos proximos anos você continua ganhando e ganhando torneios e campeonatos, você é surreal e tem o dom para o Judô.")
    alert("Alem disso você tem uma filha que você tanto ama, ela é mais um motivo para você continuar ganhando e batalhando por sua familia")
    alert("Um dia um homem bate na sua porta e te convida para representar a seleção feminina do Irã no Judô, é seu sonho e você não pode recusar de jeito nenhum.")
    alert("Você compete pelo Irã, ganha campeonatos e torneios, mas derrepente...")
    alert("Aos seus 27 anos, no ano de 2018 a vila que você mora está cada vez mais perigosa, a política do estado é corrupta e favorece o crime, pessoas morrem ao seu redor todo dia, você tem uma mãe idosa e uma filha para cuidar, você sente que é hora de mudar...")
    alert("Você chora de desespero e não sabe oque fazer, tudo parece perigoso e assustador.")
    alert("Sua mãe derrepente chega para de acalmar, e junto com ela, vem uma pergunta ")
    alert("Sua mãe pergunta se você gostaria de se refugiar do Irã e buscar um lar na alemanha")

    alert("Como você vai agir de acordo com essa pergunta? * O ensinamento de empatia não pode ser usada nessa situação *")
    while(escolhaRefu != "1"){
        switch (escolha2) {
            case "S":
                var escolhaRefu = prompt("Inventário: 1- DETERMINAÇÃO 2- MEDO ")
                switch (escolhaRefu) {
                    case "1":
                        alert("Você está determinada a passar por cima da dificuldade de ser uma refugiada por sua familia, eles sempre estiveram lá para você quando precisou, e agora é sua função proteger sua filha e sua mãe")
                        alert("Você tem a * DETERMINAÇÃO * e a confiança para proteger elas.")
                        Confiança = "150"
                        alert("Nível de confiança: "+ Confiança)
                    break;
                    case "2":
                        alert("Você está muito assustada e com * MEDO * da ideia de se refugiar, você tem medo de tudo dar errado e só acabar piorando mais ainda a situação.")
                        alert("Sua mãe e sua filha estão um pouco decepcionadas com a decisão que você tomou, e esse seu medo só se torna maior ainda ao longo do tempo.")
                        Confiança = "50"
                        alert("Nível de confiança: "+ Confiança)
                        alert("Os anos passam e você continua lutando e representando sua seleção no Judô, porem...")
                        alert("Em uma noite fria, depois de uma derrota avassaladora você volta para casa, só que você não escuta sua filha e sua mãe brincando, e quando você entra na casa, o pior possivel tinha acabado de acontecer...")
                        alert("Sua casa estava toda quebrada, saquearam as coisas caras que tinham lá dentro, e o mais importante, sua mãe e sua filha tinham desaparecido.")
                        alert("Meses e meses de busca, foi assim que se resumiu sua vida desde esse momento tragico, você se afastou do Judô, disse a todos que era temporario, mas você sabe que sem elas você não é capaz...")
                        Confiança = "0"
                        alert("Nível de confiança: "+ Confiança)
                        alert("Final: Sem confiança...")
                        alert("Tente novamente...")
                        
                    break;
                }
                }

                switch(escolha2){
                case "N":
                var escolhaRefu = prompt("Inventário: 1- DETERMINAÇÃO 2- INSUFICIENCIA ")
                switch (escolhaRefu) {
                    case "1":
                        alert("Você está determinada a passar por cima da dificuldade de ser uma refugiada por sua familia, eles sempre estiveram lá para você quando precisou, e agora é sua função proteger sua filha e sua mãe")
                        alert("Você tem a * DETERMINAÇÃO * e a confiança para proteger elas.")
                        Confiança = "150"
                        alert("Nível de confiança: "+ Confiança)
                    break;
                    case "2":
                        alert("Você não se sente capaz e suficiente para abandonar sua carreira como atleta e refugiar junto com a sua familia para a Alemanha.")
                        alert("Sua mãe e sua filha estão um pouco decepcionadas com a decisão que você tomou, e essa sua sensação * INSUFICIENCIA * só fica maior conforme o tempo, você se sente inconfiante.")
                        Confiança = "50"
                        alert("Nível de confiança: "+ Confiança)
                        alert("Os anos passam e você continua lutando e representando sua seleção no Judô, porem...")
                        alert("Em uma noite fria, depois de uma derrota avassaladora você volta para casa, só que você não escuta sua filha e sua mãe brincando, e quando você entra na casa, o pior possivel tinha acabado de acontecer...")
                        alert("Sua casa estava toda quebrada, saquearam as coisas caras que tinham lá dentro, e o mais importante, sua mãe e sua filha tinham desaparecido.")
                        alert("Meses e meses de busca, foi assim que se resumiu sua vida desde esse acontecimento tragico, você se afastou do Judô, disse a todos que era temporario, mas você sabe que sem elas você não é capaz...")
                        Confiança = "0"
                        alert("Nível de confiança: "+ Confiança)
                        alert("Final: Sem confiança...")
                        alert("Tente novamente...")
                    break;
                
                }
        } }
        
    alert("Ao chegar na Alemanha em busca de uma nova vida, agora segura com sua familia, você se abriga em um asilo")
    alert("Você conta sua história para os outros cidadões que conversam com você")
    alert("As pessoas te apoiam, e querem ver você lutando novamente, e é em uma conversa com um outro hospede do asilo que você percebe uma oportunidade")
    alert("O hospede local te conta que é possivel você representar os refugiados nas olimpiadas que estavam por vir")
    var escolhaFinal = prompt("Você aceita focar seus proximos 6 anos em se tornar uma atleta olimpica? S/N")
    if(escolhaFinal != "S"){
        alert("Você recusou essa oferta, você sabe que é capaz, mas sente que sua obrigação mudou, hoje você só quer cuidar da sua familia como mãe e filha")
        alert("Os anos passam, e você passa a trabalhar em lojas locais, você aprende alemão, faz amigos, cuida da sua familia como uma pessoa comum, o seu histórico como atleta de seleção foi deixado no passado, agora você não é a 'Mahboubeh a grande atleta de Judô', você agora é 'Mahboubeh uma grande mãe e filha'")
        alert("Esse foi o fim de sua jornada, você não chegou nas olimpiadas, mas você tem oque realmente importa, sua familia...")
        alert("Final: Familia...")
    }
    else{

    alert("Você passa a viver seus proximos anos focada em se tornar uma atleta do time dos refugiados, você usa sua * DETERMINAÇÃO *, você mostra o porque você é forte, você se prova uma ótima filha e uma ótima mãe."  )
    Confiança = "200"
    alert("Nível de confiança: "+ Confiança)
    alert("E quando chega 2024 você sente que está preparada para as olimpiadas")
    alert("Se você tiver conseguido reunir mais de 100 pontos de confiança você conseguirá se classificar")
    if(Confiança >= "100"){
        alert("...")
        alert("...")
        alert("Parabens! Você se classificou para as Olimpiadas de 2024 competindo pelos refugiados no Judô! Essa foi a História de Mahboubeh, uma mãe, filha e atleta representante do time dos refugiados! Obrigado por jogar!")
        alert("Final: Atleta Olimpica!")
    }
    else{
        alert("...")
        alert("...")
        alert("Oh não é uma pena que você não tenha adquirido o nivel de confiança suficente para se classificar, sua jornada como atleta acaba por aqui, obrigado por jogar A História de Mahboubeh!")
        alert("Final: Sem sucesso...")
    }}