# Azure TTS 配置

Azure Text-to-Speech (TTS) 是微软提供的强大的语音合成服务。要在 Anx Reader 中使用 Azure TTS，你需要获取 **Region (区域)** 和 **Key (密钥)**。

## 步骤 1: 创建 Azure 账号
如果你还没有 Azure 账号，请前往 [Azure 官网](https://azure.microsoft.com/) 注册。

## 步骤 2: 创建语音服务资源
1. 登录 [Azure Portal](https://portal.azure.com/)。
2. 在顶部搜索栏中搜索 **"Speech service"**。
3. 点击 **"Create"** (创建)。
4. 填写以下信息：
    *   **订阅 (Subscription)**: 选择你的订阅。
    *   **资源组 (Resource group)**: 新建或选择现有的。
    *   **区域 (Region)**: 选择离你最近的区域（记住这个选择，稍后会用到）。
    *   **名称 (Name)**: 给你的资源起个名字。
    *   **定价层 (Pricing tier)**: 通常选择 **F0 (免费)** 即可，如果需要更高配额可选择 S0。
5. 点击 **"审阅并创建" (Review + create)**，然后点击 **"创建" (Create)**。

## 步骤 3: 获取 Key 和 Region
1. 资源部署完成后，点击 **"转到资源" (Go to resource)**。
2. 点击你刚刚创建的那个资源名字。
3. 在左侧菜单中，找到 **"资源管理" (Resource Management)** 下的 **"密钥和终结点" (Keys and Endpoint)**。
4. 这里你会看到：
    *   **密钥 1 (Key 1)**: 这就是你需要填入 Anx Reader 的 **Key**。
    *   **位置/区域 (Location/Region)**: 例如 `eastus`, `japaneast` 等。这就是你需要填入 Anx Reader 的 **Region**。

## 步骤 4: 在 Anx Reader 中配置
1. 打开 Anx Reader 设置。
2. 进入 TTS 设置。
3. 选择 Azure。
4. 填入刚才获取的 **Key** 和 **Region**。
