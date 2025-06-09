#1. Usa imagem oficial do Node.js com base
FROM node:18
#2. Define o diretório de trabalho dentro do container
WORKDIR /app
#3. Copia o package.json e package-lock.json para o diretório de trabalho (Boas Práticas)
COPY package*.json ./
#4. Instala as dependências com npm
RUN npm install 
#5. Copia o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .
#6. Expõe a porta 3002 para acesso externo
EXPOSE 3002
#7. Define o comando para iniciar a aplicação
CMD ["node", "index.js"]


