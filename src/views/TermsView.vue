<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
</script>

<template>
  <div class="policy-page">
    <div class="container">
      <div class="policy-container">


        <div v-if="locale === 'zh-CN'" class="policy-content">
          <h1>服务条款</h1>
          <p><strong>生效日期：2025年3月18日</strong></p>
          <hr>

          <h2>1. 协议接受</h2>
          <p>欢迎使用 <strong>Anx Reader</strong>（以下简称"本软件"）。本软件遵循MIT开源协议，您使用本软件即表示您已阅读、理解并同意遵守以下条款及本软件的隐私政策。</p>

          <h2>2. 软件许可</h2>
          <p>根据MIT协议，您有权：</p>
          <ul>
            <li>自由使用、复制、修改、合并、出版、分发本软件；</li>
            <li>将本软件用于商业或非商业用途；</li>
            <li>修改本软件源代码并分发修改后的版本。</li>
          </ul>
          <p><strong>条件</strong>：</p>
          <ul>
            <li>必须保留本软件原始版权声明及许可声明；</li>
            <li>未经书面许可，不得使用开发者名称或标识进行推广；</li>
            <li>修改后的版本需明确标注变更内容。</li>
          </ul>

          <h2>3. 用户责任</h2>
          <ul>
            <li>您自行承担使用本软件的风险，开发者不对软件的功能、安全性或适用性提供任何明示或暗示的担保。</li>
            <li>您需遵守适用法律法规，不得利用本软件从事违法活动。</li>
          </ul>

          <h2>4. 隐私保护</h2>
          <ul>
            <li>本软件<strong>不收集、存储或传输任何用户数据</strong>（包括个人数据与非个人数据），详见隐私政策。</li>
            <li>第三方服务（如操作系统、设备厂商）可能独立收集数据，开发者对此不承担责任。建议您查阅相关第三方的隐私条款。</li>
          </ul>

          <h2>5. 免责声明</h2>
          <ul>
            <li>本软件按"现状"提供，开发者不保证无错误或中断，亦不对因使用本软件导致的任何直接、间接、附带或后果性损失负责。</li>
            <li>您明确知悉并接受第三方服务数据收集的风险。</li>
          </ul>

          <h2>6. 协议变更</h2>
          <p>开发者保留随时修改本条款的权利。变更内容将通过本页面公示，继续使用本软件即视为接受修改后的条款。</p>

          <h2>7. 协议终止</h2>
          <p>您可随时停止使用本软件。若违反本条款，开发者有权终止您的使用权，但MIT协议中关于已分发软件的权利不受影响。</p>

          <h2>8. 适用法律</h2>
          <p>本条款受开发者所在地法律管辖，任何争议应提交至开发者所在地有管辖权的法院解决。</p>

          <h2>9. 联系我们</h2>
          <p>如有疑问，请联系：<a href="mailto:anxfeedback@outlook.com">anxfeedback@outlook.com</a></p>
        </div>
        <div v-else class="policy-content">
          <h1>Terms of Service</h1>
          <p><strong>Effective Date: March 18, 2025</strong></p>
          <hr>

          <h2>1. Acceptance of Terms</h2>
          <p>Welcome to <strong>Anx Reader</strong> (the "Software"). By using this Software, you agree to comply with
            these
            terms and the Privacy Policy. The Software is licensed under the MIT License.</p>

          <h2>2. Software License</h2>
          <p>Under the MIT License, you are granted the right to:</p>
          <ul>
            <li>Use, copy, modify, merge, publish, and distribute the Software for any purpose (commercial or
              non-commercial).</li>
            <li>Alter the source code and distribute modified versions.</li>
          </ul>
          <p><strong>Conditions</strong>:</p>
          <ul>
            <li>The original copyright notice and permission statement must remain intact.</li>
            <li>You may not use the developer's name or branding for promotion without written consent.</li>
            <li>Modified versions must clearly indicate changes made.</li>
          </ul>

          <h2>3. User Responsibilities</h2>
          <ul>
            <li>You assume all risks associated with using the Software. The developer provides no warranties, expressed
              or
              implied, regarding functionality, security, or suitability.</li>
            <li>You must comply with applicable laws and refrain from using the Software for unlawful activities.</li>
          </ul>

          <h2>4. Privacy Protection</h2>
          <ul>
            <li>The Software <strong>does not collect, store, or transmit any user data</strong> (personal or
              non-personal).
              See the Privacy Policy for details.</li>
            <li>Third-party services (e.g., operating systems, device manufacturers) may independently collect data. The
              developer is not liable for such practices. Review third-party privacy policies for clarity.</li>
          </ul>

          <h2>5. Disclaimer of Warranties</h2>
          <ul>
            <li>The Software is provided "AS-IS." The developer disclaims all warranties, including implied warranties
              of
              merchantability or fitness for a particular purpose.</li>
            <li>The developer is not liable for direct, indirect, incidental, or consequential damages arising from
              Software
              use.</li>
          </ul>

          <h2>6. Changes to Terms</h2>
          <p>The developer reserves the right to update these terms. Changes will be posted here, and continued use of
            the
            Software constitutes acceptance of revised terms.</p>

          <h2>7. Termination</h2>
          <p>You may cease using the Software at any time. The developer may terminate your license if you violate these
            terms, though MIT License rights for already distributed Software remain unaffected.</p>

          <h2>8. Governing Law</h2>
          <p>These terms are governed by the laws of the developer's jurisdiction. Disputes shall be resolved in courts
            with
            jurisdiction over the developer's location.</p>

          <h2>9. Contact Us</h2>
          <p>For questions, contact: <a href="mailto:anxfeedback@outlook.com">anxfeedback@outlook.com</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.policy-page {
  padding-top: 120px;
  padding-bottom: 80px;
  min-height: 100vh;
}

.policy-container {
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--surface-color);
  border-radius: 20px;
  padding: 60px;
  box-shadow: var(--shadow);
}

.policy-content h1 {
  font-size: 48px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 40px;
  text-align: center;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.policy-content hr {
  border: none;
  height: 2px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  margin: 40px 0;
  border-radius: 1px;
}

.policy-content h2 {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  margin-top: 40px;
  margin-bottom: 20px;
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 8px;
}

.policy-content p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.policy-content ul {
  margin: 16px 0;
  padding-left: 20px;
}

.policy-content li {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.policy-content a {
  color: var(--primary-color);
  text-decoration: none;
  transition: var(--transition);
}

.policy-content a:hover {
  text-decoration: underline;
}

.policy-content strong {
  color: var(--text-primary);
  font-weight: 600;
}

@media (max-width: 768px) {
  .policy-container {
    padding: 40px 20px;
  }

  .policy-content h1 {
    font-size: 36px;
  }

  .policy-content h2 {
    font-size: 20px;
  }

  .policy-content p,
  .policy-content li {
    font-size: 14px;
  }
}
</style>