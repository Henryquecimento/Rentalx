## Cadastro de carro

**Requisito Funcional**
- Deve ser possível cadastrar um novo carro.

**Regra de negócio**
- Não deve ser possível cadastrar um carro com o mesmo license plate/placa já existente.
- Não deve ser possível alterar a license plate/placa de um carro já cadastrado.
- O carro deve ser cadastrado, por padrão, com disponibilidade.
- O usuário responsável pelo cadastro deve ser um administrador.

# Listagem de carros
**Requisito Funcional**
- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**Regra de negócio**
- O usuário não precisa estar logado no sistema para fazer a listagem.

# Cadastro de especificação no carro

**Requisito Funcional**
- Deve ser possível cadastrar uma especificação para um carro.
- Deve ser possível listar todas as especificações.
- Deve ser possível listar todos os carros.

**Regra de negócio**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um administrador.


# Cadastro de imagens do carro

**Requisito Funcional**
- Deve ser possível cadastrar a imagem do carro.
- Deve ser possível listar todos os carros.

**Requisito Não Funcional**
- Utilizar o multer para upload dos arquivos

**Regra de negócio**
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um administrador.

# Aluguel de carro

**Requisito Funcional**
- Deve ser possível cadastrar um aluguel. 

**Regra de negócio**
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.