@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Padrões Gof Criação @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

# Prototype # 

Especificar os tipos de objetos a serem criados usando uma instancia - prototipo e criar novos objetos pela copia desse prototipo

```bash
Quando usar?

1. use o padrão prototype quando precisar que seu codigo não dependa de classes concretas para a criação de novos objetos.

2. use o padrão
ao prototype quando quiser ??? explosão de subclasse para objtos muito similares
```

# Factory Method #

Definir uma interface para criar um objeto mas deixar as subclasses decidirem que classe instanciar. o factory method permite adiar a instanciação para as subclasses

```bash

* É um padrão de projeto de criação (lida com a criação de objetos)

* Oculta a logica de instanciação do codigo cliente. O metodo fabrica será responsavel por instanciar as classes desejadas.

* É obtido através de herança. O metodo fabrica pode ser criado ou sobrescrito por subclasses.

* Dá flexibilidade ao codigo cliente permitindo a criação de novas factories sem a necessidade de alterar codigo já escrito

* Pode usar parametros para determinar o tipo dos objetos a serem criados ou os parametros a serem enviados aos objetos sendo criados.

```

# Builder #

Separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações.

```bash

* O padrão sugere a separação do codigo que cria e o codigo que usa o objeto
* Trata da criação de objetos complexos
    * Construtores muito complexos
    * Composição de varios objetos(composite)
    * Algoritmo de criação do objeto complexo
* Permite a criação de um objeto em etapas
* Permite method chaining
* O objeto final pode variar de acordo com a necessidade
* É um objeto complexo
```

# Abstract Factory #

Fornece uma interface para criação de familias de objetos relacionados ou dependentes sem especificar suas classes concretas.

```bash

* É um padrão de criação, portanto lida com criação de objetos

* É uma fabrica, assim como o Factory Method e geralmente é composto por multiplos Factory Methods

* Visa agrupar familias de produtos compativeis criando uma fabrica concreta por grupo de objetos compativeis

* Separa o codigo que cria do codigo que usa os objetos 

* Permite facil implementação de novas familias de objetos

* Toda a programação fica focada nas interfaces e não em implementações

```

# Singleton #

Garante que uma classe tenha somente uma instancia no programa e fornece um ponto de acesso global para a mesma

```bash

SOMENTE UMA INSTANCIA?

* Geralmente usado para acesso a recursos compartilhados, como acesso á base de dados, interfaces graficas, sistema de arquivos, servidores de impressão e mais.

* Tambem usado para substituir variaveis globais, como em casos de uso de objetos de configuração do sistema como um todo.

PONTO DE ACESSO GLOBAL? 

* Voce pode permitir acesso globla ao Singleton em toda sua aplicação, assim como faziamos (ou fazemos) com variaveis globais.

* Uma vantagem do singleton é que podemos proteger a instancia com encapsulamento, evitando que outro codigo sobrescreva seu valor.


QUANDO USAR? 

* Use o singleton quando uma classe precisa ter somente uma instancia disponivel em todo o seu programa.

* Use o singleton quando perceber que está usando variaveis globais para mater partes importantes do programa, como variaveis de configuração que são usadas por toda a aplicação.

```

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Padrões Gof Estruturais @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

# Adapter #

Converter a interface de uma classe em outra interface esperada pelos clientes. O Adapter permite que certas classes trabalhem em conjunto, pois de outra forma seria impossivel por causa de suas interfaces incompativeis.

```bash

* É um padrão da categoria estrutural (structural)

* Faz exatamente o que um adaptador da vida real faz (pense em um adaptador de tomadas de um formato para outro)

* É muito usado para definir limites dentro de camadas da aplicação

* Tambem pode ser usado para adptar interfaces de codigo legado para um novo codigo


QUANDO USAR?

* Voce não quiser que seu codigo dependa diretamente do codigo de terceiros ou legado

* Voce quiser usar uma classe existente mas sua interface for incompativel com a interface que seu codigo ou dominio precisam

* Voce quiser reutilizar varias subclasses que não possuam determinada funcionabilidade mas for impraticavel estender o codigo de cada uma apenas para adicionar a funcionabilidade desejada (o Decorator tambem faz isso).

PALAVRAS CHAVE {Converter a interface}, {adptar interfaces}, {interação entre interfaceis incompativeis}

```

