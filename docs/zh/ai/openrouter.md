# 获取 OpenRouter 配置信息

OpenRouter 是一个聚合平台，允许您通过统一的接口访问多种 AI 模型。

## 1. 获取 API Key

1.  访问 [OpenRouter Keys](https://openrouter.ai/keys)。
2.  登录您的 OpenRouter 账户。
3.  点击 **Create Key**。
4.  输入名称，点击 **Create**。
5.  复制生成的 API Key。

## 2. 确认 URL

OpenRouter 的统一 API 地址为：
`https://openrouter.ai/api/v1`

## 3. 选择 Model

OpenRouter 支持非常多的模型，格式通常为 `厂商/模型名`。例如：
-   `openai/gpt-4o`
-   `anthropic/claude-3.5-sonnet`
-   `google/gemini-pro-1.5`
-   `meta-llama/llama-3-70b-instruct`

最好在 [OpenRouter Browse](https://openrouter.ai/models) 页面搜索您想用的模型，并复制其完整 ID。

## 4. 填入配置

回到 Anx Reader 的 AI 设置页面：
-   **URL**: 填入 `https://openrouter.ai/api/v1`
-   **API Key**: 填入步骤 1 获取的 Key
-   **Model**: 填入步骤 3 复制的模型 ID

[返回配置指南](./index.md)
