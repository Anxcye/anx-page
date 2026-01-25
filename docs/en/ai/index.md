# AI Configuration Guide

Anx Reader has built-in support for various AI model interfaces. You can configure them to enhance your reading experience (e.g., AI summary, translation, etc.).

Currently supported AI services include:
- OpenAI
- Gemini
- Claude
- DeepSeek
- OpenRouter
- OpenAI Compatible Model

## Configuration Steps

1.  Open the app, go to **Settings** -> **More Settings** -> **AI**.
2.  Select the AI service you want to configure.
3.  Fill in the corresponding configuration information (all fields are required):
    -   **URL**: The request address of the API. Some services have default values. If your provider provides a specific URL, please modify it here.
    -   **API Key**: The key used for authentication.
    -   **Model**: The name of the model you want to use (e.g., `gpt-4o`, `gemini-1.5-pro`, etc.).
4.  Click the **Test** button. If configured correctly, the test content returned by the AI will be displayed below.
5.  After the test is successful, click **Save** to apply.

## How to Get Configuration Information

If you don't know how to get this information, please refer to the following tutorials:

- [How to get OpenAI config](./openai.md)
- [How to get Gemini config](./gemini.md)
- [How to get Claude config](./claude.md)
- [How to get DeepSeek config](./deepseek.md)
- [How to get OpenRouter config](./openrouter.md)
- [How to get LongCat config](./longcat.md)
