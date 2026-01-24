# WebDAV Synchronization

Anx Reader supports multi-device data synchronization using the WebDAV protocol. Below are the detailed steps for configuration and usage.

## Synchronization Process

We use WebDAV for data synchronization. Suppose you have two devices: **Device A** (the device with data) and **Device B** (a brand new device).

### Step 1: Configure and Upload on Device A

1.  **Open Settings**: Go to `Settings` -> `More Settings` -> `Sync` -> `WebDAV`.
2.  **Enter Configuration**: Click to enter, and you will see three configuration items: `URL`, `Username`, and `Password`. Please enter your WebDAV service information. (Refer to the [Get WebDAV Service Parameters](#get-webdav-service-parameters) section below on how to obtain this information).
3.  **Test Connection**: Click the "Test Connection" button to ensure the configuration is correct and the connection is successful.
4.  **Enable and Upload**:
    *   Click "Enable WebDAV".
    *   Select **"Upload to WebDAV"** in the pop-up options. This will upload the data from the current device (Device A) to the cloud.
5.  **Check Progress**: You can click the sync button in the upper right corner of the bookshelf page to view the synchronization progress.

### Step 2: Configure and Download on Device B

1.  **Configure WebDAV**: On Device B, go to the WebDAV settings page, enter the same WebDAV configuration information, and ensure the connection test is successful.
2.  **Enable and Download**:
    *   Click "Enable WebDAV".
    *   Select **"Download from WebDAV"** in the pop-up options. This will download data from the cloud to the current device (Device B).

### Step 3: Automatic Synchronization

After completing the above steps, the data on both devices is consistent. Subsequently, the app will automatically synchronize based on the data update time to keep multi-device data consistent in real-time.

## Get WebDAV Service Parameters

Here are the methods to obtain parameters for two common WebDAV services:

### Jianguoyun (Nutstore)

1.  Log in to the Jianguoyun web version.
2.  Click on the account name in the upper right corner, select `Account Information` -> `Security`.
3.  In "Third-party Application Management", click `Add Application` to generate an application password.
4.  **Server Address (URL)**: `https://dav.jianguoyun.com/dav/`
5.  **Username**: Your Jianguoyun registered account (email).
6.  **Password**: The application password generated just now (not your login password).

### InfiniCloud

1.  Log in to the InfiniCloud web version (My Page).
2.  Find the `Apps Connection` (WebDAV) section on the page.
3.  Check `Turn on Apps Connection`.
4.  **Server Address (URL)**: The URL displayed on the page (e.g., `https://TeraCLOUD.jp/dav/` or `https://s-us.c.teracloud.jp/dav/`, etc., please refer to what is displayed on your page).
5.  **Username**: Your User ID.
6.  **Password**: Apps Connection Password (the dedicated WebDAV password displayed).
