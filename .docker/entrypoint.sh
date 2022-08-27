#!/bin/bash
npm install
npm run build
npm i prisma -D 
prisma generate
bash