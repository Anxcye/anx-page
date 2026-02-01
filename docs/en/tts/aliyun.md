# Aliyun TTS Configuration

Aliyun Intelligent Speech Interaction provides speech synthesis services with multiple languages and voices. Anx Reader requires **AppKey**, **AccessKey ID**, **AccessKey Secret**, and **Endpoint**.

## Step 1: Register and complete identity verification
1. Visit the [Alibaba Cloud website](https://www.aliyun.com/).
2. Register an account and complete identity verification.

## Step 2: Enable Intelligent Speech Interaction
1. Open the [Intelligent Speech Interaction product page](https://ai.aliyun.com/nls).
2. Click **Enable and Buy**, then follow the guide to finish activation.

## Step 3: Create a project and get AppKey
1. Open the [Intelligent Speech Interaction console](https://nls-portal.console.aliyun.com/applist).
2. In the left sidebar, go to **Project Management** and click **Create Project**.
3. Enter a project name and enable **Speech Synthesis**.
4. After creation, open the project details and copy the **AppKey**.

## Step 4: Create a RAM user and get AccessKey
For better security, it is recommended to use a RAM user.

### 1. Open the RAM console
1. Go to the [RAM console](https://ram.console.aliyun.com/users).
2. Open **AccessKey Management** from the avatar menu in the top-right corner.
3. If prompted to use RAM AccessKey, continue.

### 2. Create a sub-user
1. In the left sidebar, click **Users**, then **Create User**.
2. Fill in the login name and display name. You can use `anx-tts` for both.
3. Under **Access Mode**, select **Permanent AccessKey**.
4. After creation, copy the **AccessKey ID** and **AccessKey Secret** immediately.

### 3. Grant permissions to the sub-user
1. Click the new user in the list.
2. Open **Permissions** and click **Add Permissions**.
3. Search for **AliyunNLSFullAccess** and grant it.

## Step 5: Configure in Anx Reader
1. Open **Settings → Narration → TTS Service**.
2. Select **Aliyun**.
3. Fill in:
   - **AppKey**: your project AppKey.
   - **AccessKey ID**: your sub-user AccessKey ID.
   - **AccessKey Secret**: your sub-user AccessKey Secret.
   - **Endpoint**: choose the nearest region (Auto/Shanghai/Beijing/Shenzhen).

## References
- [Getting started (Aliyun official)](https://help.aliyun.com/zh/isi/getting-started/start-here)
- [Intelligent Speech Interaction console](https://nls-portal.console.aliyun.com/applist)
