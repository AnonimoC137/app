@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Padrões Gof Criação @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

# Prototype # 

Especificar os tipos de objetos a serem criados usando uma instancia - prototipo e criar novos objetos pela copia desse prototipo

```bash
Quando usar?

1. use o padrão prototype quando precisar que seu codigo não dependa de classes concretas para a criação de novos objetos.

2. use o padrão prototype quando quiser que não ocorra uma explosão de subclasse para objtos muito similares

QUESTÕES ESTACIO

"Implementar uma operação clone em cada produto concreto a ser instanciado, permitindo que um módulo cliente crie uma nova instância por meio da criação de uma réplica de um objeto já existente".Assinale a alternativa com o nome do padrão que define essa estratégia:

Resposta: Prototype

PALAVRAS CHAVE {novos objetos pela copia}, {evita explosão de subclasses}
```

# Factory Method #

Definir uma interface para criar um objeto mas deixar as subclasses decidirem que classe instanciar. o factory method permite adiar a instanciação para as subclasses

```bash

* É um padrão de projeto de criação (lida com a criação de objetos)

* Oculta a logica de instanciação do codigo cliente. O metodo fabrica será responsavel por instanciar as classes desejadas.

* É obtido através de herança. O metodo fabrica pode ser criado ou sobrescrito por subclasses.

* Dá flexibilidade ao codigo cliente permitindo a criação de novas factories sem a necessidade de alterar codigo já escrito

* Pode usar parametros para determinar o tipo dos objetos a serem criados ou os parametros a serem enviados aos objetos sendo criados.

QUESTÕES ESTACIO

1. Um aplicativo de reserva de hotéis utiliza o padrão Factory Method para criar diferentes tipos de reservas, como quartos standard e suítes. Este padrão permite que subclasses decidam que classe de objetos será instanciada, baseado nas preferências do usuário.Qual é o benefício do padrão Factory Method neste aplicativo?

Resposta: Permite que subclasses decidam sobre a criação de objetos

2. "Definir um participante Creator com uma operação abstrata que é implementada em cada subclasse Concrete Creator, sendo cada implementação concreta dessa operação responsável pela instanciação de um produto específico". Assinale a alternativa com o nome do padrão que define essa estratégia:

Resposta: Factory Method

3. "Implementar a instanciação de objetos utilizando uma estrutura de herança, em que a superclasse define uma operação de criação de um produto genérico, e cada subclasse define a implementação dessa operação, criando um produto específico derivado do produto genérico definido na superclasse".

Resposta: Factory Method

PALAVRAS CHAVE {subclasses decidirem que classe instanciar}, {É uma fabrica}

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

QUESTÕES ESTACIO

1. Ao desenvolver um editor de texto, a equipe optou pelo padrão Builder para facilitar a construção de um conjunto complexo de objetos, como a formatação de texto. Este padrão ajuda a separar a construção do objeto de sua representação Qual é a vantagem principal do padrão Builder neste cenário?

Resposta: Construção passo a passo de um objeto complexo.

2. Você precisa implementar um módulo que leia um arquivo RTF (Rich Text Format) e converta seu conteúdo em diferentes formatos (ASCII, TeX, HTML etc.). Sabendo que o arquivo é composto por diferentes partes (texto, formatação, figuras etc.), qual dos padrões seria mais indicado para isolar o conversor das diferentes formas de representação do conteúdo gerado?

Resposta: Builder

PALAVRAS CHAVE {Trata objetos complexos}, {criar diferentes representações}, {criação de um objeto em etapas}
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

QUESTOES ESTACIO

1 "Permitir a criação de uma família de objetos relacionados ou dependentes, de forma que o módulo cliente não precise conhecer os objetos específicos das diferentes famílias, lidando apenas com as interfaces genéricas dos produtos dessas famílias".Assinale a alternativa com o nome do padrão que possui esse propósito:

Resposta: Abstract Factory

2 Para um sistema de automação residencial, o padrão Abstract Factory é usado para criar diferentes tipos de dispositivos inteligentes, como lâmpadas e termostatos, sem depender de implementações específicas. Isso permite a fácil integração de novos dispositivos no sistema. Qual é a principal funcionalidade do padrão Abstract Factory neste sistema de automação?

Resposta: Cria familias de objetos sem especificar suas classes concretas

PALAVRAS CHAVE {objetos relacionados ou dependentes}, {composto por multiplos Factory Methods}, {sem especificar suas classes concretas}
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

QUESTÕES ESTACIO

1. "Garantir que uma classe somente tenha uma instância em um processo de execução, fornecendo uma forma de acesso a essa única instância e impedindo que outros módulos possam ter acesso a seu construtor". Assinale a alternativa com o nome do padrão que possui esse propósito:

Resposta: Singleton

2. Em um projeto de software para gestão de bibliotecas, o padrão Singleton é utilizado para garantir uma única instância do sistema de gerenciamento de usuários. Este padrão assegura que todas as operações de empréstimo e devolução de livros sejam gerenciadas de forma centralizada. Qual é a principal característica do padrão Singleton utilizada neste contexto?

Resposta: Garante uma unica instancia de uma classe em toda a aplicação

PALAVRAS CHAVE {fornece um ponto de acesso global}, {acesso a recursos compartilhados}, {somente uma instancia disponivel}

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

QUESTÕES ESTACIO

1. Conseguir adicionar um novo fornecedor externo de um serviço já utilizado por um sistema, apenas adicionando um módulo que seja capaz de converter uma requisição de uma interface conhecida pelo sistema para a interface proprietária fornecida pelo componente externo é um dos efeitos obtidos com a aplicação de qual padrão?

Resposta: Adapter

2. Implementar um componente para cada fornecedor de um determinado serviço, supondo que possamos ter diferentes fornecedores com APIs proprietárias para esse serviço utilizado pelo nosso sistema, de modo que esse componente converta uma requisição genérica do serviço utilizado pelos módulos clientes do sistema em chamadas específicas da API do fornecedor externo. Essa descrição corresponde à estrutura de solução de qual padrão?

Resposta: Adapter

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

QUESTÕES ESTACIO

1. Você está implementando um conjunto de componentes de interface gráfica com o usuário que precisa rodar em diferentes plataformas (ex.: Windows, Linux). Você quer poder evoluir a estrutura dos componentes gráficos de forma independente das implementações específicas dos componentes para cada plataforma. Portanto, você quer poder especializar os componentes gráficos de forma independente das plataformas onde esses componentes rodarão. Assinale a alternativa com o nome do padrão mais indicado para ser aplicado nesse contexto:

Resposta: Bridge

2. Permitir que uma abstração que tenha diferentes representações possa variar de forma independente das suas representações, como, por exemplo, no caso de uma abstração implementada em diferentes plataformas (Windows, Linux, etc.). Assinale a alternativa com o nome do padrão que possui esse propósito:

Resposta: Bridge

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

QUESTÕES ESTACIO

Assinale a alternativa com dois padrões que possuem uma estrutura de solução muito parecida, porém, com propósitos distintos.

Resposta: Composite e Decorator

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

QUESTÕES ESTACIO

1. Que padrão pode ser utilizado na implementação de uma estrutura hierárquica de diretório, em que existam pastas que podem conter pastas ou arquivos, sendo que algumas operações com as pastas devem ser aplicadas de forma recursiva aos elementos que fazem parte dela, isto é, outras pastas e arquivos?

Resposta: Composite

2. Possibilitar a manipulação de objetos individuais e de agregados de uma estrutura hierárquica (árvore) de objetos por meio do mesmo conjunto de operações, sem que o módulo cliente precise fazer a distinção entre o tipo do objeto manipulado (individual ou agregado). Assinale a alternativa com o nome do padrão que possui esse propósito:

Resposta: Composite

3. Sobre o padrão Composite, assinale a alternativa correta:

Resposta: Esse padrão permite manipular agregados e seus elementos com uma interface uniforme, isto é, com as mesmas operações

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
* Voce quer criar pontos de entrada para determinadas partes do sistema, como serviços externos, camadas de aplicação e objetos complexos dentro de determinadas partes do codigo.

PALAVRAS CHAVE {interface fachada/generica}, {interface de nivel mais alto}

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

* Sua aplicação utiliza uma grande quantidade de objetos.
* Os custos de armazenamento são altos por causa da grande quantidade de objetos.
* A maioria dos estados de objetos podem se tornar extrinsecos
* Muitos objetos podem ser substituidos por poucos objetos compartilhados
* A aplicação não depende da identidade dos objetos.

QUESTÕES ESTACIO

Você está desenvolvendo um sistema e percebe que está instanciando uma grande quantidade de objetos cujos atributos não mudam de valor durante toda a execução do programa. Muitos desses objetos instanciados são réplicas, o que gera uma utilização muito ineficiente da memória. Assinale a alternativa com o nome do padrão que poderia ser aplicado nesse cenário:

Resposta: Flyweight

PALAVRAS CHAVE {memoria}, {compartilhamento de objetos}{grande quantidade de objetos}


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

QUESTÕES ESTACIO

Você está definindo uma classe e deseja que todas as chamadas de operações para objetos dessa classe possam ser interceptadas, para que algum procedimento de verificação ou autorização seja realizado antes da operação destino ser executada. Para isso, você define uma classe intermediária que oferece as mesmas operações da classe destino, porém, executando esses procedimentos adicionais para, em seguida, delegar a execução para o objeto destino. Assinale a alternativa com o nome do padrão que define essa estrutura de solução:

Resposta: Proxy


PALAVRAS CHAVE {controlar o acesso}, {interface do objeto destino real}, {interceptar operações}

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

QUESTÕES ESTACIO

"Seja um cenário em que existem vários objetos capazes de realizar o processamento associado a uma requisição. Esses objetos são organizados em uma lista encadeada de modo que a requisição vai sendo passada do primeiro objeto receptor da requisição para o próximo da lista, e assim sucessivamente, até que o resultado desejado seja atingido". Assinale a alternativa com o nome do padrão com esse propósito:

Resposta: Chain of Responsibility

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

QUESTÕES ESTACIO

1. "Esse padrão encapsula uma requisição em um objeto, desacoplando o requisitante e o objeto executor. Esse encapsulamento permite registrar o histórico de requisições, reproduzir essas requisições em outro ambiente, bem como implementar operações de desfazer ou refazer o processamento associado à requisição". Assinale a alternativa com o nome do padrão que possui esse propósito:

Resposta: Command

2. Você está implementando um sistema e quer guardar o histórico de todas as requisições efetuadas pelo usuário via interface gráfica, de forma a poder realizar operações, como desfazer (undo) e refazer (redo) requisições. Assinale a alternativa com o nome do padrão mais indicado para ser aplicado nesse contexto:

Resposta: Command

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

QUESTÕES ESTACIO

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

QUESTÕES ESTACIO

1. Sobre o padrão Mediator, assinale a alternativa correta:

Resposta: Pode ser aplicado em conjunto com o padrão Observer

2. "Na implementação de um processo complexo, um módulo A chama operações de um módulo B e de um módulo C. B, por sua vez, chama operações de C e de D. O módulo C chama operações de A e de E. O módulo D chama operações dos módulos B e C".Esse cenário ilustra uma interação entre objetos no estilo muitos para muitos. Para simplificar esse processo, define-se um objeto que centraliza todas as interações entre esses objetos, de modo que eles passam a se comunicar apenas com esse elemento central. Dessa forma, o elemento central X passa a receber uma notificação de A, para então chamar operações de B e C. Da mesma maneira, a partir de uma notificação enviada por B, X chama operações de C e de D. Essa descrição corresponde à estrutura de solução de qual padrão?

Resposta: Mediator

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

QUESTÕES ESTACIO

Você está desenvolvendo um sistema que produz informações guardadas em um ou mais objetos que só devem ser armazenados em um banco de dados após o processamento ser concluído. Entretanto, esses dados estão vinculados a uma sessão de usuário, que pode ser interrompida em função de problemas de conexão. Esse padrão oferece uma solução que permite que um objeto A capture e salve todo o estado de um objeto B da sessão, sem que A tenha que quebrar o encapsulamento de B, tornando possível a restauração do estado do objeto B, a partir de um estado capturado anteriormente por A.

Resposta: Memento

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

QUESTÕES ESTACIO

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

QUESTÕES ESTACIO

1. Esse padrão define uma estrutura similar à de um esquema Publisher-Subscriber, pois existe um Publisher detentor de um conjunto de informações e registra um conjunto de objetos interessados em receber notificações de modificação desse conjunto de informações, ou seja, do estado do Publisher. Ao ter o seu estado interno modificado, o Publisher notifica os Subscribers que, por sua vez, executam algum procedimento específico de tratamento dessa modificação. Assinale a opção com o padrão correspondente à descrição acima:

Resposta: Observer

2. Você está desenvolvendo um sistema para acompanhar as cotações da bolsa de valores. As cotações podem ser acompanhadas na interface com usuário na forma textual (ticker da ação e o seu valor) e na forma de um gráfico de candlesticks, apresentando o histórico das cotações em um período do tempo. As duas formas de visualização devem estar em sincronia com as variações que ocorrem com o valor da cotação das ações. Assinale a alternativa com o nome do padrão que pode ser aplicado para resolver esse problema de sincronização de visualizações de um conjunto de informações com a sua fonte.

Resposta: Observer

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

QUESTÕES ESTACIO

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

QUESTÕES ESTACIO

Você está desenvolvendo um módulo correspondente a uma classe X que possui um ciclo de vida composto por estados e não quer escrever o código dessa classe utilizando estruturas condicionais complexas. Para isso, você separa o processamento de cada parte desse ciclo de vida em uma classe à parte. A classe X apenas guarda a referência para a situação corrente do processamento e repassa as requisições para o objeto correspondente a essa situação corrente. Assinale o padrão a que esse texto se refere:

Resposta: State

PALAVRAS CHAVE {estado representado classe separada}, {parecerá ter mudado de classe} {evitar o uso de condicionais}, {comportamento dependendo do seu estado}

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
# Template Method #

INTENÇÃO VISÃO ESTÁCIO

O proposito do padrão template method é definir o esqueleto de um algoritmo em uma superclasse, em que os passos comuns podem ser implementados na propria superclasse e os passos especificos nas subclasses

OUTRA VISÃO

Define o esqueleto de um altoritmo em uma operção, postergando a definição de alguns passos para subclasse. O template method permite que as subclasses redefinam certos passos de um algoritmo sem mudar sua estrutura.

```bash
SOBRE O TEMPLATE METHOD

