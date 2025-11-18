# ----------------------
# Etapa 1: Build
# ----------------------
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# IMPORTANTE: build sin watch
RUN npm run build:prod

# ----------------------
# Etapa 2: Runtime
# ----------------------
FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --omit=dev

# Copiar solo el código compilado
COPY --from=builder /usr/src/app/dist ./dist

# Si necesitas algún otro archivo (por ejemplo, config JSON), lo copias aquí
# COPY --from=builder /usr/src/app/.env ./

# Usa el puerto real de tu API (parece que 4000, no 3000)
EXPOSE 4000

# Arranque en producción
CMD ["node", "dist/index.js"]