# Bridge #

Bridge é um padrão de projeto estrutural que tem a intenção de desacoplar uma abstração da sua implementação, de modo que as duas possam variar e evoluir independentemente.

```bash

ABSTRAÇÃO E IMPLMENTAÇÃO

* ABSTRAÇÃO é um codigo de alto nivel que geralmente delega ações para outro objeto.

* IMPLEMENTAÇÃO é o codigo que realmente faz o trabalho.

DIFERENÇA ENTRE BRIDGE E ADPTER

* A diferença chave entre esses padrões está nas suas intenções, O padrão Adapter faz as coisas funcionarem APÓS elas terem sido projetadas. O Bridge as faz funcionar ANTES QUE existam...

QUANDO USAR?

* Voce souber que sua estrutura terá abstrações (codigo de alto nivel) e implementações dessa abstração (detalhes) que possam variar de maneira independente

* Voce souber que o Adapter poderia ser aplicado naquela estrutura (voce já conhece a estrutura)

* Voce quiser dividir uma classe que possa ter varias variantes (como em produtos e suas variações de cores: CanetaAzul, canetaVermelha, camisetaAzul, etc...)

* Voce quer trocar as implementações em tempo de execução.

PALAVRAS CHAVE {abstração da sua implementação}, {intenção de desacoplar}, {evoluir independentemente}

```

# Decorator # 

Agregar responsabilidades adicionais a um objeto dinamicamente. Os Decorators fornecem uma alternativa flexivel ao uso de subclasses para extensão de funcionalidades.

```bash

SOBRE O DECORATOR

* Usa a composição ao inves da herança (sempre prefira composição ao inves de herança)
* É muito parecido com o "Composite" porém tem a intenção diferente
* É usado para adicionar funcionabilidades a objetos em tempo de execução
* Finge ser o objeto sendo decorado, porém repassa chamadas de métodos para o mesmo
* Pode executar ações antes e depois das chamadas dos métodos do objeto decorado
* Pode manipular dados antes do retorno

+ SOBRE DECORATOR

* Decorator serve como interface para o ConcreteDecorator
* Decoradores concretos podem adicionar funcionalidades ao seu componente. Eles podem se basear nas funcionalidades atuais do componente

QUANDO USAR?

* Voce precisa adicionar funcionalidades em objetos sem quebrar ou alterar o codigo existente
* Voce quiser usar composição ao inves de herança
* Voce percebe que pode ocorrer uma explosão de subclasses em determinada estrutura

PALAVRAS CHAVE {extensão de funcionalidades}, {responsabilidades adicionais}, {alternativa flexivel}

```

# Composite #

Compor objetos em estruturas de arvore para representar hierarquias partes/todo. Composite permite aos clientes tratarem de maneira uniforme objetos individuais e composições de objetos.

```bash
SOBRE O COMPOSITE

* É um padrão da categoria estrutural
* Faz mais sentido em estruturas que podem ser tratadas hierarquicamente(como arvore, filho do filho, etc...)
* Pode ser uma solução para estruturas complexas que podem ser tratadas de maneira uniforme
* Prioriza composição ao inves de herança

* Exemplo: produto solto com preço e caixa com varios do mesmo produto tambem com preço

* O filho do composite que não tem filho se chama "Leaf"
* Objetos "Leaf" são objetos que realmente fazem o trabalho
* Objetos "Composite" são objetos que tem filhos e não fazem o trabalho real, mas delegam para seus filhos.

QUANDO USAR?

* Sua estrutura de objetos possa ser representada hierarquicamente, como por exemplo, estrutura do tipo arvore.
* Voce quiser que o codigo cliente trate objetos compostos e objetos simples da mesma maneira.

PALAVRAS CHAVE {hierarquias}, {arvore}, {Leaf}

```

# façade #