* Mantem a ordem de chamada de metodos no algoritmo
* Evita a duplicação de codigo dentro da classe base
* Substitui condicionais por polimorfismo
* Permite que as subclasses alterem apenas os passos necessarios para concluir o algoritmo
* Permite a adição de hooks para que as subclasses utilizem em pontos estrategicos do algoritmo.


QUANDO USAR?

* Voce precisa de variações de um mesmo algoritmo sem mudar a ordem de execução dos metodos
* Voce percebe que está usando herança para alterar apenas pequenos trechos de codigo de um algoritmo.
* Inversão do controle: A classe base controla a ordem de execução do algoritmo, mas delega a implementação de partes específicas para as subclasses.

QUESTÕES ESTACIO

Assinale a alternativa que expressa a intenção do padrão de projeto Template Method:

Resposta: implementar a estrutura de um algoritmo generico em uma superclasse, considera que os passos comuns são implementados na própria superclasse, enquanto os passos especificos são implementados nas suas subclasses.

PALAVRAS CHAVE {definir o esqueleto}, {implementados na propria superclasse} {Inversão do controle},

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Padrões Grasp @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

# Padrão Especialista na informação #

SOBRE

Esse padrão sugere que a responsabilidade por uma determinada tarefa deve ser atribuida á classe que possui a maior quantidade de informações necessarias para executar essa tarefa com sucesso.

