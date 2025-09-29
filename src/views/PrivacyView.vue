<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
</script>

<template>
  <div class="policy-page">
    <div class="container">
      <div class="policy-container">
        <div v-if="locale === 'zh-CN'" class="policy-content">
          <h1>隐私政策</h1>
          <p><strong>最后更新日期：2025年3月18日</strong></p>

          <h2>引言</h2>
          <p>本隐私政策旨在帮助您了解我们可能从您处收集或您提供给我们的任何信息的处理方式，包括我们如何使用及管理这些信息。</p>
          <p>由于 <strong>Anx Reader</strong> 不会收集任何个人数据或非个人数据，我们的隐私实践简单透明，并始终致力于保护您的隐私。</p>

          <h2>个人数据的收集与使用</h2>
          <p><strong>Anx Reader</strong>
            是一款开源应用程序，我们高度重视用户隐私。为此，我们明确声明：在使用本应用过程中，我们<strong>不会</strong>收集、存储、处理或使用您的任何个人数据或非个人数据。</p>
          <ul>
            <li><strong>个人数据</strong>指任何可能直接或间接识别您个人身份的信息。</li>
            <li><strong>非个人数据</strong>指无法直接识别您身份且经过聚合或匿名化处理的信息。</li>
          </ul>
          <p>由于我们未收集任何此类信息，因此不存在使用、共享或出售数据的可能性。</p>

          <h2>安全性</h2>
          <p>由于 <strong>Anx Reader</strong> 不收集任何数据，您无需担心数据传输或存储相关的风险。尽管如此，我们仍高度重视应用的安全性以及用户对我们的信任。</p>

          <h2>第三方数据收集</h2>
          <p>虽然 <strong>Anx Reader</strong>
            本身不收集任何个人或非个人数据，但请注意：第三方（如安卓、iOS等操作系统、设备制造商，或其他具有设备访问权限的应用）可能会独立收集数据。我们无法控制且不对第三方的数据实践承担责任。建议用户查阅所用操作系统及设备制造商的隐私政策以了解其数据处理方式。
          </p>

          <h2>隐私政策的变更</h2>
          <p>我们可能不定期更新本隐私政策。您可通过定期访问此页面了解变更内容。更新后的政策将在发布后立即生效。</p>

          <h2>联系我们</h2>
          <p>若您对本隐私政策有任何疑问，请通过以下邮箱联系我们：<a href="mailto:anxfeedback@outlook.com">anxfeedback@outlook.com</a></p>
        </div>
        <div v-else class="policy-content">
          <h1>Privacy Policy</h1>
          <p><strong>Last Updated: March 18, 2025</strong></p>

          <h2>Introduction</h2>
          <p>This Privacy Policy aims to help you understand how we may process any information collected from you or
            provided by you, including how we use and manage such information.</p>
          <p>Since <strong>Anx Reader</strong> does not collect any personal or non-personal data, our privacy practices
            are
            straightforward and transparent, with a steadfast commitment to protecting your privacy.</p>

          <h2>Collection and Use of Personal Data</h2>
          <p><strong>Anx Reader</strong> is an open-source application, and we place the highest priority on user
            privacy.
            To this end, we explicitly state: during your use of this application, we <strong>do not</strong> collect,
            store, process, or utilize any personal or non-personal data from you.</p>
          <ul>
            <li><strong>Personal Data</strong> refers to any information that could directly or indirectly identify you
              as
              an individual.</li>
            <li><strong>Non-Personal Data</strong> refers to information that cannot directly identify you and has been
              aggregated or anonymized.</li>
          </ul>
          <p>As we do not collect such information, there is no possibility of using, sharing, or selling data.</p>

          <h2>Security</h2>
          <p>Since <strong>Anx Reader</strong> does not collect any data, you need not worry about risks associated with
            data transmission or storage. Nonetheless, we take application security and user trust with the utmost
            seriousness.</p>

          <h2>Third-Party Data Collection</h2>
          <p>While <strong>Anx Reader</strong> itself does not collect personal or non-personal data, please note that
            third
            parties (such as Android, iOS, device manufacturers, or other apps with device access) may independently
            collect
            data. We have no control over and assume no responsibility for third-party data practices. Users are advised
            to
            review the privacy policies of their operating systems and device manufacturers to understand their data
            handling practices.</p>

          <h2>Changes to the Privacy Policy</h2>
          <p>We may update this Privacy Policy periodically. You can review changes by visiting this page regularly.
            Updated
            policies take effect immediately upon publication.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us via email at: <a
              href="mailto:anxfeedback@outlook.com">anxfeedback@outlook.com</a></p>
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