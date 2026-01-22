import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const distDir = join(process.cwd(), 'dist')
const docsDir = join(distDir, 'docs')

// Language detection redirect HTML template
const redirectHtmlTemplate = (targetPath: string) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    (function() {
      var path = '${targetPath}';
      var userLang = navigator.language || navigator.userLanguage || 'en';
      var lang = userLang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
      var redirectUrl = '/docs/' + lang + path;
      window.location.replace(redirectUrl);
    })();
  </script>
  <noscript>
    <meta http-equiv="refresh" content="0; url=/docs/en${targetPath}">
  </noscript>
</head>
<body>
  <p>Redirecting to documentation...</p>
</body>
</html>`

// Get all paths from existing locale directories
function getLocalePaths(localeDir: string, basePath = ''): string[] {
    const paths: string[] = []

    if (!existsSync(localeDir)) return paths

    const items = readdirSync(localeDir)

    for (const item of items) {
        const fullPath = join(localeDir, item)
        const relativePath = basePath ? `${basePath}/${item}` : item

        if (statSync(fullPath).isDirectory()) {
            paths.push(...getLocalePaths(fullPath, relativePath))
        } else if (item === 'index.html') {
            // For index.html, the path is the directory path
            paths.push(basePath || '/')
        } else if (item.endsWith('.html') && item !== '404.html') {
            // For other HTML files, include the filename without .html
            paths.push(relativePath.replace('.html', ''))
        }
    }

    return paths
}

function main() {
    console.log('Generating language redirect files for docs...')

    // Get all paths from the English locale (or Chinese, whichever exists)
    const enDir = join(docsDir, 'en')
    const zhDir = join(docsDir, 'zh')

    const paths = existsSync(enDir)
        ? getLocalePaths(enDir)
        : existsSync(zhDir)
            ? getLocalePaths(zhDir)
            : []

    console.log(`Found ${paths.length} doc paths to generate redirects for:`, paths)

    for (const docPath of paths) {
        // Skip root - it's already handled by docs/index.md
        if (docPath === '/') continue

        // Target path for the redirect (relative to language root)
        const targetPath = docPath.startsWith('/') ? docPath : `/${docPath}`

        // Create the redirect HTML in the non-locale path
        const redirectDir = join(docsDir, docPath)
        const redirectFile = join(redirectDir, 'index.html')

        // Don't overwrite if it's a language-specific path
        if (docPath.startsWith('en') || docPath.startsWith('zh')) continue

        if (!existsSync(redirectDir)) {
            mkdirSync(redirectDir, { recursive: true })
        }

        if (!existsSync(redirectFile)) {
            writeFileSync(redirectFile, redirectHtmlTemplate(targetPath))
            console.log(`Generated redirect: /docs${targetPath}/index.html`)
        }
    }

    // Also copy VitePress 404.html to root dist for Vercel
    const vitepress404 = join(docsDir, '404.html')
    const root404 = join(distDir, '404.html')

    if (existsSync(vitepress404) && !existsSync(root404)) {
        // Create a custom 404 that redirects non-docs paths to Vue app
        const custom404 = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Page Not Found</title>
  <script>
    (function() {
      var path = window.location.pathname;
      if (path.startsWith('/docs/')) {
        // For docs, redirect with language detection
        var base = '/docs/';
        if (!path.startsWith(base + 'en/') && !path.startsWith(base + 'zh/')) {
          var userLang = navigator.language || navigator.userLanguage || 'en';
          var lang = userLang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
          var remainder = path.slice(base.length);
          window.location.replace(base + lang + '/' + remainder);
        } else {
          // Already has language, show actual 404
          document.body.innerHTML = '<h1>404 - Page Not Found</h1><p><a href="/docs/">Go to Documentation</a></p>';
        }
      } else {
        // For non-docs paths, redirect to Vue app
        window.location.replace('/');
      }
    })();
  </script>
</head>
<body>
  <h1>Redirecting...</h1>
</body>
</html>`
        writeFileSync(root404, custom404)
        console.log('Generated root 404.html with smart redirect')
    }

    console.log('Done!')
}

main()
