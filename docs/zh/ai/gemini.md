# 获取 Gemini 配置信息

## 1. 获取 API Key

1.  访问 [Google AI Studio](https://aistudio.google.com/app/apikey)。
2.  登录您的 Google 账户。
3.  点击 **Create API key**。
4.  在弹出的对话框中，选择现有的 Google Cloud 项目或创建新项目，然后点击 **Create API key in existing project** 或 **Create API key in new project**。
5.  复制生成的 API Key。

## 2. 确认 URL

Gemini 的官方 API 地址通常为：
`https://generativelanguage.googleapis.com/v1beta`

Anx Reader 可能会默认处理部分 URL，但建议填入上述完整的基础 URL。

## 3. 选择 Model

常见的模型名称包括：
-   `gemini-1.5-pro`
-   `gemini-1.5-flash`
-   `gemini-1.0-pro`

您可以在 [Gemini Models](https://ai.google.dev/models/gemini) 查看更多模型。

## 4. 填入配置

回到 Anx Reader 的 AI 设置页面：
-   **URL**: 填入 `https://generativelanguage.googleapis.com/v1beta`
-   **API Key**: 填入步骤 1 获取的 Key
-   **Model**: 填入步骤 3 选择的模型名称

[返回配置指南](./index.md)
