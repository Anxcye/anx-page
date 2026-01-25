# 获取 OpenAI 配置信息

## 1. 获取 API Key

1.  访问 [OpenAI API Keys](https://platform.openai.com/api-keys) 页面。
2.  登录您的 OpenAI 账户。
3.  点击 **Create new secret key**。
4.  您可以为 Key 起一个名字（可选），然后点击 **Create secret key**。
5.  复制生成的以 `sk-` 开头的密钥。**注意：密钥只会显示一次，请妥善保存。**

## 2. 确认 URL

OpenAI 的官方默认 API 地址为：
`https://api.openai.com/v1`

如果您使用的是官方服务，通常无需修改此项。如果您使用的是第三方转发服务（中转 API），请向您的服务商索取 API地址。

## 3. 选择 Model

常见的模型名称包括：
-   `gpt-4o`
-   `gpt-4o-mini`
-   `gpt-4-turbo`
-   `gpt-3.5-turbo`

您可以根据需要在 [OpenAI Models](https://platform.openai.com/docs/models) 查看更多模型。

## 4. 填入配置

回到 Anx Reader 的 AI 设置页面：
-   **URL**: 填入 `https://api.openai.com/v1` (或您的中转地址)
-   **API Key**: 填入步骤 1 获取的 Key
-   **Model**: 填入步骤 3 选择的模型名称

[返回配置指南](./index.md)
