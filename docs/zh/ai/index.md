# AI 配置指南

Anx Reader 内置了多种 AI 模型的接口支持，您可以配置它们来增强阅读体验（如 AI 摘要、翻译等）。

目前支持的 AI 服务包括：
- OpenAI
- Gemini
- Claude
- DeepSeek
- OpenRouter
- OpenAI 兼容模型

## 配置步骤

1.  打开软件，进入 **设置** -> **更多设置** -> **AI**。
2.  选择您想要配置的 AI 服务。
3.  填入相应的配置信息（所有配置项均为必填）：
    -   **URL**: API 的请求地址。部分服务有默认值，如果您的服务商提供了特定的 URL，请在此处修改。
    -   **API Key**: 用于验证身份的密钥。
    -   **Model**: 您想要使用的模型名称（例如 `gpt-4o`, `gemini-1.5-pro` 等）。
4.  点击 **测试** 按钮。如果配置正确，下方会显示 AI 返回的测试内容。
5.  测试成功后，点击 **保存** 即可应用。

## 获取配置信息

如果您不知道如何获取这些配置信息，请参考以下教程：

- [如何获取 OpenAI 配置](./openai.md)
- [如何获取 Gemini 配置](./gemini.md)
- [如何获取 Claude 配置](./claude.md)
- [如何获取 DeepSeek 配置](./deepseek.md)
- [如何获取 OpenRouter 配置](./openrouter.md)
- [如何获取 LongCat 配置](./longcat.md)
