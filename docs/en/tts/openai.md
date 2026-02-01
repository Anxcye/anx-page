# OpenAI TTS Configuration

OpenAI provides neural text-to-speech voices. Anx Reader supports OpenAI-compatible TTS endpoints, including official OpenAI and compatible proxies.

## Step 1: Create an OpenAI API Key
1. Visit [OpenAI API Keys](https://platform.openai.com/api-keys).
2. Sign in and click **Create new secret key**.
3. Copy the key (it is shown only once).

## Step 2: Choose the Endpoint URL
The default OpenAI TTS endpoint is:
`https://api.openai.com/v1/audio/speech`

If you are using a proxy or compatible service, replace the URL with the one provided by your vendor.

## Step 3: Choose a Model
Recommended model: `gpt-4o-mini-tts`.

You can check the latest model list in the OpenAI TTS guide:
https://platform.openai.com/docs/guides/text-to-speech

## Step 4: Choose a Voice
You can type a voice name manually or select one from the voice list and tap **Use** to fill the field.

Common voices include:
- `alloy`
- `ash`
- `coral`
- `echo`
- `fable`
- `nova`
- `onyx`
- `sage`
- `shimmer`

## Step 5: Configure in Anx Reader
1. Open **Settings** → **Narrate**.
2. Set **TTS Service** to **OpenAI**.
3. Fill in:
   - **URL**
   - **API Key**
   - **Model**
   - **Voice**
   - **Instructions** (optional)

Notes:
- The app appends two extra sentences to your Instructions to apply rate and pitch.
- Use the **Test** button to validate the configuration.
