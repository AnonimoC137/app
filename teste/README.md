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

* Oculta a logica de instanciação do codigo cliente. Ometodo fabrica será responsavel por instanciar as classes desejadas.

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

* Toda a programação dica focada nas interfaces e não em implementações

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

```

# Decorator # 