RESUMO

* Propoem que uma classe deve ser designada para realizar uma determinadaoperação se ela já possui as informações necessarias para executa-la de maneira eficaz. Isso promove a coesão, onde as responsabilidades são agrupadas de forma lógica e coesa em classes especificas.

* Normalmente a rtealização de uma funcionalidade do sistema envolve a presença de diversos especialistas, pois cada classe possui uma parte das informações necessarias para resolver o problema, será necessario estabelecer um mecanismo de colaboração entre os objetos- por intermedio de troca de mensagens.

DEFINIÇÃO DO PADRÃO VISÃO QUESTÃO ESTACIO

Padrão que recomenda alocar as operações pelas classes do sistema de acordo com o conhecimento que cada classe possui, sendo ele dado pelos seus atributos e relacionamentos

# Criador #

SOBRE

* Padrão que sugere a delegação da responsabilidade de criação de objetos para uma classe separada, em vez de instanciar os objetos diretamente. Esse padrão é util quando a criação pe complexa ou quando existe a possibilidade de multiplas maneiras de criar o bojeto.

* Propoe que a responsabilidade de criar objetos seja delegada a uma classe dedicada, conhecida como "fabrica" ou "criador". Esta classe pode conter metodos que instanciam e inicializam os objetos de acordo com determinados criterios.

