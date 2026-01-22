# Azure Translation Service

Azure AI Translator is a cloud-based machine translation service that is part of the Azure AI services family.

## Free Quota

Azure offers a free tier (F0) that includes **2 million characters per month** for translation.

## Configuration Guide

1.  **Create an Azure Account**: Go to the [Azure Portal](https://portal.azure.com/) and sign up or log in.
2.  **Create a Translator Resource**:
    *   Search for "Translator" in the search bar.
    *   Click "Create".
    *   Select your subscription and resource group (create a new one if needed).
    *   Choose a region.
    *   Name your resource.
    *   Select the **Free F0** pricing tier.
    *   Click "Review + create" and then "Create".
3.  **Get your Key**:
    *   Once the resource is created, go to the resource page.
    *   In the left menu, under "Resource Management", click "Keys and Endpoint".
    *   Copy one of the keys (Key 1 or Key 2).
4.  **Configure in App**:
    *   Open Anx Reader Translation settings.
    *   Select "Microsoft Azure" as the Full Text Translation service.
    *   Paste the copied key into the "API Key" field.
    *   (Optional) If you are using a region-specific endpoint, you may need to configure the region if the app supports it, but usually the key is sufficient for global endpoints or the app handles it. *Note: Currently, Anx Reader primarily uses the global endpoint or infers configuration.*