É um padrão de projeto estrutural, que tem a intenção de fornecer uma interface unificada para um conjunto de interfaces em um subsistema. Façade define uma interface de nivel mais alto que torna o subsistema mais facil de ser usado

```bash

SOBRE O FAÇADE

* O façade é o padrão mais simples de todos. Ele tem a intenção de facilitar a vida do codigo cliente ao criar um objeto de fachada para o sistema mais complexo.

* Reduz a complexidade de uma api, liberando acesso a metodos de alto nivel encapsulando os demais
* Produz uma interface comum e simplificada
* Pode encapsular uma ou mais interfaceis mal projetadas em uma mais concisa
* Reduz drasticamente o acoplamento entre as camadas do projeto

QUANDO USAR?

* Voce quer disponibilizar uma interface mais simples para um sistema complexo
* Voce quer criar pontos de entrada para determinadas partes do sitema, como serviços externos, camadas de aplicação e objetos complexos dentro de determinadas partes do codigo.

PALAVRAS CHAVE {subsistema}, {interface de nivel mais alto}

```

# FLYWEIGHT #

É um padrão estrutural que tem a intenção de usar compartilhamento para suportar eficientemente grandes quantidades de objetos de forma granular.

OUTRA TRADUÇÃO:

O proposito do padrão flyweight é permitir a utilização de diversos pequenos objetos de forma eficiente por meio de uma solução baseada em compartilhamento de objetos.

```bash

SOBRE O FLYWEIGHT

* É um padrão de otimização
* Visa economizar memoria RAM devido ao grande número de objetos na aplicação
* Resolve o problema de desenpenho dividindo o estado de um objeto em "intrinseco" e "extrinseco"
    * Estado "intrinseco" é o que geralmente não muda ou que muda muito pouco
    * Estado "extrinseco" é o estado que pode ser movido para fora do objeto por mudar frequentemente
* Só deve ser usado se sua aplicação estiver com problemas de alto consumo de memoria RAM

QUANDO USAR?

se todas as condições a seguir forem verdadeiras:

* Sua aplicação utiliza uma grande quandtidade de objetos.
* Os custos de armazenamento são altos por causa da grande quantidade de objetos.
* A maioria dos estados de objetos podem se tornar extrinsecos
* Muitos objetos podem ser substituidos por poucos objetos compartilhados
* A aplicação não depende da identidade dos objetos.

PALAVRAS CHAVE {memoria}, {compartilhamento}


```

# PROXY #

Proxy é um padrão de projeto que tem a intenção de fornecer um substituto ou marcador de localização para outro objeto para controlar o acesso a esse objeto.

OUTRA DEFINIÇÃO:

O proposito do padrão proxy é fornecer aos clientes um objeto proxy, com a mesma interface do objeto destino real, que delega as requisições dos clientes para o objetos real.

```bash

SOBRE O PROXY

* Usa composição, portanto tem a estrutura muito semelhante ao composite e Decorator (as inteções são diferentes)
* Usa um objeto "proxy" que finge ser o objeto real
* É usado para controle de acesso, logs, cache, lazy instantiation, distribuição de serviços
* Pode escolher como e quando repassar chamadas de metodos para o objeto real
* Pode executar ações antes e depois das chamadas dos metodos do objeto real
* Tem varias variações: proxy virtual, proxy remoto, proxuy de proteção, proxy inteligente

QUANDO USAR?

* Voce tem um objeto caro para ser criado e não quer permitir acesso direto a esse objeto (proxy virtual)
* Voce quer restringir acesso a partes da sua aplicação (proxy de proteção)
* Voce quer uma ligação entre seu sistema e um sistema remoto(proxy remoto)
* Voce quer fazer cache de chamadas já realizadas (inteligente ou proxy cache)
* Voce quer interceptar quaisquer chamadas de metodos no objeto real por qualquer motivo (exemplo:criar logs)


PALAVRAS CHAVE {controlar o acesso}, {interface do objeto destino real}, {marcador de localização}

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Padrões Gof Comportamentais @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


# Chain of Responsibility #

INTEÇÃO VISÃO ESTACIO

Chain of Responsibility é um padrão que permite o envio de uma requisição para o primeiro elemento de uma cadeia de objtos que podem realizar algum processamento relacionado a essa requisição, fazendo com que o objeto requisitante não precise ficar acoplado a todos os objetos da cadeia, mas apenas ao objeto para o qual ele envia a requisição.

INTENÇÃO OUTRA VERSÃO

Evita o acoplamento do remetente de uma solicitação ao seu destinatário, dando a mais de um objeto a chance de tratar a solicitação. Encadeia os objetos receptores e passa a solicitação ao longo da cadeia até que um objeto a trate.

```bash
SOBRE