* O padrão Criador é especialmente indicado para a criação de instâncias que formam parte de um agregado, pois o elemento que controla o ciclo de vida das suas partes é o próprio agregado, o qual, aliás, naturalmente já está relacionado com as suas partes. Esse padrão não é apropriado em algumas situações especiais, como é o caso da criação condicional de uma instância de uma família de classes similares.

RESUMO

* Dessa forma , o padrão Criador promove um codigo mais modular e flexivel, facilitando a manutenção e a escalabilidade do sistema. Além disso ele ajuda a reduzir o acoplamento entre as classes, já que a criação de objetos é centralizada em uma unica classe.

DEFINIÇÃO DO PADRÃO VISÃO QUESTÃO ESTACIO

O padrão criador oferece uma heurisca para resolver problemas simples de instanciação de objetos, recomendando que um agregado seja responsavel pela criação dos objetos que o compoem

# Coesão alta #

SOBRE

Refere ao grau em que os elementos de um modulo então relacionados entre si. Em outras palavras, quanto mais relacionadas são as responsabilidaders dos elementos dentro de um modulo, maior é a coesão desse modulo.

* A complexidade está distribuída por vários módulos, cada um contribuindo para resolver um pedaço específico do problema.

RESUMO

Coesão é um conceito que nos permite avaliar se as responsabilidades de um módulo estão fortemente relacionadas e possuem o mesmo propósito. O objetivo é criar módulos com coesão alta, ou seja, módulos que tenham um propósito bem definido.

