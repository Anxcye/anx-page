# Get OpenAI Configuration

## 1. Get API Key

1.  Visit the [OpenAI API Keys](https://platform.openai.com/api-keys) page.
2.  Log in to your OpenAI account.
3.  Click **Create new secret key**.
4.  Optionally name your key, then click **Create secret key**.
5.  Copy the generated key starting with `sk-`. **Note: The key is displayed only once, please save it safely.**

## 2. Confirm URL

The official default API address for OpenAI is:
`https://api.openai.com/v1`

If you are using the official service, you usually do not need to modify this. If you are using a third-party forwarding service (API proxy), please get the API address from your provider.

## 3. Select Model

Common model names include:
-   `gpt-4o`
-   `gpt-4o-mini`
-   `gpt-4-turbo`
-   `gpt-3.5-turbo`

You can view more models at [OpenAI Models](https://platform.openai.com/docs/models).

## 4. Fill in Configuration

Back to the AI settings page of Anx Reader:
-   **URL**: Enter `https://api.openai.com/v1` (or your proxy address)
-   **API Key**: Enter the Key obtained in step 1
-   **Model**: Enter the model name selected in step 3

[Back to Configuration Guide](./index.md)
