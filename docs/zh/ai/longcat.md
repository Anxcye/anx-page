# 获取 LongCat 配置信息

LongCat 提供了兼容 OpenAI 的 API 接口，这使得它非常容易配置。

## 1. 获取 API Key

1.  访问 [LongCat API开放平台](https://longcat.chat/platform/) 并登录您的账户。
2.  前往 [API Keys](https://longcat.chat/platform/api_keys) 页面。
3.  点击 **创建 API Key**。
4.  复制生成的密钥（通常以 `sk-` 开头）。

## 2. 确认 URL

Anx Reader 需要填入 OpenAI 兼容的 Base URL。

根据 LongCat 官方文档，OpenAI 格式的接入端点为：
`https://api.longcat.chat/openai`

**注意**：在 Anx Reader 中配置时，通常建议补全 `/v1` 后缀，即填入：
`https://api.longcat.chat/openai/v1`

## 3. 选择 Model

LongCat 支持多种模型，您可以在 [LongCat 文档](https://longcat.chat/platform/docs/zh/#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A8%A1%E5%9E%8B) 中查看最新支持列表。

常见的模型可能包括（请以官网为准）：
- `gpt-4o`
- `gpt-4o-mini`
- `claude-3-5-sonnet-20240620`

## 4. 填入配置

回到 Anx Reader 的 AI 设置页面：
-   **URL**: 填入 `https://api.longcat.chat/openai/v1`
-   **API Key**: 填入步骤 1 获取的 Key
-   **Model**: 填入您想使用的模型名称

[返回配置指南](./index.md)