A principal intenção da coesão alta é criar módulos de software que sejam coesos, ou seja, que tenham suas responsabilidades bem definidas e relacionadas

# Controlador #

SOBRE

A intenção do padrão controller é atribuir a responsabilidade de receber e gerenciar solicitações do usuario a um objeto controlador, DEsacopla o sistema dos detalhes de como as solicitações são atendidas e processadas.

O controller atua como um intermediario entre o usuario e o sistema, recebendo solicitações do usuario e coordenando as ações apropriadas. Ele não executa as operações diretamente, mas delega as responsabilidades para outros objetos.


RESUMO

Ao receber um requisição, um modulo controlador normalmente coordena e controla os elementos responsaveis pela produção da resposta.

 RESPOSTA QUESTÃO ESTACIO

 O controlador é um elemento de logica de negocio responsavel por coordenar a produção da resposta aos eventos logicos gerada por componentes de interface do sistema com elementos externos.

# Acoplamento baixo #

SOBRE

Visa reduzir as dependencias entre os diferentes modulos, classes ou componentes de um sistema. principais caracteristicas são : Reduzir as dependencias entre diferentes componentes do sistema, minimizar o impacto de mudanças em uma parte do sistema sobre as outras partes, promover a reutilização de codigo. Ou seja as mudanças geram um impacto em poucas classes.

