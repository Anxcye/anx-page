# Azure TTS Configuration

Azure Text-to-Speech (TTS) is a powerful speech synthesis service provided by Microsoft. To use Azure TTS in Anx Reader, you need to obtain the **Region** and **Key**.

## Step 1: Create an Azure Account
If you don't have an Azure account, please sign up at the [Azure Website](https://azure.microsoft.com/).

## Step 2: Create a Speech Resource
1. Log in to the [Azure Portal](https://portal.azure.com/).
2. Search for **"Speech service"** in the top search bar.
3. Click **"Create"**.
4. Fill in the following information:
    *   **Subscription**: Select your subscription.
    *   **Resource group**: Create new or select an existing one.
    *   **Region**: Select a region close to you (remember this, you will need it later).
    *   **Name**: Name your resource.
    *   **Pricing tier**: Usually select **F0 (Free)**, or S0 if you need higher quotas.
5. Click **"Review + create"**, then click **"Create"**.

## Step 3: Get Key and Region
1. Once deployment is complete, click **"Go to resource"**.
2. Click the name of the resource you just created.
3. In the left menu, under **"Resource Management"**, find **"Keys and Endpoint"**.
4. Here you will see:
    *   **Key 1**: This is the **Key** you need to enter in Anx Reader.
    *   **Location/Region**: e.g., `eastus`, `japaneast`, etc. This is the **Region** you need to enter in Anx Reader.

## Step 4: Configure in Anx Reader
1. Open Anx Reader Settings.
2. Go to TTS Settings.
3. Select Azure.
4. Enter the **Key** and **Region** obtained above.
