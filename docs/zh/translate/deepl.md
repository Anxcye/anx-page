# DeepL 翻译服务

DeepL 被广泛认为是世界上最好的机器翻译服务，提供高质量的翻译结果。

## 免费额度

DeepL 提供专门的 **DeepL API Free** 计划，每月提供 **50 万个字符** 的免费翻译额度。

## 配置指南

1.  **注册 DeepL API**：
    *   访问 [DeepL API 页面](https://www.deepl.com/pro-api)。
    *   在 **DeepL API Free** 计划下点击 "免费注册" (Sign up for free)。
    *   完成注册流程。*注意：即使是免费计划，为了防止滥用，通常也需要绑定信用卡进行身份验证。*
2.  **获取认证密钥 (Authentication Key)**：
    *   登录你的 DeepL 账户。
    *   进入 "账户" (Account) 页面。
    *   找到 "账户管理" (Account Management) 选项卡。
    *   向下滚动找到 "DeepL API 的认证密钥" (Authentication Key for DeepL API)。
    *   复制你的密钥。
    *   *提示：免费 API 密钥通常以 `:fx` 结尾。*
3.  **在应用中配置**：
    *   打开 Anx Reader 翻译设置。
    *   选择 "DeepL" 作为全文翻译服务。
    *   **API URL**：对于免费计划，请确保 API 地址是 `https://api-free.deepl.com/v2/translate`。（这通常是应用的默认值）。
    *   **API Key**：粘贴你的认证密钥（以 `:fx` 结尾）。