RESUMO

Esse padrão consiste em distribuir as responsabilidades a fim de gerar um acoplamento baixo entre os modulos.

RESPOSTA QUESTÃO ESTACIO

Buscamos produzir modulos com acoplamento baixo, minimizando o grau de dependencia entre eles.

# Polimorfismo #
SOBRE

As principais caracteristicas do polimorfismo são: permitir que objetos de diferentes classes sejam tratados de maneira uniforme (igual), possibilitando que um mesmo metodo seja chamado em objetos de classes diferentes, produzindo comportamentos diferentes de acordo com a classe do objeto.


RESUMO

por meio do polimorfismo consigo definir um metodo em uma interface e quando eu extendo essa interface em uma classe ou varias classes consigo usar esse metodo em diferentes objetos.

RESPOSTA QUESTÃO ESTACIO

O polimorfismo permite que um objeto referenciado em uma chamada de operação possa assumir diferentes formas em momentos distintos de execução dessa chamada.

# Pure Fabrication / Invenção pura

SOBRE 

Atribuir responsalididades que não correspondem a nenhum conceito do dominio do problema a classes ficticias ou de utilidade, manter a coesão alta e o acoplamento baixo, evitando sobrecarregar classes existentes com resposabilidades que não lhes pertencem.

* Propoem criar classes ficticias quie não representam entidades do mundo real, mas tem a responsabilidade de realizar uma determinada tarefa.
* Essa classes são utilizadas para manter a coesão alta e o baixo acoplamento no sistema, evitando que outras classes acumulem responsabilidades que não são de sua competencia.


RESUMO

Cria classes ficticias para lidar com situações variadas para que as classes existentes não fiquem sobrecarregadas.

QUESTÃO ESTACIO

O padrão invenção pura, diz respeito a criação de classes que nao representam um concceito do dominio do problema com o objetivo de gerar soluções com maior coesão e menor acoplamento daquilo que seria obtido pela aplicação do padrão Especialista na informação.

# Indireção #

SOBRE

Intenção do padrão consiste em substituir a conexão direta entre dois ou mais objetos por uma estrutura de comunicação mediada por um objeto intermediario. Assim se um objeto A enviar mensagem diretamente para B, ele passará a manda-la para um objeto intermediario X,o qual, por sua vez, fica responsavel pela comunicação com B.

* Essa camada intermediaria pode ser uma interface ou uma classes de adaptação, que recebe solicitações de uma classe e as encaminha para outra classe, sem que a primeira classes precise conhecer diretamente a segunda.

QUESTÃO ESTACIO

Padrão que recomenda introduzir um objeto entre um módulo cliente e um fornecedor de um serviço com o propósito de reduzir o acoplamento entre eles.

# Variações Protegidas #

A intenção desse padrão é identificar pontos sujeitos a variação e isolar variações com a criação de interfaceis estaveis no seu entorno.

* Principais pontos: Proteger o sistema  de variações ou instabilidades externas, isolando as partes do sistema que podem variar, Encapsular as variações em classes ou interfaces, para que mudanças nessas variações não afetem outras partes do sistema.



