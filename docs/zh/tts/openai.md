# OpenAI TTS 配置

OpenAI 提供神经网络语音合成服务。Anx Reader 支持 OpenAI 官方接口以及兼容的中转服务。

## 步骤 1：获取 OpenAI API Key
1. 打开 [OpenAI API Keys](https://platform.openai.com/api-keys)。
2. 登录后点击 **Create new secret key**。
3. 复制生成的密钥（只显示一次，请妥善保存）。

## 步骤 2：确认接口 URL
OpenAI 官方 TTS 端点为：
`https://api.openai.com/v1/audio/speech`

如果你使用的是中转或兼容服务，请填写服务商提供的 URL。

## 步骤 3：选择模型
推荐模型：`gpt-4o-mini-tts`。

更多模型请参考：
https://platform.openai.com/docs/guides/text-to-speech

## 步骤 4：选择语音
你可以手动输入语音名称，也可以从语音列表选择后点击 **使用** 自动填入。

常见语音包括：
- `alloy`
- `ash`
- `coral`
- `echo`
- `fable`
- `nova`
- `onyx`
- `sage`
- `shimmer`

## 步骤 5：在 Anx Reader 中配置
1. 打开 **设置** → **朗读**。
2. 将 **TTS 服务** 选择为 **OpenAI**。
3. 填写：
   - **URL**
   - **API Key**
   - **Model**
   - **Voice**
   - **Instructions**（可选）

备注：
- 应用会在你的 Instructions 末尾追加两句，用于控制语速与音调。
- 使用 **测试** 按钮验证配置是否可用。
