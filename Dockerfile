# ----------------------
# Etapa 1: Build
# ----------------------
    FROM node:20-alpine AS builder

    # Crear directorio de la app
    WORKDIR /usr/src/app
    
    # Copiar package.json y package-lock.json primero para aprovechar cache
    COPY package*.json ./
    
    # Instalar dependencias
    RUN npm install
    
    # Copiar el resto del código
    COPY . .
    
    # Compilar el proyecto
    RUN npm run build
    
    # ----------------------
    # Etapa 2: Runtime
    # ----------------------
    FROM node:20-alpine
    
    # Crear directorio de la app
    WORKDIR /usr/src/app
    
    # Copiar solo dependencias necesarias (sin devDependencies)
    COPY package*.json ./
    RUN npm install --omit=dev
    
    # Copiar compilados desde el builder
    COPY --from=builder /usr/src/app/dist ./dist
    
    # Copiar archivos de configuración necesarios (.env si lo usas)
    #COPY --from=builder /usr/src/app/.env ./
    
    # Exponer el puerto de NestJS (por defecto 3000)
    EXPOSE 3000
    
    # Comando de arranque
    CMD ["node", "dist/main.js"]
    