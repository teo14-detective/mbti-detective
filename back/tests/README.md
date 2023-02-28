# HOW TO USE RestClient API Test

## 1. Install the dependencies

```RestClient Extension for Visual Studio Code```

## 2. add env variable VS CODE settings.json

```bash
    "rest-client.environmentVariables": {
        "local": {
            "host": "http://localhost:3000",
        },
        "production": {
            "host": "https://mbti-detective-api.netlify.app",
        }
    }
```

## 3. run api test

## 4. switch environment

``` use VSCode action => RestClient: Switch Environment ```