* É usado quando uma requisição precisa passar por sequencia de operações até ser totalmente tratada.
* Desacopla quem envia de quem trata a requisição.
* É muito usado com requisições HTTP
* cada objeto da cadeia pode tratar uma parte da requisição e passar para o proximo da cadeia.

QUANDO USAR?

* Seu sistema precisa processar uma requisição em varias etapas diferentes e voce não quer criar uma ordem rigida para o processamento. o chain of responsibility permite que voce altere a ordem dos objetos na cadeia facilmente.
* Voce quer aplicar o principio da responsabilidade unica para tratamento de dados da requisição. Cada objeto fica responsavel por tratar apenas a parte que lhe couber.
* Voce quer permitir que os objetos responsaveis pelo tratamento de requisição possam variar em tempo de execução



PALAVRAS CHAVE {encadeia os objetos}, {Cadeia de responsabilidade} {evita o acoplamento em todos objetos da cadeia}
```

# Command #

INTEÇÃO VISÃO ESTACIO

Command é um padrão que encapsula uma requisição em um objeto. Em projeto que não utilizam esse padrão, uma requisição é normalmente realizada por meio de uma simples chamada de operação. O encapsulamento de requisições em objetos desacopla o requisitante e o objeto executor, o que possibilita, Parametrizar as requisições disparadas pelos clientes, Criar filias de requisições, Registrar o historico de requisições, implementar operações para desfazer ou refazer o processamento realizado para atender uma requisição.

OUTRA VISÃO

Encapsula uma solicitação como um objeto, desta forma permitindo que voce parametrize clientes com diferentes solicitações, enfilere oi registre (log) solicitações e suporte operações que podem ser desfeitas

```bash

SOBRE

* Transforma uma solicitação (um comando) em um objeto com toda a informação necessaria para sua execução
* É a versão orientada a objetos para funções de callback
* Permite que comandos possam ser enfileirados
* Permite registro de alterações para que possam ser replicadas quando necessario
* Permite que voce crie comandos compostos
* Desacopla o codigo do objeto que faz a solicitação com o objeto que recebe a solici


QUANDO USAR?

* Voce quer desacoplar o objeto que envia a solicitação do objeto que a receberá
* Voce quer tratar um comando como um objeto(com a possibilidade de armazenar, agendar, enfileirar, fazer log, agendar execusões, ou qualquer coisa que pode ser feita com um objeto)
* Voce quer permitir que a solicitações possam ser feitas e desfeitas


PALAVRAS CHAVE {comandos enfileirados}, {Transforma solicitação/comando em objeto} {solicitações possam ser feitas e desfeitas}

```
# Iterator #

INTEÇÃO VISÃO ESTACIO

O objeto do padrão Iterator é permitir o acesso sequencial aos objetos de uma coleção, sem expor sua representação interna

OUTRA VISÃO

Fornece uma maneira de acessar sequencialmente os elementos de um objeto agregado sem expor sua representação subjacente

```bash

SOBRE

* Desacopla a intenção principal do objeto do modo como sua interação é realizada (delega a iteração para outro objeto)
* Permite varios tipos de iterators, facilitando a implementação de novos modos de travessia da mesma coleção
* Encapsula os detalhes e monitora a travessia
* Permite que a coleção troque de iterador em tempo de execução

QUANDO USAR?

