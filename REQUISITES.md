## Cadastro de carro

**Requisito Funcional**

- Deve ser possível cadastrar um novo carro.[x]

**Regra de negócio**

- Não deve ser possível cadastrar um carro com o mesmo license plate/placa já existente.[x]
- O carro deve ser cadastrado, por padrão, com disponibilidade.[x]
- O usuário responsável pelo cadastro deve ser um administrador. [x]

# Listagem de carros

**Requisito Funcional**

- Deve ser possível listar todos os carros disponíveis.[X]
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria.[X]
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.[X]
- Deve ser possível listar todos os carros disponíveis pelo nome do carro.[X]

**Regra de negócio**

- O usuário não precisa estar logado no sistema para fazer a listagem.[X]

# Cadastro de especificação no carro

**Requisito Funcional**

- Deve ser possível cadastrar uma especificação para um carro.[x]

**Regra de negócio**

- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.[x]
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.[x]
- O usuário responsável pelo cadastro deve ser um administrador.[x]

# Cadastro de imagens do carro

**Requisito Funcional**

- Deve ser possível cadastrar a imagem do carro.[x]

**Requisito Não Funcional**

- Utilizar o multer para upload dos arquivos.[x]

**Regra de negócio**

- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.[x]
- O usuário responsável pelo cadastro deve ser um administrador.[x]

# Aluguel de carro

**Requisito Funcional**

- Deve ser possível cadastrar um aluguel.[x]

**Regra de negócio**

- O aluguel deve ter duração mínima de 24 horas.[x]
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.[x]
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.[x]
- O usuário deve estar logado na aplicação.[x]
- Ao realizar o aluguel, o status do carro deverá mudar para indisponível.

# Devolução de um carro

**Requisito Funcional**

- Deve ser possível realizar a devolução de um carro.[]

**Regra de negócio**

- Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.[]
- Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.[]
- Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.[]
- Ao realizar a devoluçã, deverá ser calculad o total do aluguel.[]
- Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.[]
- Caso haja multa, deverá ser somado ao total do aluguel.[]
