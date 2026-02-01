# 阿里云 TTS 配置

阿里云智能语音交互提供语音合成服务，支持多语言与多音色。Anx Reader 需要配置 **AppKey**、**AccessKey ID**、**AccessKey Secret** 和 **Endpoint**。

## 步骤 1：注册账号并完成实名认证
1. 访问 [阿里云官网](https://www.aliyun.com/)。
2. 注册账号并完成实名认证。

## 步骤 2：开通智能语音交互服务
1. 打开 [智能语音交互产品页](https://ai.aliyun.com/nls)。
2. 点击 **开通并购买**，按指引完成开通。

## 步骤 3：创建项目并获取 AppKey
1. 打开 [智能语音交互控制台](https://nls-portal.console.aliyun.com/applist)。
2. 左侧进入 **项目管理**，点击 **创建项目**。
3. 填写项目名称，并勾选 **语音合成** 能力。
4. 创建完成后进入项目详情，复制 **AppKey**。

## 步骤 4：创建 RAM 子用户并获取 AccessKey
为了账号安全，建议使用 RAM 子用户。

### 1. 进入 RAM 控制台
1. 打开 [RAM 访问控制台](https://ram.console.aliyun.com/users)。
2. 在控制台右上角头像菜单中进入 **AccessKey 管理**。
3. 如果提示使用RAM AccessKey，选择继续。

### 2. 创建子用户
1. 左侧进入 **用户**，点击 **创建用户**。
2. 填写登录名称与显示名称, 两个都可以填写`anx-tts`。
3. 在 **访问方式** 中勾选 **使用永久 AccessKey 访问**。
4. 创建成功后会显示 **AccessKey ID** 与 **AccessKey Secret**，请立即保存。

### 3. 为子用户授权
1. 在用户列表中点击刚创建的用户名。
2. 进入 **权限管理**，点击 **新增授权**。
3. 搜索并选择 **AliyunNLSFullAccess**，确认授权。

## 步骤 5：在 Anx Reader 中配置
1. 打开 **设置 → 朗读 → TTS 服务**。
2. 选择 **阿里云**。
3. 填入以下参数：
   - **AppKey**：项目 AppKey。
   - **AccessKey ID**：子用户 AccessKey ID。
   - **AccessKey Secret**：子用户 AccessKey Secret。
   - **Endpoint**：选择离你最近的地域（自动选择/上海/北京/深圳）。

## 参考资料
- [从这里开始（阿里云官方）](https://help.aliyun.com/zh/isi/getting-started/start-here)
- [智能语音交互控制台](https://nls-portal.console.aliyun.com/applist)
