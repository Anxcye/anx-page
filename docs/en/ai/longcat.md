# Get LongCat Configuration

LongCat provides an OpenAI-compatible API interface, making it very easy to configure.

## 1. Get API Key

1.  Visit [LongCat API Open Platform](https://longcat.chat/platform/) and log in to your account.
2.  Go to the [API Keys](https://longcat.chat/platform/api_keys) page.
3.  Click **Create API Key**.
4.  Copy the generated key (usually starting with `sk-`).

## 2. Confirm URL

Anx Reader requires an OpenAI-compatible Base URL.

According to the LongCat official documentation, the OpenAI format endpoint is:
`https://api.longcat.chat/openai`

**Note**: When configuring in Anx Reader, it is recommended to append the `/v1` suffix, i.e.:
`https://api.longcat.chat/openai/v1`

## 3. Select Model

LongCat supports multiple models. You can check the latest support list in the [LongCat Documentation](https://longcat.chat/platform/docs/zh/#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A8%A1%E5%9E%8B).

Common models may include (please refer to the official website):
- `gpt-4o`
- `gpt-4o-mini`
- `claude-3-5-sonnet-20240620`

## 4. Fill in Configuration

Back to the AI settings page of Anx Reader:
-   **URL**: Enter `https://api.longcat.chat/openai/v1`
-   **API Key**: Enter the Key obtained in step 1
-   **Model**: Enter the model name you want to use

[Back to Configuration Guide](./index.md)
