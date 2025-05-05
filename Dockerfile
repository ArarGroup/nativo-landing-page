# syntax=docker/dockerfile:1.4

FROM node:20-alpine AS base

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy only package files first
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the files
COPY . .

EXPOSE 3000

CMD ["pnpm", "run", "dev"]