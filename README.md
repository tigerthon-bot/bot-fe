# Tigerthon FE

## Overview

This repo contains the Front End client for the tigerthon bot. This client utilizes keycloak for authentication / authorization.

## Prerequisites

- NodeJS v14
- NPM
- Access to a configured Keycloak instance. Currently using temp one @ auth.tigerthon-bot.com

## Required Environment Variables

```
VUE_APP_CLIENT_ID=dev

VUE_APP_API_LOCATION=http://localhost:4200
```

## Running

- Clone the Repo
- Run `npm install`
- Create `.env` with required env variables
- Run `npm run serve`
