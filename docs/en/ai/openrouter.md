# Get OpenRouter Configuration

OpenRouter is an aggregator platform that allows you to access multiple AI models through a unified interface.

## 1. Get API Key

1.  Visit [OpenRouter Keys](https://openrouter.ai/keys).
2.  Log in to your OpenRouter account.
3.  Click **Create Key**.
4.  Enter a name and click **Create**.
5.  Copy the generated API Key.

## 2. Confirm URL

The unified API address for OpenRouter is:
`https://openrouter.ai/api/v1`

## 3. Select Model

OpenRouter supports many models, usually in the format `provider/model-name`. For example:
-   `openai/gpt-4o`
-   `anthropic/claude-3.5-sonnet`
-   `google/gemini-pro-1.5`
-   `meta-llama/llama-3-70b-instruct`

It is best to search for the model you want to use on the [OpenRouter Browse](https://openrouter.ai/models) page and copy its full ID.

## 4. Fill in Configuration

Back to the AI settings page of Anx Reader:
-   **URL**: Enter `https://openrouter.ai/api/v1`
-   **API Key**: Enter the Key obtained in step 1
-   **Model**: Enter the model ID copied in step 3

[Back to Configuration Guide](./index.md)