* Voce precisa remover a complexidade da travessia de dentro da coleção principal. isso permite que sua coleção foque apenas em armazenar dados de maneira eficiente
* Sua coleção pode ter varios modos de travessia, como crescente, pelo menor numero de saltos, pulando de dois em dois, ou como preferir.
* Voce quer disponibilizar protocolos de travessia para diferentes tipos de coleções


PALAVRAS CHAVE {acessar sequencialmente os elementos}, {remover a complexidade da travessia principal} {protocolos de travessia para coleções}
```
# Mediator #

INTENÇÃO ESTÁCIO

O padrão Mediator encapsula a forma de interação entre um conjunto de objetos, com o objetivo de evitar que eles tenham que referenciar uns aos outros explicitamente.

OUTRA VISÃO INTENÇÃO

Define um objeto que encapsula como um conjunto de objetos interage. O mediator promove o acoplamento fraco ao evitar que os objetos se refiram explicitamente uns aos outros, permitindo que voce varie suas interações.

```bash
SOBRE O MEDIATOR

* Visa encapsular a comunicação direta entre objetos
* Desacopla objetos que estariam intimamente ligados
* Centraliza toda a comunicação em apenas um objeto

* Basicamente ele serve como um objeto que vai ter ligação direta com todos os outros para que não precise todos estarem ligados uns com os outros

QUANDO USAR?

* Voce quer diminuir ou extinguir o acoplamento direto entre as classes que poderiam estar diretamente acopladas
* Voce quer simplificar comunicações de muitos-para-muitos para comunicações de um-para-muitos


PALAVRAS CHAVE {centralizador}, {comunicação de um para muitos} {evita ligação direta}, {interação entre um conjunto de objetos}
```

# Memento #

INTENÇÃO VISÃO ESTÁCIO

Memento é um padrão que permite capturar o estado interno de um objeto, sem quebrar o encapsulamento de forma que esse estado possa ser restaurado posteriormente.

OUTRA VISÃO

Sem violar o encapsulamento, captura e externaliza um estado interno de um objeto, de modo que o mesmo possa posteriormente ser restaurado para este estado.

```bash
SOBRE O MEMENTO

* Praticamente todas as aplicações o implementam com a função "desfazer" (CTRL + Z)
* Desacopla a responsabilidade da classe originadora de tomar conta dos deus backups
* Garante o encapsulamento e consistencia nos backups

QUANDO USAR?

* Voce quer ter a possibilidade de salvar e restaurar o estado atual de um objeto sem violar o encapsulamento
* Voce deseja implementar a função "desfazer" no seu sistema
* Voce deseja fazer backups de estado de determinada classe no seu sistema

PALAVRAS CHAVE {capturar o estado}, {função "desfazer"} {salvar e restaurar o estado atual}, {backups de estado}
```

# Strategy #

INTENÇÃO VISÃO ESTACIO

O padrão Stratregy define uma familia de algoritmos, encapsulando-os em objetos e permitindo que eles possam ser utilizados de forma intercambiavel, ou seja, o algoritmo especifico pode ser trocado sem que o modulo usuario desse algoritmo precise ser alterado.

OUTRA VISÃO

Definir uma familia de algoritmos, encapsular cada um deles e faze-los intercambiaveis. O strategy permite que o algoritmo varie independentemente dos clientes que o utilizam.

```bash
SOBRE O STRATEGY

* Separa a regra de negocio de variações de algoritmos que possam existir
* Define uma familia de algoritmos cada uma com uma variação diferente
* Permite a criação de varios algoritmos sem a necessidade de condicionais

QUANDO USAR?

* Voce tiver variantes de um mesmo algoritmo e precisa trocar esses algoritmos em tempo de execução
* Voce precisar isolar a regra de negocio do algoritmo que deve ser aplicado (aplicando o principio da responsabilidade unica)
* Voce perceber que está usando condicionais apenas para trocar o resultado final de um algoritmo

PALAVRAS CHAVE {familia de algoritmos}, {intercambiaveis} {criação algoritmo sem condicional}

