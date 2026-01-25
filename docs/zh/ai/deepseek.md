# 获取 DeepSeek 配置信息

## 1. 获取 API Key

1.  访问 [DeepSeek 开放平台](https://platform.deepseek.com/api_keys)。
2.  登录您的 DeepSeek 账户。
3.  点击 **创建 API Key**。
4.  输入名称，点击 **创建**。
5.  复制生成的 API Key。

## 2. 确认 URL

DeepSeek 的 API 兼容 OpenAI 格式，地址为：
`https://api.deepseek.com`

## 3. 选择 Model

主要的模型包括：
-   `deepseek-chat` (DeepSeek-V3)
-   `deepseek-coder` (DeepSeek-V2.5, 将被合并)
-   `deepseek-reasoner` (DeepSeek-R1)

请访问 [DeepSeek 文档](https://platform.deepseek.com/api-docs/zh-cn/) 确认最新的模型名称。

## 4. 填入配置

回到 Anx Reader 的 AI 设置页面：
-   **URL**: 填入 `https://api.deepseek.com`
-   **API Key**: 填入步骤 1 获取的 Key
-   **Model**: 填入步骤 3 选择的模型名称

[返回配置指南](./index.md)
