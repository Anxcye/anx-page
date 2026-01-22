# Google Cloud 翻译服务

Google Cloud Translation API 允许你将 Google 的神经机器翻译功能集成到应用中。

## 免费额度

Google Cloud 提供免费层，Translation API Basic (v2) 每月包含 **50 万个字符** 的免费额度。

## 配置指南

1.  **创建 Google Cloud 项目**：访问 [Google Cloud 控制台](https://console.cloud.google.com/)。
2.  **启用 API**：
    *   在左侧菜单中，导航到 "API 和服务" > "库"。
    *   搜索 "Cloud Translation API"。
    *   点击进入并选择 "启用"。
3.  **创建凭据**：
    *   前往 "API 和服务" > "凭据"。
    *   点击 "创建凭据"，选择 "API 密钥"。
    *   复制生成的 API 密钥。
4.  **在应用中配置**：
    *   打开 Anx Reader 翻译设置。
    *   选择 "Google Cloud" 作为全文翻译服务。
    *   将复制的密钥粘贴到 "API Key" 输入框中。

> **注意**：即使使用免费层，你通常也需要设置计费账户才能使用 Google Cloud 服务。
