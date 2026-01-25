# 获取 Claude 配置信息

## 1. 获取 API Key

1.  访问 [Anthropic Console](https://console.anthropic.com/settings/keys)。
2.  登录您的 Anthropic 账户。
3.  点击 **Create Key**。
4.  输入名称，点击 **Create Key**。
5.  复制生成的 API Key (以 `sk-ant-` 开头)。

## 2. 确认 URL

Claude 的官方 API 地址为：
`https://api.anthropic.com/v1`

## 3. 选择 Model

常见的模型名称包括：
-   `claude-3-5-sonnet-20240620`
-   `claude-3-opus-20240229`
-   `claude-3-sonnet-20240229`
-   `claude-3-haiku-20240307`

最新模型列表请参考 [Anthropic Models](https://docs.anthropic.com/en/docs/models-overview)。

## 4. 填入配置

回到 Anx Reader 的 AI 设置页面：
-   **URL**: 填入 `https://api.anthropic.com/v1`
-   **API Key**: 填入步骤 1 获取的 Key
-   **Model**: 填入步骤 3 选择的模型名称

[返回配置指南](./index.md)
