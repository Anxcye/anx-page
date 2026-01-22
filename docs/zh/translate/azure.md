# Azure 翻译服务

Azure AI 翻译是 Azure AI 服务系列中的一项基于云的机器翻译服务。

## 免费额度

Azure 提供免费层 (F0)，每月包含 **200 万个字符** 的翻译额度。

## 配置指南

1.  **注册 Azure 账号**：访问 [Azure 门户](https://portal.azure.com/) 并注册或登录。
2.  **创建翻译资源**：
    *   在顶部搜索栏搜索 "Translator" (翻译)。
    *   点击 "创建" (Create)。
    *   选择你的订阅和资源组（如果没有，请新建一个）。
    *   选择资源区域。
    *   为资源命名。
    *   定价层选择 **Free F0**（免费 F0）。
    *   点击 "审阅并创建" (Review + create)，然后点击 "创建" (Create)。
3.  **获取密钥**：
    *   资源创建完成后，进入资源页面。
    *   在左侧菜单的 "资源管理" (Resource Management) 下，点击 "密钥和终结点" (Keys and Endpoint)。
    *   复制其中一个密钥 (Key 1 或 Key 2)。
4.  **在应用中配置**：
    *   打开 Anx Reader 翻译设置。
    *   选择 "Microsoft Azure" 作为全文翻译服务。
    *   将复制的密钥粘贴到 "API Key" 输入框中。