```

# Observer #

INTENÇÃO VISÃO ESTÁCIO

O padrão Observer define uma relação de dependencia entre objetos, de modo a garantir que, quando alguma modificação no estado de determinado objeto ocorrer, todos os objetos dependentes sejam notificados e atualizados automaticamente.

OUTRA VISÃO

Define uma dependencia uma para muitos entre objetos, de modo que, quando um objeto muda de estado, todos os seus dependentes são automaticamente notificados e atualizados.

```bash
SOBRE O OBSERVER

* Implementado com dois tipos de objetos: objetos observaveis (observable) e objetos observadores (observer)
* Objetos observaveis tem uma referencia para todos os seus observadores. Isso torna possivel adicionar, remover e notificar todos observadores quando seu estado muda

* Objetos observadores devem ter meios de receber notificação de seus observaveis. Geralmente isso e feito com apenas um metodo.

QUANDO USAR?

* Voce precisa notificar objetos sobre a mundaça de estado de outros objetos.

PALAVRAS CHAVE {objetos dependentes notificados atualizados}, {notificar objetos} {estado muda}
```

# Visitor #

INTENÇÃO VISÃO ESTÁCIO

O padrão Visitor permite a definição de novas operações em uma hierarquia de objetos sem que haja a necessidade de moficar as classes dessa hierarquia.

OUTRA VISÃO

Representa uma operação a ser executada sobre os elementos da estrutura de um objeto. O visitor permite que voce separe um algoritmo dos elementos sobre os quais opera.

```bash
SOBRE O VISITOR

* O padrão visitor permite adicionar novas operações a uma estrutura de objeto existente sem modificar essa estrutura

QUANDO USAR?

* Voce precisa executar um algoritmo em todos os elementos de uma estrutura mais complexa (como uma estrutura criada com o padrão composite)
* Voce quer separar uma logica complexa em objetos auxiliares

PALAVRAS CHAVE {visitar elementos}, {adicionar novas funcionalidades} {hierarquia de objetos}, {não modifica estrutura}
```

# State #

INTENÇÃO VISÃO ESTACIO

O padrão State permite que um objeto modifique o seu comportamento quando o seu estado mudar, como se o objeto tivesse mudado de classe. Em vez de uma unica classes tratar os estados dos seus objetos em operações com diversas expressões condicionais, cada estado é representado em uma classe separada.

INTENÇÃO OUTRA VISÃO

Permite que um objeto altere seu comportamento quando seu estado interno muda. O objeto parecerá ter mudado de classe.

```bash
SOBRE O STATE

* Evita condicionais quando um objeto contexto de comportamento dependendo do seu estado
* Desacopla o estado de um objeto contexto e seus metodos em objetos de estado separados
* Fcilita a adição de novos estados sem a necessidade de alterar estados anteriores


QUANDO USAR?

* O seu objeto pode se comportar de maneira diferente dependendo do seu estado atual
* Voce quer evitar o uso de condicionais que alteram o comportamento da classe de acordo com valores dos seus campos

PALAVRAS CHAVE {estado presentado classe separada}, {parecerá ter mudado de classe} {evitar o uso de condicionais}, {comportamento dependendo do seu estado}

```

# interpreter #

INTENÇÃO VISÃO ESTÁCIO

O proposito do padrão interpreter é definir uma representação para a gramática de uma linguagem e um módulo capaz de interpretar sentenças nessa linguagem.

OUTRA VISÃO

```bash
SOBRE O INTERPRETER

* Padrão que define a gramatica de uma linguagem e interpreta sentenças dessa linguagem
* Permite avaliar expressoes ou sentenças em uma linguagem especifica
* Define regras para interpretação de expressoes na linguagem

QUANDO USAR?

* Quando voce tem uma linguagem simples que precisa ser interpretada
* Quando voce precisa definir uma gramatica para uma linguagem e avaliar expressoes nessa linguagem
* Quando voce precisa interpretar expressoes matematicas, linguagens de consulta ou linguagens de script


PALAVRAS CHAVE {interpretar}, {representação para a gramática}, {avaliar expressoes}, {sentenças nessa linguagem}
```

